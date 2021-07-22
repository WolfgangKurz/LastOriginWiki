import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, CURRENCY_TYPE, ITEM_TYPE, ROLE_TYPE } from "@/types/Enums";
import { SortieCostType } from "@/types/Cost";

import { getCookie } from "@/libs/Functions";

import { LocaleGet } from "@/components/locale";

export type ImageExtensionTypes = "webp" | "png";
export const ImageExtensionList: ImageExtensionTypes[] = ["webp", "png"];

export const Host = process.env.NODE_ENV === "development"
	? "http://121.157.45.209:5500"
	: "https://lo.swaytwig.com";

export const AssetsRoot = `${Host}/assets`;
export const DataRoot = `${Host}/json`;

export const SortieCost: SortieCostType = {
	[ACTOR_GRADE.B]: {
		[ACTOR_CLASS.LIGHT]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.NUTRIENT]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.POWER]: [2, 3, 3, 3, 4, 4],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [20, 22, 24, 27, 30, 35],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [7, 8, 9, 10, 11, 13],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [7, 8, 9, 10, 11, 13],
					[CURRENCY_TYPE.NUTRIENT]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.POWER]: [7, 8, 9, 10, 11, 13],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [15, 16, 18, 20, 23, 26],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [12, 14, 15, 17, 19, 22],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [7, 8, 9, 10, 11, 13],
					[CURRENCY_TYPE.NUTRIENT]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.POWER]: [2, 3, 3, 3, 4, 4],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [15, 16, 18, 20, 23, 26],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [7, 8, 9, 10, 11, 13],
				},
			},
		},
		[ACTOR_CLASS.HEAVY]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [17, 19, 21, 24, 26, 30],
					[CURRENCY_TYPE.NUTRIENT]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.POWER]: [7, 8, 9, 10, 11, 13],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [24, 27, 30, 34, 38, 43],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [12, 14, 15, 17, 19, 22],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.NUTRIENT]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.POWER]: [12, 14, 15, 17, 19, 22],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [20, 22, 24, 27, 30, 35],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [17, 19, 21, 24, 26, 30],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.NUTRIENT]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.POWER]: [7, 8, 9, 10, 11, 13],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [20, 22, 24, 27, 30, 35],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [12, 14, 15, 17, 19, 22],
				},
			},
		},
		[ACTOR_CLASS.AIR]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [10, 11, 12, 14, 15, 17],
					[CURRENCY_TYPE.NUTRIENT]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.POWER]: [10, 11, 12, 14, 15, 17],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [17, 19, 21, 24, 26, 30],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [15, 16, 18, 20, 23, 26],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [5, 5, 6, 7, 8, 9],
					[CURRENCY_TYPE.NUTRIENT]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.POWER]: [15, 16, 18, 20, 23, 26],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [20, 22, 24, 27, 30, 35],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [5, 5, 6, 7, 8, 9],
					[CURRENCY_TYPE.NUTRIENT]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.POWER]: [10, 11, 12, 14, 15, 17],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [12, 14, 15, 17, 19, 22],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [15, 16, 18, 20, 23, 26],
				},
			},
		},
	},
	[ACTOR_GRADE.A]: {
		[ACTOR_CLASS.LIGHT]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.NUTRIENT]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.POWER]: [3, 4, 4, 5, 5, 6],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [26, 29, 32, 36, 40, 46],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [10, 11, 12, 14, 15, 17],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [10, 11, 12, 14, 15, 17],
					[CURRENCY_TYPE.NUTRIENT]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.POWER]: [10, 11, 12, 14, 15, 17],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [20, 22, 24, 27, 30, 35],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [16, 18, 20, 23, 25, 29],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [10, 11, 12, 14, 15, 17],
					[CURRENCY_TYPE.NUTRIENT]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.POWER]: [3, 4, 4, 5, 5, 6],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [20, 22, 24, 27, 30, 35],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [10, 11, 12, 14, 15, 17],
				},
			},
		},
		[ACTOR_CLASS.HEAVY]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [23, 25, 28, 32, 35, 40],
					[CURRENCY_TYPE.NUTRIENT]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.POWER]: [10, 11, 12, 14, 15, 17],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [33, 36, 40, 45, 50, 58],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [16, 18, 20, 23, 25, 29],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.NUTRIENT]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.POWER]: [16, 18, 20, 23, 25, 29],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [26, 29, 32, 36, 40, 46],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [23, 25, 28, 32, 35, 40],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.NUTRIENT]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.POWER]: [10, 11, 12, 14, 15, 17],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [26, 29, 32, 36, 40, 46],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [16, 18, 20, 23, 25, 29],
				},
			},
		},
		[ACTOR_CLASS.AIR]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [13, 15, 16, 18, 20, 23],
					[CURRENCY_TYPE.NUTRIENT]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.POWER]: [13, 15, 16, 18, 20, 23],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [23, 25, 28, 32, 35, 40],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [20, 22, 24, 27, 30, 35],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [7, 7, 8, 9, 10, 12],
					[CURRENCY_TYPE.NUTRIENT]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.POWER]: [20, 22, 24, 27, 30, 35],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [26, 29, 32, 36, 40, 46],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [7, 7, 8, 9, 10, 12],
					[CURRENCY_TYPE.NUTRIENT]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.POWER]: [13, 15, 16, 18, 20, 23],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [16, 18, 20, 23, 25, 29],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [20, 22, 24, 27, 30, 35],
				},
			},
		},
	},
	[ACTOR_GRADE.S]: {
		[ACTOR_CLASS.LIGHT]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.NUTRIENT]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.POWER]: [4, 5, 5, 6, 7, 8],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [35, 39, 43, 49, 54, 62],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [13, 15, 16, 18, 20, 23],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [13, 15, 16, 18, 20, 23],
					[CURRENCY_TYPE.NUTRIENT]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.POWER]: [13, 15, 16, 18, 20, 23],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [26, 29, 32, 36, 41, 47],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [22, 24, 27, 30, 34, 39],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [13, 15, 16, 18, 20, 23],
					[CURRENCY_TYPE.NUTRIENT]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.POWER]: [4, 5, 5, 6, 7, 8],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [26, 29, 32, 36, 41, 47],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [13, 15, 16, 18, 20, 23],
				},
			},
		},
		[ACTOR_CLASS.HEAVY]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [31, 34, 38, 43, 47, 54],
					[CURRENCY_TYPE.NUTRIENT]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.POWER]: [13, 15, 16, 18, 20, 23],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [44, 49, 54, 61, 68, 78],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [22, 24, 27, 30, 34, 39],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.NUTRIENT]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.POWER]: [22, 24, 27, 30, 34, 39],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [35, 39, 43, 49, 54, 62],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [31, 34, 38, 43, 47, 54],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.NUTRIENT]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.POWER]: [13, 15, 16, 18, 20, 23],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [35, 39, 43, 49, 54, 62],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [22, 24, 27, 30, 34, 39],
				},
			},
		},
		[ACTOR_CLASS.AIR]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [18, 20, 22, 24, 27, 31],
					[CURRENCY_TYPE.NUTRIENT]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.POWER]: [18, 20, 22, 24, 27, 31],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [31, 34, 38, 43, 47, 54],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [26, 29, 32, 36, 41, 47],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [9, 10, 11, 12, 14, 16],
					[CURRENCY_TYPE.NUTRIENT]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.POWER]: [26, 29, 32, 36, 41, 47],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [35, 39, 43, 49, 54, 62],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [9, 10, 11, 12, 14, 16],
					[CURRENCY_TYPE.NUTRIENT]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.POWER]: [18, 20, 22, 24, 27, 31],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [22, 24, 27, 30, 34, 39],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [26, 29, 32, 36, 41, 47],
				},
			},
		},
	},
	[ACTOR_GRADE.SS]: {
		[ACTOR_CLASS.LIGHT]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.NUTRIENT]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.POWER]: [5, 6, 7, 7, 8, 9],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [43, 48, 53, 59, 66, 76],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [16, 18, 20, 22, 25, 28],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [16, 18, 20, 22, 25, 28],
					[CURRENCY_TYPE.NUTRIENT]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.POWER]: [16, 18, 20, 22, 25, 28],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [32, 36, 40, 45, 50, 57],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [27, 30, 33, 37, 41, 47],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [16, 18, 20, 22, 25, 28],
					[CURRENCY_TYPE.NUTRIENT]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.POWER]: [5, 6, 7, 7, 8, 9],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [32, 36, 40, 45, 50, 57],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [16, 18, 20, 22, 25, 28],
				},
			},
		},
		[ACTOR_CLASS.HEAVY]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [38, 42, 46, 52, 58, 66],
					[CURRENCY_TYPE.NUTRIENT]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.POWER]: [16, 18, 20, 22, 25, 28],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [54, 60, 66, 74, 83, 95],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [27, 30, 33, 37, 41, 47],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.NUTRIENT]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.POWER]: [27, 30, 33, 37, 41, 47],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [43, 48, 53, 59, 66, 76],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [38, 42, 46, 52, 58, 66],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.NUTRIENT]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.POWER]: [16, 18, 20, 22, 25, 28],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [43, 48, 53, 59, 66, 76],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [27, 30, 33, 37, 41, 47],
				},
			},
		},
		[ACTOR_CLASS.AIR]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [21, 24, 26, 30, 33, 38],
					[CURRENCY_TYPE.NUTRIENT]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.POWER]: [21, 24, 26, 30, 33, 38],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [38, 42, 46, 52, 58, 66],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [32, 36, 40, 45, 50, 57],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [11, 12, 13, 15, 17, 19],
					[CURRENCY_TYPE.NUTRIENT]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.POWER]: [32, 36, 40, 45, 50, 57],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [43, 48, 53, 59, 66, 76],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [11, 12, 13, 15, 17, 19],
					[CURRENCY_TYPE.NUTRIENT]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.POWER]: [21, 24, 26, 30, 33, 38],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [27, 30, 33, 37, 41, 47],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [32, 36, 40, 45, 50, 57],
				},
			},
		},
	},
	[ACTOR_GRADE.SSS]: {
		[ACTOR_CLASS.LIGHT]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
			},
		},
		[ACTOR_CLASS.HEAVY]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
			},
		},
		[ACTOR_CLASS.AIR]: {
			[ROLE_TYPE.DEFENDER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
			},
			[ROLE_TYPE.ATTACKER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
			},
			[ROLE_TYPE.SUPPORTER]: {
				[ACTOR_BODY_TYPE.BIOROID]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
				[ACTOR_BODY_TYPE.AGS]: {
					[CURRENCY_TYPE.METAL]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.NUTRIENT]: [0, 0, 0, 0, 0, 0],
					[CURRENCY_TYPE.POWER]: [0, 0, 0, 0, 0, 0],
				},
			},
		},
	},
};

