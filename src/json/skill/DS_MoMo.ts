export default {
  "active1": {
    "key": "active1",
    "name": "마법신의 요술봉",
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
          "rate": 1.445,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "579",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "회심의 일격 : 피해량+{0}% (최대)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "100%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "회심의 일격 : 강화 효과 해제",
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "20%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격!! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "5%",
                    "type": 83,
                    "damage_add": {
                      "base": "50%",
                      "per": "2.5%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.575,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "579",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "회심의 일격 : 피해량+{0}% (최대)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "100%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "회심의 일격 : 강화 효과 해제",
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "20%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격!! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "5%",
                    "type": 83,
                    "damage_add": {
                      "base": "50%",
                      "per": "2.5%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.705,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "579",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "회심의 일격 : 피해량+{0}% (최대)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "100%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "회심의 일격 : 강화 효과 해제",
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "20%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격!! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "5%",
                    "type": 83,
                    "damage_add": {
                      "base": "50%",
                      "per": "2.5%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.835,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "579",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "회심의 일격 : 피해량+{0}% (최대)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "100%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "회심의 일격 : 강화 효과 해제",
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "20%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격!! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "5%",
                    "type": 83,
                    "damage_add": {
                      "base": "50%",
                      "per": "2.5%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.965,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "579",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "회심의 일격 : 피해량+{0}% (최대)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "100%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "회심의 일격 : 강화 효과 해제",
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "20%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격!! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "5%",
                    "type": 83,
                    "damage_add": {
                      "base": "50%",
                      "per": "2.5%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.095,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "579",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "회심의 일격 : 피해량+{0}% (최대)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "100%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "회심의 일격 : 강화 효과 해제",
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "20%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격!! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "5%",
                    "type": 83,
                    "damage_add": {
                      "base": "50%",
                      "per": "2.5%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.225,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "579",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "회심의 일격 : 피해량+{0}% (최대)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "100%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "회심의 일격 : 강화 효과 해제",
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "20%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격!! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "5%",
                    "type": 83,
                    "damage_add": {
                      "base": "50%",
                      "per": "2.5%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.355,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "579",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "회심의 일격 : 피해량+{0}% (최대)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "100%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "회심의 일격 : 강화 효과 해제",
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "20%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격!! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "5%",
                    "type": 83,
                    "damage_add": {
                      "base": "50%",
                      "per": "2.5%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.485,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "579",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "회심의 일격 : 피해량+{0}% (최대)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "100%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "회심의 일격 : 강화 효과 해제",
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "20%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격!! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "5%",
                    "type": 83,
                    "damage_add": {
                      "base": "50%",
                      "per": "2.5%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.615,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "579",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "회심의 일격 : 피해량+{0}% (최대)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 83,
                    "damage_add": {
                      "base": "100%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "회심의 일격 : 강화 효과 해제",
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
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
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "20%",
                    "type": 83,
                    "damage_add": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격!! : 피해량+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "5%",
                    "type": 83,
                    "damage_add": {
                      "base": "50%",
                      "per": "2.5%"
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
      "마법신의 요술봉으로 지정 대상과 주변에 [@:공격력 :0~0:배 피해]를 줍니다.",
      "치명타 시 [피해량 +0~:100~5:%]가 증가하며, 대상의 강화 효과를 해제합니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "모모찬바라",
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
          "rate": 2.1,
          "type": 0,
          "range": 2,
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "40%",
                      "per": "2%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
                  ],
                  "stack": 0,
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "1%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "2%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.285,
          "type": 0,
          "range": 2,
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "40%",
                      "per": "2%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
                  ],
                  "stack": 0,
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "1%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "2%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.47,
          "type": 0,
          "range": 2,
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "40%",
                      "per": "2%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
                  ],
                  "stack": 0,
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "1%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "2%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.655,
          "type": 0,
          "range": 2,
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "40%",
                      "per": "2%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
                  ],
                  "stack": 0,
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "1%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "2%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.84,
          "type": 0,
          "range": 2,
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "40%",
                      "per": "2%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
                  ],
                  "stack": 0,
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "1%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "2%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 3.025,
          "type": 0,
          "range": 2,
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "40%",
                      "per": "2%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
                  ],
                  "stack": 0,
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "1%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "2%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 3.21,
          "type": 0,
          "range": 2,
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "40%",
                      "per": "2%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
                  ],
                  "stack": 0,
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "1%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "2%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 3.395,
          "type": 0,
          "range": 2,
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "40%",
                      "per": "2%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
                  ],
                  "stack": 0,
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "1%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "2%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 3.58,
          "type": 0,
          "range": 2,
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "40%",
                      "per": "2%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
                  ],
                  "stack": 0,
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "1%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "2%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 3.765,
          "type": 0,
          "range": 2,
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
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 83,
                    "damage_add": {
                      "base": "40%",
                      "per": "2%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
                  ],
                  "stack": 0,
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "1%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
                    }
                  },
                  "overlap": 0
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
                    "Effect_DS_MoMo_N_5"
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
                    "desc": "급소 찌르기! : 피해량+{0}%",
                    "type": 1,
                    "value": "5"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "2%",
                    "type": 83,
                    "damage_add": {
                      "base": "500%",
                      "per": "25%"
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
      "마법의 티타늄 합금 카타나로 대상에게 [@:공격력 :0~0:배 피해]를 줍니다.",
      "치명타 시 [피해량 +:40~2:%]가 증가하며, 매우 낮은 확률([:1~0:%])로 급소를 찌릅니다.",
      "급소 찌르기! : [피해량 +:500~25:%] 증가"
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "세기말 마법소녀",
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
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_DS_MoMo_N_5"
                  ],
                  "stack": 0,
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "마법신의 가호 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "40%",
                    "type": 1,
                    "attack": {
                      "base": "30%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "마법신의 가호 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "30%",
                    "type": 9,
                    "critical": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "마법신의 가호 : 적중+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "40%",
                    "type": 7,
                    "accuracy": {
                      "base": "40%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "마법신의 가호 : 회피+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "40%",
                    "type": 11,
                    "evade": {
                      "base": "50%",
                      "per": "5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "마법신의 가호 : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "15%",
                    "type": 36,
                    "damage_reduce": {
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
      "라운드 개시 시, 마법신의 가호를 받아 무작위 강화 효과를 얻습니다.",
      "[공격력 +:30~1.5:%] / [치명타 +:20~1:%] / [적중 +:40~2:%] / [회피 +:50~5:%] / [받는 피해 -:40~2:% 감소]"
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "나를 기억해주세요!",
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
          "grid": "around",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "self_dead",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                  "icon": "BuffIcon_REMOVE_DEBUFF",
                  "desc": {
                    "desc": "기억할게! : 해로운 효과 해제",
                    "type": 1,
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
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "기억할게! : 공격력+{0}%",
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
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "기억할게! : 치명타+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "20%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "기억할게! : 행동력+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "20%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "기억할게! : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "20%",
                      "per": "3%"
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
              "on": "self_dead",
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                  "icon": "BuffIcon_REMOVE_DEBUFF",
                  "desc": {
                    "desc": "기억할게! : 해로운 효과 해제",
                    "type": 1,
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
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "기억할게! : 공격력+{0}%",
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
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "기억할게! : 치명타+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "20%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "기억할게! : 행동력+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "20%",
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "기억할게! : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "20%",
                      "per": "3%"
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
      "전투 불능 시, 주변 아군을 분기시켜 해로운 효과를 해제하고 [:F2.1~0.1: 라운드] 동안 능력치를 대폭 증가시킵니다.",
      "{스킬 레벨 10에서 효과 라운드가 증가}합니다.",
      "[공격력 +:20~3:%] / [치명타 +:20~3:%] / [행동력 +:20~3:%] / [받는 피해 -:20~3:% 감소]"
    ]
  },
  "passive5": {
    "key": "passive5",
    "name": "성장형 마법소녀",
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "성장형 마법소녀 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "성장형 마법소녀 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "성장형 마법소녀 : 적중+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "40%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "성장형 마법소녀 : 회피+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "50%",
                      "per": "5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "성장형 마법소녀 : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "40%",
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
              "buffs": [],
              "maxStack": 0
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "성장형 마법소녀 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "성장형 마법소녀 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "성장형 마법소녀 : 적중+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "40%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_UP",
                  "desc": {
                    "desc": "성장형 마법소녀 : 회피+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "50%",
                      "per": "5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "성장형 마법소녀 : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "40%",
                      "per": "2%"
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
                  "icon": "BuffIcon_DEF_RESSURRECT",
                  "desc": {
                    "desc": "성장형 마법소녀 : {0}HP로 전투 속행(해제 불가)",
                    "type": 0,
                    "value": "300"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 82,
                    "revive": {
                      "base": 300,
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
      "라운드 개시 시, <세기말 마법소녀> 스킬의 강화 효과를 <성장형 마법소녀> 스킬 레벨에 비례하는 수치로 모두 얻습니다.",
      "<모모찬바라>의 급소 찌르기 확률이 두 배([:2~0:%])로 증가합니다.",
      "{스킬 레벨 10에서 [:300~0:HP로 전투 속행] 효과가 추가됩니다.}",
      "<성장형 마법소녀> : [공격력 +:30~1.5:%] / [치명타 +:20~1:%] / [적중 +:40~2:%] / [회피 +:50~5:%] / [받는 피해 -:40~2:% 감소]"
    ]
  }
};