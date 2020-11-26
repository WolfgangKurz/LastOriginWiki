export type StoryRowData = StoryRowDataTitle | StoryRowDataText | StoryRowSelection |
	StoryRowBG | StoryRowImage | StoryRowEffect | StoryRowComment | StoryRowBGM;

export interface StoryRowDataTitle {
	title: string;
	loc: string;
}

export interface StoryRowDataText {
	teller?: string | {
		image: string;
		char: string;
		skin: 0;
	} | {
		image: null;
		char: string;
		skin: number;
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
