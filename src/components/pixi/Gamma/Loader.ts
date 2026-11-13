import type { ModelData } from "./Types";
import { isPuppet2DGizmoSprite } from "./Puppet2D";

import { AssetsRoot } from "@/libs/Const.1";

/** Gamma models, `${GammaRoot}/<O|G>/<model>/model.json` */
export const GammaRoot = `${AssetsRoot}/gamma`;

export type GammaPlatform = "O" | "G";

export interface GammaModelId {
	platform: GammaPlatform;
	/** lowercased model name, `2dmodel_*` */
	name: string;
}

export interface LoadedModel {
	id: GammaModelId;
	data: ModelData;
	/** straight alpha images, index matches `data.tex` */
	images: Array<ImageBitmap | null>;
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

export async function loadImage (url: string): Promise<ImageBitmap | null> {
	try {
		const res = await fetch(url);
		if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
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
export async function loadModelFrom (base: string, file = "model.json", root = base): Promise<{ data: ModelData; images: Array<ImageBitmap | null>; }> {
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
