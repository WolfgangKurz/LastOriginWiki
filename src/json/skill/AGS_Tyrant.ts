export default {
  "active1": {
    "key": "active1",
    "name": "타이런트 바이트",
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
          "rate": 2.62,
          "type": 0,
          "range": 2,
          "ap": 9,
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
                  "icon": "BuffIcon_DamageAmp_Opp",
                  "desc": {
                    "desc": "타이런트 바이트 : 적 HP% 낮을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
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
                        "base": "40%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "타이런트 바이트 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "타이런트 바이트 : 피해 감소 효과 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 0,
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
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화 (최대 5중첩)",
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
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
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
                "hp>=": "50%"
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
                    "desc": "회심의 분쇄 : 피해 감소 효과 해제",
                    "type": 1,
                    "value": "36"
                  },
                  "attr": 3,
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 999
                  },
                  "value": {
                    "isBuff": true,
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 5
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
                    "desc": "타이런트 바이트 : 방어력 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.85,
          "type": 0,
          "range": 2,
          "ap": 9,
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
                  "icon": "BuffIcon_DamageAmp_Opp",
                  "desc": {
                    "desc": "타이런트 바이트 : 적 HP% 낮을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
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
                        "base": "40%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "타이런트 바이트 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "타이런트 바이트 : 피해 감소 효과 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 0,
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
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화 (최대 5중첩)",
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
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
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
                "hp>=": "50%"
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
                    "desc": "회심의 분쇄 : 피해 감소 효과 해제",
                    "type": 1,
                    "value": "36"
                  },
                  "attr": 3,
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 999
                  },
                  "value": {
                    "isBuff": true,
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 5
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
                    "desc": "타이런트 바이트 : 방어력 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 3.08,
          "type": 0,
          "range": 2,
          "ap": 9,
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
                  "icon": "BuffIcon_DamageAmp_Opp",
                  "desc": {
                    "desc": "타이런트 바이트 : 적 HP% 낮을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
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
                        "base": "40%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "타이런트 바이트 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "타이런트 바이트 : 피해 감소 효과 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 0,
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
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화 (최대 5중첩)",
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
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
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
                "hp>=": "50%"
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
                    "desc": "회심의 분쇄 : 피해 감소 효과 해제",
                    "type": 1,
                    "value": "36"
                  },
                  "attr": 3,
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 999
                  },
                  "value": {
                    "isBuff": true,
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 5
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
                    "desc": "타이런트 바이트 : 방어력 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 3.31,
          "type": 0,
          "range": 2,
          "ap": 9,
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
                  "icon": "BuffIcon_DamageAmp_Opp",
                  "desc": {
                    "desc": "타이런트 바이트 : 적 HP% 낮을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
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
                        "base": "40%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "타이런트 바이트 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "타이런트 바이트 : 피해 감소 효과 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 0,
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
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화 (최대 5중첩)",
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
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
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
                "hp>=": "50%"
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
                    "desc": "회심의 분쇄 : 피해 감소 효과 해제",
                    "type": 1,
                    "value": "36"
                  },
                  "attr": 3,
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 999
                  },
                  "value": {
                    "isBuff": true,
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 5
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
                    "desc": "타이런트 바이트 : 방어력 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 3.54,
          "type": 0,
          "range": 2,
          "ap": 9,
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
                  "icon": "BuffIcon_DamageAmp_Opp",
                  "desc": {
                    "desc": "타이런트 바이트 : 적 HP% 낮을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
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
                        "base": "40%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "타이런트 바이트 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "타이런트 바이트 : 피해 감소 효과 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 0,
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
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화 (최대 5중첩)",
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
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
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
                "hp>=": "50%"
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
                    "desc": "회심의 분쇄 : 피해 감소 효과 해제",
                    "type": 1,
                    "value": "36"
                  },
                  "attr": 3,
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 999
                  },
                  "value": {
                    "isBuff": true,
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 5
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
                    "desc": "타이런트 바이트 : 방어력 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 3.77,
          "type": 0,
          "range": 2,
          "ap": 9,
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
                  "icon": "BuffIcon_DamageAmp_Opp",
                  "desc": {
                    "desc": "타이런트 바이트 : 적 HP% 낮을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
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
                        "base": "40%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "타이런트 바이트 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "타이런트 바이트 : 피해 감소 효과 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 0,
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
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화 (최대 5중첩)",
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
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
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
                "hp>=": "50%"
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
                    "desc": "회심의 분쇄 : 피해 감소 효과 해제",
                    "type": 1,
                    "value": "36"
                  },
                  "attr": 3,
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 999
                  },
                  "value": {
                    "isBuff": true,
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 5
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
                    "desc": "타이런트 바이트 : 방어력 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 4,
          "type": 0,
          "range": 2,
          "ap": 9,
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
                  "icon": "BuffIcon_DamageAmp_Opp",
                  "desc": {
                    "desc": "타이런트 바이트 : 적 HP% 낮을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
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
                        "base": "40%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "타이런트 바이트 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "타이런트 바이트 : 피해 감소 효과 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 0,
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
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화 (최대 5중첩)",
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
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
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
                "hp>=": "50%"
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
                    "desc": "회심의 분쇄 : 피해 감소 효과 해제",
                    "type": 1,
                    "value": "36"
                  },
                  "attr": 3,
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 999
                  },
                  "value": {
                    "isBuff": true,
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 5
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
                    "desc": "타이런트 바이트 : 방어력 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 4.23,
          "type": 0,
          "range": 2,
          "ap": 9,
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
                  "icon": "BuffIcon_DamageAmp_Opp",
                  "desc": {
                    "desc": "타이런트 바이트 : 적 HP% 낮을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
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
                        "base": "40%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "타이런트 바이트 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "타이런트 바이트 : 피해 감소 효과 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 0,
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
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화 (최대 5중첩)",
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
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
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
                "hp>=": "50%"
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
                    "desc": "회심의 분쇄 : 피해 감소 효과 해제",
                    "type": 1,
                    "value": "36"
                  },
                  "attr": 3,
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 999
                  },
                  "value": {
                    "isBuff": true,
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 5
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
                    "desc": "타이런트 바이트 : 방어력 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 4.46,
          "type": 0,
          "range": 2,
          "ap": 9,
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
                  "icon": "BuffIcon_DamageAmp_Opp",
                  "desc": {
                    "desc": "타이런트 바이트 : 적 HP% 낮을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
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
                        "base": "40%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "타이런트 바이트 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "타이런트 바이트 : 피해 감소 효과 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 0,
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
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화 (최대 5중첩)",
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
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
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
                "hp>=": "50%"
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
                    "desc": "회심의 분쇄 : 피해 감소 효과 해제",
                    "type": 1,
                    "value": "36"
                  },
                  "attr": 3,
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 999
                  },
                  "value": {
                    "isBuff": true,
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 5
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
                    "desc": "타이런트 바이트 : 방어력 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 4.69,
          "type": 0,
          "range": 2,
          "ap": 9,
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
                  "icon": "BuffIcon_DamageAmp_Opp",
                  "desc": {
                    "desc": "타이런트 바이트 : 적 HP% 낮을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
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
                        "base": "40%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "타이런트 바이트 : 방어력 {0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "타이런트 바이트 : 피해 감소 효과 해제",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 0,
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
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화 (최대 5중첩)",
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
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
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
                "hp>=": "50%"
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
                    "desc": "회심의 분쇄 : 피해 감소 효과 해제",
                    "type": 1,
                    "value": "36"
                  },
                  "attr": 3,
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "포식자 : <포식자> 활성화",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 999
                  },
                  "value": {
                    "isBuff": true,
                    "type": 0,
                    "attack": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 5
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
                    "desc": "타이런트 바이트 : 방어력 {0}%",
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
                }
              ],
              "maxStack": 1
            }
          ]
        }
      ]
    },
    "desc": [
      "대상을 물어뜯어 [@:공격력 :0~0:배 피해]를 주고, 2라운드 동안 [방어력 -:50~2.5:%]를 낮춥니다.",
      "대상의 현재 HP%가 낮을수록 [피해량 +:40~2:%]가 증가하며, <포식자> 중첩이 1 증가합니다.",
      "자신의 HP가 50% 이상이면, 대상의 피해 감소 효과를 해제합니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "프라이멀 파이어",
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
          "rate": 1.665,
          "type": 1,
          "range": 5,
          "ap": 10,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_AGS_Tyrant_N_12",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.2 : <포식자> 1중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.3 : <포식자> 2중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
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
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
                  ],
                  "stack": 1,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.2)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.3)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
          "rate": 1.815,
          "type": 1,
          "range": 5,
          "ap": 10,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_AGS_Tyrant_N_12",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.2 : <포식자> 1중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.3 : <포식자> 2중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
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
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
                  ],
                  "stack": 1,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.2)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.3)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
          "rate": 1.965,
          "type": 1,
          "range": 5,
          "ap": 10,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_AGS_Tyrant_N_12",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.2 : <포식자> 1중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.3 : <포식자> 2중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
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
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
                  ],
                  "stack": 1,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.2)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.3)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
          "rate": 2.115,
          "type": 1,
          "range": 5,
          "ap": 10,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_AGS_Tyrant_N_12",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.2 : <포식자> 1중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.3 : <포식자> 2중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
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
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
                  ],
                  "stack": 1,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.2)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.3)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
          "rate": 2.265,
          "type": 1,
          "range": 5,
          "ap": 10,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_AGS_Tyrant_N_12",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.2 : <포식자> 1중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.3 : <포식자> 2중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
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
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
                  ],
                  "stack": 1,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.2)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.3)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
          "rate": 2.415,
          "type": 1,
          "range": 5,
          "ap": 10,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_AGS_Tyrant_N_12",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.2 : <포식자> 1중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.3 : <포식자> 2중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
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
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
                  ],
                  "stack": 1,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.2)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.3)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
          "rate": 2.565,
          "type": 1,
          "range": 5,
          "ap": 10,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_AGS_Tyrant_N_12",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.2 : <포식자> 1중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.3 : <포식자> 2중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
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
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
                  ],
                  "stack": 1,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.2)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.3)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
          "rate": 2.715,
          "type": 1,
          "range": 5,
          "ap": 10,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_AGS_Tyrant_N_12",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.2 : <포식자> 1중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.3 : <포식자> 2중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
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
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
                  ],
                  "stack": 1,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.2)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.3)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
          "rate": 2.865,
          "type": 1,
          "range": 5,
          "ap": 10,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_AGS_Tyrant_N_12",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.2 : <포식자> 1중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.3 : <포식자> 2중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
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
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
                  ],
                  "stack": 1,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.2)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.3)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
          "rate": 3.015,
          "type": 1,
          "range": 5,
          "ap": 10,
          "grid": "4>34569",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_AGS_Tyrant_N_12",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.2 : <포식자> 1중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 Lv.3 : <포식자> 2중첩 이상",
                    "type": 1,
                    "value": "-0.010000"
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
                        "base": "-1%",
                        "per": "0%"
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
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
                  ],
                  "stack": 1,
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.2)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "프라이멀 파이어 : 화염 저항 {0}% (Lv.3)",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "criticaled",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Overclock_N_1",
                    "Effect_BUFF_Overclock_N_2",
                    "Effect_BUFF_Overclock_N_3",
                    "Effect_BUFF_Overclock_N_4",
                    "Effect_BUFF_Overclock_N_5",
                    "Effect_BUFF_Overclock_N_6",
                    "Effect_BUFF_Overclock_N_7",
                    "Effect_BUFF_Overclock_N_8",
                    "Effect_BUFF_Overclock_N_9",
                    "Effect_BUFF_Overclock_N_10",
                    "Effect_BUFF_Overclock_N_11",
                    "Effect_BUFF_Overclock_N_12",
                    "Effect_BUFF_Overclock_N_13",
                    "Effect_BUFF_Overclock_N_14",
                    "Effect_BUFF_Overclock_N_15",
                    "Effect_BUFF_Overclock_N_16",
                    "Effect_BUFF_Overclock_N_17",
                    "Effect_BUFF_Overclock_N_18",
                    "Effect_BUFF_Overclock_N_19",
                    "Effect_BUFF_Overclock_N_20"
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
                    "desc": "출력 제한 해제 : 피해량+{0}%",
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
      "플라즈마를 분사해 지정 범위에 [@,#fire:공격력 :0~0:배 화염 피해]를 줍니다.",
      "2라운드 동안 [#fire:화염 저항 -:20~1:%]를 감소시키며, <포식자> 중첩이 높을수록 최대 3단계까지 감소합니다.",
      "<포식자> 중첩을 1 소모하며, {스킬 레벨 10에서 범위가 증가}합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "전장의 폭군",
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
                "pos": 0
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
                    "desc": "전장의 폭군 : 공격력+{0}% (최대)",
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
                      "per": "1.2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "전장의 폭군 : 치명타+{0}% (최대)",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "12%",
                      "per": "0.6%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "전장의 폭군 : 방어 관통+{0}% (최대)",
                    "type": 1,
                    "value": "0.340000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "34%",
                      "per": "4%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_BARRIER_PIERCE",
                  "desc": {
                    "desc": "전장의 폭군 : 방어막 / 피해 감소 무시 (포식자 활성화 시)",
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
                    "type": 94,
                    "penetration_force": true
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "출력 제한 해제 : 피해량+{0}% (치명타 시)",
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "전장의 폭군 : 공격력+{0}%",
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
                      "per": "0.9%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "전장의 폭군 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.090000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "9%",
                      "per": "0.45%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "전장의 폭군 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "23%",
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "전장의 폭군 : 공격력+{0}%",
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
                      "per": "0.6%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "전장의 폭군 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "6%",
                      "per": "0.3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "전장의 폭군 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "17%",
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
                  "func": "OR",
                  "select": [
                    "Effect_AGS_Tyrant_N_12"
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
                  "icon": "BuffIcon_BARRIER_PIERCE",
                  "desc": {
                    "desc": "전장의 폭군 : 방어막 / 피해 감소 무시 (포식자 활성화 시)",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
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
    },
    "desc": [
      "라운드 개시 시, 전열에 가까울수록 [공격력 +:24~1.2:%] / [치명타 +:12~0.6:%] / [방어 관통 +:34~4:%]가 증가합니다.",
      "후열에서는 반만 적용됩니다.",
      "<포식자> 상태면 방어막 / 피해 감소를 무시하며, [$eq;Sub_Overclock] 장착 상태로 치명타 발동 시 액티브 스킬의 [피해량 +:25~1.25:%]가 증가합니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "압도적 존재감",
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
                  "icon": "BuffIcon_DEF_UP",
                  "desc": {
                    "desc": "압도적 존재감 : 방어력+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "30%",
                      "per": "4%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEBUFF_PERDOWN",
                  "desc": {
                    "desc": "압도적 존재감 : 효과 저항+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "압도적 존재감 : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "15%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "압도적 존재감 : 지정 보호 해제 (자신)",
                    "type": 0,
                    "value": "76"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 76,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "압도적 존재감 : 표식 지정 (자신)",
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
                    "type": 87,
                    "attack_target": true
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
                0,
                1
              ],
              "class": [
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "압도적 존재감 : 지정 보호 해제",
                    "type": 0,
                    "value": "76"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 76,
                      "target": 0
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
                0,
                1
              ],
              "class": [
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "압도적 존재감 : 표식 지정",
                    "type": 1,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_RESSURRECT",
                  "desc": {
                    "desc": "최후의 포효 : {0}HP 전투 속행",
                    "type": 0,
                    "value": "100"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 82,
                    "revive": {
                      "base": 100,
                      "per": 100
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
                    "desc": "최후의 포효 : 행동력+{0}% (해제 불가)",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "40%",
                      "per": "2%"
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
                  "icon": "BuffIcon_REMOVE_DEBUFF",
                  "desc": {
                    "desc": "최후의 포효 : 전투 속행 해제",
                    "type": 1,
                    "value": "82"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 69,
                    "off": {
                      "type": 82
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "압도적 존재감 : 지정 보호 해제",
                    "type": 0,
                    "value": "76"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 76,
                      "target": 0
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
      "적 공격 시, 지정 보호 효과를 해제하며 2라운드 동안 자신에게 표식이 지정됩니다.",
      "라운드 개시 시, [방어력 +:30~4:%] / [효과 저항 +:15~3:%]가 증가하고 [받는 피해 -:15~3:%]가 감소하며 지정 보호 효과를 해제합니다."
    ]
  },
  "passive5": {
    "key": "passive5",
    "name": "최후의 포효",
    "icon": "SuicideBomb",
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
              "on": "self_dead",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_AGS_Tyrant_N_22"
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "최후의 포효 : 공격력 {0}% 고정 피해",
                    "type": 1,
                    "value": "1.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "150%",
                      "per": "20%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_RESSURRECT",
                  "desc": {
                    "desc": "최후의 포효 : {0}HP 전투 속행",
                    "type": 0,
                    "value": "100"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 82,
                    "revive": {
                      "base": 100,
                      "per": 100
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "최후의 포효 : 행동력+{0}% (전투 속행 시/해제 불가)",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "40%",
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
      "전투 개시 시, [:100~100:HP로 전투 속행] 효과가 적용됩니다.",
      "전투 속행 발동 시, [행동력 +:40~2:%]가 크게 증가하며 남은 모든 전투 속행 효과를 해제합니다.",
      "해당 상태에서 파괴되면 적에게 자폭해 [공격력 :150~20:% 고정 피해]를 줍니다."
    ]
  }
};