export default {
  "active1": {
    "key": "active1",
    "icon": "FireShot",
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
          "rate": 1.075,
          "type": 1,
          "range": 4,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "접촉 연소 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
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
                        "base": "-10%",
                        "per": "-0.5%"
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
          "rate": 1.165,
          "type": 1,
          "range": 4,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "접촉 연소 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
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
                        "base": "-10%",
                        "per": "-0.5%"
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
          "rate": 1.255,
          "type": 1,
          "range": 4,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "접촉 연소 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
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
                        "base": "-10%",
                        "per": "-0.5%"
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
          "rate": 1.345,
          "type": 1,
          "range": 4,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "접촉 연소 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
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
                        "base": "-10%",
                        "per": "-0.5%"
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
          "rate": 1.435,
          "type": 1,
          "range": 4,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "접촉 연소 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
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
                        "base": "-10%",
                        "per": "-0.5%"
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
          "rate": 1.525,
          "type": 1,
          "range": 4,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "접촉 연소 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
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
                        "base": "-10%",
                        "per": "-0.5%"
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
          "rate": 1.615,
          "type": 1,
          "range": 4,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "접촉 연소 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
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
                        "base": "-10%",
                        "per": "-0.5%"
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
          "rate": 1.705,
          "type": 1,
          "range": 4,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "접촉 연소 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
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
                        "base": "-10%",
                        "per": "-0.5%"
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
          "rate": 1.795,
          "type": 1,
          "range": 4,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "접촉 연소 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
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
                        "base": "-10%",
                        "per": "-0.5%"
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
          "rate": 1.885,
          "type": 1,
          "range": 4,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "접촉 연소 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
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
                        "base": "-10%",
                        "per": "-0.5%"
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
    }
  },
  "active2": {
    "key": "active2",
    "icon": "WideFireShot",
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
          "rate": 0.975,
          "type": 1,
          "range": 3,
          "ap": 6,
          "grid": "56",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
          "dismiss_guard": true,
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "파이어레인 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.250000"
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
                        "base": "-25%",
                        "per": "-1.25%"
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
          "rate": 1.06,
          "type": 1,
          "range": 3,
          "ap": 6,
          "grid": "56",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
          "dismiss_guard": true,
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "파이어레인 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.250000"
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
                        "base": "-25%",
                        "per": "-1.25%"
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
          "rate": 1.145,
          "type": 1,
          "range": 3,
          "ap": 6,
          "grid": "56",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
          "dismiss_guard": true,
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "파이어레인 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.250000"
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
                        "base": "-25%",
                        "per": "-1.25%"
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
          "rate": 1.23,
          "type": 1,
          "range": 3,
          "ap": 6,
          "grid": "56",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
          "dismiss_guard": true,
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "파이어레인 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.250000"
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
                        "base": "-25%",
                        "per": "-1.25%"
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
          "rate": 1.315,
          "type": 1,
          "range": 3,
          "ap": 6,
          "grid": "4>456",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
          "dismiss_guard": true,
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "파이어레인 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.250000"
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
                        "base": "-25%",
                        "per": "-1.25%"
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
          "rate": 1.4,
          "type": 1,
          "range": 3,
          "ap": 6,
          "grid": "4>456",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
          "dismiss_guard": true,
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "파이어레인 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.250000"
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
                        "base": "-25%",
                        "per": "-1.25%"
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
          "rate": 1.485,
          "type": 1,
          "range": 3,
          "ap": 6,
          "grid": "4>456",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
          "dismiss_guard": true,
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "파이어레인 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.250000"
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
                        "base": "-25%",
                        "per": "-1.25%"
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
          "rate": 1.57,
          "type": 1,
          "range": 3,
          "ap": 6,
          "grid": "4>456",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
          "dismiss_guard": true,
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "파이어레인 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.250000"
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
                        "base": "-25%",
                        "per": "-1.25%"
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
          "rate": 1.655,
          "type": 1,
          "range": 3,
          "ap": 6,
          "grid": "4>456",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
          "dismiss_guard": true,
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "파이어레인 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.250000"
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
                        "base": "-25%",
                        "per": "-1.25%"
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
          "rate": 1.74,
          "type": 1,
          "range": 3,
          "ap": 6,
          "grid": "4>456",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_3P_Fotia_N_11",
            "count": 1
          },
          "dismiss_guard": true,
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "점화 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "40"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 40,
                        "per": 30
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "파이어레인 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.250000"
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
                        "base": "-25%",
                        "per": "-1.25%"
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
    }
  },
  "passive3": {
    "key": "passive3",
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
                    "desc": "출력 상승 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {},
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "과출력 버너 : 공격력+{0}% (3중첩)",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {},
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
                  "icon": "BuffIcon_BARRIER_PIERCE",
                  "desc": {
                    "desc": "과출력 버너 : 방어막 / 피해 감소 무시 (3중첩)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 94,
                    "penetration_force": true
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 3
            },
            {
              "on": "round",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_3P_Fotia_N_3"
                  ],
                  "stack": 3,
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
                    "desc": "과출력 버너 : 공격력+{0}% (1회)",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "round",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_3P_Fotia_N_3"
                  ],
                  "stack": 3,
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
                  "icon": "BuffIcon_BARRIER_PIERCE",
                  "desc": {
                    "desc": "과출력 버너 : 방어막 / 피해 감소 무시 (1회)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "count": 1,
                    "trigger": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 94,
                    "penetration_force": true
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            }
          ]
        }
      ]
    }
  }
};