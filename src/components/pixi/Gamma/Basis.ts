/**
 * Basis Universal texture transcoding: `.basis` (ETC1S / UASTC) and `.ktx2` (XUASTC LDR / ASTC LDR, ...).
 *
 * Textures are transcoded in web workers by the official transcoder (`public/basis`, basis_universal v2_50)
 * into a GPU compressed format supported by the device (ASTC, BC7, ETC2, BC1/BC3),
 * or into RGBA8 if none is supported. Alpha is stored as encoded (straight for models, premultiplied for spine pages).
 * ASTC LDR based KTX2 (e.g. XUASTC 6x6) is used in its own block size on ASTC devices (no transcoding into ASTC 4x4).
 */

/** `basist::transcoder_texture_format` */
const enum BasisFormat {
	ETC1_RGB = 0,
	ETC2_RGBA = 1,
	BC1_RGB = 2,
	BC3_RGBA = 3,
	BC7_RGBA = 6,
	ASTC_4x4_RGBA = 10,
	RGBA32 = 13,
	/** `ASTC_LDR_5x4_RGBA` ... `ASTC_LDR_12x12_RGBA` are 28 ... 40 */
	ASTC_LDR_FIRST = 28,
	ASTC_LDR_LAST = 40,
}

/** WebGL compressed internal formats, `0` is uncompressed RGBA8 */
const enum GLFormat {
	RGBA8 = 0,
	COMPRESSED_RGB_S3TC_DXT1 = 0x83F0,
	COMPRESSED_RGBA_S3TC_DXT5 = 0x83F3,
	COMPRESSED_RGBA_BPTC_UNORM = 0x8E8C,
	COMPRESSED_RGB8_ETC2 = 0x9274, // ETC1 data is valid ETC2 RGB
	COMPRESSED_RGBA8_ETC2_EAC = 0x9278,
	COMPRESSED_RGBA_ASTC_4x4 = 0x93B0,
}

interface Target {
	basis: BasisFormat;
	gl: GLFormat;
}

const BASIS_TO_GL: Partial<Record<BasisFormat, GLFormat>> = {
	[BasisFormat.ETC1_RGB]: GLFormat.COMPRESSED_RGB8_ETC2,
	[BasisFormat.ETC2_RGBA]: GLFormat.COMPRESSED_RGBA8_ETC2_EAC,
	[BasisFormat.BC1_RGB]: GLFormat.COMPRESSED_RGB_S3TC_DXT1,
	[BasisFormat.BC3_RGBA]: GLFormat.COMPRESSED_RGBA_S3TC_DXT5,
	[BasisFormat.BC7_RGBA]: GLFormat.COMPRESSED_RGBA_BPTC_UNORM,
	[BasisFormat.ASTC_4x4_RGBA]: GLFormat.COMPRESSED_RGBA_ASTC_4x4,
	[BasisFormat.RGBA32]: GLFormat.RGBA8,
};

/** WebGL `COMPRESSED_RGBA_ASTC_<w>x<h>_KHR` of `BasisFormat.ASTC_LDR_FIRST + i` (5x4, 5x5, 6x5, 6x6, 8x5, 8x6, 10x5, 10x6, 8x8, 10x8, 10x10, 12x10, 12x12) */
const ASTC_LDR_GL = [0x93B1, 0x93B2, 0x93B3, 0x93B4, 0x93B5, 0x93B6, 0x93B8, 0x93B9, 0x93B7, 0x93BA, 0x93BB, 0x93BC, 0x93BD];

function glFormatOf (basis: number): number {
	if (basis >= BasisFormat.ASTC_LDR_FIRST && basis <= BasisFormat.ASTC_LDR_LAST)
		return ASTC_LDR_GL[basis - BasisFormat.ASTC_LDR_FIRST];
	return BASIS_TO_GL[basis as BasisFormat] ?? 0;
}

