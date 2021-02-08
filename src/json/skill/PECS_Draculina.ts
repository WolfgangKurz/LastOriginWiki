export default {
  "active1": {
    "key": "active1",
    "name": "음파 방출",
    "icon": "AssaultAttack",
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
          "range": 1,
          "ap": 8,
          "grid": "4>$2#34$5#6$8#9",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "음파 방출 : 회피{0}%",
                    "type": 1,
                    "value": "-0.210000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-21%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
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
                      "base": "26%",
                      "per": "6%"
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
                    "Effect_PECS_Draculina_N_24"
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
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26%",
                      "per": "6%"
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
          "rate": 1.44,
          "type": 0,
          "range": 1,
          "ap": 8,
          "grid": "4>$2#34$5#6$8#9",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "음파 방출 : 회피{0}%",
                    "type": 1,
                    "value": "-0.210000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-21%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
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
                      "base": "26%",
                      "per": "6%"
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
                    "Effect_PECS_Draculina_N_24"
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
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26%",
                      "per": "6%"
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
          "rate": 1.56,
          "type": 0,
          "range": 1,
          "ap": 8,
          "grid": "4>$2#34$5#6$8#9",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "음파 방출 : 회피{0}%",
                    "type": 1,
                    "value": "-0.210000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-21%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
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
                      "base": "26%",
                      "per": "6%"
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
                    "Effect_PECS_Draculina_N_24"
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
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26%",
                      "per": "6%"
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
          "rate": 1.68,
          "type": 0,
          "range": 1,
          "ap": 8,
          "grid": "4>$2#34$5#6$8#9",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "음파 방출 : 회피{0}%",
                    "type": 1,
                    "value": "-0.210000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-21%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
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
                      "base": "26%",
                      "per": "6%"
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
                    "Effect_PECS_Draculina_N_24"
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
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26%",
                      "per": "6%"
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
          "rate": 1.8,
          "type": 0,
          "range": 1,
          "ap": 8,
          "grid": "4>$2#34$5#6$8#9",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "음파 방출 : 회피{0}%",
                    "type": 1,
                    "value": "-0.210000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-21%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
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
                      "base": "26%",
                      "per": "6%"
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
                    "Effect_PECS_Draculina_N_24"
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
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26%",
                      "per": "6%"
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
          "rate": 1.92,
          "type": 0,
          "range": 1,
          "ap": 8,
          "grid": "4>$2#34$5#6$8#9",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "음파 방출 : 회피{0}%",
                    "type": 1,
                    "value": "-0.210000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-21%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
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
                      "base": "26%",
                      "per": "6%"
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
                    "Effect_PECS_Draculina_N_24"
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
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26%",
                      "per": "6%"
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
          "type": 0,
          "range": 1,
          "ap": 8,
          "grid": "4>$2#34$5#6$8#9",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "음파 방출 : 회피{0}%",
                    "type": 1,
                    "value": "-0.210000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-21%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
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
                      "base": "26%",
                      "per": "6%"
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
                    "Effect_PECS_Draculina_N_24"
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
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26%",
                      "per": "6%"
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
          "rate": 2.16,
          "type": 0,
          "range": 1,
          "ap": 8,
          "grid": "4>$2#34$5#6$8#9",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "음파 방출 : 회피{0}%",
                    "type": 1,
                    "value": "-0.210000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-21%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
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
                      "base": "26%",
                      "per": "6%"
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
                    "Effect_PECS_Draculina_N_24"
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
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26%",
                      "per": "6%"
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
          "rate": 2.28,
          "type": 0,
          "range": 1,
          "ap": 8,
          "grid": "4>$2#34$5#6$8#9",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "음파 방출 : 회피{0}%",
                    "type": 1,
                    "value": "-0.210000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-21%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
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
                      "base": "26%",
                      "per": "6%"
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
                    "Effect_PECS_Draculina_N_24"
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
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26%",
                      "per": "6%"
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
          "rate": 2.4,
          "type": 0,
          "range": 1,
          "ap": 8,
          "grid": "4>$2#34$5#6$8#9",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "음파 방출 : 회피{0}%",
                    "type": 1,
                    "value": "-0.210000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-21%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
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
                      "base": "26%",
                      "per": "6%"
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
                    "Effect_PECS_Draculina_N_24"
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
                    "desc": "음파 방출 : 피해량+{0}%(꿰뚫림)",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "26%",
                      "per": "6%"
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
      "목표 지점의 적에게 [@:공격력 :0~0:배 피해]를 주고, 뒷열에는 25%씩 감소된 피해를 줍니다.",
      "3라운드 동안 대상의 [회피 -:21~1:%]를 감소시키며, 대상이 <꿰뚫림> 상태라면 [피해량 +:26~6:%]가 크게 증가합니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "피의 여왕의 밤",
    "icon": "SelfAtkBuff",
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
          "rate": 0.32,
          "type": 0,
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%(자신)",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "53%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%(자신)",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "21%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}(자신)",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "53%",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "21%",
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
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 0.34,
          "type": 0,
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%(자신)",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "53%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%(자신)",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "21%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}(자신)",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "53%",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "21%",
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
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 0.36,
          "type": 0,
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%(자신)",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "53%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%(자신)",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "21%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}(자신)",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "53%",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "21%",
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
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 0.38,
          "type": 0,
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%(자신)",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "53%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%(자신)",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "21%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}(자신)",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "53%",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "21%",
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
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 0.4,
          "type": 0,
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%(자신)",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "53%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%(자신)",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "21%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}(자신)",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "53%",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "21%",
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
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 0.42,
          "type": 0,
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%(자신)",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "53%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%(자신)",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "21%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}(자신)",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "53%",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "21%",
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
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 0.44,
          "type": 0,
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%(자신)",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "53%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%(자신)",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "21%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}(자신)",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "53%",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "21%",
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
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 0.46,
          "type": 0,
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%(자신)",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "53%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%(자신)",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "21%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}(자신)",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "53%",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "21%",
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
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 0.48,
          "type": 0,
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%(자신)",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "53%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%(자신)",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "21%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}(자신)",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "53%",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "21%",
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
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 0.5,
          "type": 0,
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%(자신)",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "53%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%(자신)",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "21%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}(자신)",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "53%",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "21%",
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
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "피의 여왕의 밤 : 사거리+{0}",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": 3,
                      "per": 0
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
                  "icon": "BuffIcon_phyDMG_DOT",
                  "desc": {
                    "desc": "꿰뚫림 : 지속 물리 피해 {0}",
                    "type": 0,
                    "value": "280"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 4
                  },
                  "value": {
                    "isBuff": true,
                    "type": 65,
                    "fixed_damage": {
                      "base": 280,
                      "per": 80
                    }
                  },
                  "overlap": 3
                }
              ],
              "maxStack": 1
            }
          ]
        }
      ]
    },
    "desc": [
      "대상에게 [@:공격력 :0~0:배 피해]를 주고, 4라운드 동안 [지속 물리 피해 :280~80:]를 입는 <꿰뚫림> 상태로 만듭니다.",
      "자신은 <충만함> 상태가 되어 4라운드 동안 자신의 [공격력 +:53~3:%] / [방어 관통 +:21~1:%] / [사거리 +:3~0:]이 증가합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "멸시",
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "멸시 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "21%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DamageAmp_Opp",
                  "desc": {
                    "desc": "멸시 : 적 HP가 낮을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 81,
                    "damage_by_hp": {
                      "target": "target",
                      "damage": {
                        "base": "53%",
                        "per": "3%"
                      }
                    }
                  },
                  "overlap": 0
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
                  "icon": "BuffIcon_DamageAmp_Opp",
                  "desc": {
                    "desc": "멸시 : 적 HP가 낮을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.530000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 81,
                    "damage_by_hp": {
                      "target": "target",
                      "damage": {
                        "base": "53%",
                        "per": "3%"
                      }
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
      "라운드 개시 시, 자신의 [방어 관통 +:21~1:%]가 증가합니다.",
      "적 공격 시, 대상의 HP가 낮을수록 [피해량 +:53~3:%]가 증가합니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "뒷걸음질",
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
              "if": {
                "pos": 2
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "뒷걸음질 : 방어 관통+{0}%(후열)",
                    "type": 1,
                    "value": "0.210000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "21%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "뒷걸음질 : 치명타+{0}%(후열)",
                    "type": 1,
                    "value": "0.110000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "11%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "뒷걸음질 : 적중+{0}%(후열)",
                    "type": 1,
                    "value": "0.220000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "22%",
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
                "pos": 1
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
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "뒷걸음질 : 방어 관통+{0}%(중열)",
                    "type": 1,
                    "value": "0.105000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "10.5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "뒷걸음질 : 치명타+{0}%(중열)",
                    "type": 1,
                    "value": "0.055000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "5.5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "뒷걸음질 : 적중+{0}%(중열)",
                    "type": 1,
                    "value": "0.110000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "11%",
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
      "라운드 개시 시, 자신이 후열 또는 중열일 경우, [방어 관통 +:21~1:%] / [치명타 +:11~1:%] / [적중 +:22~2:%]가 증가합니다.",
      "중열일 경우, 효과가 50%감소합니다."
    ]
  },
  "passive5": {
    "key": "passive5",
    "name": "음파 탐지",
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
          "grid": "global",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_SCOUTING",
                  "desc": {
                    "desc": "음파 탐지 : 정찰 활성화",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 23,
                    "scout": true
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "음파 탐지 : 치명타+{0}%(충만함)",
                    "type": 1,
                    "value": "0.055000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 9,
                    "critical": {
                      "base": "5.5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "음파 탐지 : 적중+{0}%(충만함)",
                    "type": 1,
                    "value": "0.110000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "11%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "음파 탐지 : 회피+{0}%(충만함)",
                    "type": 1,
                    "value": "0.110000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "11%",
                      "per": "1%"
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
                    "Effect_PECS_Draculina_N_23"
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
                    "desc": "음파 탐지 : 치명타+{0}%(충만함)",
                    "type": 1,
                    "value": "0.055000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "5.5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "음파 탐지 : 적중+{0}%(충만함)",
                    "type": 1,
                    "value": "0.110000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "11%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "음파 탐지 : 회피+{0}%(충만함)",
                    "type": 1,
                    "value": "0.110000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "11%",
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
      "전투 시작 시, 아군에게 <정찰> 효과를 부여합니다.",
      "라운드 개시 시, 자신이 <충만함> 상태일 경우, 아군의 [치명타 +:5.5~0.5:%] / [적중 +:11~1:%] / [회피 +:11~1:%]를 증가시킵니다."
    ]
  }
};