import LZMA from "@/external/lzma/lzma-d.js";

export default function LZMADecompression (data: Uint8Array) {
	return new Promise<Uint8Array>((resolve, reject) => {
		LZMA.decompress(data, (result, error) => {
			if (result) return resolve(result);
			reject(error);
		});
	});
}