/** Transcoded texture, level 0 only (models do not use mipmaps) */
export class TranscodedImage {
	constructor (
		public readonly width: number,
		public readonly height: number,
		/** WebGL compressed internal format, `0` is RGBA8 (straight alpha) */
		public readonly format: number,
		public data: Uint8Array | null,
	) { }

	/** Releases data (same as `ImageBitmap.close`) */
	public close () {
		this.data = null;
	}
}

let targets: { alpha: Target; opaque: Target; astc: boolean; } | null = null;

/**
 * Formats to transcode into, detected by WebGL2 context (WebGL1 if not available) like renderer.
 * Opaque textures prefer 4bpp formats (ETC2 RGB, BC1), alpha ones ASTC / BC7 (better quality) then ETC2 / BC3.
 */
function detectTargets (): { alpha: Target; opaque: Target; astc: boolean; } {
	if (targets) return targets;

	const canvas = document.createElement("canvas");
	const gl = (canvas.getContext("webgl2") ?? canvas.getContext("webgl")) as WebGLRenderingContext | null;
	const has = (name: string) => !!gl?.getExtension(name);
	const astc = has("WEBGL_compressed_texture_astc");
	const bptc = has("EXT_texture_compression_bptc");
	const etc = has("WEBGL_compressed_texture_etc");
	const s3tc = has("WEBGL_compressed_texture_s3tc");
	gl?.getExtension("WEBGL_lose_context")?.loseContext();

	const pick = (order: Array<[boolean, BasisFormat]>): Target => {
		const basis = order.find(([ok]) => ok)?.[1] ?? BasisFormat.RGBA32;
		return { basis, gl: BASIS_TO_GL[basis]! };
	};
	targets = {
		alpha: pick([
			[astc, BasisFormat.ASTC_4x4_RGBA],
			[bptc, BasisFormat.BC7_RGBA],
			[etc, BasisFormat.ETC2_RGBA],
			[s3tc, BasisFormat.BC3_RGBA],
		]),
		opaque: pick([
			[etc, BasisFormat.ETC1_RGB],
			[s3tc, BasisFormat.BC1_RGB],
			[astc, BasisFormat.ASTC_4x4_RGBA],
			[bptc, BasisFormat.BC7_RGBA],
		]),
		astc,
	};
	return targets;
}

//#region worker
/** Worker body, transcoder script is loaded by `importScripts` (classic worker from blob) */
function workerMain () {
	/* eslint-disable @typescript-eslint/no-explicit-any */
	const scope = self as any;
	let basis: any = null;

	scope.onmessage = async (e: MessageEvent) => {
		const m = e.data;
		if (m.type === "init") {
			try {
				scope.importScripts(m.js);
				const wasmBinary = await (await fetch(m.wasm)).arrayBuffer();
				basis = await scope.BASIS({ wasmBinary });
				basis.initializeBasis();
				scope.postMessage({ type: "init", ok: true });
			} catch (err) {
				scope.postMessage({ type: "init", ok: false, error: String(err) });
			}
			return;
		}

		let file: any = null;
		try {
			const bytes = new Uint8Array(m.data);
			// KTX2 identifier `«KTX 20»`
			const ktx2 = bytes.length > 12 && bytes[0] === 0xAB && bytes[1] === 0x4B && bytes[5] === 0x32 && bytes[6] === 0x30;
			file = ktx2 ? new basis.KTX2File(bytes) : new basis.BasisFile(bytes);
			if (ktx2 && !file.isValid()) throw new Error("invalid KTX2 file");
			const width = ktx2 ? file.getWidth() : file.getImageWidth(0, 0);
			const height = ktx2 ? file.getHeight() : file.getImageHeight(0, 0);
			if (!file.startTranscoding()) throw new Error("startTranscoding failed");

			const transcode = (format: number): Uint8Array | null => {
				const size = ktx2
					? file.getImageTranscodedSizeInBytes(0, 0, 0, format)
					: file.getImageTranscodedSizeInBytes(0, 0, format);
				const out = new Uint8Array(size);
				const ok = ktx2
					? file.transcodeImage(out, 0, 0, 0, format, 0, -1, -1)
					: file.transcodeImage(out, 0, 0, format, 0, 0);
				return ok ? out : null;
			};
			let format = file.getHasAlpha() ? m.alpha : m.opaque;
			// ASTC LDR based KTX2 (XUASTC / ASTC) of block size other than 4x4 is used as is on ASTC devices,
			// it can not be transcoded into ASTC 4x4
			if (ktx2 && m.astc && (file.isXUASTC_LDR() || file.isASTC_LDR()) && file.getBlockWidth() * file.getBlockHeight() !== 16) {
				// returns plain number (not enum object)
				const native = basis.getTranscoderTextureFormatFromBasisTexFormat(file.getBasisTexFormat());
				format = typeof native === "number" ? native : native.value;
			}
			let data = transcode(format);
			if (!data && format !== 13) { // RGBA32 fallback
				format = 13;
				data = transcode(format);
			}
			if (!data) throw new Error("transcodeImage failed");
			scope.postMessage({ type: "transcode", id: m.id, ok: true, width, height, format, data }, [data.buffer]);
		} catch (err) {
			scope.postMessage({ type: "transcode", id: m.id, ok: false, error: String(err) });
		} finally {
			file?.close();
			file?.delete();
		}
	};
	/* eslint-enable @typescript-eslint/no-explicit-any */
}

