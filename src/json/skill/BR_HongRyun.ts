export default {
  "active1": {
    "key": "active1",
    "name": "빙결 볼트",
    "icon": "IceShot",
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
          "rate": 1.135,
          "type": 2,
          "range": 4,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "빙결 볼트 : 표식 지정",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
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
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "급속 빙결 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.025000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-2.5%",
                      "per": "-0.13%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "15%",
                      "per": "0.75%"
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.23,
          "type": 2,
          "range": 4,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "빙결 볼트 : 표식 지정",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
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
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "급속 빙결 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.025000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-2.5%",
                      "per": "-0.13%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "15%",
                      "per": "0.75%"
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.325,
          "type": 2,
          "range": 4,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "빙결 볼트 : 표식 지정",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
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
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "급속 빙결 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.025000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-2.5%",
                      "per": "-0.13%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "15%",
                      "per": "0.75%"
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.42,
          "type": 2,
          "range": 4,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "빙결 볼트 : 표식 지정",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
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
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "급속 빙결 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.025000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-2.5%",
                      "per": "-0.13%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "15%",
                      "per": "0.75%"
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.515,
          "type": 2,
          "range": 4,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "빙결 볼트 : 표식 지정",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
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
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "급속 빙결 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.025000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-2.5%",
                      "per": "-0.13%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "15%",
                      "per": "0.75%"
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.61,
          "type": 2,
          "range": 4,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "빙결 볼트 : 표식 지정",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
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
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "급속 빙결 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.025000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-2.5%",
                      "per": "-0.13%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "15%",
                      "per": "0.75%"
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.705,
          "type": 2,
          "range": 4,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "빙결 볼트 : 표식 지정",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
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
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "급속 빙결 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.025000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-2.5%",
                      "per": "-0.13%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "15%",
                      "per": "0.75%"
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.8,
          "type": 2,
          "range": 4,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "빙결 볼트 : 표식 지정",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
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
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "급속 빙결 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.025000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-2.5%",
                      "per": "-0.13%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "15%",
                      "per": "0.75%"
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.895,
          "type": 2,
          "range": 4,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "빙결 볼트 : 표식 지정",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
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
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "급속 빙결 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.025000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-2.5%",
                      "per": "-0.13%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "15%",
                      "per": "0.75%"
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.99,
          "type": 2,
          "range": 4,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "빙결 볼트 : 표식 지정",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "빙결 볼트 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
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
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "급속 빙결 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.025000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-2.5%",
                      "per": "-0.13%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 볼트 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "15%",
                      "per": "0.75%"
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "급속 빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "7.5%",
                      "per": "0.38%"
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
      "빙결 볼트로 대상에게 [@,#chill:공격력 :0~0:배 냉기 피해]를 주고, 2라운드 동안 표식 / [회피 -:30~1.5:%] / [행동력 -:5~0.25:%] 감소 / [받는 피해 +:15~0.75:%] 증가 상태로 만듭니다.",
      "대상이 침수 상태면 해로운 효과가 50% 추가 적용됩니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "전장 장악",
    "icon": "Scan",
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
          "ap": 7,
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
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "전장 장악 : AP+{0}",
                    "type": 0,
                    "value": "2"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": 2,
                      "per": 0.1
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "전장 장악 : 공격력+{0}%",
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
                    "type": 1,
                    "attack": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "전장 장악 : 적중+{0}%",
                    "type": 1,
                    "value": "0.300000"
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
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "취약점 포착 : 방어 관통+{0}%",
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
                      "per": "1%"
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
              "target": 1,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "전장 장악 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "전장 장악 : 적중+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "취약점 포착 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "20%",
                      "per": "1%"
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
      "지정 아군의 [AP +:2~0.1:]를 상승시키고, 2라운드 동안 [공격력 +:20~1:%] / [적중 +:30~1.5:%] / [방어 관통 +:20~1:%]를 증가시킵니다.",
      "방어 관통 증가 효과는 중첩되지 않습니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "대 테러 지휘",
    "icon": "Command",
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
          "grid": "global",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "round",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BR_Miho_N_3",
                    "Effect_BR_Miho_N_4",
                    "Effect_BR_Miho_N_11",
                    "Effect_BR_Miho_N_12",
                    "Effect_BR_PoniesAnger_N_2",
                    "Effect_BR_PoniesAnger_N_3",
                    "Effect_BR_PoniesAnger_N_4",
                    "Effect_BR_PoniesAnger_N_11",
                    "Effect_BR_PoniesAnger_N_12",
                    "Effect_BR_PoniesAnger_N_13",
                    "Effect_BR_PoniesAnger_N_15",
                    "Effect_BR_PoniesAnger_N_18",
                    "Effect_BR_AS12TurtleDragon_N_2",
                    "Effect_BR_AS12TurtleDragon_N_3",
                    "Effect_BR_AS12TurtleDragon_N_4",
                    "Effect_BR_AS12TurtleDragon_N_11",
                    "Effect_BR_AS12TurtleDragon_N_12",
                    "Effect_BR_AS12TurtleDragon_N_13",
                    "Effect_BR_Bulgasari_N_3",
                    "Effect_BR_Bulgasari_N_4",
                    "Effect_BR_PoniesAnger_N_20"
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "대 테러 지휘 : 공격력+{0}% (몽구스 대원 효과 대상)",
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
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "대 테러 지휘 : 행동력+{0}% (몽구스 대원 효과 대상)",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "10%",
                      "per": "0.5%"
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
      "라운드 개시 시, 아군 중 몽구스 대원 ([$ch;BR_PoniesAnger] / [$ch;BR_AS12TurtleDragon] / [$ch;BR_Miho] / [$ch;BR_Bulgasari])의 스킬 효과를 받는 대상들의 [공격력 +:15~0.75:%] / [행동력 +:10~0.5:%]를 증가시킵니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "진압 대형 편성",
    "icon": "TeamDefBuff",
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
        1
      ],
      "data": [
        {
          "rate": 0,
          "type": 0,
          "range": 0,
          "ap": 0,
          "grid": "369",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "wave",
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
                0
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "진압 대형 편성 : AP+{0} (보호기)",
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
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "진압 대형 편성 : 받는 피해 {0}% 감소 (보호기)",
                    "type": 1,
                    "value": "0.100000"
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
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "진압 대형 편성 : 회피+{0}% (보호기)",
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
                    "type": 11,
                    "evade": {
                      "base": "15%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_Line",
                  "desc": {
                    "desc": "진압 대형 편성 : 행 보호 (보호기)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 50,
                    "guard": "col"
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
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
                0
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "진압 대형 편성 : 받는 피해 {0}% 감소 (보호기)",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "진압 대형 편성 : 회피+{0}% (보호기)",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "15%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_Line",
                  "desc": {
                    "desc": "진압 대형 편성 : 행 보호 (보호기)",
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
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 0,
          "type": 0,
          "range": 0,
          "ap": 0,
          "grid": "23689",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "wave",
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
                0
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "진압 대형 편성 : AP+{0} (보호기)",
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
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "진압 대형 편성 : 받는 피해 {0}% 감소 (보호기)",
                    "type": 1,
                    "value": "0.100000"
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
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "진압 대형 편성 : 회피+{0}% (보호기)",
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
                    "type": 11,
                    "evade": {
                      "base": "15%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_Line",
                  "desc": {
                    "desc": "진압 대형 편성 : 행 보호 (보호기)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 50,
                    "guard": "col"
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
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
                0
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "진압 대형 편성 : 받는 피해 {0}% 감소 (보호기)",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "진압 대형 편성 : 회피+{0}% (보호기)",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "15%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_Line",
                  "desc": {
                    "desc": "진압 대형 편성 : 행 보호 (보호기)",
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
                }
              ],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "전투 개시 시, 범위 내 보호기들의 [AP +:1~0.05:]를 증가시킵니다.",
      "라운드 개시 시, 대상들에게 [받는 피해 -:10~0.5:%] 감소 / [회피 +:15~0.5:%] 증가 / 행 보호 효과를 부여합니다.",
      "{스킬 레벨 10에서 범위가 증가}합니다."
    ]
  },
  "passive5": {
    "key": "passive5",
    "name": "정밀 저격 지시",
    "icon": "TeamAtkBuff",
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
          "grid": "F>147",
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
                0
              ],
              "role": [
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "정밀 저격 지시 : 공격력+{0}% (경장 공격/지원)",
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
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "정밀 저격 지시 : 적중+{0}% (경장 공격/지원)",
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "정밀 저격 지시 : 치명타+{0}% (경장 공격/지원)",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "정밀 저격 지시 : 방어 관통+{0}% (경장 공격/지원)",
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
      "라운드 개시 시, 후열에 배치된 아군 경장형 공격기 / 지원기의 [공격력 +:15~0.75:%] / [적중 +:20~1:%] / [치명타 +:10~0.5:%] / [방어 관통 +:20~1:%]를 증가시킵니다."
    ]
  }
};