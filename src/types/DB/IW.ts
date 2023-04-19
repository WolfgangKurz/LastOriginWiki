export interface IWSeasonCharVoice {
	audio: string; // file
	line: string; // line id
}
export interface IWSeasonBonus {
	char: string;
	rate: number; // 0 ~ 1
}
export interface IWSeasonRewardItem {
	key: string;
	count: number;
}
export interface IWSeasonReward {
	score: number;
	items: IWSeasonRewardItem[];
}

export interface IWSeason {
	key: string;
	prev: string;

	date: [from: string, to: string];

	bg: string;
	char: {
		id: string;
		voice: IWSeasonCharVoice;
		spvoice: IWSeasonCharVoice;
	};

	monster: string; // image

	rewards: {
		battle: IWSeasonReward[];
		total: IWSeasonReward[];
	};

	bonus: IWSeasonBonus[];
}

export interface IWStagePhase {
	id: string;
	damage: number;
	form: number;
}

export interface IWStage {
	key: string;
	season: string;
	next: string;

	lv: number;
	phase: IWStagePhase[];

	model: string;
	monster: {
		group: Tuple<string, 9>;
		lv: number;
		maxHP: number;
	};

	clearScore: number;
	roundLimit: number;
	roundScore: number;

	reward: string;
	rankCriteria: number;
}