export const RarityDisplay: Record<ACTOR_GRADE, string> = {
	[ACTOR_GRADE.B]: "B",
	[ACTOR_GRADE.A]: "A",
	[ACTOR_GRADE.S]: "S",
	[ACTOR_GRADE.SS]: "SS",
	[ACTOR_GRADE.SSS]: "SSS",
};

export function EquipTypeDisplay (): Record<ITEM_TYPE, string> {
	return {
		[ITEM_TYPE.CHIP]: LocaleGet("EQUIP_FILTER_TYPE_CHIP"),
		[ITEM_TYPE.SPCHIP]: LocaleGet("EQUIP_FILTER_TYPE_OS"),
		[ITEM_TYPE.SUBEQ]: LocaleGet("EQUIP_FILTER_TYPE_ITEM"),
		[ITEM_TYPE.PCITEM]: "코어링크",
		[ITEM_TYPE.CONSUMABLE]: "소모품",
		[ITEM_TYPE.MATERIAL]: "재료",
	};
}

export const UnitClassDisplay: Record<ACTOR_CLASS, string> = {
	[ACTOR_CLASS.LIGHT]: "경장",
	[ACTOR_CLASS.AIR]: "기동",
	[ACTOR_CLASS.HEAVY]: "중장",
};

export const UnitRoleDisplay: Record<ROLE_TYPE, string> = {
	[ROLE_TYPE.ATTACKER]: "공격기",
	[ROLE_TYPE.DEFENDER]: "보호기",
	[ROLE_TYPE.SUPPORTER]: "지원기",
};

