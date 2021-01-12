export default {
  "active1": {
    "key": "active1",
    "name": "톱날 발사",
    "icon": "CannonShotWide",
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
          "rate": 1.495,
          "type": 0,
          "range": 3,
          "ap": 7,
          "grid": "#25#8",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3
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
                    "desc": "톱날 발사 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.265000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26.5%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
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
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
                        "per": "1.5%"
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
          "rate": 1.625,
          "type": 0,
          "range": 3,
          "ap": 7,
          "grid": "#25#8",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3
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
                    "desc": "톱날 발사 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.265000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26.5%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
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
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
                        "per": "1.5%"
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
          "rate": 1.755,
          "type": 0,
          "range": 3,
          "ap": 7,
          "grid": "#25#8",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3
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
                    "desc": "톱날 발사 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.265000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26.5%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
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
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
                        "per": "1.5%"
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
          "rate": 1.885,
          "type": 0,
          "range": 3,
          "ap": 7,
          "grid": "#25#8",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3
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
                    "desc": "톱날 발사 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.265000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26.5%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
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
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
                        "per": "1.5%"
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
          "rate": 2.015,
          "type": 0,
          "range": 3,
          "ap": 7,
          "grid": "#25#8",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3
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
                    "desc": "톱날 발사 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.265000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26.5%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
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
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
                        "per": "1.5%"
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
          "rate": 2.145,
          "type": 0,
          "range": 3,
          "ap": 7,
          "grid": "#25#8",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3
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
                    "desc": "톱날 발사 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.265000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26.5%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
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
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
                        "per": "1.5%"
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
          "rate": 2.275,
          "type": 0,
          "range": 3,
          "ap": 7,
          "grid": "#25#8",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3
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
                    "desc": "톱날 발사 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.265000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26.5%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
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
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
                        "per": "1.5%"
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
          "rate": 2.405,
          "type": 0,
          "range": 3,
          "ap": 7,
          "grid": "#25#8",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3
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
                    "desc": "톱날 발사 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.265000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26.5%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
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
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
                        "per": "1.5%"
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
          "rate": 2.535,
          "type": 0,
          "range": 3,
          "ap": 7,
          "grid": "#25#8",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3
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
                    "desc": "톱날 발사 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.265000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26.5%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
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
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
                        "per": "1.5%"
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
          "rate": 2.665,
          "type": 0,
          "range": 3,
          "ap": 7,
          "grid": "#25#8",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3
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
                    "desc": "톱날 발사 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.265000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26.5%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
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
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ARMORED_DMG_UP",
                  "desc": {
                    "desc": "톱날 발사 : 대 중장 피해량+{0}%",
                    "type": 1,
                    "value": "0.165000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 61,
                    "damage_multiply": {
                      "target": "heavy",
                      "value": {
                        "base": "16.5%",
                        "per": "1.5%"
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
      "목표 지점에 [@:공격력 :0~0:배 피해]를 주고 양 옆에 50% 감소한 피해를 줍니다.",
      "중장형 / 방어 감소 대상에게는 피해량이 증가합니다.",
      "[대 중장형 피해량 +:16.5~1.5:%] / [방어 감소 대상 피해량 +:26.5~1.5:%]"
    ]
  },
  "active2": {
    "key": "active2",
    "name": "대화 시도",
    "icon": "CannonShot",
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
          "rate": 2.425,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.275000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-27.5%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.087500"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-8.75%",
                      "per": "-1.25%"
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
          "rate": 2.645,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.275000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-27.5%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.087500"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-8.75%",
                      "per": "-1.25%"
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
          "rate": 2.865,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.275000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-27.5%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.087500"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-8.75%",
                      "per": "-1.25%"
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
          "rate": 3.085,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.275000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-27.5%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.087500"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-8.75%",
                      "per": "-1.25%"
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
          "rate": 3.305,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.275000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-27.5%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.087500"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-8.75%",
                      "per": "-1.25%"
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
          "rate": 3.525,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.275000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-27.5%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.087500"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-8.75%",
                      "per": "-1.25%"
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
          "rate": 3.745,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.275000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-27.5%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.087500"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-8.75%",
                      "per": "-1.25%"
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
          "rate": 3.965,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.275000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-27.5%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.087500"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-8.75%",
                      "per": "-1.25%"
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
          "rate": 4.185,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.275000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-27.5%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.087500"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-8.75%",
                      "per": "-1.25%"
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
          "rate": 4.405,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.275000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-27.5%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "대화 시도 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.087500"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-8.75%",
                      "per": "-1.25%"
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
      "지정 대상에게 [@:공격력 :0~0:배 피해]를 주고 [방어력 -:27.5~2.5:%] / [행동력 -:8.75~1.25:%]를 3라운드 동안 감소 시킵니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "화끈하게 가보자고!",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "화끈하게 가보자고! : 행동력+{0}%",
                    "type": 1,
                    "value": "0.033000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "3.3%",
                      "per": "1.3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "화끈하게 가보자고! : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "6%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "화끈하게 가보자고! : 공격력+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "15%",
                      "per": "0.65%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 9
            }
          ]
        }
      ]
    },
    "desc": [
      "스킬이 적중할 때마다 4라운드 동안 [행동력 +:3.3~1.3:%] / [방어 관통 +:6~1:%] / [공격력 +:15~0.65:%]가 증가하며 최대 3번까지 중첩됩니다."
    ]
  }
};