import { createRef, Component, RenderableProps } from "preact";

import MergeAlpha from "./alpha-mpeg.wasm?init";

interface WASMMemory {
	data: Uint8Array;

	/** `size` 블럭 크기만큼 메모리를 할당합니다. */
	grow (size: number): Uint8Array;

	/** `size` 블럭이 될 때 까지 메모리를 할당합니다. */
	expand (size: number): Uint8Array;
}
interface WASMData {
	asm: WebAssembly.Exports;
	mem: WASMMemory;
}
type WASMMergeAlpha = (width: number, height: number) => void;

interface MergedVideoProps {
	class?: string;
	src: string;
	type?: string;
	style?: string | preact.JSX.CSSProperties;
	onLoadedData?: JSX.DOMAttributes<HTMLVideoElement>["onLoadedData"];
}

class MergedVideo extends Component<MergedVideoProps> {
	private disp = createRef<HTMLCanvasElement>();

	private bufferCanvas: HTMLCanvasElement | null = null;
	private buffer: CanvasRenderingContext2D | null = null;

	private wasm: WASMData | null = null;

	private requestAnimationFrameId: number = 0;

	private onFrame (video: HTMLVideoElement) {
		const dispCanvas = this.disp.current;

		// 메모리 누수 방지
		if (!dispCanvas) return this.StopAnimationFrame();

		if (!this.bufferCanvas) {
			this.bufferCanvas = document.createElement("canvas");
			this.bufferCanvas.width = video.videoWidth;
			this.bufferCanvas.height = video.videoHeight;
			this.buffer = this.bufferCanvas.getContext("2d");
		}

		if (!this.buffer || !this.wasm || video.readyState !== video.HAVE_ENOUGH_DATA) {
			this.StartAnimationFrame(video);
			return;
		}

		const w = video.videoWidth / 2;
		const h = video.videoHeight;
		dispCanvas.width = w;
		dispCanvas.height = h;

		const ow = w * 2;
		this.buffer.clearRect(0, 0, ow, h);
		this.buffer.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, ow, h);
		const src = this.buffer.getImageData(0, 0, ow, h);

		this.wasm.mem
			.expand(src.data.length)
			.set(src.data);
		(this.wasm.asm.MergeAlpha as WASMMergeAlpha)(w, h);

		const sliced = this.wasm.mem.data.slice(0, src.data.length);
		src.data.set(sliced);

		const ctx = dispCanvas.getContext("2d");
		if (ctx) ctx.putImageData(src, 0, 0, 0, 0, w, h);

		this.requestAnimationFrameId = window.requestAnimationFrame(() => this.onFrame(video));
	}

	private StartAnimationFrame (video: HTMLVideoElement) {
		this.requestAnimationFrameId = window.requestAnimationFrame(() => this.onFrame(video));
	}

	private StopAnimationFrame () {
		if (this.requestAnimationFrameId) {
			cancelAnimationFrame(this.requestAnimationFrameId);
			this.requestAnimationFrameId = 0;
		}
	}

	componentDidMount () {
		MergeAlpha({})
			.then(({ exports }) => {
				this.wasm = {
					asm: exports,
					mem: {
						data: new Uint8Array((exports.memory as WebAssembly.Memory).buffer),
						grow (size) {
							const mem = exports.memory as WebAssembly.Memory;
							mem.grow(size);
							this.data = new Uint8Array(mem.buffer);
							return this.data;
						},
						expand (size) {
							if (this.data.length >= size) return this.data;

							const requires = Math.ceil((size - this.data.length) / (64 * 1024));
							return this.grow(requires);
						},
					},
				};
			});
	}

	componentWillUnmount () {
		this.StopAnimationFrame();
	}

	render (props: RenderableProps<MergedVideoProps>) {
		return <>
			<video
				src={ props.src }
				type={ props.type }
				muted
				autoPlay
				playsInline
				loop
				crossOrigin="anonymous"
				style={ { display: "none" } }
				onLoadedData={ (e) => {
					e.preventDefault();
					const video = e.target as HTMLVideoElement;
					if (video) this.StartAnimationFrame(video);

					if (props.onLoadedData)
						props.onLoadedData.call(undefined as never, e);
				} }
			/>
			<canvas
				class={ props.class }
				ref={ this.disp }
			/>
		</>;
	}
}
export default MergedVideo;