export const TroopNameTable: Record<string, string> = {
	/* eslint-disable camelcase */
	Squad_080_1: "UNIT_GROUP_080",
	Squad_3PFairy_1: "UNIT_GROUP_3PFairy",
	Squad_3PFairy_2: "UNIT_GROUP_3PFairy II",
	Squad_AACannonier_1: "UNIT_GROUP_AACannonier",
	Squad_AGSRoboTech_1: "UNIT_GROUP_AGSRoboTech",
	Squad_AGSRoboTech_2: "UNIT_GROUP_AGSRoboTech II",
	Squad_AGSRoboTech_3: "UNIT_GROUP_AGSRoboTech III",
	Squad_AGSRoboTech_4: "UNIT_GROUP_AGSRoboTech IV",
	Squad_AmuseAttendant: "UNIT_GROUP_AmuseAttendant",
	Squad_AngerOfTheHorde_1: "UNIT_GROUP_AngerOfTheHorde",
	Squad_AngerOfTheHorde_2: "UNIT_GROUP_AngerOfTheHorde II",
	Squad_AnywhereSeries_1: "UNIT_GROUP_AnywhereSeries",
	Squad_AnywhereSeries_2: "UNIT_GROUP_AnywhereSeries II",
	Squad_ArmoredMaiden_1: "UNIT_GROUP_ArmoredMaiden",
	Squad_BattleMaid_1: "UNIT_GROUP_BattleMaid",
	Squad_BattleMaid_2: "UNIT_GROUP_BattleMaid II",
	Squad_Bermuda_1: "UNIT_GROUP_Bermuda",
	Squad_Bermuda_2: "UNIT_GROUP_Bermuda II",
	Squad_Bismarck: "UNIT_GROUP_Bismarck",
	Squad_CityGuard_1: "UNIT_GROUP_CityGuard",
	Squad_CityGuard_2: "UNIT_GROUP_CityGuard II",
	Squad_CompanionSeries_1: "UNIT_GROUP_CompanionSeries",
	Squad_CompanionSeries_2: "UNIT_GROUP_CompanionSeries II",
	Squad_Dentertainment_1: "UNIT_GROUP_Dentertainment",
	Squad_Dentertainment_2: "UNIT_GROUP_Dentertainment II",
	Squad_Dentertainment_3: "UNIT_GROUP_Dentertainment III",
	Squad_DoomBringer_1: "UNIT_GROUP_DoomBringer",
	Squad_DoomBringer_2: "UNIT_GROUP_DoomBringer II",
	Squad_GoldenWorkers_1: "UNIT_GROUP_GoldenWorkers",
	Squad_GoldenWorkers_2: "UNIT_GROUP_GoldenWorkers II",
	Squad_Horizon_1: "UNIT_GROUP_Horizon",
	Squad_Kouhei: "UNIT_GROUP_Kouhei",
	Squad_OrbitalWatcher_1: "UNIT_GROUP_OrbitalWatcher",
	Squad_PublicServant_1: "UNIT_GROUP_PublicServant",
	Squad_PublicServant_2: "UNIT_GROUP_PublicServant II",
	Squad_PublicServant_3: "UNIT_GROUP_PublicServant III",
	Squad_SkyKnight_1: "UNIT_GROUP_SkyKnight",
	Squad_SkyKnight_2: "UNIT_GROUP_SkyKnight II",
	Squad_SmartEnjoy: "UNIT_GROUP_SmartEnjoy",
	Squad_SteelLine_1: "UNIT_GROUP_SteelLine",
	Squad_SteelLine_2: "UNIT_GROUP_SteelLine II",
	Squad_Strikers: "UNIT_GROUP_Strikers",
	Squad_TeamMongus_1: "UNIT_GROUP_TeamMongus",
	Squad_Walhalla_1: "UNIT_GROUP_Walhalla",
	Squad_Walhalla_2: "UNIT_GROUP_Walhalla II",
	Squad_WatcherOfNature: "UNIT_GROUP_WatcherOfNature",
	/* eslint-enable camelcase */
};

