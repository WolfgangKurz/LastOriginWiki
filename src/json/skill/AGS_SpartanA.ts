export default {
  "active1": {
    "key": "active1",
    "name": "어썰트 라이플",
    "icon": "ARShot",
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
          "rate": 1.17,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_AGS_SpartanC_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "공격 견제 : 공격력 {0}%",
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
                    "desc": "공격 견제 : 치명타 {0}%",
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
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "공격 견제 : 받는 피해+{0}%",
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
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "데이터 링크 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-25%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
                  ],
                  "stack": 2,
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "데이터 링크 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.27,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_AGS_SpartanC_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "공격 견제 : 공격력 {0}%",
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
                    "desc": "공격 견제 : 치명타 {0}%",
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
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "공격 견제 : 받는 피해+{0}%",
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
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "데이터 링크 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-25%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
                  ],
                  "stack": 2,
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "데이터 링크 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.37,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_AGS_SpartanC_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "공격 견제 : 공격력 {0}%",
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
                    "desc": "공격 견제 : 치명타 {0}%",
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
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "공격 견제 : 받는 피해+{0}%",
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
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "데이터 링크 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-25%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
                  ],
                  "stack": 2,
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "데이터 링크 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.47,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_AGS_SpartanC_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "공격 견제 : 공격력 {0}%",
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
                    "desc": "공격 견제 : 치명타 {0}%",
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
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "공격 견제 : 받는 피해+{0}%",
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
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "데이터 링크 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-25%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
                  ],
                  "stack": 2,
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "데이터 링크 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.57,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_AGS_SpartanC_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "공격 견제 : 공격력 {0}%",
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
                    "desc": "공격 견제 : 치명타 {0}%",
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
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "공격 견제 : 받는 피해+{0}%",
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
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "데이터 링크 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-25%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
                  ],
                  "stack": 2,
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "데이터 링크 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.67,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_AGS_SpartanC_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "공격 견제 : 공격력 {0}%",
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
                    "desc": "공격 견제 : 치명타 {0}%",
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
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "공격 견제 : 받는 피해+{0}%",
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
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "데이터 링크 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-25%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
                  ],
                  "stack": 2,
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "데이터 링크 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.77,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_AGS_SpartanC_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "공격 견제 : 공격력 {0}%",
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
                    "desc": "공격 견제 : 치명타 {0}%",
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
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "공격 견제 : 받는 피해+{0}%",
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
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "데이터 링크 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-25%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
                  ],
                  "stack": 2,
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "데이터 링크 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.87,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_AGS_SpartanC_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "공격 견제 : 공격력 {0}%",
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
                    "desc": "공격 견제 : 치명타 {0}%",
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
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "공격 견제 : 받는 피해+{0}%",
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
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "데이터 링크 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-25%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
                  ],
                  "stack": 2,
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "데이터 링크 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.97,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_AGS_SpartanC_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "공격 견제 : 공격력 {0}%",
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
                    "desc": "공격 견제 : 치명타 {0}%",
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
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "공격 견제 : 받는 피해+{0}%",
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
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "데이터 링크 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-25%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
                  ],
                  "stack": 2,
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "데이터 링크 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.07,
          "type": 0,
          "range": 3,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": {
            "key": "Effect_AGS_SpartanC_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "공격 견제 : 공격력 {0}%",
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
                    "desc": "공격 견제 : 치명타 {0}%",
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
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "공격 견제 : 받는 피해+{0}%",
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
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "데이터 링크 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-25%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_SpartanC_N_4"
                  ],
                  "stack": 2,
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "데이터 링크 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
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
      "돌격 소총으로 [@:공격력 :0~0:배 피해]를 주고, 2라운드 동안 대상을 표식으로 설정합니다.",
      "표식 상태인 대상은 [받는 피해 +:20~1:%]가 증가하며 [회피 -:30~1.5:%]가 감소합니다.",
      "치명타 시, S승급 패시브:<전술 데이터 링크> 중첩에 따라 추가 효과를 얻습니다.",
      "<데이터 링크> 2중첩 : 적 [적중 -:25~0:%] 감소",
      "<데이터 링크> 3중첩 : 적 강화 효과 해제"
    ]
  },
  "active2": {
    "key": "active2",
    "name": "플래시 뱅",
    "icon": "TeamAtkDeBuff",
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
          "rate": 0.065,
          "type": 0,
          "range": 4,
          "ap": 5,
          "grid": "56",
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "섬광탄 : AP {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": -1,
                      "per": -0.05
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "섬광탄 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.350000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-35%",
                      "per": "-1.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "섬광탄 : 적중 강화 해제",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 7,
                      "target": 0
                    }
                  },
                  "overlap": 0
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
                    "Effect_AGS_SpartanA_N_31"
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
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "섬광탄 : [다연장 미사일] 협동 공격",
                    "type": 1,
                    "value": "Char_AGS_SpartanB_N"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_AGS_SpartanB_N"
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
      "섬광탄을 발사해 지정 범위에 [@:공격력 :0~0:배 피해]를 주고, 대상의 [적중 -:35~1.75:%]과 [AP -:1~0.05:]를 낮추며 적중 강화 효과를 해제합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "패시브 레이더",
    "icon": "AWACS",
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
          "grid": "fill",
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
                1
              ],
              "class": [
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
                    "desc": "패시브 레이더 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "6%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "패시브 레이더 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "6%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "패시브 레이더 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
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
              "on": "round",
              "if": false,
              "body": [
                1
              ],
              "class": [
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
                    "desc": "섬광탄 : [다연장 미사일] 협동 공격",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "0%",
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
              "if": false,
              "body": [
                1
              ],
              "class": [
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
                    "desc": "패시브 레이더 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
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
              "on": "round",
              "if": false,
              "body": [
                1
              ],
              "class": [
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
                    "desc": "패시브 레이더 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
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
              "on": "attack",
              "if": false,
              "body": [
                1
              ],
              "class": [
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
                    "desc": "패시브 레이더 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
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
              "on": "attack",
              "if": false,
              "body": [
                1
              ],
              "class": [
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
                    "desc": "패시브 레이더 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
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
              "on": "attack",
              "if": false,
              "body": [
                1
              ],
              "class": [
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
                    "desc": "패시브 레이더 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "6%",
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
      "라운드 개시 시, 자신과 지정 범위 로봇들의 [공격력 +:6~1:% / [치명타 +:6~1:%] / [행동력 +:6~1:%]가 증가합니다.",
      "해당 효과는 스파르탄 어썰트가 적을 공격할 때마다 추가 적용됩니다.",
      "<플래시 뱅> 스킬 사용 시, 지정 타깃 대상으로 <다연장 미사일> 스킬 협동 공격을 합니다."
    ]
  },
  "passive7": {
    "key": "passive7",
    "name": "스파르탄 포메이션",
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
              "on": {
                "in_squad": "Char_AGS_SpartanC_N"
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
                    "desc": "스파르탄 포메이션 : 공격력+{0}%",
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
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "스쿼드에 다른 스파르탄 타입 기체가 있는 경우, 대상들을 지휘하며 공격을 지원해줍니다.",
      "지휘를 받는 스파르탄들은 [공격력 +:20~1:%]과 [행동력 +:10~0.5:%]가 증가하며 [받는 피해 -:20~1:%]가 감소합니다.",
      "스파르탄 타입 기체 : [$ch;AGS_SpartanA] / [$ch;AGS_SpartanB]"
    ]
  }
};