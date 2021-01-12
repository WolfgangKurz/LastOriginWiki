export default {
  "active1": {
    "key": "active1",
    "name": "브레스트 버스터",
    "icon": "WideBeamShot",
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
          "rate": 1.19,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_PECS_Carolina_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 치명타 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
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
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 3,
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 1.29,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_PECS_Carolina_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 치명타 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
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
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 3,
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 1.39,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_PECS_Carolina_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 치명타 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
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
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 3,
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "30%",
                      "per": "1.5%"
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
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_PECS_Carolina_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 치명타 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
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
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 3,
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 1.59,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_PECS_Carolina_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 치명타 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
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
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 3,
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 1.69,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_PECS_Carolina_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 치명타 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
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
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 3,
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 1.79,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_PECS_Carolina_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 치명타 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
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
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 3,
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 1.89,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_PECS_Carolina_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 치명타 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
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
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 3,
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 1.99,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_PECS_Carolina_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 치명타 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
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
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 3,
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "30%",
                      "per": "1.5%"
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
          "rate": 2.09,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
          "summon": null,
          "use": {
            "key": "Effect_PECS_Carolina_N_4",
            "count": 3
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.150000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-15%",
                      "per": "-0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 치명타 {0}%",
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
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.200000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-20%",
                      "per": "-1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
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
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.2 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
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
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 3,
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
                  "icon": "BuffIcon_ATK_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 공격력 {0}%",
                    "type": 1,
                    "value": "-0.075000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "-7.5%",
                      "per": "-0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 치명타 {0}%",
                    "type": 1,
                    "value": "-0.050000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "-5%",
                      "per": "-0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 적중 {0}%",
                    "type": 1,
                    "value": "-0.100000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-10%",
                      "per": "-0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "Lv.3 B. 버스터 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "30%",
                      "per": "1.5%"
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
      "음파를 발사해 [@:공격력 :0~0:배 피해]를 줍니다.",
      "대상의 [공격력 -:15~0.75:%] / [치명타 -:10~0.5:%] / [적중 -:20~1:%]가 감소하며, <치어 리더> 중첩에 따라 효과가 최대 2배까지 증폭됩니다.",
      "중첩이 3인 경우, 대상이 [받는 피해 +:30~1.5:%]가 증가합니다.",
      "<치어 리더> 중첩을 모두 소모합니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "치어 업!",
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
          "ap": 8,
          "grid": "24568",
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
                0
              ],
              "class": [
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
                    "desc": "치어 업! : 공격력+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_UP",
                  "desc": {
                    "desc": "치어 업! : 방어력+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "15%",
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "치어 업! : 적중+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "15%",
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "치어 업! : 회피+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "15%",
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_DEBUFF",
                  "desc": {
                    "desc": "Lv.3 치어 업! : 해로운 효과 해제",
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
                    "type": 100,
                    "off": 1
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 2,
                  "attr": 4
                }
              },
              "body": [
                0
              ],
              "class": [
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "Lv.2 치어 업! : 공격력+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_UP",
                  "desc": {
                    "desc": "Lv.2 치어 업! : 방어력+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "Lv.2 치어 업! : 적중+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "Lv.2 치어 업! : 회피+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "7.5%",
                      "per": "0.38%"
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
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 3,
                  "attr": 4
                }
              },
              "body": [
                0
              ],
              "class": [
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "Lv.3 치어 업! : 공격력+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_UP",
                  "desc": {
                    "desc": "Lv.3 치어 업! : 방어력+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "Lv.3 치어 업! : 적중+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "Lv.3 치어 업! : 회피+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_DEBUFF",
                  "desc": {
                    "desc": "Lv.3 치어 업! : 해로운 효과 해제",
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
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 0,
          "type": 0,
          "range": 0,
          "ap": 8,
          "grid": "fill",
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
                0
              ],
              "class": [
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
                    "desc": "치어 업! : 공격력+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_UP",
                  "desc": {
                    "desc": "치어 업! : 방어력+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "15%",
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "치어 업! : 적중+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "15%",
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "치어 업! : 회피+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "15%",
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_DEBUFF",
                  "desc": {
                    "desc": "Lv.3 치어 업! : 해로운 효과 해제",
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
                    "type": 100,
                    "off": 1
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 2,
                  "attr": 4
                }
              },
              "body": [
                0
              ],
              "class": [
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "Lv.2 치어 업! : 공격력+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_UP",
                  "desc": {
                    "desc": "Lv.2 치어 업! : 방어력+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "Lv.2 치어 업! : 적중+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "Lv.2 치어 업! : 회피+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "7.5%",
                      "per": "0.38%"
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
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "stack": 3,
                  "attr": 4
                }
              },
              "body": [
                0
              ],
              "class": [
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "Lv.3 치어 업! : 공격력+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "5%",
                      "per": "0.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_UP",
                  "desc": {
                    "desc": "Lv.3 치어 업! : 방어력+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 3,
                    "defense": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "Lv.3 치어 업! : 적중+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "Lv.3 치어 업! : 회피+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_DEBUFF",
                  "desc": {
                    "desc": "Lv.3 치어 업! : 해로운 효과 해제",
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
      "주변 바이오로이드들을 응원해 [공격력 +:10~0.5:%] / [방어력 +:15~0.75:%] / [적중 +:15~0.75:%] / [회피 +:15~0.75:%]를 증가시킵니다.",
      "<치어 리더> 중첩에 따라 효과가 2배까지 증가합니다.",
      "중첩이 3인 경우, 해로운 효과를 해제합니다.",
      "{스킬 레벨 10에서 범위가 증가}합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "LBRB 스피커",
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
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "attr": 4
                }
              },
              "body": [
                0
              ],
              "class": [
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
                    "desc": "RB 스피커 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "RB 스피커 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "8%",
                      "per": "0.4%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "LB 스피커 : AP+{0}",
                    "type": 0,
                    "value": "0.500000"
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
                      "base": 0.5,
                      "per": 0.025
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "LB 스피커 : 행동력+{0}%",
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
                    "type": 13,
                    "turnSpeed": {
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
              "on": "wait",
              "if": false,
              "body": [
                0
              ],
              "class": [
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
                    "desc": "LB 스피커 : AP+{0}",
                    "type": 0,
                    "value": "0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": 0.5,
                      "per": 0.025
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wait",
              "if": false,
              "body": [
                0
              ],
              "class": [
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
                    "desc": "LB 스피커 : 행동력+{0}%",
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
                      "per": "0.3%"
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
          "rate": 0,
          "type": 0,
          "range": 0,
          "ap": 0,
          "grid": "around",
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
                    "Effect_PECS_Carolina_N_4"
                  ],
                  "attr": 4
                }
              },
              "body": [
                0
              ],
              "class": [
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
                    "desc": "RB 스피커 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "RB 스피커 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.080000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "8%",
                      "per": "0.4%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "LB 스피커 : AP+{0}",
                    "type": 0,
                    "value": "0.500000"
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
                      "base": 0.5,
                      "per": 0.025
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "LB 스피커 : 행동력+{0}%",
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
                    "type": 13,
                    "turnSpeed": {
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
              "on": "wait",
              "if": false,
              "body": [
                0
              ],
              "class": [
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
                    "desc": "LB 스피커 : AP+{0}",
                    "type": 0,
                    "value": "0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": 0.5,
                      "per": 0.025
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wait",
              "if": false,
              "body": [
                0
              ],
              "class": [
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
                    "desc": "LB 스피커 : 행동력+{0}%",
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
                      "per": "0.3%"
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
      "라운드 개시 시, <치어 리더> 효과가 적용된 상태면 아군 바이오로이드의 [공격력 +:10~0.5:%]과 [치명타 +:8~0.4:%]를 증가시킵니다.",
      "대기 시, 아군 바이오로이드들의 [AP +:0.5~0.025:]와 [행동력 +:6~0.3:%]를 증가시킵니다.",
      "{스킬 레벨 10에서 범위가 증가}합니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "치어 리더",
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
              "on": "attack_success",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "치어 리더 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {},
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
              "maxStack": 3
            }
          ]
        }
      ]
    },
    "desc": [
      "스킬 적중 시, <치어 리더> 중첩을 1 얻으며 [행동력 +:10~0.5:%]가 증가합니다.",
      "최대 3번까지 중첩되며, 중첩 수에 따라 <브레스트 버스터>와 <치어 업!>의 효과가 강화됩니다."
    ]
  }
};