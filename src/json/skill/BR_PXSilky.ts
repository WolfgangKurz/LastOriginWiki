export default {
  "active1": {
    "key": "active1",
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
          "rate": 1,
          "type": 0,
          "range": 3,
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
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "점착탄 : 회피율 {0}%",
                    "type": 1,
                    "value": "-0.400000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-40%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "점착탄 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "점착탄 : 이동 불가",
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
            }
          ]
        },
        {
          "rate": 1.05,
          "type": 0,
          "range": 3,
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
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "점착탄 : 회피율 {0}%",
                    "type": 1,
                    "value": "-0.400000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-40%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "점착탄 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "점착탄 : 이동 불가",
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
            }
          ]
        },
        {
          "rate": 1.1,
          "type": 0,
          "range": 3,
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
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "점착탄 : 회피율 {0}%",
                    "type": 1,
                    "value": "-0.400000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-40%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "점착탄 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "점착탄 : 이동 불가",
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
            }
          ]
        },
        {
          "rate": 1.15,
          "type": 0,
          "range": 3,
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
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "점착탄 : 회피율 {0}%",
                    "type": 1,
                    "value": "-0.400000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-40%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "점착탄 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "점착탄 : 이동 불가",
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
            }
          ]
        },
        {
          "rate": 1.2,
          "type": 0,
          "range": 3,
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
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "점착탄 : 회피율 {0}%",
                    "type": 1,
                    "value": "-0.400000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-40%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "점착탄 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "점착탄 : 이동 불가",
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
            }
          ]
        },
        {
          "rate": 1.25,
          "type": 0,
          "range": 3,
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
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "점착탄 : 회피율 {0}%",
                    "type": 1,
                    "value": "-0.400000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-40%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "점착탄 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "점착탄 : 이동 불가",
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
            }
          ]
        },
        {
          "rate": 1.3,
          "type": 0,
          "range": 3,
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
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "점착탄 : 회피율 {0}%",
                    "type": 1,
                    "value": "-0.400000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-40%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "점착탄 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "점착탄 : 이동 불가",
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
            }
          ]
        },
        {
          "rate": 1.35,
          "type": 0,
          "range": 3,
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
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "점착탄 : 회피율 {0}%",
                    "type": 1,
                    "value": "-0.400000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-40%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "점착탄 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "점착탄 : 이동 불가",
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
            }
          ]
        },
        {
          "rate": 1.4,
          "type": 0,
          "range": 3,
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
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "점착탄 : 회피율 {0}%",
                    "type": 1,
                    "value": "-0.400000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-40%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "점착탄 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "점착탄 : 이동 불가",
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
            }
          ]
        },
        {
          "rate": 1.45,
          "type": 0,
          "range": 3,
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
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "점착탄 : 회피율 {0}%",
                    "type": 1,
                    "value": "-0.400000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-40%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "점착탄 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "점착탄 : 이동 불가",
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
            }
          ]
        }
      ]
    }
  },
  "active2": {
    "key": "active2",
    "icon": "SelfSpdBuff",
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
          "range": 6,
          "ap": 7,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 999,
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
              "target": 1,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "현장 보급 : AP+{0}",
                    "type": 0,
                    "value": "4"
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
                      "base": 4,
                      "per": 0.2
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_DEBUFF",
                  "desc": {
                    "desc": "현장 보급 : 해로운 효과 제거",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 100,
                    "off": 1
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "현장 보급 : 공격력+{0}% (공격기)",
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
                    "type": 1,
                    "attack": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_UP",
                  "desc": {
                    "desc": "현장 보급 : 방어력+{0}% (보호기)",
                    "type": 1,
                    "value": "0.500000"
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
                      "base": "50%",
                      "per": "2.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "현장 보급 : AP+{0} (지원기)",
                    "type": 0,
                    "value": "2"
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
                      "base": 2,
                      "per": 0.1
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
                1
              ],
              "target": 1,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "현장 보급 : 공격력+{0}% (공격기)",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
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
                0
              ],
              "target": 1,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_UP",
                  "desc": {
                    "desc": "현장 보급 : 방어력+{0}% (보호기)",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "50%",
                      "per": "2.5%"
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
                2
              ],
              "target": 1,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "현장 보급 : AP+{0} (지원기)",
                    "type": 0,
                    "value": "2"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": 2,
                      "per": 0.1
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
              "target": 1,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "현장 보급 : AP+{0}",
                    "type": 0,
                    "value": "4"
                  },
                  "attr": 3,
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
            }
          ]
        }
      ]
    }
  },
  "passive3": {
    "key": "passive3",
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
                    "desc": "웅크리기 : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 3,
                  "erase": {
                    "until": "damaged"
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "15%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_UP",
                  "desc": {
                    "desc": "웅크리기 : 방어력+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 3,
                  "erase": {
                    "until": "damaged"
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "25%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 2
            }
          ]
        }
      ]
    }
  },
  "passive4": {
    "key": "passive4",
    "icon": "TeamDefBuff",
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
          "grid": "6>45",
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
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "거대 배낭 : 회피+{0}% (기동 제외)",
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
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "거대 배낭 : 받는 피해 {0}% 감소 (기동 제외)",
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
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "거대 배낭 : 적중 {0}% (기동 제외)",
                    "type": 1,
                    "value": "-0.300000"
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
                      "base": "-30%",
                      "per": "-1.5%"
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
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "거대 배낭 : 적중 {0}% (기동 제외)",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
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
              "maxStack": 0
            }
          ]
        }
      ]
    }
  }
};