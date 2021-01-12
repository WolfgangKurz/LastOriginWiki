export default {
  "active1": {
    "key": "active1",
    "name": "화시",
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
          "rate": 1.27,
          "type": 1,
          "range": 4,
          "ap": 5,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "화시 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.200000"
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
                        "base": "-20%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "화시 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    78,
                    87
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
          "rate": 1.38,
          "type": 1,
          "range": 4,
          "ap": 5,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "화시 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.200000"
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
                        "base": "-20%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "화시 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    78,
                    87
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
          "rate": 1.49,
          "type": 1,
          "range": 4,
          "ap": 5,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "화시 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.200000"
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
                        "base": "-20%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "화시 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    78,
                    87
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
          "rate": 1.6,
          "type": 1,
          "range": 4,
          "ap": 5,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "화시 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.200000"
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
                        "base": "-20%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "화시 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    78,
                    87
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
          "rate": 1.71,
          "type": 1,
          "range": 4,
          "ap": 5,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "화시 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.200000"
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
                        "base": "-20%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "화시 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    78,
                    87
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
          "type": 1,
          "range": 4,
          "ap": 5,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "화시 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.200000"
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
                        "base": "-20%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "화시 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    78,
                    87
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
          "rate": 1.93,
          "type": 1,
          "range": 4,
          "ap": 5,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "화시 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.200000"
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
                        "base": "-20%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "화시 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    78,
                    87
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
          "rate": 2.04,
          "type": 1,
          "range": 4,
          "ap": 5,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "화시 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.200000"
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
                        "base": "-20%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "화시 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    78,
                    87
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
          "rate": 2.15,
          "type": 1,
          "range": 4,
          "ap": 5,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "화시 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.200000"
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
                        "base": "-20%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "화시 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    78,
                    87
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
          "rate": 2.26,
          "type": 1,
          "range": 4,
          "ap": 5,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "화시 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.200000"
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
                        "base": "-20%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "화시 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    78,
                    87
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "화시 : 화염 피해량+{0}%",
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
      "대상에게 [@,#fire:공격력 :0~0:배 화염 피해]를 주고, 2라운드 동안 [#fire:화염 저항 -:20~1:%] / [방어력 -:20~1:%] 감소 효과를 줍니다.",
      "대상이 표식 / 이동 불가 상태라면 [#fire:추가 화염 피해 +:20~1:%]를 줍니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "개화",
    "icon": "AntiArmorShot",
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
          "rate": 2.1,
          "type": 0,
          "range": 5,
          "ap": 9,
          "grid": "@2@45@6@8",
          "target_ground": false,
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "감전 : AP {0}",
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
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "개화 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "100%",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "감전 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 1
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
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
        },
        {
          "rate": 2.285,
          "type": 0,
          "range": 5,
          "ap": 9,
          "grid": "@2@45@6@8",
          "target_ground": false,
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "감전 : AP {0}",
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
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "개화 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "100%",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "감전 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 1
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
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
        },
        {
          "rate": 2.47,
          "type": 0,
          "range": 5,
          "ap": 9,
          "grid": "@2@45@6@8",
          "target_ground": false,
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "감전 : AP {0}",
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
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "개화 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "100%",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "감전 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 1
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
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
        },
        {
          "rate": 2.655,
          "type": 0,
          "range": 5,
          "ap": 9,
          "grid": "@2@45@6@8",
          "target_ground": false,
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "감전 : AP {0}",
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
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "개화 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "100%",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "감전 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 1
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
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
        },
        {
          "rate": 2.84,
          "type": 0,
          "range": 5,
          "ap": 9,
          "grid": "@2@45@6@8",
          "target_ground": false,
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "감전 : AP {0}",
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
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "개화 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "100%",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "감전 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 1
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
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
        },
        {
          "rate": 3.025,
          "type": 0,
          "range": 5,
          "ap": 9,
          "grid": "@2@45@6@8",
          "target_ground": false,
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "감전 : AP {0}",
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
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "개화 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "100%",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "감전 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 1
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
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
        },
        {
          "rate": 3.21,
          "type": 0,
          "range": 5,
          "ap": 9,
          "grid": "@2@45@6@8",
          "target_ground": false,
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "감전 : AP {0}",
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
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "개화 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "100%",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "감전 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 1
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
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
        },
        {
          "rate": 3.395,
          "type": 0,
          "range": 5,
          "ap": 9,
          "grid": "@2@45@6@8",
          "target_ground": false,
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "감전 : AP {0}",
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
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "개화 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "100%",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "감전 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 1
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
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
        },
        {
          "rate": 3.58,
          "type": 0,
          "range": 5,
          "ap": 9,
          "grid": "@2@45@6@8",
          "target_ground": false,
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "감전 : AP {0}",
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
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "개화 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "100%",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "감전 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 1
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
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
        },
        {
          "rate": 3.765,
          "type": 0,
          "range": 5,
          "ap": 9,
          "grid": "@2@45@6@8",
          "target_ground": false,
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "감전 : AP {0}",
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
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "개화 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "100%",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "감전 : 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 1
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "개화 : 방어력 무시",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
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
      "지정 대상에게 [@:공격력 :0~0:배 보호 / 방어력 무시 피해]를 주고, 주변 대상에게는 75% 감소한 피해를 줍니다.",
      "적중 대상들은 [AP -:0.05~0.05:]가 감소하며, 2라운드 동안 이동 불가 상태가 됩니다.",
      "치명타 시, [피해량 +:30~1.5:%]가 증가합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "첩보망 구축",
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
          "range": 0,
          "ap": 0,
          "grid": "single",
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
                    "desc": "첩보망 구축 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.160000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "16%",
                      "per": "0.8%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "첩보망 구축 : 치명타+{0}%",
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
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "첩보망 구축 : 적중+{0}%",
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
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "첩보망 구축 : 회피+{0}%",
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
                  "icon": "BuffIcon_SCOUTING",
                  "desc": {
                    "desc": "첩보망 구축 : 정찰 활성화",
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
                    "type": 23,
                    "scout": true
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
                    "desc": "첩보망 구축 : 정찰 활성화",
                    "type": 0,
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
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "라운드 개시 시, [공격력 +:16~0.8:%] / [치명타 +:5~0.5:%] / [적중 +:3~3:%] / [회피 +:30~5:%]가 증가합니다.",
      "전투 종료 시, 다음에 출현할 적 정보를 얻습니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "첩보망 공유",
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
          "grid": "2468",
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
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "첩보망 공유 : 행동력+{0}%",
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
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "첩보망 공유 : 적중+{0}% (정찰 활성화 시)",
                    "type": 1,
                    "value": "0.025000"
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
                      "base": "2.5%",
                      "per": "2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "첩보망 공유 : 회피+{0}% (정찰 활성화 시)",
                    "type": 1,
                    "value": "0.020000"
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
                      "base": "2%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_SUPPORT_ATTACK",
                  "desc": {
                    "desc": "첩보망 공유 : 공격 지원 (정찰 활성화 대상)",
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
            },
            {
              "on": "round",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    23
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
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "첩보망 공유 : 적중+{0}%",
                    "type": 1,
                    "value": "0.025000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "2.5%",
                      "per": "2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "첩보망 공유 : 회피+{0}%",
                    "type": 1,
                    "value": "0.020000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
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
              "maxStack": 0
            },
            {
              "on": "round",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    23
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
                  "icon": "BuffIcon_SUPPORT_ATTACK",
                  "desc": {
                    "desc": "첩보 지원 : 공격 지원",
                    "type": 0,
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
            },
            {
              "on": "wait",
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
                    "desc": "지켜보고 있어요... : 행동력+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
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
      "라운드 개시 시, 범위 내 아군들의 [행동력 +:5~0.25:%]가 증가하며, 범위 내 <정찰> 효과가 적용된 아군이 있으면 대상의 공격을 지원합니다.",
      "자신이 <정찰> 활성화 상태일 경우, 대상들의 [적중 +:2.5~2.5:%] / [회피 +:2~2:%]가 증가합니다.",
      "대기 시, 아군의 행동을 기록하기 시작해 2라운드 동안 행동력 증가 효과가 2배로 적용됩니다."
    ]
  },
  "passive5": {
    "key": "passive5",
    "name": "정보 공유",
    "icon": "EnemyDetect",
    "target": "enemy",
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
                    1
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
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "정보 공유 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "정보 공유 : 회피 {0}%",
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
                    "type": 11,
                    "evade": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "정보 공유 : 속성 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 0,
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
                        "base": "-10%",
                        "per": "-0.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "정보 공유 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
                      "base": "10%",
                      "per": "0.5%"
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    11
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
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "정보 공유 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
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
              "on": "round",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    15
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
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "화염 속성 정보 공유 : 화염 속성 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
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
              "maxStack": 1
            },
            {
              "on": "round",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    17
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
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "냉기 속성 정보 공유 : 냉기 속성 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-10%",
                        "per": "-0.5%"
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
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    19
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
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "전기 속성 정보 공유 : 전기 속성 저항 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-10%",
                        "per": "-0.5%"
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
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    48
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
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "정보 공유 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
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
                }
              ],
              "maxStack": 1
            }
          ]
        }
      ]
    },
    "desc": [
      "라운드 개시 시, 범위 내 적에게 공격력 증감 / 회피 증감 / 속성 내성 증감 / 받는 피해 증가 효과가 적용된 상태면 관련 정보를 공유해 능력치를 낮추거나 받는 피해를 증가시킵니다.",
      "공격력 : [공격력 -:5~0.25:%] / 회피 : [회피 -:20~1:%] / 속성 내성 : [#fire,#chill,#thunder:속성 내성 -:10~0.5:%] / 받는 피해 : [받는 피해 +:10~0.5:%]"
    ]
  }
};