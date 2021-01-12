export default {
  "active1": {
    "key": "active1",
    "name": "수중용 절단기",
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
          "rate": 1.95,
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
                    "desc": "수중용 절단기 : 방어력 {0}%",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 방어력 강화 해제",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 3,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
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
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제",
                    "type": 0,
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
                },
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
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.12,
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
                    "desc": "수중용 절단기 : 방어력 {0}%",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 방어력 강화 해제",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 3,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
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
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제",
                    "type": 0,
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
                },
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
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.29,
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
                    "desc": "수중용 절단기 : 방어력 {0}%",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 방어력 강화 해제",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 3,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
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
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제",
                    "type": 0,
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
                },
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
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.46,
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
                    "desc": "수중용 절단기 : 방어력 {0}%",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 방어력 강화 해제",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 3,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
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
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제",
                    "type": 0,
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
                },
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
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.63,
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
                    "desc": "수중용 절단기 : 방어력 {0}%",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 방어력 강화 해제",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 3,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
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
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제",
                    "type": 0,
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
                },
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
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.8,
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
                    "desc": "수중용 절단기 : 방어력 {0}%",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 방어력 강화 해제",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 3,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
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
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제",
                    "type": 0,
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
                },
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
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.97,
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
                    "desc": "수중용 절단기 : 방어력 {0}%",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 방어력 강화 해제",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 3,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
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
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제",
                    "type": 0,
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
                },
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
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 3.14,
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
                    "desc": "수중용 절단기 : 방어력 {0}%",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 방어력 강화 해제",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 3,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
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
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제",
                    "type": 0,
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
                },
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
                  "icon": "BuffIcon_DEF_DOWN",
                  "desc": {
                    "desc": "수중용 절단기 : 방어력 {0}%",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 방어력 강화 해제",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 3,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
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
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제",
                    "type": 0,
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
                },
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
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 3.48,
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
                    "desc": "수중용 절단기 : 방어력 {0}%",
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 방어력 강화 해제",
                    "type": 0,
                    "value": "3"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 3,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제 (치명타 시)",
                    "type": 0,
                    "value": "36"
                  },
                  "attr": 1,
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회심의 일격 : 피해량+{0}%",
                    "type": 1,
                    "value": "0.200000"
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
                      "base": "20%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
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
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "수중용 절단기 : 피해 감소 해제",
                    "type": 0,
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
                },
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
                }
              ],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "수중용 절단기로 [@:공격력 :0~0:배 피해]를 주고, 2라운드 동안 적중 대상의 [방어력 -:50~2.5:%]를 크게 낮추며 방어력 강화 효과를 해제합니다.",
      "치명타 시, [피해량 +:20~1:%]가 증가하며 대상에게 적용중인 피해 감소 효과를 해제합니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "사이클론 스트림",
    "icon": "BeamShot",
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
          "rate": 1.105,
          "type": 2,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
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
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "사이클론 스트림 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "2"
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
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "빙결 : 강화 효과 해제 (침수 시)",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "빙결 : 50% 확률 행동 불가 (침수 시)",
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
                    "type": 22,
                    "stun": true
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
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
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 강화 효과 해제",
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
          "rate": 1.205,
          "type": 2,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
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
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "사이클론 스트림 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "2"
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
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "빙결 : 강화 효과 해제 (침수 시)",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "빙결 : 50% 확률 행동 불가 (침수 시)",
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
                    "type": 22,
                    "stun": true
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
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
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 강화 효과 해제",
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
          "rate": 1.305,
          "type": 2,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
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
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "사이클론 스트림 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "2"
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
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "빙결 : 강화 효과 해제 (침수 시)",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "빙결 : 50% 확률 행동 불가 (침수 시)",
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
                    "type": 22,
                    "stun": true
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
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
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 강화 효과 해제",
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
          "rate": 1.405,
          "type": 2,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
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
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "사이클론 스트림 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "2"
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
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "빙결 : 강화 효과 해제 (침수 시)",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "빙결 : 50% 확률 행동 불가 (침수 시)",
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
                    "type": 22,
                    "stun": true
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
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
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 강화 효과 해제",
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
          "rate": 1.505,
          "type": 2,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
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
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "사이클론 스트림 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "2"
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
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "빙결 : 강화 효과 해제 (침수 시)",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "빙결 : 50% 확률 행동 불가 (침수 시)",
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
                    "type": 22,
                    "stun": true
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
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
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 강화 효과 해제",
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
          "rate": 1.605,
          "type": 2,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
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
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "사이클론 스트림 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "2"
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
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "빙결 : 강화 효과 해제 (침수 시)",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "빙결 : 50% 확률 행동 불가 (침수 시)",
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
                    "type": 22,
                    "stun": true
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
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
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 강화 효과 해제",
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
          "rate": 1.705,
          "type": 2,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
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
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "사이클론 스트림 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "2"
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
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "빙결 : 강화 효과 해제 (침수 시)",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "빙결 : 50% 확률 행동 불가 (침수 시)",
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
                    "type": 22,
                    "stun": true
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
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
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 강화 효과 해제",
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
          "rate": 1.805,
          "type": 2,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
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
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "사이클론 스트림 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "2"
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
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "빙결 : 강화 효과 해제 (침수 시)",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "빙결 : 50% 확률 행동 불가 (침수 시)",
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
                    "type": 22,
                    "stun": true
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
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
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 강화 효과 해제",
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
          "rate": 1.905,
          "type": 2,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
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
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "사이클론 스트림 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "2"
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
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "빙결 : 강화 효과 해제 (침수 시)",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "빙결 : 50% 확률 행동 불가 (침수 시)",
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
                    "type": 22,
                    "stun": true
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
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
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 강화 효과 해제",
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
          "rate": 2.005,
          "type": 2,
          "range": 3,
          "ap": 8,
          "grid": "4>456",
          "target_ground": true,
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
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "사이클론 스트림 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "2"
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
                        "base": 2,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
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
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "빙결 : 강화 효과 해제 (침수 시)",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "빙결 : 50% 확률 행동 불가 (침수 시)",
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
                    "type": 22,
                    "stun": true
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 행동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
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
                    "desc": "사이클론 스트림 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.250000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "25%",
                      "per": "1.25%"
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
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "빙결 : 강화 효과 해제",
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
      "지정 범위에 [@,#chill:공격력 :0~0:배 냉기 피해]를 주며 대상을 뒤로 [밀기 :2~0:칸] 밉니다.",
      "적중 대상은 2라운드 동안 [받는 피해 +:25~1.25:%] 증가 상태가 됩니다.",
      "대상이 침수 상태인 경우, 강화 효과가 해제되며 50% 확률로 행동 불가 상태가 됩니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "프런티어 리더",
    "icon": "TeamSpdBuff",
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
          "grid": "2458",
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
                    "desc": "프런티어 리더 : 행동력+{0}%",
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
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "프런티어 리더 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "15%",
                        "per": "0.75%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ICERES_UP",
                  "desc": {
                    "desc": "프런티어 리더 : 냉기 저항+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "15%",
                        "per": "0.75%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_UP",
                  "desc": {
                    "desc": "프런티어 리더 : 전기 저항+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "15%",
                        "per": "0.75%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEBUFF_PERDOWN",
                  "desc": {
                    "desc": "프런티어 리더 : 효과 저항+{0}%",
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
                        "per": "0.75%"
                      }
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
                    "desc": "프런티어 리더 : 행동력+{0}%",
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
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "프런티어 리더 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "15%",
                        "per": "0.75%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ICERES_UP",
                  "desc": {
                    "desc": "프런티어 리더 : 냉기 저항+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "15%",
                        "per": "0.75%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_UP",
                  "desc": {
                    "desc": "프런티어 리더 : 전기 저항+{0}%",
                    "type": 1,
                    "value": "0.150000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "15%",
                        "per": "0.75%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEBUFF_PERDOWN",
                  "desc": {
                    "desc": "프런티어 리더 : 효과 저항+{0}%",
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
                        "per": "0.75%"
                      }
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
                "pos": 0
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
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "미지의 세계로! : 행동력+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "미지의 세계로! : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.225000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "22.5%",
                        "per": "1.13%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ICERES_UP",
                  "desc": {
                    "desc": "미지의 세계로! : 냉기 저항+{0}%",
                    "type": 1,
                    "value": "0.225000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "22.5%",
                        "per": "1.13%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_UP",
                  "desc": {
                    "desc": "미지의 세계로! : 전기 저항+{0}%",
                    "type": 1,
                    "value": "0.225000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "22.5%",
                        "per": "1.13%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEBUFF_PERDOWN",
                  "desc": {
                    "desc": "미지의 세계로! : 효과 저항+{0}%",
                    "type": 1,
                    "value": "0.225000"
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
                        "base": "22.5%",
                        "per": "1.13%"
                      }
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                    "desc": "어비스 워커 : 공격력+{0}%",
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
                    "desc": "어비스 워커 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "어비스 워커 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.125000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "12.5%",
                      "per": "0.63%"
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
      "라운드 개시 시, 자신과 인접한 바이오로이드들의 [행동력 +:5~0.25:%]과 [#fire,#chill,#thunder:각종 저항 +:15~0.75:%]를 올려줍니다.",
      "자신이 전열에 배치된 상태면 효과가 50% 증가합니다.",
      "각종 저항 : [#fire:화염 저항 +:15~0.75:%] / [#chill:냉기 저항 +:15~0.75:%] / [#thunder:전기 저항 +:15~0.75:%] / [효과 저항 +:15~0.75:%]"
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "어비스 워커",
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
                  "icon": "BuffIcon_ICERES_UP",
                  "desc": {
                    "desc": "어비스 워커 : 냉기 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "50%",
                        "per": "2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "어비스 워커 : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.230000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 36,
                    "damage_reduce": {
                      "base": "23%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "어비스 워커 : 공격력+{0}% (침수 시)",
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "어비스 워커 : 치명타+{0}% (침수 시)",
                    "type": 1,
                    "value": "0.150000"
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
                      "base": "15%",
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "어비스 워커 : 행동력+{0}% (침수 시)",
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
                    "type": 13,
                    "turnSpeed": {
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
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_BUFF_Flood_N_1",
                    "Effect_BUFF_Flood_N_2",
                    "Effect_BUFF_Flood_N_3",
                    "Effect_BUFF_Flood_N_4",
                    "Effect_BUFF_Flood_N_5",
                    "Effect_BUFF_Flood_N_6",
                    "Effect_BUFF_Flood_N_7",
                    "Effect_BUFF_Flood_N_8",
                    "Effect_BUFF_Flood_N_9",
                    "Effect_BUFF_Flood_N_11",
                    "Effect_BUFF_Flood_N_12",
                    "Effect_BUFF_Flood_N_13"
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "홈 그라운드 : 공격력+{0}%",
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
                    "desc": "홈 그라운드 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.075000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "7.5%",
                      "per": "0.38%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "홈 그라운드 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.125000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "12.5%",
                      "per": "0.63%"
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
      "[#chill:냉기 저항 +:50~2.5:%]가 증가하며, [받는 피해 -:23~2:%]가 감소합니다.",
      "자신이 침수 상태인 경우, [공격력 +:30~1.5:%] / [치명타 +:15~0.75:%] / [행동력 +:25~1.25:%]가 증가합니다.",
      "<프런티어 리더> 효과를 받는 아군도 침수 상태가 되면 해당 효과의 50%가 적용됩니다."
    ]
  }
};