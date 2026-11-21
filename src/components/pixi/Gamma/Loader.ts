import * as PIXI from "pixi.js";

import type { ModelData } from "./Types";
import { isPuppet2DGizmoSprite } from "./Puppet2D";
import { TranscodedImage, transcodeBasis } from "./Basis";

import { AssetsRoot } from "@/libs/Const.1";

/** Gamma models, `${GammaRoot}/<O|G>/<model>/model.json` */
export const GammaRoot = `${AssetsRoot}/gamma`;

export type GammaPlatform = "O" | "G";

/** Decoded texture: `ImageBitmap` (PNG, WebP) or transcoded Basis texture, straight alpha */
export type TextureImage = ImageBitmap | TranscodedImage;

export interface GammaModelId {
	platform: GammaPlatform;
	/** lowercased model name, `2dmodel_*` */
	name: string;
}

export interface LoadedModel {
	id: GammaModelId;
	data: ModelData;
	/** straight alpha images, index matches `data.tex` */
	images: Array<TextureImage | null>;
}

/** Parse `O/2dmodel_xxx`, `G/2dmodel_xxx` or `2dmodel_xxx` (OneStore) */
export function parseModelId (model: string, google?: boolean): GammaModelId {
	const m = /^([OG])\/(.+)$/i.exec(model);
	if (m) {
		return {
			platform: m[1].toUpperCase() as GammaPlatform,
			name: m[2].toLowerCase(),
		};
	}
	return {
		platform: google ? "G" : "O",
		name: model.toLowerCase(),
	};
}

export function modelUrl (id: GammaModelId): string {
	return `${GammaRoot}/${id.platform}/${id.name}`;
}

/** Loads texture file, `.basis` / `.ktx2` are transcoded into GPU compressed format, others (PNG, WebP) are decoded into `ImageBitmap` */
export async function loadImage (url: string): Promise<TextureImage | null> {
	try {
		const res = await fetch(url);
		if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
		if (/\.(?:basis|ktx2)(?:$|\?)/i.test(url))
			return await transcodeBasis(await res.arrayBuffer());

		const blob = await res.blob();
		// keep straight alpha, shaders reproduce Unity blending
		return await createImageBitmap(blob, {
			premultiplyAlpha: "none",
			colorSpaceConversion: "none",
		});
	} catch (e) {
		console.warn(`[gamma] failed to load texture ${url}`, e);
		return null;
	}
}

/**
 * Pixi resource of decoded texture, `null` if transcoding failed.
 * Basis is compressed (or RGBA if no compressed format is supported), alpha is stored as encoded (`alphaMode`).
 */
export function textureResource (image: TextureImage, alphaMode: PIXI.ALPHA_MODES): PIXI.Resource | null {
	if (image instanceof TranscodedImage) {
		if (!image.data) return null;
		if (!image.format)
			return new PIXI.BufferResource(image.data, { width: image.width, height: image.height });

		// Pixi v7 knows ASTC 4x4 only (extension lookup throws for other block sizes),
		// resource is created as ASTC 4x4 and real format is set after (`upload` passes `format` as is)
		const astc = image.format >= 0x93B0 && image.format <= 0x93BD;
		const resource = new PIXI.CompressedTextureResource(null, {
			format: astc ? 0x93B0 : image.format,
			width: image.width,
			height: image.height,
			levels: 1,
			levelBuffers: [{ levelID: 0, levelWidth: image.width, levelHeight: image.height, levelBuffer: image.data }],
		});
		if (astc) resource.format = image.format;
		return resource;
	}
	return new PIXI.ImageBitmapResource(image, { alphaMode, ownsImageBitmap: false });
}

/** Textures used by Puppet2D gizmo sprites only (hidden by runtime), not loaded */
function gizmoTextures (data: ModelData): Set<number> {
	const out = new Set<number>();
	for (const s of data.spr)
		if (s.tx >= 0 && isPuppet2DGizmoSprite(s.n)) out.add(s.tx);
	if (out.size === 0) return out;

	for (const s of data.spr)
		if (!isPuppet2DGizmoSprite(s.n)) out.delete(s.tx);
	for (const m of data.mat)
		for (const t of Object.values(m.t)) out.delete(t);
	return out;
}

/**
 * Load converted model from directory url (`${base}/${file}`, textures).
 * Texture file containing `/` is relative to `root` (shared textures of char models, see `ref.json`).
 */
export async function loadModelFrom (base: string, file = "model.json", root = base): Promise<{ data: ModelData; images: Array<TextureImage | null>; }> {
	const res = await fetch(`${base}/${file}`);
	if (!res.ok) throw new Error(`Failed to load model ${base} (${res.status})`);

	const data = await res.json() as ModelData;
	const unused = gizmoTextures(data);
	const images = await Promise.all(data.tex.map((t, i) => (unused.has(i)
		? null
		: loadImage(`${t.f.includes("/") ? root : base}/${t.f}`))));
	return { data, images };
}

export async function loadModel (id: GammaModelId): Promise<LoadedModel> {
	const { data, images } = await loadModelFrom(modelUrl(id));
	return { id, data, images };
}

export interface GammaIndex {
	O?: string[];
	G?: string[];
}

export async function loadIndex (): Promise<GammaIndex> {
	const res = await fetch(`${GammaRoot}/index.json`);
	if (!res.ok) throw new Error(`Failed to load model index (${res.status})`);
	return await res.json() as GammaIndex;
}
