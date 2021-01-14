import { SortieCostType } from "@/libs/Types";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, CURRENCY_TYPE, ITEM_TYPE, ROLE_TYPE } from "@/libs/Types/Enums";
import webpChecker from "webp-checker";

export const UnitLevelTable: number[] = [
	0, 120, 129, 140, 152, 165, 182, 200, 218, 241,
	264, 291, 321, 392, 434, 476, 523, 577, 638, 703,
	773, 852, 937, 1035, 1141, 1260, 1386, 1528, 1682, 1852,
	2043, 2251, 2481, 2734, 2982, 3256, 3556, 3890, 4254, 4634,
	5052, 5511, 6019, 6574, 7227, 7973, 8787, 9614, 10506, 11486,
	12509, 13584, 14712, 15895, 17132, 18426, 19776, 21185, 22653, 24181,
	25770, 27421, 29136, 30914, 32757, 34667, 36644, 38688, 40802, 42986,
	45241, 47568, 49968, 52443, 54992, 57618, 60320, 63101, 65961, 68901,
	71922, 75025, 78212, 81482, 84837, 88279, 91808, 95424, 99130, 123219,
	153161, 190380, 236642, 294146, 365624, 454470, 564906, 702178, 872807, 1003728,
];

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
};

export const RarityDisplay: Record<ACTOR_GRADE, string> = {
	[ACTOR_GRADE.B]: "B",
	[ACTOR_GRADE.A]: "A",
	[ACTOR_GRADE.S]: "S",
	[ACTOR_GRADE.SS]: "SS",
};

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

export const EquipTypeDisplay: Record<ITEM_TYPE, string> = {
	[ITEM_TYPE.CHIP]: "칩",
	[ITEM_TYPE.SPCHIP]: "OS",
	[ITEM_TYPE.SUBEQ]: "보조장비",
	[ITEM_TYPE.PCITEM]: "코어링크",
	[ITEM_TYPE.CONSUMABLE]: "소모품",
	[ITEM_TYPE.MATERIAL]: "재료",
};

export const AssetsRoot = process.env.NODE_ENV === "development"
	? "http://localhost:5500/assets"
	// ? "https://lo.swaytwig.com/assets"
	// : "https://lastorigin-wiki-assets.s3.ap-northeast-2.amazonaws.com";
	: "/assets";

let webpAvailable = false;
export async function initWEBP () {
	return new Promise<void>((resolve) => {
		webpChecker({
			disableGlobal: true,
			injectBodyClass: false,
			imgURL: `${AssetsRoot}/webp/test.webp`,
			callback: (s) => {
				webpAvailable = s;
				resolve();
			},
		});
	});
}

export function ImageExtension () {
	return webpAvailable ? "webp" : "png";
}

export const CurrentEvent = "Ev4";
export const CurrentDate = (() => {
	const d = new Date();
	const y = d.getUTCFullYear() % 100;
	const m = d.getUTCMonth() + 1;
	return `${y}/${m}`;
})();

export const WorldNames: Record<string, string> = {
	Story: "메인스토리",
	Sup1: "외전",
	Cha: "외부 통신 요청",
	Ev1: "지고의 저녁식사",
	Ev2: "리오보로스의 유산",
	Ev3: "만월의 야상곡",
	Ev4: "할로윈 파크 패닉",
	Ev5: "세인트 오르카의 비밀작전",
	Ev6: "이상한 나라의 초코 여왕",
	EvA0: "오르카호를 수복하라!",
	Ev7: "요정 마을의 아리아",
	Ev8: "흐린 기억 속의 나라",
	Ev9: "낙원으로부터 온 초대장",
};
export const WorldDescriptions: Record<string, string> = {
	Story: "",
	Sup1: "",
	Cha: "",
	Ev1: "소완으로 인해 혼란에 빠진 오르카 안에선 무슨 일이?",
	Ev2: "리오보로스의 유산을 찾아 떠나는 모험!",
	Ev3: "마법 소녀들과 함께 뽀끄루 대마왕을 물리쳐주세요!",
	Ev4: "과거에 얽매이지 마. 지금을 즐기는 거야!",
	Ev5: "연말 파티를 준비하는 사령관에게 뻗쳐오는 마수는?",
	Ev6: "티아멧은 '초코 여왕'과 얽힌 멸망 전 인류의 일그러짐과 마주하는데..",
	Ev7: "가벼운 마음으로 요정 마을로 향한 사령관에게...?",
	Ev8: "왓슨, 드디어 대단원이야!",
	Ev9: "당신이 바라는 욕망은 무엇인가요?",
};

export const SupplementaryUnit: Record<string, string> = {
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
};
