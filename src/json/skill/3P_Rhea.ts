export default {
  "active1": {
    "key": "active1",
    "name": "호우 주의보",
    "icon": "WideLightning",
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
          "rate": 1.4,
          "type": 3,
          "range": 5,
          "ap": 10,
          "grid": "@2@45@6@8",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "50%",
                        "per": "2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "기능 오류 : 적중 / 회피 {0}% (치명타 시)",
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
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}% (부식 시)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
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
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
                      }
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 회피 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.47,
          "type": 3,
          "range": 5,
          "ap": 10,
          "grid": "@2@45@6@8",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "50%",
                        "per": "2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "기능 오류 : 적중 / 회피 {0}% (치명타 시)",
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
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}% (부식 시)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
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
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
                      }
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 회피 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.54,
          "type": 3,
          "range": 5,
          "ap": 10,
          "grid": "@2@45@6@8",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "50%",
                        "per": "2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "기능 오류 : 적중 / 회피 {0}% (치명타 시)",
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
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}% (부식 시)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
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
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
                      }
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 회피 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.61,
          "type": 3,
          "range": 5,
          "ap": 10,
          "grid": "@2@45@6@8",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "50%",
                        "per": "2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "기능 오류 : 적중 / 회피 {0}% (치명타 시)",
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
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}% (부식 시)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
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
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
                      }
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 회피 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.68,
          "type": 3,
          "range": 5,
          "ap": 10,
          "grid": "@2@45@6@8",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "50%",
                        "per": "2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "기능 오류 : 적중 / 회피 {0}% (치명타 시)",
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
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}% (부식 시)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
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
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
                      }
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 회피 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.75,
          "type": 3,
          "range": 5,
          "ap": 10,
          "grid": "@2@45@6@8",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "50%",
                        "per": "2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "기능 오류 : 적중 / 회피 {0}% (치명타 시)",
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
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}% (부식 시)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
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
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
                      }
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 회피 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.82,
          "type": 3,
          "range": 5,
          "ap": 10,
          "grid": "@2@45@6@8",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "50%",
                        "per": "2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "기능 오류 : 적중 / 회피 {0}% (치명타 시)",
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
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}% (부식 시)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
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
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
                      }
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 회피 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.89,
          "type": 3,
          "range": 5,
          "ap": 10,
          "grid": "@2@45@6@8",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "50%",
                        "per": "2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "기능 오류 : 적중 / 회피 {0}% (치명타 시)",
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
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}% (부식 시)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
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
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
                      }
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 회피 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.96,
          "type": 3,
          "range": 5,
          "ap": 10,
          "grid": "@2@45@6@8",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "50%",
                        "per": "2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "기능 오류 : 적중 / 회피 {0}% (치명타 시)",
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
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}% (부식 시)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
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
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
                      }
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 회피 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.03,
          "type": 3,
          "range": 5,
          "ap": 10,
          "grid": "@1@2@3@45@6@7@8@9",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "50%",
                        "per": "2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "기능 오류 : 적중 / 회피 {0}% (치명타 시)",
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
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}% (부식 시)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
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
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
                      }
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "급속 부식 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-30%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
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
                    "desc": "기능 오류 : 회피 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        }
      ]
    },
    "desc": [
      "지정 범위에 있는 대상들을 침수 상태로 만들며 [@,#thunder:공격력 :0~0:배 전기 피해]를 줍니다.",
      "선택 지점 주변에는 25% 피해만 적용됩니다.",
      "치명타 시, 2라운드 동안 [적중 / 회피 -:30~1.5:%]가 감소하며, 부식 상태면 [피해량 +:30~1.5:%]가 증가합니다.",
      "{스킬 레벨 10에서 범위가 증가합니다.}",
      "침수 : [#chill:냉기 저항 -:50~2.5:%] / [#thunder:전기 저항 -:50~2.5:%] / [#fire:화염 저항 +:50~2.5:%]"
    ]
  },
  "active2": {
    "key": "active2",
    "name": "해저드 스톰",
    "icon": "WideIceShot",
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
          "rate": 0.7,
          "type": 2,
          "range": 5,
          "ap": 10,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "금속 열피로 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "금속 열피로 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "해저드 스톰 : 추가 화염 피해+{0}%",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "100%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
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
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해 (부식 시)",
                    "type": 1,
                    "value": "0.330000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "33%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "30%",
                      "per": "3%"
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
          "rate": 0.735,
          "type": 2,
          "range": 5,
          "ap": 10,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "금속 열피로 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "금속 열피로 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "해저드 스톰 : 추가 화염 피해+{0}%",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "100%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
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
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해 (부식 시)",
                    "type": 1,
                    "value": "0.330000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "33%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "30%",
                      "per": "3%"
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
          "rate": 0.77,
          "type": 2,
          "range": 5,
          "ap": 10,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "금속 열피로 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "금속 열피로 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "해저드 스톰 : 추가 화염 피해+{0}%",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "100%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
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
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해 (부식 시)",
                    "type": 1,
                    "value": "0.330000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "33%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "30%",
                      "per": "3%"
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
          "rate": 0.805,
          "type": 2,
          "range": 5,
          "ap": 10,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "금속 열피로 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "금속 열피로 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "해저드 스톰 : 추가 화염 피해+{0}%",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "100%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
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
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해 (부식 시)",
                    "type": 1,
                    "value": "0.330000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "33%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "30%",
                      "per": "3%"
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
          "rate": 0.84,
          "type": 2,
          "range": 5,
          "ap": 10,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "금속 열피로 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "금속 열피로 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "해저드 스톰 : 추가 화염 피해+{0}%",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "100%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
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
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해 (부식 시)",
                    "type": 1,
                    "value": "0.330000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "33%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "30%",
                      "per": "3%"
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
          "rate": 0.875,
          "type": 2,
          "range": 5,
          "ap": 10,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "금속 열피로 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "금속 열피로 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "해저드 스톰 : 추가 화염 피해+{0}%",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "100%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
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
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해 (부식 시)",
                    "type": 1,
                    "value": "0.330000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "33%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "30%",
                      "per": "3%"
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
          "rate": 0.91,
          "type": 2,
          "range": 5,
          "ap": 10,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "금속 열피로 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "금속 열피로 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "해저드 스톰 : 추가 화염 피해+{0}%",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "100%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
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
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해 (부식 시)",
                    "type": 1,
                    "value": "0.330000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "33%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "30%",
                      "per": "3%"
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
          "rate": 0.945,
          "type": 2,
          "range": 5,
          "ap": 10,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "금속 열피로 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "금속 열피로 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "해저드 스톰 : 추가 화염 피해+{0}%",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "100%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
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
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해 (부식 시)",
                    "type": 1,
                    "value": "0.330000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "33%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "30%",
                      "per": "3%"
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
          "rate": 0.98,
          "type": 2,
          "range": 5,
          "ap": 10,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "금속 열피로 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "금속 열피로 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "해저드 스톰 : 추가 화염 피해+{0}%",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "100%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
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
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해 (부식 시)",
                    "type": 1,
                    "value": "0.330000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "33%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "30%",
                      "per": "3%"
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
          "rate": 1.015,
          "type": 2,
          "range": 5,
          "ap": 10,
          "grid": "fill",
          "target_ground": true,
          "summon": null,
          "use": null,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "금속 열피로 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "금속 열피로 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "해저드 스톰 : 추가 화염 피해+{0}%",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "100%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
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
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해 (부식 시)",
                    "type": 1,
                    "value": "0.330000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "33%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "금속 열피로 : 피해 감소 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 36,
                      "target": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_3P_Daphne_N_1",
                    "Effect_3P_Daphne_N_2",
                    "Effect_3P_Daphne_N_11"
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
                    "desc": "내부 파괴 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "30%",
                      "per": "3%"
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
      "지정 범위에 [@,#chill,#fire:공격력 :0~0:배 냉기 피해와 추가 화염 피해]를 주며, 2라운드 동안 [방어력 -:50~2.5:%]가 감소하고 [받는 피해 +:15~0.75:%]가 증가합니다.",
      "치명타 시, 대상의 피해 감소 효과를 해제하며, 부식 상태면 [공격력 :33~3:% 추가 고정 피해]를 줍니다.",
      "{스킬 레벨 10에서 범위가 증가합니다.}"
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "느긋함",
    "icon": "SelfSpdDeBuff",
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
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    13
                  ],
                  "attr": 0
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
                    "desc": "느긋함 : 공격력+{0}%",
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "느긋함 : 치명타+{0}%",
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
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "느긋함 : 적중+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "느긋함 : 행동력 강화 해제",
                    "type": 0,
                    "value": "13"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 13,
                      "target": 0
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
      "라운드 개시 시, 자신에게 행동력 증가 효과가 걸려있으면 해당 효과를 해제하고 [공격력 +:15~0.75:%] / [적중 +:30~1.5:%] / [치명타 +:10~0.5:%]가 증가합니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "기상 최적화",
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
                    "desc": "기상 최적화 : AP+{0} (기동)",
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
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "기상 최적화 : 행동력+{0}% (기동)",
                    "type": 1,
                    "value": "0.050000"
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
                      "base": "5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEBUFF_PERDOWN",
                  "desc": {
                    "desc": "기상 최적화 : 모든 저항+{0}% (기동)",
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
                    "type": 91,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "25%",
                        "per": "1.25%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wave",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "기상 최적화 : 행동력+{0}% (기동)",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "기상 최적화 : 화염 저항+{0}% (기동)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "25%",
                        "per": "1.25%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ICERES_UP",
                  "desc": {
                    "desc": "기상 최적화 : 냉기 저항+{0}% (기동)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "25%",
                        "per": "1.25%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_UP",
                  "desc": {
                    "desc": "기상 최적화 : 전기 저항+{0}% (기동)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "25%",
                        "per": "1.25%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEBUFF_PERDOWN",
                  "desc": {
                    "desc": "기상 최적화 : 효과 저항+{0}% (기동)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 91,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "25%",
                        "per": "1.25%"
                      }
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
                    "desc": "기상 최적화 : AP+{0} (기동)",
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
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "기상 최적화 : 행동력+{0}% (기동)",
                    "type": 1,
                    "value": "0.050000"
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
                      "base": "5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEBUFF_PERDOWN",
                  "desc": {
                    "desc": "기상 최적화 : 모든 저항+{0}% (기동)",
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
                    "type": 91,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "25%",
                        "per": "1.25%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wave",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "기상 최적화 : 행동력+{0}% (기동)",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "기상 최적화 : 화염 저항+{0}% (기동)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "25%",
                        "per": "1.25%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ICERES_UP",
                  "desc": {
                    "desc": "기상 최적화 : 냉기 저항+{0}% (기동)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "25%",
                        "per": "1.25%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_UP",
                  "desc": {
                    "desc": "기상 최적화 : 전기 저항+{0}% (기동)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "25%",
                        "per": "1.25%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEBUFF_PERDOWN",
                  "desc": {
                    "desc": "기상 최적화 : 효과 저항+{0}% (기동)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 91,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "25%",
                        "per": "1.25%"
                      }
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
      "전투 개시 시, 인접한 기동형 아군의 [AP +:1~0.05:] / [행동력 +:5~0.5:%] / [#all:모든 저항 +:25~1.25:%]가 증가합니다.",
      "{스킬 레벨 10에서 범위가 증가합니다.}"
    ]
  },
  "passive5": {
    "key": "passive5",
    "name": "강운",
    "icon": "SelfAtkBuff",
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
          "range": 0,
          "ap": 0,
          "grid": "self",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 2,
          "buffs": [
            {
              "on": "attack",
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
                    "desc": "강운 : 공격력+{0}% (확률 발동)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "100%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "강운 : 피해 최소화 (확률 발동)",
                    "type": 0,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
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
              "on": "attacked",
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
                    "desc": "강운 : 피해 최소화",
                    "type": 1,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": "damaged"
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
            }
          ]
        },
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
          "buff_rate": 3,
          "buffs": [
            {
              "on": "attack",
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
                    "desc": "강운 : 공격력+{0}% (확률 발동)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "100%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "강운 : 피해 최소화 (확률 발동)",
                    "type": 0,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
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
              "on": "attacked",
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
                    "desc": "강운 : 피해 최소화",
                    "type": 1,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": "damaged"
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
            }
          ]
        },
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
          "buff_rate": 4,
          "buffs": [
            {
              "on": "attack",
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
                    "desc": "강운 : 공격력+{0}% (확률 발동)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "100%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "강운 : 피해 최소화 (확률 발동)",
                    "type": 0,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
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
              "on": "attacked",
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
                    "desc": "강운 : 피해 최소화",
                    "type": 1,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": "damaged"
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
            }
          ]
        },
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
          "buff_rate": 5,
          "buffs": [
            {
              "on": "attack",
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
                    "desc": "강운 : 공격력+{0}% (확률 발동)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "100%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "강운 : 피해 최소화 (확률 발동)",
                    "type": 0,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
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
              "on": "attacked",
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
                    "desc": "강운 : 피해 최소화",
                    "type": 1,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": "damaged"
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
            }
          ]
        },
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
          "buff_rate": 6,
          "buffs": [
            {
              "on": "attack",
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
                    "desc": "강운 : 공격력+{0}% (확률 발동)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "100%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "강운 : 피해 최소화 (확률 발동)",
                    "type": 0,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
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
              "on": "attacked",
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
                    "desc": "강운 : 피해 최소화",
                    "type": 1,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": "damaged"
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
            }
          ]
        },
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
          "buff_rate": 7,
          "buffs": [
            {
              "on": "attack",
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
                    "desc": "강운 : 공격력+{0}% (확률 발동)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "100%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "강운 : 피해 최소화 (확률 발동)",
                    "type": 0,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
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
              "on": "attacked",
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
                    "desc": "강운 : 피해 최소화",
                    "type": 1,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": "damaged"
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
            }
          ]
        },
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
          "buff_rate": 8,
          "buffs": [
            {
              "on": "attack",
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
                    "desc": "강운 : 공격력+{0}% (확률 발동)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "100%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "강운 : 피해 최소화 (확률 발동)",
                    "type": 0,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
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
              "on": "attacked",
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
                    "desc": "강운 : 피해 최소화",
                    "type": 1,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": "damaged"
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
            }
          ]
        },
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
          "buff_rate": 9,
          "buffs": [
            {
              "on": "attack",
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
                    "desc": "강운 : 공격력+{0}% (확률 발동)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "100%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "강운 : 피해 최소화 (확률 발동)",
                    "type": 0,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
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
              "on": "attacked",
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
                    "desc": "강운 : 피해 최소화",
                    "type": 1,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": "damaged"
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
            }
          ]
        },
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
          "buff_rate": 10,
          "buffs": [
            {
              "on": "attack",
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
                    "desc": "강운 : 공격력+{0}% (확률 발동)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "100%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "강운 : 피해 최소화 (확률 발동)",
                    "type": 0,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
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
              "on": "attacked",
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
                    "desc": "강운 : 피해 최소화",
                    "type": 1,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": "damaged"
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
            }
          ]
        },
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
          "buff_rate": 11,
          "buffs": [
            {
              "on": "attack",
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
                    "desc": "강운 : 공격력+{0}% (확률 발동)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "100%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "강운 : 피해 최소화 (확률 발동)",
                    "type": 0,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
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
              "on": "attacked",
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
                    "desc": "강운 : 피해 최소화",
                    "type": 1,
                    "value": "999999"
                  },
                  "attr": 0,
                  "erase": {
                    "until": "damaged"
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
            }
          ]
        }
      ]
    },
    "desc": [
      "공격할 때 가끔 공격력이 대폭 증가하며, 공격 받을 땐 드물게 최소 피해만 받습니다.",
      "스킬 레벨이 오를수록 발동 확률이 증가합니다."
    ]
  }
};