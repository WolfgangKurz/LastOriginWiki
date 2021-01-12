export default {
  "active1": {
    "key": "active1",
    "name": "시라누이",
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
          "rate": 1.43,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "시라누이 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-17%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "60%",
                        "per": "10%"
                      }
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
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
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
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
                        "base": "60%",
                        "per": "10%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.56,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "시라누이 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-17%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "60%",
                        "per": "10%"
                      }
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
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
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
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
                        "base": "60%",
                        "per": "10%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.69,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "시라누이 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-17%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "60%",
                        "per": "10%"
                      }
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
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
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
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
                        "base": "60%",
                        "per": "10%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.82,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "시라누이 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-17%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "60%",
                        "per": "10%"
                      }
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
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
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
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
                        "base": "60%",
                        "per": "10%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.95,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "시라누이 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-17%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "60%",
                        "per": "10%"
                      }
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
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
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
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
                        "base": "60%",
                        "per": "10%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.08,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "시라누이 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-17%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "60%",
                        "per": "10%"
                      }
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
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
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
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
                        "base": "60%",
                        "per": "10%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.21,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "시라누이 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-17%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "60%",
                        "per": "10%"
                      }
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
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
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
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
                        "base": "60%",
                        "per": "10%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.34,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "시라누이 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-17%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "60%",
                        "per": "10%"
                      }
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
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
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
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
                        "base": "60%",
                        "per": "10%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.47,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "시라누이 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-17%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "60%",
                        "per": "10%"
                      }
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
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
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
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
                        "base": "60%",
                        "per": "10%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.6,
          "type": 1,
          "range": 2,
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
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "시라누이 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-17%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "60%",
                        "per": "10%"
                      }
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
                  "icon": "BuffIcon_FireDMG_DOT",
                  "desc": {
                    "desc": "시라누이 : 지속 화염 피해 {0}",
                    "type": 0,
                    "value": "140"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 66,
                    "fixed_damage": {
                      "elem": "fire",
                      "damage": {
                        "base": 140,
                        "per": 20
                      }
                    }
                  },
                  "overlap": 3
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
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "시라누이 : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.600000"
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
                        "base": "60%",
                        "per": "10%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "대상에 [@,#fire:공격력 :0~0:배 화염 피해]를 주고 적중 시 [효과 저항 -:17~2:%]를 감소시킵니다.",
      "치명타 시 [#fire:지속 화염 피해 :140~20:]를 입힙니다.",
      "<일격필살> 활성화 상태 시 추가 [피해량 +:60~10:%]를 입힙니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "오의 [화신강림]",
    "icon": "WideSwordAttk",
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
          "rate": 1.115,
          "type": 1,
          "range": 5,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "오의 [화신강림] : 화염 저항{0}% 감소",
                    "type": 1,
                    "value": "-0.220000"
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
                        "base": "-22%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "12%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "25%",
                        "per": "5%"
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
                    16,
                    17,
                    18,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
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
                        "base": "12%",
                        "per": "2%"
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
                  "func": "OR",
                  "select": [
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
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
                        "base": "25%",
                        "per": "5%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.215,
          "type": 1,
          "range": 5,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "오의 [화신강림] : 화염 저항{0}% 감소",
                    "type": 1,
                    "value": "-0.220000"
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
                        "base": "-22%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "12%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "25%",
                        "per": "5%"
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
                    16,
                    17,
                    18,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
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
                        "base": "12%",
                        "per": "2%"
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
                  "func": "OR",
                  "select": [
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
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
                        "base": "25%",
                        "per": "5%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.315,
          "type": 1,
          "range": 5,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "오의 [화신강림] : 화염 저항{0}% 감소",
                    "type": 1,
                    "value": "-0.220000"
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
                        "base": "-22%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "12%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "25%",
                        "per": "5%"
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
                    16,
                    17,
                    18,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
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
                        "base": "12%",
                        "per": "2%"
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
                  "func": "OR",
                  "select": [
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
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
                        "base": "25%",
                        "per": "5%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.415,
          "type": 1,
          "range": 5,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "오의 [화신강림] : 화염 저항{0}% 감소",
                    "type": 1,
                    "value": "-0.220000"
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
                        "base": "-22%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "12%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "25%",
                        "per": "5%"
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
                    16,
                    17,
                    18,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
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
                        "base": "12%",
                        "per": "2%"
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
                  "func": "OR",
                  "select": [
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
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
                        "base": "25%",
                        "per": "5%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.515,
          "type": 1,
          "range": 5,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "오의 [화신강림] : 화염 저항{0}% 감소",
                    "type": 1,
                    "value": "-0.220000"
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
                        "base": "-22%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "12%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "25%",
                        "per": "5%"
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
                    16,
                    17,
                    18,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
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
                        "base": "12%",
                        "per": "2%"
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
                  "func": "OR",
                  "select": [
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
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
                        "base": "25%",
                        "per": "5%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.615,
          "type": 1,
          "range": 5,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "오의 [화신강림] : 화염 저항{0}% 감소",
                    "type": 1,
                    "value": "-0.220000"
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
                        "base": "-22%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "12%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "25%",
                        "per": "5%"
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
                    16,
                    17,
                    18,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
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
                        "base": "12%",
                        "per": "2%"
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
                  "func": "OR",
                  "select": [
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
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
                        "base": "25%",
                        "per": "5%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.715,
          "type": 1,
          "range": 5,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "오의 [화신강림] : 화염 저항{0}% 감소",
                    "type": 1,
                    "value": "-0.220000"
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
                        "base": "-22%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "12%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "25%",
                        "per": "5%"
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
                    16,
                    17,
                    18,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
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
                        "base": "12%",
                        "per": "2%"
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
                  "func": "OR",
                  "select": [
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
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
                        "base": "25%",
                        "per": "5%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.815,
          "type": 1,
          "range": 5,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "오의 [화신강림] : 화염 저항{0}% 감소",
                    "type": 1,
                    "value": "-0.220000"
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
                        "base": "-22%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "12%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "25%",
                        "per": "5%"
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
                    16,
                    17,
                    18,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
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
                        "base": "12%",
                        "per": "2%"
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
                  "func": "OR",
                  "select": [
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
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
                        "base": "25%",
                        "per": "5%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.915,
          "type": 1,
          "range": 5,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "오의 [화신강림] : 화염 저항{0}% 감소",
                    "type": 1,
                    "value": "-0.220000"
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
                        "base": "-22%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "12%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "25%",
                        "per": "5%"
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
                    16,
                    17,
                    18,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
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
                        "base": "12%",
                        "per": "2%"
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
                  "func": "OR",
                  "select": [
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
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
                        "base": "25%",
                        "per": "5%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.015,
          "type": 1,
          "range": 5,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "오의 [화신강림] : 화염 저항{0}% 감소",
                    "type": 1,
                    "value": "-0.220000"
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
                        "base": "-22%",
                        "per": "-2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "12%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 84,
                    "damage_add": {
                      "elem": "fire",
                      "damage": {
                        "base": "25%",
                        "per": "5%"
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
                    16,
                    17,
                    18,
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염)",
                    "type": 1,
                    "value": "0.120000"
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
                        "base": "12%",
                        "per": "2%"
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
                  "func": "OR",
                  "select": [
                    "Effect_DS_KunoichiKaen_N_4"
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
                  "icon": "BuffIcon_FireATK_UP",
                  "desc": {
                    "desc": "오의 [화신강림] : 피해량+{0}%(화염 일격필살)",
                    "type": 1,
                    "value": "0.250000"
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
                        "base": "25%",
                        "per": "5%"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "지정 범위에 [@,#fire:공격력 :0~0:배 화염 피해]를 주고 대상의 [#fire:화염 저항 -:22~2:%]를 감소시킵니다.",
      "적이 [#chill,#thunder]냉기/전기 속성 저항 감소 상태일 시 [#fire:화염 추가 피해 +:12~2:%]가 발생합니다.",
      "<일격필살> 활성화 상태 시 추가 [피해량 +:25~5:%]를 입힙니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "불꽃의 춤",
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "불꽃의 춤 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.110000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "11%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "불꽃의 춤 : 공격력+{0}%(라운드감소)",
                    "type": 1,
                    "value": "0.240000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "24%",
                      "per": "4%"
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
                    "desc": "불꽃의 춤 : 공격력+{0}%(4라운드)",
                    "type": 1,
                    "value": "0.240000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "24%",
                      "per": "4%"
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
                "round": {
                  "operator": "=",
                  "round": 2
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
                    "desc": "불꽃의 춤 : 공격력+{0}%(3라운드)",
                    "type": 1,
                    "value": "0.180000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "18%",
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
                "round": {
                  "operator": "=",
                  "round": 3
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
                    "desc": "불꽃의 춤 : 공격력+{0}%(2라운드)",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "12%",
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
                "round": {
                  "operator": "=",
                  "round": 4
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
                    "desc": "불꽃의 춤 : 공격력+{0}%(1라운드)",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "6%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "self_dead",
              "if": {
                "target": [
                  "Char_DS_KunoichiZero_N"
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
                    "desc": "불꽃의 춤 : 공격력+{0}%(히든)",
                    "type": 1,
                    "value": "0.350000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "35%",
                      "per": "5%"
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
      "라운드 개시 시, 자신의 [공격력 +:11~1:%]를 크게 증가시킵니다.",
      "해당 효과는 4라운드 동안 점차 감소합니다. [공격력 +:24~4:% (라운드 감소)]"
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "일격필살",
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
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "일격필살 : 활성 상태",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 10
                  },
                  "value": {
                    "isBuff": true,
                    "type": 6,
                    "accuracy": {
                      "base": 0,
                      "per": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "일격필살 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "12%",
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "일격필살 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "12%",
                      "per": "2%"
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
      "전투 개시 시 <일격필살> 버프가 활성화됩니다.",
      "[행동력 +:12~2:%]가 증가합니다."
    ]
  }
};