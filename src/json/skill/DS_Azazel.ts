export default {
  "active1": {
    "key": "active1",
    "name": "심판",
    "icon": "WideBeamShot",
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
          "rate": 0.95,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
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
                    "desc": "심판 : 표식 설정",
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
                    "desc": "심판 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                    "Effect_DS_Azazel_N_14"
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
                    "desc": "심판 (재림) : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
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
          "rate": 1.03,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
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
                    "desc": "심판 : 표식 설정",
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
                    "desc": "심판 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                    "Effect_DS_Azazel_N_14"
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
                    "desc": "심판 (재림) : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
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
          "rate": 1.11,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
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
                    "desc": "심판 : 표식 설정",
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
                    "desc": "심판 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                    "Effect_DS_Azazel_N_14"
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
                    "desc": "심판 (재림) : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
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
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
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
                    "desc": "심판 : 표식 설정",
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
                    "desc": "심판 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                    "Effect_DS_Azazel_N_14"
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
                    "desc": "심판 (재림) : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
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
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
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
                    "desc": "심판 : 표식 설정",
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
                    "desc": "심판 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                    "Effect_DS_Azazel_N_14"
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
                    "desc": "심판 (재림) : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
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
          "rate": 1.35,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
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
                    "desc": "심판 : 표식 설정",
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
                    "desc": "심판 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                    "Effect_DS_Azazel_N_14"
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
                    "desc": "심판 (재림) : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
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
          "rate": 1.43,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
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
                    "desc": "심판 : 표식 설정",
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
                    "desc": "심판 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                    "Effect_DS_Azazel_N_14"
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
                    "desc": "심판 (재림) : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
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
          "rate": 1.51,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
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
                    "desc": "심판 : 표식 설정",
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
                    "desc": "심판 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                    "Effect_DS_Azazel_N_14"
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
                    "desc": "심판 (재림) : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
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
          "rate": 1.59,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
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
                    "desc": "심판 : 표식 설정",
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
                    "desc": "심판 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                    "Effect_DS_Azazel_N_14"
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
                    "desc": "심판 (재림) : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
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
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
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
                    "desc": "심판 : 표식 설정",
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
                    "desc": "심판 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                    "Effect_DS_Azazel_N_14"
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
                    "desc": "심판 (재림) : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "심판 (재림) : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
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
      "지정 범위에 [@:공격력 :0~0:배 피해]를 주고, 2라운드 동안 대상에게 표식 / [받는 피해 +:10~0.5:%] 증가 / [공격력 -:10~0.5:%] / [치명타 -:10~0.5:%] 감소 효과를 줍니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "수호 천사",
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
          "ap": 9,
          "grid": "2468",
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_DAMAGE_ABSORB",
                  "desc": {
                    "desc": "수호 천사 : 방어막+{0}",
                    "type": 0,
                    "value": "50"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 38,
                    "barrier": {
                      "base": 50,
                      "per": 50
                    }
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "수호 천사 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
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
                  "icon": "BuffIcon_DEF_UP",
                  "desc": {
                    "desc": "수호 천사 : 방어력+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "15%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "수호 천사 : 적중+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "15%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "수호 천사 : 회피+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "15%",
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
          "rate": 0,
          "type": 0,
          "range": 0,
          "ap": 9,
          "grid": "around",
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_DAMAGE_ABSORB",
                  "desc": {
                    "desc": "수호 천사 : 방어막+{0}",
                    "type": 0,
                    "value": "50"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 38,
                    "barrier": {
                      "base": 50,
                      "per": 50
                    }
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "수호 천사 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
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
                  "icon": "BuffIcon_DEF_UP",
                  "desc": {
                    "desc": "수호 천사 : 방어력+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "15%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "수호 천사 : 적중+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "15%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "수호 천사 : 회피+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "15%",
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
      "2라운드 동안 주변 아군에게 [방어막 +:50~50:]를 부여하며, [공격력 +:15~0.75:%] / [방어력 +:15~1:%] / [적중 +:15~1:%] / [회피 +:15~1:%]를 증가시킵니다.",
      "{스킬 레벨 10에서 범위가 증가}합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "신의 가호",
    "icon": "Barrier",
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
                  "icon": "BuffIcon_DAMAGE_ABSORB",
                  "desc": {
                    "desc": "신의 가호 : 방어막+{0}",
                    "type": 0,
                    "value": "60"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 38,
                    "barrier": {
                      "base": 60,
                      "per": 60
                    }
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "신의 가호 : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "20%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_Side",
                  "desc": {
                    "desc": "신의 가호 : 열 보호",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 75,
                    "guard": "row"
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_DamageAmp_Me",
                  "desc": {
                    "desc": "신의 가호 : 내 HP% 적을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 80,
                    "damage_by_hp": {
                      "target": "self",
                      "damage": {
                        "base": "20%",
                        "per": "1%"
                      }
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
                    "Effect_DS_Azazel_N_14"
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
                  "icon": "BuffIcon_DAMAGE_ABSORB",
                  "desc": {
                    "desc": "신의 가호 (재림) : 방어막+{0}",
                    "type": 0,
                    "value": "90"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 38,
                    "barrier": {
                      "base": 90,
                      "per": 90
                    }
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "신의 가호 (재림) : 받는 피해 {0}% 감소",
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
      "라운드 개시 시, [방어막 +:60~60:] / [받는 피해 -:20~2:%] 감소 / 열 보호 효과가 적용됩니다.",
      "<재림> 상태인 경우, 효과가 50% 증가합니다.",
      "자신의 HP%가 낮을수록 적에게 주는 [피해량 +:20~1:%]가 증가합니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "재림",
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
          "grid": "global",
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
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_RESSURRECT",
                  "desc": {
                    "desc": "재림 : {0} HP 전투 속행 (1회/해제 불가)",
                    "type": 0,
                    "value": "120"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 82,
                    "revive": {
                      "base": 120,
                      "per": 80
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "재림 : 전투 속행 라운드 피해 최소화",
                    "type": 0,
                    "value": "9999999"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 34,
                    "damage_minimize": {
                      "base": 9999999,
                      "per": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "재림 : 행동력+{0}% (전투 속행 시)",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEBUFF_PERDOWN",
                  "desc": {
                    "desc": "재림 : 효과 저항+{0}% (전투 속행 시)",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 91,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "50%",
                        "per": "2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_Char",
                  "desc": {
                    "desc": "재림 : 모든 아군 보호 (전투 속행 시)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 76,
                    "guard": "target"
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "revive",
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
                    "desc": "재림 : 피해 최소화",
                    "type": 0,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 34,
                    "damage_minimize": {
                      "base": 999999,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            },
            {
              "on": "revive",
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
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "재림 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEBUFF_PERDOWN",
                  "desc": {
                    "desc": "재림 : 효과 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 91,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "50%",
                        "per": "2.5%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "revive",
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
                    "desc": "재림 : 모든 아군 지정 보호",
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
                }
              ],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "전투 개시 시, [:120~80:HP로 전투 속행] 효과가 적용됩니다.",
      "전투 속행 발동시, [행동력 +:20~1:%] / [효과 저항 +:50~2.5:%]가 증가하며 <심판>과 <신의 가호> 효과가 50% 증가합니다.",
      "전투 속행이 발동한 라운드에는 최소 피해만 입으며, 모든 아군을 지정 보호합니다."
    ]
  },
  "passive5": {
    "key": "passive5",
    "name": "성전",
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
          "grid": "2468",
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
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_RESSURRECT",
                  "desc": {
                    "desc": "성전 : {0} HP 전투 속행 (1회)",
                    "type": 0,
                    "value": "60"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 82,
                    "revive": {
                      "base": 60,
                      "per": 40
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_All",
                  "desc": {
                    "desc": "성전 : 피해 무효화 {0}회",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 33,
                    "damage_immune": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_Char",
                  "desc": {
                    "desc": "성전 : 지정 대상 보호 (HP 50% 이하)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 76,
                    "guard": "target"
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
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
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_All",
                  "desc": {
                    "desc": "성전 : 피해 무효화 {0}회",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 33,
                    "damage_immune": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 1
            },
            {
              "on": "round",
              "if": {
                "hp<=": {
                  "target": "target",
                  "value": "50%"
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
                  "icon": "BuffIcon_DEF_Char",
                  "desc": {
                    "desc": "성전 : 지정 대상 보호",
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
          "grid": "around",
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
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_RESSURRECT",
                  "desc": {
                    "desc": "성전 : {0} HP 전투 속행 (1회)",
                    "type": 0,
                    "value": "60"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 82,
                    "revive": {
                      "base": 60,
                      "per": 40
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_All",
                  "desc": {
                    "desc": "성전 : 피해 무효화 {0}회",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 33,
                    "damage_immune": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_Char",
                  "desc": {
                    "desc": "성전 : 지정 대상 보호 (HP 50% 이하)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 76,
                    "guard": "target"
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
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
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_All",
                  "desc": {
                    "desc": "성전 : 피해 무효화 {0}회",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 33,
                    "damage_immune": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 1
            },
            {
              "on": "round",
              "if": {
                "hp<=": {
                  "target": "target",
                  "value": "50%"
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
                  "icon": "BuffIcon_DEF_Char",
                  "desc": {
                    "desc": "성전 : 지정 대상 보호",
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
                }
              ],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "전투 개시 시, 인접한 아군에게 [:60~40:HP로 전투 속행] / [피해 무효화 :1~0:회] 효과를 부여합니다.",
      "라운드 개시 시, HP가 50% 이하인 대상을 지정 보호합니다.",
      "{스킬 레벨 10에서 범위가 증가}합니다."
    ]
  }
};