export type BGMColor = "blue" | "green" | "yellow" | "orange" | "red" | "purple" | "pink";
export interface LyricsData {
	time: number;
	text: string;
	color?: BGMColor | BGMColor[];
	raw?: boolean;
}

export interface BGMInfo_Base {
	type: "placeholder" | "youtube" | "audio";
	id: string;
	title: string;
	duration: number;
	image?: string; // 앨범아트 교체용
	headers?: Omit<LyricsData, "time" | "color">[];
	lyrics?: LyricsData[];
}
export interface BGMInfo_Placeholder extends BGMInfo_Base {
	type: "placeholder";
}
export interface BGMInfo_Youtube extends BGMInfo_Base {
	type: "youtube";
	url: string;
}
export interface BGMInfo_Audio extends BGMInfo_Base {
	type: "audio";
	filename: string;
}
export type BGMInfo = BGMInfo_Placeholder | BGMInfo_Youtube | BGMInfo_Audio;

export interface BGMAlbum {
	id: string;
	title: string;
	author: string;
	image: string;
	songs: BGMInfo[];
}
