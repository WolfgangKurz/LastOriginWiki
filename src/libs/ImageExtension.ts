import { getCookie } from "@/libs/Cookie";
import { signal } from "@preact/signals";

export type ImageExtensionType = "webp" | "png";
export const ImageExtensionList: ImageExtensionType[] = ["webp", "png"];

const imageExt = signal<ImageExtensionType>(
	(() => {
		const v = getCookie("LO_IMGEXT");
		if (v && (ImageExtensionList as string[]).includes(v)) return v as ImageExtensionType;
		return "webp";
	})()
);
export function useImageExtension (): ImageExtensionType {
	return imageExt.value;
}

export function ChangeImageExtension (ext: ImageExtensionType): void {
	if (!ImageExtensionList.includes(ext)) ext = "webp";
	document.cookie = `LO_IMGEXT=${ext}; path=/`;
	// window.location.reload();
	imageExt.value = ext;
}
