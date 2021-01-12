export default {
  "active1": {
    "key": "active1",
    "name": "찌르는 강철",
    "icon": "Missile",
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
          "rate": 1.76,
          "type": 0,
          "range": 3,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "찌르는 강철 : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "찌르는 강철 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "찌르는 강철 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 7,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.92,
          "type": 0,
          "range": 3,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "찌르는 강철 : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "찌르는 강철 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "찌르는 강철 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 7,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.08,
          "type": 0,
          "range": 3,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "찌르는 강철 : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "찌르는 강철 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "찌르는 강철 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 7,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.24,
          "type": 0,
          "range": 3,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "찌르는 강철 : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "찌르는 강철 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "찌르는 강철 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 7,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.4,
          "type": 0,
          "range": 3,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "찌르는 강철 : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "찌르는 강철 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "찌르는 강철 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 7,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.56,
          "type": 0,
          "range": 3,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "찌르는 강철 : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "찌르는 강철 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "찌르는 강철 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 7,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.72,
          "type": 0,
          "range": 3,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "찌르는 강철 : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "찌르는 강철 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "찌르는 강철 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 7,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.88,
          "type": 0,
          "range": 3,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "찌르는 강철 : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "찌르는 강철 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "찌르는 강철 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 7,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 3.04,
          "type": 0,
          "range": 3,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "찌르는 강철 : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "찌르는 강철 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "찌르는 강철 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 7,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 3.2,
          "type": 0,
          "range": 3,
          "ap": 7,
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
                  "icon": "BuffIcon_MARKING",
                  "desc": {
                    "desc": "찌르는 강철 : 표식 지정",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 87,
                    "attack_target": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "찌르는 강철 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "찌르는 강철 : 회피 {0}%",
                    "type": 1,
                    "value": "-0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "7"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 7,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        }
      ]
    },
    "desc": [
      "지정 대상에게 [@:공격력 :0~0:배 피해]를 줍니다.",
      "적중 대상은 2라운드 동안 표식 / [받는 피해 :15~0.75:%] 증가 / [회피 -:30~1.5:%] 감소 상태가 됩니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "강철의 비",
    "icon": "MultiMissile",
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
          "rate": 1.595,
          "type": 0,
          "range": 4,
          "ap": 9,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
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
                    78,
                    87
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
                    "desc": "정밀 폭격 : 피해량+{0}%",
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
                  "overlap": 0
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "9"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 9,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.74,
          "type": 0,
          "range": 4,
          "ap": 9,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
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
                    78,
                    87
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
                    "desc": "정밀 폭격 : 피해량+{0}%",
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
                  "overlap": 0
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "9"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 9,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 1.885,
          "type": 0,
          "range": 4,
          "ap": 9,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
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
                    78,
                    87
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
                    "desc": "정밀 폭격 : 피해량+{0}%",
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
                  "overlap": 0
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "9"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 9,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.03,
          "type": 0,
          "range": 4,
          "ap": 9,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
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
                    78,
                    87
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
                    "desc": "정밀 폭격 : 피해량+{0}%",
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
                  "overlap": 0
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "9"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 9,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.175,
          "type": 0,
          "range": 4,
          "ap": 9,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
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
                    78,
                    87
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
                    "desc": "정밀 폭격 : 피해량+{0}%",
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
                  "overlap": 0
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "9"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 9,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.32,
          "type": 0,
          "range": 4,
          "ap": 9,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
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
                    78,
                    87
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
                    "desc": "정밀 폭격 : 피해량+{0}%",
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
                  "overlap": 0
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "9"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 9,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.465,
          "type": 0,
          "range": 4,
          "ap": 9,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
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
                    78,
                    87
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
                    "desc": "정밀 폭격 : 피해량+{0}%",
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
                  "overlap": 0
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "9"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 9,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.61,
          "type": 0,
          "range": 4,
          "ap": 9,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
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
                    78,
                    87
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
                    "desc": "정밀 폭격 : 피해량+{0}%",
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
                  "overlap": 0
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "9"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 9,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.755,
          "type": 0,
          "range": 4,
          "ap": 9,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
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
                    78,
                    87
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
                    "desc": "정밀 폭격 : 피해량+{0}%",
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
                  "overlap": 0
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "9"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 9,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        },
        {
          "rate": 2.9,
          "type": 0,
          "range": 4,
          "ap": 9,
          "grid": "24568",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
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
                    78,
                    87
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
                    "desc": "정밀 폭격 : 피해량+{0}%",
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
                  "overlap": 0
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
                    "desc": "가학의 기쁨 : AP+{0}",
                    "type": 0,
                    "value": "9"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "10%",
                    "type": 20,
                    "ap": {
                      "base": 9,
                      "per": 0
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
            }
          ]
        }
      ]
    },
    "desc": [
      "지정 범위에 [@:공격력 :0~0:배 피해]를 줍니다.",
      "대상이 표식 또는 이동 불가 상태면 [피해량 :25~1.25:%]가 증가합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "강자의 품격",
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "강자의 품격 : 공격력+{0}%",
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
                  "icon": "BuffIcon_DamageAmp_Opp",
                  "desc": {
                    "desc": "강자의 품격 : 적 HP% 낮을수록 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 81,
                    "damage_by_hp": {
                      "target": "target",
                      "damage": {
                        "base": "30%",
                        "per": "1.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "강자의 품격 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "5%",
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
      "자신의 HP가 50% 이상일 경우, [공격력 +:15~0.75:%] / [치명타 +:5~1:%]가 증가하며, 목표의 HP%가 낮을수록 [피해량 +:30~1.5:%]가 증가합니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "가학의 기쁨",
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
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "가학의 기쁨 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.050000"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "5%",
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
      "적 공격시, [행동력 +:5~0.5:%]가 증가합니다.",
      "행동력 증가 효과는 최대 3회까지 중첩됩니다.",
      "적 처치 시, 낮은 확률로 적 처치에 사용한 스킬의 AP를 돌려받습니다"
    ]
  },
  "passive5": {
    "key": "passive5",
    "name": "학살 본능",
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
                  "icon": "BuffIcon_TROOPER_DMG_UP",
                  "desc": {
                    "desc": "학살 본능 : 대 경장형 피해량+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 60,
                    "damage_multiply": {
                      "target": "light",
                      "value": {
                        "base": "15%",
                        "per": "0.75%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_BARRIER_PIERCE",
                  "desc": {
                    "desc": "학살 본능 : 방어막 / 피해 감소 무시",
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
                  "icon": "BuffIcon_BARRIER_PIERCE",
                  "desc": {
                    "desc": "학살 본능 : 방어막 / 피해 감소 무시 (2회)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "count": 2,
                    "trigger": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 94,
                    "penetration_force": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 1
            },
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
                  "icon": "BuffIcon_BARRIER_PIERCE",
                  "desc": {
                    "desc": "학살 본능 : 방어막 / 피해 감소 무시 (2회)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "count": 2,
                    "trigger": {
                      "after": "use_skill"
                    }
                  },
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
                  "icon": "BuffIcon_TROOPER_DMG_UP",
                  "desc": {
                    "desc": "학살 본능 : 대 경장형 피해량+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 60,
                    "damage_multiply": {
                      "target": "light",
                      "value": {
                        "base": "15%",
                        "per": "0.75%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_BARRIER_PIERCE",
                  "desc": {
                    "desc": "학살 본능 : 방어막 / 피해 감소 무시",
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
                  "icon": "BuffIcon_BARRIER_PIERCE",
                  "desc": {
                    "desc": "학살 본능 : 방어막 / 피해 감소 무시 (3회)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "count": 3,
                    "trigger": {
                      "after": "use_skill"
                    }
                  },
                  "value": {
                    "isBuff": true,
                    "type": 94,
                    "penetration_force": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 1
            },
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
                  "icon": "BuffIcon_BARRIER_PIERCE",
                  "desc": {
                    "desc": "학살 본능 : 방어막 / 피해 감소 무시 (3회)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "count": 3,
                    "trigger": {
                      "after": "use_skill"
                    }
                  },
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
      "경장형에게 주는 [피해 +:15~0.75:%]가 증가하며, 2회 공격까지 방어막과 피해 감소 무시 효과가 적용됩니다.",
      "해당 효과는 대기 시 재 활성화되며, {스킬 레벨 10에서 적용 횟수가 1회 증가}합니다."
    ]
  }
};