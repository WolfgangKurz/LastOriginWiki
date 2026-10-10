import vert from "./vert.glsl?raw";
import frag from "./frag.glsl?raw";

export enum GammaShaderKind {
	/** `Sprites/Default`, premultiplied output */
	SpriteDefault = 0,
	/** `LastOne/LO_Sprite`, straight alpha output */
	Straight = 1,
	/** `LastOne/LO_Sprite_loby_cha_full3Dmeshbase_Additional_Alpha(_Clip)` */
	AdditionalAlpha = 2,
	/** `Legacy Shaders/Particles/Additive`, `Alpha Blended` (2x tint) */
	ParticleTint = 4,
	/** `Legacy Shaders/Particles/Multiply` */
	ParticleMultiply = 5,
	/** `Legacy Shaders/Particles/Additive (Soft)` */
	ParticleAdditiveSoft = 6,
	/** `Legacy Shaders/Particles/Alpha Blended Premultiply` */
	ParticlePremultiply = 7,
	/** `Mobile/Particles/Additive` */
	ParticleMobile = 8,
	/** `LastOne/LO_Hologram_*` (approximated) */
	Hologram = 9,
	/** `Standard` */
	Standard = 10,
}

export enum GammaFadeMode {
	/** multiply all channels (premultiplied / additive one-one) */
	All = 0,
	/** multiply alpha only (SrcAlpha based blending) */
	Alpha = 1,
	/** lerp to white (multiply blending) */
	White = 2,
}

export const vertex = vert;

/** Fragment shader variant for shader kind, avoids runtime branching on GPU */
export function fragmentOf (kind: GammaShaderKind): string {
	// `#define` has to be placed after precision statement, or Pixi prepends another precision
	return frag.replace(/^(precision \w+ float;)/, `$1\n#define KIND ${kind}`);
}

export function shaderKindOf (name: string, srcBlend: number): GammaShaderKind {
	switch (name) {
		case "Sprites/Default":
		case "LastOne/LO_Sprite_loby_cha_full3Dmeshbase":
		case "LastOne/LO_Sprite_noA":
			return GammaShaderKind.SpriteDefault;
		case "LastOne/LO_Sprite":
			return GammaShaderKind.Straight;
		case "LastOne/LO_Sprite_loby_cha_full3Dmeshbase_Additional_Alpha":
		case "LastOne/LO_Sprite_loby_cha_full3Dmeshbase_Additional_Alpha_Clip":
			return GammaShaderKind.AdditionalAlpha;
		case "Legacy Shaders/Particles/Additive":
		case "Legacy Shaders/Particles/Alpha Blended":
			return GammaShaderKind.ParticleTint;
		case "Legacy Shaders/Particles/Multiply":
			return GammaShaderKind.ParticleMultiply;
		case "Legacy Shaders/Particles/Additive (Soft)":
			return GammaShaderKind.ParticleAdditiveSoft;
		case "Legacy Shaders/Particles/Alpha Blended Premultiply":
			return GammaShaderKind.ParticlePremultiply;
		case "Mobile/Particles/Additive":
			return GammaShaderKind.ParticleMobile;
		case "Standard":
			return GammaShaderKind.Standard;
	}
	if (name.startsWith("LastOne/LO_Hologram"))
		return GammaShaderKind.Hologram;
	return srcBlend === 5 /* SrcAlpha */ ? GammaShaderKind.Straight : GammaShaderKind.SpriteDefault;
}
