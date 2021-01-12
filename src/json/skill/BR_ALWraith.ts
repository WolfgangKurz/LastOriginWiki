export default {
  "active1": {
    "key": "active1",
    "name": "공중 저격",
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
          "rate": 1.09,
          "type": 0,
          "range": 3,
          "ap": 5,
          "grid": "single",
          "target_ground": false,
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
                    "desc": "공중 저격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "8%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
          "rate": 1.185,
          "type": 0,
          "range": 3,
          "ap": 5,
          "grid": "single",
          "target_ground": false,
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
                    "desc": "공중 저격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "8%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
          "rate": 1.28,
          "type": 0,
          "range": 3,
          "ap": 5,
          "grid": "single",
          "target_ground": false,
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
                    "desc": "공중 저격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "8%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
          "rate": 1.375,
          "type": 0,
          "range": 3,
          "ap": 5,
          "grid": "single",
          "target_ground": false,
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
                    "desc": "공중 저격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "8%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
          "type": 0,
          "range": 3,
          "ap": 5,
          "grid": "single",
          "target_ground": false,
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
                    "desc": "공중 저격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "8%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
          "rate": 1.565,
          "type": 0,
          "range": 3,
          "ap": 5,
          "grid": "single",
          "target_ground": false,
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
                    "desc": "공중 저격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "8%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
          "rate": 1.66,
          "type": 0,
          "range": 3,
          "ap": 5,
          "grid": "single",
          "target_ground": false,
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
                    "desc": "공중 저격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "8%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
          "rate": 1.755,
          "type": 0,
          "range": 3,
          "ap": 5,
          "grid": "single",
          "target_ground": false,
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
                    "desc": "공중 저격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "8%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
          "rate": 1.85,
          "type": 0,
          "range": 3,
          "ap": 5,
          "grid": "single",
          "target_ground": false,
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
                    "desc": "공중 저격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "8%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
          "rate": 1.945,
          "type": 0,
          "range": 3,
          "ap": 5,
          "grid": "single",
          "target_ground": false,
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
                    "desc": "공중 저격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "8%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
                    "desc": "공중 저격 : 방어력 {0}% 감소",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "-7%",
                      "per": "-2%"
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "공중 저격 : 회피 {0}% 감소",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-12%",
                      "per": "-2%"
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
      "적에게 [@:공격력 :0~0:배 피해]를 주고, 치명타 시 [추가 피해 +:8~3:%]를 입힙니다. 적 적중 시 [방어력 -:7~2:%] / [회피 -:12~2:%]를 감소시킵니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "조준 폭격",
    "icon": "AirStrike",
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
          "rate": 0.05,
          "type": 0,
          "range": 5,
          "ap": 10,
          "grid": "#1$2#3$45$6#7$8#9",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "조준 폭격: [석기 시대로!] 협동 공격",
                    "type": 1,
                    "value": "Char_BR_May_N"
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
                      "with": "Char_BR_May_N"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
          "rate": 0.1,
          "type": 0,
          "range": 5,
          "ap": 10,
          "grid": "#1$2#3$45$6#7$8#9",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "조준 폭격: [석기 시대로!] 협동 공격",
                    "type": 1,
                    "value": "Char_BR_May_N"
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
                      "with": "Char_BR_May_N"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
          "rate": 0.15,
          "type": 0,
          "range": 5,
          "ap": 10,
          "grid": "#1$2#3$45$6#7$8#9",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "조준 폭격: [석기 시대로!] 협동 공격",
                    "type": 1,
                    "value": "Char_BR_May_N"
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
                      "with": "Char_BR_May_N"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
          "rate": 0.2,
          "type": 0,
          "range": 5,
          "ap": 10,
          "grid": "#1$2#3$45$6#7$8#9",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "조준 폭격: [석기 시대로!] 협동 공격",
                    "type": 1,
                    "value": "Char_BR_May_N"
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
                      "with": "Char_BR_May_N"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
          "rate": 0.25,
          "type": 0,
          "range": 5,
          "ap": 10,
          "grid": "#1$2#3$45$6#7$8#9",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "조준 폭격: [석기 시대로!] 협동 공격",
                    "type": 1,
                    "value": "Char_BR_May_N"
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
                      "with": "Char_BR_May_N"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
          "rate": 0.3,
          "type": 0,
          "range": 5,
          "ap": 10,
          "grid": "#1$2#3$45$6#7$8#9",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "조준 폭격: [석기 시대로!] 협동 공격",
                    "type": 1,
                    "value": "Char_BR_May_N"
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
                      "with": "Char_BR_May_N"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
          "rate": 0.35,
          "type": 0,
          "range": 5,
          "ap": 10,
          "grid": "#1$2#3$45$6#7$8#9",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "조준 폭격: [석기 시대로!] 협동 공격",
                    "type": 1,
                    "value": "Char_BR_May_N"
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
                      "with": "Char_BR_May_N"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
          "rate": 0.4,
          "type": 0,
          "range": 5,
          "ap": 10,
          "grid": "#1$2#3$45$6#7$8#9",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "조준 폭격: [석기 시대로!] 협동 공격",
                    "type": 1,
                    "value": "Char_BR_May_N"
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
                      "with": "Char_BR_May_N"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
          "rate": 0.45,
          "type": 0,
          "range": 5,
          "ap": 10,
          "grid": "#1$2#3$45$6#7$8#9",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "조준 폭격: [석기 시대로!] 협동 공격",
                    "type": 1,
                    "value": "Char_BR_May_N"
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
                      "with": "Char_BR_May_N"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
          "rate": 0.5,
          "type": 0,
          "range": 5,
          "ap": 10,
          "grid": "#1$2#3$45$6#7$8#9",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "조준 폭격: [석기 시대로!] 협동 공격",
                    "type": 1,
                    "value": "Char_BR_May_N"
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
                      "with": "Char_BR_May_N"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "조준 폭격 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "23%",
                      "per": "3%"
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "조준 폭격 : 행동력{0}%(해제 불가)",
                    "type": 1,
                    "value": "-0.690000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-69%",
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
      "지정 범위에 [@:공격력 :0~0:배 피해]를 주고, [받는 피해 +:23~3:%]를 증가시킵니다.",
      "스쿼드 내 [$ch;BR_May]가 있을 시, 지정 타깃 대상으로 <석기 시대로!> 스킬 협동 공격을 합니다.",
      "공격 적중 시 자신의 [행동력 -:68~1:%]가 감소합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "하늘의 저격수",
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
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "하늘의 저격수 : 적중+{0}%",
                    "type": 1,
                    "value": "0.070000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "7%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "하늘의 저격수 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.070000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "7%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "하늘의 저격수 : 회피+{0}%",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "12%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "하늘의 저격수 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
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
      "라운드 개시 시, 자신의 [적중 +:7~2:%] / [치명타 +:7~2:%] / [회피 +:12~2:%] / [방어 관통 +:12~2:%]를 증가시킵니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "정밀 타격 지원",
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
          "grid": "6>24568",
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "정밀 타격 지원 : 공격력+{0}%",
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
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "정밀 타격 지원 : 적중+{0}%",
                    "type": 1,
                    "value": "0.120000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "12%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "정밀 타격 지원 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.010000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "1%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "정밀 타격 지원 : [둠 브링어] 소속 효과 +50% 증가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 6,
                    "accuracy": {
                      "base": 0,
                      "per": 0
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
                "target": [
                  "Char_BR_May_N",
                  "Char_BR_NightAngel_N",
                  "Char_BR_Daika_N",
                  "Char_BR_Djinnia_N",
                  "Char_BR_Sylphid_N",
                  "Char_BR_Banshee_N",
                  "Char_BR_ALWraith_N"
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
                    "desc": "정밀 타격 지원 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.030000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "3%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "정밀 타격 지원 : 적중+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "6%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "정밀 타격 지원 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.005000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "0.5%",
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
      "라운드 개시 시, 지정 범위 아군 [공격력 +:6~1:%] / [적중 +:12~2:%] / [치명타 +:1~1:%]를 증가시킵니다.",
      "둠 브링어 소속은 50% 증가된 효과를 받습니다.",
      "둠 브링어 : [$ch;BR_May] / [$ch;BR_NightAngel] / [$ch;BR_Daika] / [$ch;BR_Djinnia] / [$ch;Sylphid] / [$ch;BR_Banshee] / [$ch;BR_ALWraith]"
    ]
  }
};