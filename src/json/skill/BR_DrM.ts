export default {
  "active1": {
    "key": "active1",
    "name": "내구력 테스트에요!",
    "icon": "MeleeAttack",
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
          "ap": 10,
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
                    "desc": "내구력 테스트! : 방어력 {0}%",
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
                    "desc": "내구력 테스트! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "테스트 불합격! : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테스트 완료! : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "테스트 완료! : 받는 피해+{0}%",
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
            }
          ]
        },
        {
          "rate": 2.85,
          "type": 0,
          "range": 2,
          "ap": 10,
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
                    "desc": "내구력 테스트! : 방어력 {0}%",
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
                    "desc": "내구력 테스트! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "테스트 불합격! : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테스트 완료! : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "테스트 완료! : 받는 피해+{0}%",
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
            }
          ]
        },
        {
          "rate": 3.08,
          "type": 0,
          "range": 2,
          "ap": 10,
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
                    "desc": "내구력 테스트! : 방어력 {0}%",
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
                    "desc": "내구력 테스트! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "테스트 불합격! : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테스트 완료! : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "테스트 완료! : 받는 피해+{0}%",
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
            }
          ]
        },
        {
          "rate": 3.31,
          "type": 0,
          "range": 2,
          "ap": 10,
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
                    "desc": "내구력 테스트! : 방어력 {0}%",
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
                    "desc": "내구력 테스트! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "테스트 불합격! : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테스트 완료! : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "테스트 완료! : 받는 피해+{0}%",
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
            }
          ]
        },
        {
          "rate": 3.54,
          "type": 0,
          "range": 2,
          "ap": 10,
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
                    "desc": "내구력 테스트! : 방어력 {0}%",
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
                    "desc": "내구력 테스트! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "테스트 불합격! : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테스트 완료! : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "테스트 완료! : 받는 피해+{0}%",
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
            }
          ]
        },
        {
          "rate": 3.77,
          "type": 0,
          "range": 2,
          "ap": 10,
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
                    "desc": "내구력 테스트! : 방어력 {0}%",
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
                    "desc": "내구력 테스트! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "테스트 불합격! : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테스트 완료! : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "테스트 완료! : 받는 피해+{0}%",
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
            }
          ]
        },
        {
          "rate": 4,
          "type": 0,
          "range": 2,
          "ap": 10,
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
                    "desc": "내구력 테스트! : 방어력 {0}%",
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
                    "desc": "내구력 테스트! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "테스트 불합격! : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테스트 완료! : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "테스트 완료! : 받는 피해+{0}%",
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
            }
          ]
        },
        {
          "rate": 4.23,
          "type": 0,
          "range": 2,
          "ap": 10,
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
                    "desc": "내구력 테스트! : 방어력 {0}%",
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
                    "desc": "내구력 테스트! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "테스트 불합격! : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테스트 완료! : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "테스트 완료! : 받는 피해+{0}%",
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
            }
          ]
        },
        {
          "rate": 4.46,
          "type": 0,
          "range": 2,
          "ap": 10,
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
                    "desc": "내구력 테스트! : 방어력 {0}%",
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
                    "desc": "내구력 테스트! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "테스트 불합격! : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테스트 완료! : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "테스트 완료! : 받는 피해+{0}%",
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
            }
          ]
        },
        {
          "rate": 4.69,
          "type": 0,
          "range": 2,
          "ap": 10,
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
                    "desc": "내구력 테스트! : 방어력 {0}%",
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
                    "desc": "내구력 테스트! : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "테스트 불합격! : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테스트 완료! : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "테스트 완료! : 받는 피해+{0}%",
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
            }
          ]
        }
      ]
    },
    "desc": [
      "지정 대상에게 [@:공격력 :0~0:배 피해]를 줍니다.",
      "2라운드 동안 대상의 [방어력 -:50~2.5:%]가 낮아지며, [받는 피해 +:20~1:%]가 증가하고 [밀기 :1~0:칸] 뒤로 밀립니다.",
      "출력 전개 상태면 50% 확률로 행동 불가 상태로 만들며, 받는 피해 증가 효과가 50% 상승합니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "실험 대상 모집해요!",
    "icon": "Hang",
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
          "rate": 1.22,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "258",
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
                  "icon": "BuffIcon_Pull",
                  "desc": {
                    "desc": "실험 대상 모집! : 앞으로 {0}칸 이동",
                    "type": 0,
                    "value": "2"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 53,
                    "position": {
                      "type": "pull",
                      "range": {
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "실험 대상 모집! : 이동 불가",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 해제 (50% 확률)",
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
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제 (50% 확률)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "실험 대상 모집! : AP {0}",
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제",
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
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.325,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "258",
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
                  "icon": "BuffIcon_Pull",
                  "desc": {
                    "desc": "실험 대상 모집! : 앞으로 {0}칸 이동",
                    "type": 0,
                    "value": "2"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 53,
                    "position": {
                      "type": "pull",
                      "range": {
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "실험 대상 모집! : 이동 불가",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 해제 (50% 확률)",
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
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제 (50% 확률)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "실험 대상 모집! : AP {0}",
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제",
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
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.43,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "258",
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
                  "icon": "BuffIcon_Pull",
                  "desc": {
                    "desc": "실험 대상 모집! : 앞으로 {0}칸 이동",
                    "type": 0,
                    "value": "2"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 53,
                    "position": {
                      "type": "pull",
                      "range": {
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "실험 대상 모집! : 이동 불가",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 해제 (50% 확률)",
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
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제 (50% 확률)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "실험 대상 모집! : AP {0}",
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제",
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
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.535,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "258",
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
                  "icon": "BuffIcon_Pull",
                  "desc": {
                    "desc": "실험 대상 모집! : 앞으로 {0}칸 이동",
                    "type": 0,
                    "value": "2"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 53,
                    "position": {
                      "type": "pull",
                      "range": {
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "실험 대상 모집! : 이동 불가",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 해제 (50% 확률)",
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
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제 (50% 확률)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "실험 대상 모집! : AP {0}",
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제",
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
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.64,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "258",
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
                  "icon": "BuffIcon_Pull",
                  "desc": {
                    "desc": "실험 대상 모집! : 앞으로 {0}칸 이동",
                    "type": 0,
                    "value": "2"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 53,
                    "position": {
                      "type": "pull",
                      "range": {
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "실험 대상 모집! : 이동 불가",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 해제 (50% 확률)",
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
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제 (50% 확률)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "실험 대상 모집! : AP {0}",
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제",
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
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.745,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "258",
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
                  "icon": "BuffIcon_Pull",
                  "desc": {
                    "desc": "실험 대상 모집! : 앞으로 {0}칸 이동",
                    "type": 0,
                    "value": "2"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 53,
                    "position": {
                      "type": "pull",
                      "range": {
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "실험 대상 모집! : 이동 불가",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 해제 (50% 확률)",
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
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제 (50% 확률)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "실험 대상 모집! : AP {0}",
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제",
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
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.85,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "258",
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
                  "icon": "BuffIcon_Pull",
                  "desc": {
                    "desc": "실험 대상 모집! : 앞으로 {0}칸 이동",
                    "type": 0,
                    "value": "2"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 53,
                    "position": {
                      "type": "pull",
                      "range": {
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "실험 대상 모집! : 이동 불가",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 해제 (50% 확률)",
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
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제 (50% 확률)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "실험 대상 모집! : AP {0}",
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제",
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
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.955,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "258",
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
                  "icon": "BuffIcon_Pull",
                  "desc": {
                    "desc": "실험 대상 모집! : 앞으로 {0}칸 이동",
                    "type": 0,
                    "value": "2"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 53,
                    "position": {
                      "type": "pull",
                      "range": {
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "실험 대상 모집! : 이동 불가",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 해제 (50% 확률)",
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
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제 (50% 확률)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "실험 대상 모집! : AP {0}",
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제",
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
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.06,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "258",
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
                  "icon": "BuffIcon_Pull",
                  "desc": {
                    "desc": "실험 대상 모집! : 앞으로 {0}칸 이동",
                    "type": 0,
                    "value": "2"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 53,
                    "position": {
                      "type": "pull",
                      "range": {
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "실험 대상 모집! : 이동 불가",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 해제 (50% 확률)",
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
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제 (50% 확률)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "실험 대상 모집! : AP {0}",
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제",
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
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.165,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "258",
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
                  "icon": "BuffIcon_Pull",
                  "desc": {
                    "desc": "실험 대상 모집! : 앞으로 {0}칸 이동",
                    "type": 0,
                    "value": "2"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 53,
                    "position": {
                      "type": "pull",
                      "range": {
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "실험 대상 모집! : 이동 불가",
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
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 해제 (50% 확률)",
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
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제 (50% 확률)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 99,
                    "off": 0
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "실험 대상 모집! : AP {0}",
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
                    "Effect_BR_DrM_N_4",
                    "Effect_BR_DrM_N_16"
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "실험 대상 모집! : 강화 효과 해제",
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
      "목표 범위 내 대상을 포획해, [@:공격력 :0~0:배 피해]를 주며 [당기기 :2~0:칸] 앞으로 당깁니다.",
      "2라운드 동안 이동 불가 상태가 되며, [AP -:1~0.05:]가 감소합니다.",
      "50% 확률로 강화 효과를 해제하며, 출력 전개 상태면 100% 해제합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "새 발명품이에요!",
    "icon": "TeamAtkBuff",
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
          "grid": "28",
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
                    1
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "수상한 무기 : 공격력+{0}%",
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
                    "desc": "수상한 분석기 : 치명타+{0}%",
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
                    "type": 9,
                    "critical": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "수상한 보조 장치 : 행동력+{0}%",
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
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "수상한 조준기 : 적중+{0}%",
                    "type": 1,
                    "value": "0.300000"
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
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "수상한 외장 장갑 : 받는 피해 {0}% 감소",
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
                    "type": 36,
                    "damage_reduce": {
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
                  "func": "OR",
                  "select": [
                    9
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "수상한 분석기 : 치명타+{0}%",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "round",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    7
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "수상한 조준기 : 적중+{0}%",
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
                }
              ],
              "maxStack": 1
            },
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "수상한 보조 장치 : 행동력+{0}%",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "round",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    36
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "수상한 외장 장갑 : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
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
        },
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
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    1
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "수상한 무기 : 공격력+{0}%",
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
                    "desc": "수상한 분석기 : 치명타+{0}%",
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
                    "type": 9,
                    "critical": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "수상한 보조 장치 : 행동력+{0}%",
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
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "수상한 조준기 : 적중+{0}%",
                    "type": 1,
                    "value": "0.300000"
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
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "수상한 외장 장갑 : 받는 피해 {0}% 감소",
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
                    "type": 36,
                    "damage_reduce": {
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
                  "func": "OR",
                  "select": [
                    9
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "수상한 분석기 : 치명타+{0}%",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "round",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    7
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "수상한 조준기 : 적중+{0}%",
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
                }
              ],
              "maxStack": 1
            },
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "수상한 보조 장치 : 행동력+{0}%",
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
                }
              ],
              "maxStack": 1
            },
            {
              "on": "round",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    36
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "수상한 외장 장갑 : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
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
      "라운드 개시 시, 자신에게 적용된 강화 효과를 분석해 새 발명품을 만들어 주변 아군들에게 전달합니다.",
      "{스킬 레벨 10에서 범위가 증가}합니다.",
      "<공격력 : [공격력 +:15~0.75:%]> / <치명타 : [치명타 +:10~0.5:%]> / <행동력 : [행동력 +:5~0.25:%]> / <적중 : [적중 +:30~1.5:%]> / <받는 피해 감소 : [받는 피해 -:10~0.5:%]>"
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "출력 전개에요!",
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
        1
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "출력 전개! : 공격력+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "출력 전개! : 행동력+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "출력 전개! : 치명타+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
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
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "분석 개시! : AP+{0}",
                    "type": 0,
                    "value": "4"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": 4,
                      "per": 0.2
                    }
                  },
                  "overlap": 0
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
                    "desc": "분석했어요! : 다음 적 정보 획득",
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
          "buff_rate": 100,
          "buffs": [
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "출력 전개! : 공격력+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "출력 전개! : 행동력+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "출력 전개! : 치명타+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
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
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "분석 개시! : AP+{0}",
                    "type": 0,
                    "value": "4"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": 4,
                      "per": 0.2
                    }
                  },
                  "overlap": 0
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
                    "desc": "분석했어요! : 다음 적 정보 획득",
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
              "maxStack": 1
            }
          ]
        }
      ]
    },
    "desc": [
      "대기 시, 기체의 출력을 강화해 2라운드 동안 [공격력 +:20~1:%] / [행동력 +:25~1.25:%] / [치명타 +:10~0.5:%]가 증가합니다.",
      "{스킬 레벨 10에서 효과 라운드가 1 증가}합니다."
    ]
  },
  "passive5": {
    "key": "passive5",
    "name": "분석했어요!",
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
              "on": "wave",
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
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "분석 개시! : AP+{0}",
                    "type": 0,
                    "value": "4"
                  },
                  "attr": 1,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 20,
                    "ap": {
                      "base": 4,
                      "per": 0.2
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_SCOUTING",
                  "desc": {
                    "desc": "분석했어요! : 다음 적 정보 획득",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 23,
                    "scout": true
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "분석 완료! : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.006000"
                  },
                  "attr": 1,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-0.6%",
                      "per": "-0.4%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "공격 패턴 예측! : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.006000"
                  },
                  "attr": 1,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-0.6%",
                      "per": "-0.4%"
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
      "전투 개시 시, 적을 분해해서 연구하기 위해 [AP +:4~0.2:]가 증가합니다.",
      "전투 종료 시, 다음에 출현할 적 정보를 얻습니다.",
      "정찰 상태로 전투 개시 시, 적의 [공격력 -:0.6~0.4:%] / [치명타 -:0.6~0.4:%]가 감소합니다."
    ]
  }
};