export default {
  "active1": {
    "key": "active1",
    "name": "목표 견제",
    "icon": "ARShot",
    "target": "enemy",
    "buffs": {
      "index": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "data": [
        {
          "rate": 1.17,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
                  ],
                  "attr": 4
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "제압 모드 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.27,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
                  ],
                  "attr": 4
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "제압 모드 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.37,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
                  ],
                  "attr": 4
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "제압 모드 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.47,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
                  ],
                  "attr": 4
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "제압 모드 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.57,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
                  ],
                  "attr": 4
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "제압 모드 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.67,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
                  ],
                  "attr": 4
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "제압 모드 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.77,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
                  ],
                  "attr": 4
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "제압 모드 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.87,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
                  ],
                  "attr": 4
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "제압 모드 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.97,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
                  ],
                  "attr": 4
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "제압 모드 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.07,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "목표 견제 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
                  ],
                  "attr": 4
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "제압 모드 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "목표 견제 : 협동 공격",
                    "type": 0,
                    "value": "Char_PECS_MissSafety_N"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_MissSafety_N"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "위협 사격으로 [@:공격력 :0~0:배 피해]를 주고, 2라운드 동안 대상의 [공격력 -:15~0.5:%]과 [적중 -:20~1:%]를 낮춥니다.",
      "스쿼드 내 [$ch;PECS_MissSafety]가 있을 시, 대상에게 <고압 가스탄> 스킬 협동 공격을 합니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "시민 호위",
    "icon": "ShieldWall",
    "target": "team",
    "buffs": {
      "index": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "data": [
        {
          "rate": 0,
          "type": 0,
          "range": 6,
          "ap": 6,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 999,
          "buff_rate": 100,
          "buffs": [
            {
              "on": {
                "after": "use_skill"
              },
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 1,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_Char",
                  "desc": {
                    "desc": "시민 호위 : 지정 대상 보호",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 76,
                    "guard": "target"
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "시민 호위 : AP+{0}",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 20,
                    "ap": {
                      "base": 1,
                      "per": 0.05
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "시민 호위 : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 36,
                    "damage_reduce": {
                      "base": "25%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "시민 호위 : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "25%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 1,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "시민 호위 : AP+{0}",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": 1,
                      "per": 0.05
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "3라운드 동안 지정한 아군을 보호하며, 대상의 [AP +:1~0.05:]를 증가시킵니다.",
      "아군을 보호하는 동안 자신이 [받는 피해 -:25~3:%]가 감소합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "시민의 친구",
    "icon": "SelfDefBuff",
    "target": "team",
    "buffs": {
      "index": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "data": [
        {
          "rate": 0,
          "type": 0,
          "range": 0,
          "ap": 0,
          "grid": "8",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "round",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_Char",
                  "desc": {
                    "desc": "시민의 친구 : 지정 대상 보호",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 76,
                    "guard": "target"
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "시민의 친구 : 적중+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "시민의 친구 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "라운드 개시 시, 자신와 같은 열 위쪽에 배치된 아군을 지정 보호하며 [적중 +:20~1:%] / [행동력 +:5~0.25:%]을 증가시킵니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "군용 현대화 개수",
    "icon": "SelfAtkBuff",
    "target": "team",
    "buffs": {
      "index": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "data": [
        {
          "rate": 0,
          "type": 0,
          "range": 0,
          "ap": 0,
          "grid": "self",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "round",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "주무장 강화 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_UP",
                  "desc": {
                    "desc": "장갑 강화 : 방어력+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_Line",
                  "desc": {
                    "desc": "방어 시스템 개량 : 행 보호",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 50,
                    "guard": "col"
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_COUNTER",
                  "desc": {
                    "desc": "제압 모드 : {0}% 위력으로 반격 (출력 제한 해제 장치)",
                    "type": 1,
                    "value": "0.670000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 29,
                    "counter": {
                      "base": "67%",
                      "per": "4%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attacked",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
                  ],
                  "attr": 4
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_COUNTER",
                  "desc": {
                    "desc": "제압 모드 : {0}% 위력으로 반격",
                    "type": 1,
                    "value": "0.670000"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "counter"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 29,
                    "counter": {
                      "base": "67%",
                      "per": "4%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            }
          ]
        }
      ]
    },
    "desc": [
      "라운드 개시 시, [공격력 +:10~0.5:%] / [방어력 +:30~1.5:%]이 증가하며 행 보호가 적용됩니다.",
      "[$eq;Sub_Overclock] 장착 시, <목표 견제>의 피해량이 20% 증가하고 공격 받으면 [:67~4:% 위력으로 반격]합니다."
    ]
  }
};