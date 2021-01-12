export default {
  "active1": {
    "key": "active1",
    "name": "급속 성장",
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
          "rate": 1.1,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "13579",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "급속 성장 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
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
          "ap": 8,
          "grid": "13579",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "급속 성장 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
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
          "ap": 8,
          "grid": "13579",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "급속 성장 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
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
          "ap": 8,
          "grid": "13579",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "급속 성장 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
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
          "rate": 1.5,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "13579",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "급속 성장 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
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
          "rate": 1.6,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "13579",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "급속 성장 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
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
          "rate": 1.7,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "13579",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "급속 성장 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
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
          "rate": 1.8,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "13579",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "급속 성장 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
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
          "rate": 1.9,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "13579",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "급속 성장 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
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
          "rate": 2,
          "type": 0,
          "range": 3,
          "ap": 8,
          "grid": "13579",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
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
                    "desc": "급속 성장 : 강화 효과 해제",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 99,
                    "off": 0
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 78,
                    "immovable": true
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "급속 성장: 이동 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
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
    },
    "desc": [
      "나노봇으로 목표 지점에 [@:공격력 :0~0:배 피해]를 주고, 3라운드 동안 대상을 이동 불가 상태로 만듭니다.",
      "대상이 침수 상태인 경우, 대상의 강화 효과를 해제합니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "숲의 노래",
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
          "ap": 9,
          "grid": "global",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "target": [
                  "Char_PECS_ElvenForestmaker_N"
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
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "숲의 노래 : AP+{0}",
                    "type": 0,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": 0.2,
                      "per": 0.2
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_DEBUFF",
                  "desc": {
                    "desc": "숲의 노래: 해로운 효과 해제",
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
                    "desc": "숲의 노래 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "17%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "숲의 노래 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "17%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "숲의 노래 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
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
              "on": {
                "after": "use_skill"
              },
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0
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
                    "desc": "숲의 노래 : AP+{0}",
                    "type": 0,
                    "value": "0.200000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": 0.2,
                      "per": 0.2
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_REMOVE_DEBUFF",
                  "desc": {
                    "desc": "숲의 노래: 해로운 효과 해제",
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
                    "desc": "숲의 노래 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "17%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "숲의 노래 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.170000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "17%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "숲의 노래 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
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
              "on": {
                "after": "use_skill"
              },
              "if": {
                "target": [
                  "Char_PECS_ElvenForestmaker_N"
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
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "숲의 노래 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.020000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "2%",
                      "per": "0%"
                    }
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "숲의 노래 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.020000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "2%",
                      "per": "0%"
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
      "[$ch;PECS_ElvenForestmaker], [$ch;PECS_DarkElf], 경장형 아군의 해로운 효과를 모두 해제하고 [AP +:0.2~0.2:]를 증가시키며, 3라운드 동안 [공격력 +:17~2:%] / [치명타 +:17~2:%] / [방어 관통 +:6~1:%]를 증가시킵니다.",
      "스킬 사용 시, 기본 공격력에 비례한 고정 피해를 입습니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "정화",
    "icon": "Barrier",
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
                  "icon": "BuffIcon_DAMAGE_ABSORB",
                  "desc": {
                    "desc": "정화 : 방어막+{0}",
                    "type": 0,
                    "value": "60"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 38,
                    "barrier": {
                      "base": 60,
                      "per": 60
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "정화 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.005000"
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
                      "base": "0.5%",
                      "per": "0.5%"
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
                    "desc": "정화 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.005000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "0.5%",
                      "per": "0.5%"
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
                "in_squad": [
                  "Char_PECS_ElvenForestmaker_N"
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "정화(엘븐) : 행동력+{0}%",
                    "type": 1,
                    "value": "0.005000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "0.5%",
                      "per": "0.5%"
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
                "in_squad": [
                  "Char_PECS_DarkElf_N"
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
              "target": 0,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "정화(다크 엘븐) : 행동력+{0}%",
                    "type": 1,
                    "value": "0.005000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
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
      "라운드 시작 시 [행동력 +:0.5~0.5:%]가 증가하며, 전투 시작 시 [방어막 +:60~60:]를 전개합니다.",
      "스쿼드에 [$ch;PECS_ElvenForestmaker], [$ch;PECS_DarkElf]가 있으면 [행동력 +:0.5~0.5:]가 추가로 증가합니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "세계수의 은총",
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
          "grid": "global",
          "target_ground": true,
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
                    "desc": "세계수의 은총 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.010000"
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
                      "base": "1%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "세계수의 은총 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.005000"
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
                      "base": "0.5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "세계수의 은총 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.010000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 58,
                    "penetration": {
                      "base": "1%",
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
              "if": {
                "target": [
                  "Char_PECS_ElvenForestmaker_N"
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
                    "desc": "세계수의 은총 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.010000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "1%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "세계수의 은총 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.005000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "0.5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "세계수의 은총 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.010000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "1%",
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
                0,
                1
              ],
              "class": [
                0
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
                    "desc": "세계수의 은총 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.010000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "1%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "세계수의 은총 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.005000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "0.5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "세계수의 은총 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.010000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "1%",
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
              "if": {
                "in_squad": [
                  "Char_PECS_ElvenForestmaker_N"
                ]
              },
              "body": [
                0,
                1
              ],
              "class": [
                0
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
                    "desc": "세계수의 은총 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.010000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "1%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "세계수의 은총 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.005000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "0.5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "세계수의 은총 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.010000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "1%",
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
              "if": {
                "in_squad": [
                  "Char_PECS_DarkElf_N"
                ]
              },
              "body": [
                0,
                1
              ],
              "class": [
                0
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
                    "desc": "세계수의 은총 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.010000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "1%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "세계수의 은총 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.005000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "0.5%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "세계수의 은총 : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.010000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "1%",
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
      "[$ch;PECS_ElvenForestmaker], [$ch;PECS_DarkElf], 경장형 아군의 [공격력 +:1~1:%] / [행동력 +:0.5~0.5:%] / [방어 관통 +:1~1:%]를 증가시킵니다.",
      "스쿼드에 [$ch;PECS_ElvenForestmaker], [$ch;PECS_DarkElf]가 있으면 경장형 아군이 받는 효과가 증가합니다."
    ]
  },
  "passive5": {
    "key": "passive5",
    "name": "모성",
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
          "grid": "258",
          "target_ground": true,
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
                  "target": "target",
                  "func": "OR",
                  "select": [
                    75
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
                    "desc": "모성 : 받는 피해 {0}% 감소",
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
                      "per": "3%"
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
      "같은 열에 배치된 열 보호가 활성화된 대상의 [받는 피해 -:23~3:%]를 감소시킵니다."
    ]
  }
};