interface Pending {
	resolve: (v: TranscodedImage) => void;
	reject: (e: Error) => void;
}

class TranscodeWorker {
	private readonly worker: Worker;
	private readonly ready: Promise<void>;
	private readonly pending = new Map<number, Pending>();
	public load = 0;

	constructor (url: string) {
		this.worker = new Worker(url);
		this.ready = new Promise((resolve, reject) => {
			this.worker.onmessage = (e: MessageEvent) => {
				const m = e.data;
				if (m.type === "init") {
					if (m.ok) resolve();
					else reject(new Error(`basis transcoder init failed: ${m.error}`));
					return;
				}
				const p = this.pending.get(m.id);
				if (!p) return;
				this.pending.delete(m.id);
				this.load--;
				if (m.ok) p.resolve(new TranscodedImage(m.width, m.height, glFormatOf(m.format), m.data));
				else p.reject(new Error(m.error));
			};
		});

		const base = new URL(`${import.meta.env.BASE_URL}basis/`, location.href).href;
		this.worker.postMessage({ type: "init", js: `${base}basis_transcoder.js`, wasm: `${base}basis_transcoder.wasm` });
	}

	public async transcode (id: number, data: ArrayBuffer): Promise<TranscodedImage> {
		this.load++;
		try {
			await this.ready;
		} catch (e) {
			this.load--;
			throw e;
		}
		const t = detectTargets();
		return new Promise((resolve, reject) => {
			this.pending.set(id, { resolve, reject });
			this.worker.postMessage({ type: "transcode", id, data, alpha: t.alpha.basis, opaque: t.opaque.basis, astc: t.astc }, [data]);
		});
	}
}

const workers: TranscodeWorker[] = [];
let workerUrl: string | null = null;
let nextId = 1;

function workerOf (): TranscodeWorker {
	const limit = Math.max(1, Math.min(4, (navigator.hardwareConcurrency || 2) - 1));
	let w = workers.reduce<TranscodeWorker | null>((a, b) => (!a || b.load < a.load ? b : a), null);
	if (!w || (w.load > 0 && workers.length < limit)) {
		workerUrl ??= URL.createObjectURL(new Blob([`(${workerMain.toString()})();`], { type: "application/javascript" }));
		w = new TranscodeWorker(workerUrl);
		workers.push(w);
	}
	return w;
}
//#endregion

/** Transcodes `.basis` / `.ktx2` file data (ownership of `data` is transferred to worker) */
export function transcodeBasis (data: ArrayBuffer): Promise<TranscodedImage> {
	return workerOf().transcode(nextId++, data);
}
