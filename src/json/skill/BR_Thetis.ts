export default {
  "active1": {
    "key": "active1",
    "name": "사격은 자신있지롱-",
    "icon": "MGWideShot",
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
          "rate": 1.01,
          "type": 0,
          "range": 3,
          "ap": 6,
          "grid": "58",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": -30,
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "자신있다고! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 보정 {0}% (자신)",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                      "per": "1%"
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
          "rate": 1.1,
          "type": 0,
          "range": 3,
          "ap": 6,
          "grid": "58",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": -30,
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "자신있다고! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 보정 {0}% (자신)",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                      "per": "1%"
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
          "rate": 1.19,
          "type": 0,
          "range": 3,
          "ap": 6,
          "grid": "58",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": -30,
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "자신있다고! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 보정 {0}% (자신)",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                      "per": "1%"
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
          "rate": 1.28,
          "type": 0,
          "range": 3,
          "ap": 6,
          "grid": "58",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": -30,
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "자신있다고! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 보정 {0}% (자신)",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                      "per": "1%"
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
          "ap": 6,
          "grid": "58",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": -30,
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "자신있다고! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 보정 {0}% (자신)",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                      "per": "1%"
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
          "rate": 1.46,
          "type": 0,
          "range": 3,
          "ap": 6,
          "grid": "58",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": -30,
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "자신있다고! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 보정 {0}% (자신)",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                      "per": "1%"
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
          "rate": 1.55,
          "type": 0,
          "range": 3,
          "ap": 6,
          "grid": "58",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": -30,
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "자신있다고! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 보정 {0}% (자신)",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                      "per": "1%"
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
          "rate": 1.64,
          "type": 0,
          "range": 3,
          "ap": 6,
          "grid": "58",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": -30,
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "자신있다고! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 보정 {0}% (자신)",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                      "per": "1%"
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
          "rate": 1.73,
          "type": 0,
          "range": 3,
          "ap": 6,
          "grid": "58",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": -30,
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "자신있다고! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 보정 {0}% (자신)",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                      "per": "1%"
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
          "rate": 1.82,
          "type": 0,
          "range": 3,
          "ap": 6,
          "grid": "58",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": -30,
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "자신있다고! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "자신있다고! : 적중 보정 {0}% (자신)",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 회피 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "락 온 타겟! : AP {0}",
                    "type": 0,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -0.05,
                      "per": -0.05
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                      "per": "1%"
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
      "기관총을 난사해 지정 범위에 [@:공격력 :0~0:배 피해]를 줍니다.",
      "적중 대상의 [AP -:0.05~0.05:]를 감소시키며, 2라운드 동안 [회피 -:10~0.5:%] / [적중 -:10~0.5:%]를 낮춥니다.",
      "<하드포인트 탑재 : 보조> 활성화 시, 각 감소 효과가 2배로 적용됩니다.",
      "<하드포인트 탑재 : 무장> 활성화 상태로 치명타 시, [피해량 +:20~1:%]가 증가합니다.",
      "해당 스킬은 [적중 보정 -:30~0:%]가 적용됩니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "내가 주는 선물이야!",
    "icon": "Missile",
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
          "rate": 1.885,
          "type": 0,
          "range": 4,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "하드포인트 <보조> 시 : 적중 강화 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "더 받아가! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "더 받아가! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "더 받아가! : 적중 강화 효과 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 2.055,
          "type": 0,
          "range": 4,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "하드포인트 <보조> 시 : 적중 강화 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "더 받아가! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "더 받아가! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "더 받아가! : 적중 강화 효과 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 2.225,
          "type": 0,
          "range": 4,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "하드포인트 <보조> 시 : 적중 강화 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "더 받아가! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "더 받아가! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "더 받아가! : 적중 강화 효과 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 2.395,
          "type": 0,
          "range": 4,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "하드포인트 <보조> 시 : 적중 강화 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "더 받아가! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "더 받아가! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "더 받아가! : 적중 강화 효과 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 2.565,
          "type": 0,
          "range": 4,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "하드포인트 <보조> 시 : 적중 강화 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "더 받아가! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "더 받아가! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "더 받아가! : 적중 강화 효과 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 2.735,
          "type": 0,
          "range": 4,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "하드포인트 <보조> 시 : 적중 강화 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "더 받아가! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "더 받아가! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "더 받아가! : 적중 강화 효과 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 2.905,
          "type": 0,
          "range": 4,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "하드포인트 <보조> 시 : 적중 강화 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "더 받아가! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "더 받아가! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "더 받아가! : 적중 강화 효과 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 3.075,
          "type": 0,
          "range": 4,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "하드포인트 <보조> 시 : 적중 강화 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "더 받아가! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "더 받아가! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "더 받아가! : 적중 강화 효과 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 3.245,
          "type": 0,
          "range": 4,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "하드포인트 <보조> 시 : 적중 강화 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "더 받아가! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "더 받아가! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "더 받아가! : 적중 강화 효과 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 3.415,
          "type": 0,
          "range": 4,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "내가 주는 선물이야! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "하드포인트 <보조> 시 : 적중 강화 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> / 치명타 시 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "더 받아가! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "더 받아가! : 적중 {0}%",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "더 받아가! : 적중 강화 효과 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
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
      "지정 대상에게 미사일과 연막탄을 발사해 [@:공격력 :0~0:배 피해]를 주고, 2라운드 동안 표식 / [받는 피해 +:10~0.5:%] 증가 / [적중 -:20~1:%] 감소 상태로 만듭니다.",
      "표식을 제외한 효과는 중첩 가능합니다.",
      "<하드포인트 탑재 : 보조> 활성화 시, 받는 피해 증가 / 적중 감소 효과가 2배로 적용되며 적중 강화 효과를 해제합니다.",
      "<하드포인트 탑재 : 무장> 활성화 상태로 치명타 시, [피해량 +:30~1.5:%]가 증가합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "초계 임무 개시",
    "icon": "TeamSpdBuff",
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
          "grid": "2>12358",
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "초계 임무 개시 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "초계 임무 개시 : 적중+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "10%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "초계 임무 개시 : 회피+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "10%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "초계 임무 개시 : 행동력+{0}%",
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
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "요격 포메이션 : 공격력+{0}% (호라이즌 대원 편성 시)",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "15%",
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "round",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "정밀 초계 임무 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "정밀 초계 임무 : 적중+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "10%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "정밀 초계 임무 : 회피+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "10%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "정밀 초계 임무 : 행동력+{0}%",
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
            },
            {
              "on": "wave_end",
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
                  "icon": "BuffIcon_SCOUTING",
                  "desc": {
                    "desc": "초계 임무 개시 : 정찰 활성화",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 23,
                    "scout": true
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "round",
              "if": {
                "in_squad": [
                  "Char_BR_Sirene_N",
                  "Char_BR_Undine_N",
                  "Char_BR_Nereid_N",
                  "Char_BR_InvDragon_N"
                ]
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "요격 포메이션 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "15%",
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "round",
              "if": {
                "target": [
                  "Char_BR_Sirene_N"
                ]
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_SUPPORT_ATTACK",
                  "desc": {
                    "desc": "요격 개시! : 공격 지원",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 77,
                    "attack_support": {
                      "base": "100%",
                      "per": "0%"
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
      "라운드 개시 시, 범위 내 아군들의 [치명타 +:5~0.25:%] / [적중 +:10~1:%] / [회피 +:10~1:%] / [행동력 +:5~0.25:%]가 증가합니다.",
      "<호라이즌> 대원과 편성된 경우, 아군의 [공격력 +:15~0.75:%]를 증가시킵니다.",
      "대상이 [$ch;BR_Sirene]일 경우, 공격을 지원합니다.",
      "<하드포인트 탑재 : 보조> 활성화 시, 공격력을 제외한 각 효과가 2배로 적용됩니다.",
      "전투 종료 후, 정찰이 활성화됩니다.",
      "호라이즌 : [$ch;BR_Nereid] / [$ch;BR_Undine] / [$ch;BR_Sirene] / [$ch;BR_InvDragon]"
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "하드포인트 탑재",
    "icon": "SelfSpdBuff",
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
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "하드포인트 <기본> : 회피+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "30%",
                      "per": "5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> : 공격력+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "15%",
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "20%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "하드포인트 <보조> : 보조 기능 강화",
                    "type": 0,
                    "value": "0.010000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "1%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "하드포인트 <보조> : 적중+{0}%",
                    "type": 1,
                    "value": "0.030000"
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
                      "base": "3%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "round",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummyAPEq_N_1",
                    "Effect_BUFF_DummyAPEq_N_2",
                    "Effect_BUFF_DummyAPEq_N_3",
                    "Effect_BUFF_DummyAPEq_N_4",
                    "Effect_BUFF_DummyAPEq_N_5",
                    "Effect_BUFF_DummyAPEq_N_6",
                    "Effect_BUFF_DummyAPEq_N_7",
                    "Effect_BUFF_DummyAPEq_N_8",
                    "Effect_BUFF_DummyAPEq_N_9",
                    "Effect_BUFF_DummyAPEq_N_10",
                    "Effect_BUFF_DummyAPEq_N_11",
                    "Effect_BUFF_DummyAPEq_N_12",
                    "Effect_BUFF_DummyAPEq_N_13",
                    "Effect_BUFF_DummyAPEq_N_14",
                    "Effect_BUFF_DummyAPEq_N_15",
                    "Effect_BUFF_DummyAPEq_N_16",
                    "Effect_BUFF_DummyAPEq_N_17",
                    "Effect_BUFF_DummyAPEq_N_18",
                    "Effect_BUFF_DummyAPEq_N_19",
                    "Effect_BUFF_DummyAPEq_N_20",
                    "Effect_BUFF_Bombard_N_1",
                    "Effect_BUFF_Bombard_N_2",
                    "Effect_BUFF_Bombard_N_3",
                    "Effect_BUFF_Bombard_N_4",
                    "Effect_BUFF_Bombard_N_5",
                    "Effect_BUFF_Bombard_N_6",
                    "Effect_BUFF_Bombard_N_7",
                    "Effect_BUFF_Bombard_N_8",
                    "Effect_BUFF_Bombard_N_9",
                    "Effect_BUFF_Bombard_N_10",
                    "Effect_BUFF_Bombard_N_11",
                    "Effect_BUFF_HornOfFaucre_N_1",
                    "Effect_BUFF_HornOfFaucre_N_2",
                    "Effect_BUFF_HornOfFaucre_N_3",
                    "Effect_BUFF_HornOfFaucre_N_4",
                    "Effect_BUFF_HornOfFaucre_N_5",
                    "Effect_BUFF_HornOfFaucre_N_6",
                    "Effect_BUFF_HornOfFaucre_N_7",
                    "Effect_BUFF_HornOfFaucre_N_8",
                    "Effect_BUFF_HornOfFaucre_N_9",
                    "Effect_BUFF_HornOfFaucre_N_10",
                    "Effect_BUFF_HornOfFaucre_N_11"
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> : 공격력+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "15%",
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "하드포인트 <무장> : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "20%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "round",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_DummySpDrone_N_1",
                    "Effect_BUFF_FortuneOrb_N_1",
                    "Effect_BUFF_FortuneOrb_N_2",
                    "Effect_BUFF_FortuneOrb_N_3",
                    "Effect_BUFF_FortuneOrb_N_4",
                    "Effect_BUFF_FortuneOrb_N_5",
                    "Effect_BUFF_FortuneOrb_N_6",
                    "Effect_BUFF_FortuneOrb_N_7",
                    "Effect_BUFF_FortuneOrb_N_8",
                    "Effect_BUFF_FortuneOrb_N_9",
                    "Effect_BUFF_FortuneOrb_N_10",
                    "Effect_BUFF_FortuneOrb_N_11",
                    "Effect_BUFF_Interceptor_N_1",
                    "Effect_BUFF_Interceptor_N_2",
                    "Effect_BUFF_Interceptor_N_3",
                    "Effect_BUFF_Interceptor_N_4",
                    "Effect_BUFF_Interceptor_N_5",
                    "Effect_BUFF_Interceptor_N_6",
                    "Effect_BUFF_Interceptor_N_7",
                    "Effect_BUFF_Interceptor_N_8",
                    "Effect_BUFF_Interceptor_N_9",
                    "Effect_BUFF_Interceptor_N_10",
                    "Effect_BUFF_Interceptor_N_11"
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
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "하드포인트 <보조> : 적중+{0}%",
                    "type": 1,
                    "value": "0.030000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "3%",
                      "per": "3%"
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
      "라운드 개시 시, [회피 +:30~5:%]가 증가합니다.",
      "[$eq;Sub_ArmorPierce] / [$eq;Sub_Bombard] / [$eq;Sub_HornOfBADK] 장착 시, <하드포인트 탑재 : 무장>이 활성화되며 [공격력 +:15~0.75:%] / [방어 관통 +:20~3:%]가 증가합니다.",
      "[$eq;Sub_SpyDrone] / [$eq;Sub_FortuneOrb] / [$eq;Sub_Interceptor] 장착 시, <하드포인트 탑재 : 보조>가 활성화되며 [적중 +:3~3:%]가 증가합니다."
    ]
  }
};