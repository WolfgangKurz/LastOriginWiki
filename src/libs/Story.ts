export type StoryRowData = StoryRowDataTitle | StoryRowDataText | StoryRowSelection |
	StoryRowBG | StoryRowImage | StoryRowEffect | StoryRowComment | StoryRowBGM;

export interface StoryRowDataTitle {
	title: string;
	loc: string;
}

export interface StoryRowDataText {
	teller?: string | {
		face: string;
		name: string;
	} | {
		image: string;
		name: string;
	};
	text: string[];
}

export interface StoryRowSelection {
	selection: Array<{
		text: string;
		to: number; // Index
	}>;
}

export interface StoryRowBG {
	bg: string;
}

export interface StoryRowImage {
	img: string;
}

export interface StoryRowEffect {
	effect: string;
}

export interface StoryRowComment {
	comment: string;
}

export interface StoryRowBGM {
	bgm: string;
}