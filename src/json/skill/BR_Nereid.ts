export default {
  "active1": {
    "key": "active1",
    "name": "벌집 만들기",
    "icon": "MGShot",
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
          "rate": 1.375,
          "type": 0,
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
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3,
                    11
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
                    "desc": "집중 공격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
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
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
                        "base": "20%",
                        "per": "1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.5,
          "type": 0,
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
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3,
                    11
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
                    "desc": "집중 공격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
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
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
                        "base": "20%",
                        "per": "1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.625,
          "type": 0,
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
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3,
                    11
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
                    "desc": "집중 공격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
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
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
                        "base": "20%",
                        "per": "1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.75,
          "type": 0,
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
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3,
                    11
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
                    "desc": "집중 공격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
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
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
                        "base": "20%",
                        "per": "1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.875,
          "type": 0,
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
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3,
                    11
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
                    "desc": "집중 공격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
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
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
                        "base": "20%",
                        "per": "1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2,
          "type": 0,
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
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3,
                    11
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
                    "desc": "집중 공격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
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
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
                        "base": "20%",
                        "per": "1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.125,
          "type": 0,
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
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3,
                    11
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
                    "desc": "집중 공격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
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
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
                        "base": "20%",
                        "per": "1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.25,
          "type": 0,
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
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3,
                    11
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
                    "desc": "집중 공격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
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
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
                        "base": "20%",
                        "per": "1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.375,
          "type": 0,
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
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3,
                    11
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
                    "desc": "집중 공격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
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
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
                        "base": "20%",
                        "per": "1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.5,
          "type": 0,
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
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    3,
                    11
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
                    "desc": "집중 공격 : 피해량+{0}%",
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
                },
                {
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
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
                  "icon": "BuffIcon_MOBILITY_DMG_UP",
                  "desc": {
                    "desc": "대공 사격 : 대 기동형 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 62,
                    "damage_multiply": {
                      "target": "air",
                      "value": {
                        "base": "20%",
                        "per": "1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
      "미니건을 발사해 [@:공격력 :0~0:배 피해]를 줍니다.",
      "대상이 기동형이거나 회피 / 방어력 감소 상태면 [피해량 +:20~1:%]가 증가합니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "무차별 난사",
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
          "rate": 1.32,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
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
                    "desc": "신난다! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.44,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
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
                    "desc": "신난다! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.56,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
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
                    "desc": "신난다! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.68,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
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
                    "desc": "신난다! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.8,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
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
                    "desc": "신난다! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.92,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
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
                    "desc": "신난다! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.04,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
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
                    "desc": "신난다! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.16,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
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
                    "desc": "신난다! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.28,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
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
                    "desc": "신난다! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
                  "overlap": 3
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.4,
          "type": 0,
          "range": 4,
          "ap": 8,
          "grid": "3569",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
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
                    "desc": "신난다! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "신난다! : AP+{0}",
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
      "미니건을 난사해 [@:공격력 :0~0:배 피해]를 줍니다.",
      "치명타 시, [피해량 +:25~1.25:%]가 증가합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "덤벼덤벼!",
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
                  "icon": "BuffIcon_DamageAmp_Me",
                  "desc": {
                    "desc": "덤벼덤벼! : 자신 HP% 낮을수록 피해량+{0}% (최대)",
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
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "덤벼덤벼! : 받는 피해 {0}% 감소 (최대)",
                    "type": 1,
                    "value": "0.240000"
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
                      "base": "24%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "네리의 승리~! : 공격력+{0}% (처치 시)",
                    "type": 1,
                    "value": "0.060000"
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
                      "base": "6%",
                      "per": "0.3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "어쭈구리? : 행동력+{0}% (피격 시)",
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
                    "type": 13,
                    "turnSpeed": {
                      "base": "15%",
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "신난다! : AP+{0} (처치 시)",
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
                0,
                1,
                2
              ],
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "덤벼! : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "8%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": {
                "hp<=": "75%"
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
                    "desc": "덤벼덤벼! : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "8%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": {
                "hp<=": "50%"
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
                    "desc": "덤벼덤벼덤벼! : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "8%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 1
            },
            {
              "on": "enemy_killed",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "네리의 승리~! : 공격력+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "6%",
                      "per": "0.3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "damaged",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "어쭈구리? : 행동력+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "15%",
                      "per": "0.75%"
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
      "자신의 현재 HP%가 낮을수록 적에게 주는 [피해량 +:20~2:%]가 증가하며, [받는 피해 -:24~3:%]가 감소합니다.",
      "적 처치 시, [공격력 +:6~0.3:%] / [AP +:1~0.05:]가 증가합니다.",
      "피격 시, 1라운드 동안 [행동력 +:15~0.75:%]가 증가합니다.",
      "행동력 증가 효과는 중첩됩니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "전투 과몰입",
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
                    "desc": "전투 과몰입 : {0}HP로 전투 속행 (해제 불가)",
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
                      "per": 120
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "2회전 시작이야! : 공격력+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "2회전 시작이야! : 치명타+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 9,
                    "critical": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "2회전 시작이야! : 행동력+{0}%",
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
                  "icon": "BuffIcon_BARRIER_PIERCE",
                  "desc": {
                    "desc": "2회전 시작이야! : 방어막 / 피해 감소 무시",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "2회전 시작이야! : 공격력+{0}% (해제불가)",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "2회전 시작이야! : 치명타+{0}% (해제불가)",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
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
                    "desc": "2회전 시작이야! : 행동력+{0}% (해제불가)",
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
                  "icon": "BuffIcon_BARRIER_PIERCE",
                  "desc": {
                    "desc": "2회전 시작이야! : 방어막 / 피해 감소 무시 (해제불가)",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 94,
                    "penetration_force": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 1
            }
          ]
        }
      ]
    },
    "desc": [
      "전투 개시 시, [:120~120:HP로 전투 속행] 효과를 얻습니다.",
      "전투 불능이 되어 전투 속행 발동 시, [공격력 +:20~1:%] / [치명타 +:20~1:%] / [행동력 +:20~1:%]가 증가하며 방어막 / 피해 감소 효과를 무시합니다.",
      "각 효과들은 강화 효과로 해제되지 않습니다."
    ]
  }
};