export function ImageExtension (): ImageExtensionTypes {
	// return webpAvailable ? "webp" : "png";
	const list = ImageExtensionList as string[];
	const cookie = getCookie("LO_IMGEXT");
	if (cookie && list.includes(cookie)) return cookie as ImageExtensionTypes;
	return "webp";
}


export const WorldIds: string[] = ["Story", "Sub", "Cha", "Ev1", "Ev2", "Ev3", "Ev4", "Ev5", "Ev6", "EvA0", "Ev7", "Ev8", "Ev9", "Ev10", "Ev11"];
export const SubStoryUnit: Record<string, string> = {
	"S1-1": "AGS_Rampart",
	"S1-2": "3P_ConstantiaS2",
	"S2-1": "3P_Sowan",
	"S5-1": "DS_Faucre",
	"S6-1": "DS_Baekto",
	"S7-1": "3P_Fenrir",
	"S8-1": "PECS_Circe",
	"S9-1": "3P_Hachiko",
	"S10-1": "AGS_Rampart",
	"S11-1": "3P_Aurora",
	"S12-1": "3P_CSPerrault",
	"S13-1": "3P_BlackLilith",
	"S14-1": "BR_Brownie",
};

export const CurrentEvent = "Ev12";
export const EventFrom = new Date(2021, 7 - 1, 12);
export const EventTo = new Date(2021, 8 - 1, 23);

export const CurrentDate = ((): string => {
	const d = new Date();
	const y = d.getUTCFullYear() % 100;
	const m = d.getUTCMonth() + 1;
	return `${y}/${m}`;
})();
