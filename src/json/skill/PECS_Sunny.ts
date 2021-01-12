export default {
  "active1": {
    "key": "active1",
    "name": "차크람 블레이드",
    "icon": "SwordAttk",
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
          "rate": 1.27,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_PROVOKE",
                  "desc": {
                    "desc": "차크람 블레이드 : 대상 도발 (써니)",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 74,
                    "provoke": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "현혹 : 공격력 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "현혹 : 적중 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "정열의 차크람 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "-15%",
                        "per": "-0.75%"
                      }
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
                    "Effect_PECS_Ignis_N_2"
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
                    "desc": "인화물 폭발 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "50%",
                      "per": "0%"
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.38,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_PROVOKE",
                  "desc": {
                    "desc": "차크람 블레이드 : 대상 도발 (써니)",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 74,
                    "provoke": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "현혹 : 공격력 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "현혹 : 적중 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "정열의 차크람 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "-15%",
                        "per": "-0.75%"
                      }
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
                    "Effect_PECS_Ignis_N_2"
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
                    "desc": "인화물 폭발 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "50%",
                      "per": "0%"
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.49,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_PROVOKE",
                  "desc": {
                    "desc": "차크람 블레이드 : 대상 도발 (써니)",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 74,
                    "provoke": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "현혹 : 공격력 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "현혹 : 적중 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "정열의 차크람 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "-15%",
                        "per": "-0.75%"
                      }
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
                    "Effect_PECS_Ignis_N_2"
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
                    "desc": "인화물 폭발 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "50%",
                      "per": "0%"
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.6,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_PROVOKE",
                  "desc": {
                    "desc": "차크람 블레이드 : 대상 도발 (써니)",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 74,
                    "provoke": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "현혹 : 공격력 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "현혹 : 적중 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "정열의 차크람 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "-15%",
                        "per": "-0.75%"
                      }
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
                    "Effect_PECS_Ignis_N_2"
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
                    "desc": "인화물 폭발 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "50%",
                      "per": "0%"
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.71,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_PROVOKE",
                  "desc": {
                    "desc": "차크람 블레이드 : 대상 도발 (써니)",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 74,
                    "provoke": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "현혹 : 공격력 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "현혹 : 적중 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "정열의 차크람 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "-15%",
                        "per": "-0.75%"
                      }
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
                    "Effect_PECS_Ignis_N_2"
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
                    "desc": "인화물 폭발 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "50%",
                      "per": "0%"
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.82,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_PROVOKE",
                  "desc": {
                    "desc": "차크람 블레이드 : 대상 도발 (써니)",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 74,
                    "provoke": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "현혹 : 공격력 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "현혹 : 적중 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "정열의 차크람 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "-15%",
                        "per": "-0.75%"
                      }
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
                    "Effect_PECS_Ignis_N_2"
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
                    "desc": "인화물 폭발 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "50%",
                      "per": "0%"
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.93,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_PROVOKE",
                  "desc": {
                    "desc": "차크람 블레이드 : 대상 도발 (써니)",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 74,
                    "provoke": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "현혹 : 공격력 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "현혹 : 적중 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "정열의 차크람 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "-15%",
                        "per": "-0.75%"
                      }
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
                    "Effect_PECS_Ignis_N_2"
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
                    "desc": "인화물 폭발 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "50%",
                      "per": "0%"
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.04,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_PROVOKE",
                  "desc": {
                    "desc": "차크람 블레이드 : 대상 도발 (써니)",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 74,
                    "provoke": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "현혹 : 공격력 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "현혹 : 적중 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "정열의 차크람 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "-15%",
                        "per": "-0.75%"
                      }
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
                    "Effect_PECS_Ignis_N_2"
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
                    "desc": "인화물 폭발 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "50%",
                      "per": "0%"
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.15,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_PROVOKE",
                  "desc": {
                    "desc": "차크람 블레이드 : 대상 도발 (써니)",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 74,
                    "provoke": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "현혹 : 공격력 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "현혹 : 적중 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "정열의 차크람 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "-15%",
                        "per": "-0.75%"
                      }
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
                    "Effect_PECS_Ignis_N_2"
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
                    "desc": "인화물 폭발 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "50%",
                      "per": "0%"
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.26,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_PROVOKE",
                  "desc": {
                    "desc": "차크람 블레이드 : 대상 도발 (써니)",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 74,
                    "provoke": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "현혹 : 공격력 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "현혹 : 적중 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "정열의 차크람 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "-15%",
                        "per": "-0.75%"
                      }
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
                    "Effect_PECS_Ignis_N_2"
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
                    "desc": "인화물 폭발 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "50%",
                      "per": "0%"
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "차크람 블레이드로 [@,#fire:공격력 :0~0:배 화염 피해]를 주고, 2라운드 동안 대상을 도발 / [공격력 -:10~0.5:%] / [적중 -:20~1:%] / [#fire:화염 저항 -:15~0.75:%] 감소 상태로 만듭니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "전격등장 타이거!",
    "icon": "SelfSpdBuff",
    "target": "team",
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
          "rate": 0,
          "type": 0,
          "range": 4,
          "ap": 7,
          "grid": "single",
          "target_ground": true,
          "summon": {
            "char": "SUMMON_SU_HoloTiger_N",
            "lv": 1
          },
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 0,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "전격등장 타이거! : 홀로그램 타이거 소환",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "0%"
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
          "range": 4,
          "ap": 6,
          "grid": "single",
          "target_ground": true,
          "summon": {
            "char": "SUMMON_SU_HoloTiger_N",
            "lv": 3
          },
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 0,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "전격등장 타이거! : 홀로그램 타이거 소환",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "0%"
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
          "range": 4,
          "ap": 6,
          "grid": "single",
          "target_ground": true,
          "summon": {
            "char": "SUMMON_SU_HoloTiger_N",
            "lv": 7
          },
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 0,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "전격등장 타이거! : 홀로그램 타이거 소환",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "0%"
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
          "range": 4,
          "ap": 6,
          "grid": "single",
          "target_ground": true,
          "summon": {
            "char": "SUMMON_SU_HoloTiger_N",
            "lv": 13
          },
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 0,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "전격등장 타이거! : 홀로그램 타이거 소환",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "0%"
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
          "range": 4,
          "ap": 6,
          "grid": "single",
          "target_ground": true,
          "summon": {
            "char": "SUMMON_SU_HoloTiger_N",
            "lv": 21
          },
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 0,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "전격등장 타이거! : 홀로그램 타이거 소환",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "0%"
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
          "range": 4,
          "ap": 6,
          "grid": "single",
          "target_ground": true,
          "summon": {
            "char": "SUMMON_SU_HoloTiger_N",
            "lv": 32
          },
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 0,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "전격등장 타이거! : 홀로그램 타이거 소환",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "0%"
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
          "range": 4,
          "ap": 6,
          "grid": "single",
          "target_ground": true,
          "summon": {
            "char": "SUMMON_SU_HoloTiger_N",
            "lv": 45
          },
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 0,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "전격등장 타이거! : 홀로그램 타이거 소환",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "0%"
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
          "range": 4,
          "ap": 6,
          "grid": "single",
          "target_ground": true,
          "summon": {
            "char": "SUMMON_SU_HoloTiger_N",
            "lv": 60
          },
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 0,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "전격등장 타이거! : 홀로그램 타이거 소환",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "0%"
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
          "range": 4,
          "ap": 6,
          "grid": "single",
          "target_ground": true,
          "summon": {
            "char": "SUMMON_SU_HoloTiger_N",
            "lv": 77
          },
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 0,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "전격등장 타이거! : 홀로그램 타이거 소환",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "0%"
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
          "range": 4,
          "ap": 5,
          "grid": "single",
          "target_ground": true,
          "summon": {
            "char": "SUMMON_SU_HoloTiger_N2",
            "lv": 99
          },
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 0,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "전격등장 타이거! : 홀로그램 타이거 소환",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
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
      "지정한 빈 아군 영역에 9라운드 동안 유지되며, 피격 시 파괴되는 홀로그램 타이거를 소환합니다. [최대 :F1.1~0.1:마리]",
      "홀로그램 타이거의 스킬 적중 시, 범위 내 적의 [적중 -:20~0:%]를 감소시키며 자신을 표식으로 지정합니다.",
      "{스킬 레벨이 높아질수록 소모 AP가 감소}하며, {스킬 레벨 10에서 소환 가능한 수가 1 증가}합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "라이브 서커스",
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
        0
      ],
      "data": [
        {
          "rate": 0,
          "type": 0,
          "range": 0,
          "ap": 0,
          "grid": "248",
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
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_Char",
                  "desc": {
                    "desc": "관객 보호 : 지정 대상 보호 (공격기/지원기)",
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
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "라이브 서커스 : 행동력+{0}% (스킬 사용/회피 시)",
                    "type": 1,
                    "value": "0.005000"
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
                      "base": "0.5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "라이브 서커스 : 회피+{0}% (자신)",
                    "type": 1,
                    "value": "0.350000"
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
                      "base": "35%",
                      "per": "5%"
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "라이브 서커스 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.005000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "0.5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "evade",
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
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "라이브 서커스 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.005000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "0.5%",
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
      "라운드 개시 시, 범위 내 공격기 / 지원기를 지정 보호하며 자신의 [회피 +:35~5:%]가 증가합니다.",
      "[$ch;PECS_Sunny]의 공격이 적중하거나 적의 공격을 회피하면 2라운드 동안 범위 내 아군의 [행동력 +:0.5~0.5:%]가 증가합니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "긍정적인 사고방식",
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
          "grid": "self",
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
                    "desc": "긍정적인 사고방식 : {0}HP 전투 속행",
                    "type": 0,
                    "value": "60"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 82,
                    "revive": {
                      "base": 60,
                      "per": 60
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "긍정적인 사고방식 : 회피+{0}% (기본 능력 디버프 시)",
                    "type": 1,
                    "value": "0.020000"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "2%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "긍정적인 사고방식 : 받는 피해 {0}% 감소 (기본 능력 디버프 시)",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 36,
                    "damage_reduce": {
                      "base": "15%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEBUFF_PERDOWN",
                  "desc": {
                    "desc": "긍정적인 사고방식 : 효과 저항+{0}% (기본 능력 디버프 시)",
                    "type": 1,
                    "value": "0.150000"
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
                        "base": "15%",
                        "per": "3%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
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
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "라이브 서커스 : 회피+{0}%",
                    "type": 1,
                    "value": "0.350000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "35%",
                      "per": "5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attacked",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    1,
                    3,
                    5,
                    7,
                    9,
                    11,
                    13,
                    15,
                    17,
                    19
                  ],
                  "attr": 1
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
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "긍정적인 사고방식 : 회피+{0}%",
                    "type": 1,
                    "value": "0.020000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "2%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attacked",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    1,
                    3,
                    5,
                    7,
                    9,
                    11,
                    13,
                    15,
                    17,
                    19
                  ],
                  "attr": 1
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
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "긍정적인 사고방식 : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "15%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attacked",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    1,
                    3,
                    5,
                    7,
                    9,
                    11,
                    13,
                    15,
                    17,
                    19
                  ],
                  "attr": 1
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
                  "icon": "BuffIcon_DEBUFF_PERDOWN",
                  "desc": {
                    "desc": "긍정적인 사고방식 : 효과 저항+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 91,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "15%",
                        "per": "3%"
                      }
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
      "전투 개시 시, [:60~60:HP로 전투 속행] 효과가 적용됩니다.",
      "공격 받을 때, 기본 능력치를 감소시키는 해로운 효과가 적용된 상태일 경우, 2라운드 동안 [회피 +:2~2:%] / [효과 저항 +:15~3:%]가 증가하며 [받는 피해 -:15~2:%]가 감소합니다.",
      "해당 효과들은 중첩되지 않습니다."
    ]
  }
};