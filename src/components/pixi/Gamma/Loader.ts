import type { ModelData } from "./Types";

import { AssetsRoot } from "@/libs/Const";

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

async function loadImage (url: string): Promise<ImageBitmap | null> {
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

export async function loadModel (id: GammaModelId): Promise<LoadedModel> {
	const base = modelUrl(id);
	const res = await fetch(`${base}/model.json`);
	if (!res.ok) throw new Error(`Failed to load model ${id.platform}/${id.name} (${res.status})`);

	const data = await res.json() as ModelData;
	const images = await Promise.all(data.tex.map(t => loadImage(`${base}/${t.f}`)));
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
