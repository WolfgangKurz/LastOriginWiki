export default {
  "active1": {
    "key": "active1",
    "name": "테이져 캐논",
    "icon": "WideLightning",
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
          "rate": 1.43,
          "type": 3,
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.060000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-6%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 3
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_PECS_Sadius_N_36"
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
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-23%",
                        "per": "-3%"
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
                    "Effect_PECS_Sadius_N_36"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.56,
          "type": 3,
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.060000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-6%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 3
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_PECS_Sadius_N_36"
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
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-23%",
                        "per": "-3%"
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
                    "Effect_PECS_Sadius_N_36"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.69,
          "type": 3,
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.060000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-6%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 3
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_PECS_Sadius_N_36"
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
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-23%",
                        "per": "-3%"
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
                    "Effect_PECS_Sadius_N_36"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.82,
          "type": 3,
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.060000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-6%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 3
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_PECS_Sadius_N_36"
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
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-23%",
                        "per": "-3%"
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
                    "Effect_PECS_Sadius_N_36"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.95,
          "type": 3,
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.060000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-6%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 3
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_PECS_Sadius_N_36"
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
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-23%",
                        "per": "-3%"
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
                    "Effect_PECS_Sadius_N_36"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.08,
          "type": 3,
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.060000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-6%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 3
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_PECS_Sadius_N_36"
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
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-23%",
                        "per": "-3%"
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
                    "Effect_PECS_Sadius_N_36"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.21,
          "type": 3,
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.060000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-6%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 3
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_PECS_Sadius_N_36"
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
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-23%",
                        "per": "-3%"
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
                    "Effect_PECS_Sadius_N_36"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.34,
          "type": 3,
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.060000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-6%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 3
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_PECS_Sadius_N_36"
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
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-23%",
                        "per": "-3%"
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
                    "Effect_PECS_Sadius_N_36"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.47,
          "type": 3,
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.060000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-6%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 3
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_PECS_Sadius_N_36"
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
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-23%",
                        "per": "-3%"
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
                    "Effect_PECS_Sadius_N_36"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 2.6,
          "type": 3,
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
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.060000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-6%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 3
            },
            {
              "on": "attack_success",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_PECS_Sadius_N_36"
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
                    "desc": "테이져 캐논 : 행동 불가(고전압)",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 22,
                    "stun": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "테이져 캐논 : 전기 속성 저항력 {0}%",
                    "type": 1,
                    "value": "-0.230000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-23%",
                        "per": "-3%"
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
                    "Effect_PECS_Sadius_N_36"
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
              "buffs": [],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "지정 범위에 [@,#thunder:공격력 :0~0:배 전기 피해]를 주고 [#thunder:전기 저항 -:6~1:%]를 감소시킵니다.",
      "<고전압> 상태에서는 대상의 [#thunder:전기 저항 -:23~3:%]를 추가로 감소시키고 1라운드 동안 행동 불가 상태로 만듭니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "일렉트릭 펜스",
    "icon": "WideLightning",
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
          "rate": 1.385,
          "type": 3,
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
                    19
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-12%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
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
          "rate": 1.505,
          "type": 3,
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
                    19
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-12%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
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
          "rate": 1.625,
          "type": 3,
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
                    19
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-12%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
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
          "rate": 1.745,
          "type": 3,
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
                    19
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-12%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
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
          "rate": 1.865,
          "type": 3,
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
                    19
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-12%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
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
          "rate": 1.985,
          "type": 3,
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
                    19
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-12%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
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
          "rate": 2.105,
          "type": 3,
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
                    19
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-12%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
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
          "rate": 2.225,
          "type": 3,
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
                    19
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-12%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
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
          "rate": 2.345,
          "type": 3,
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
                    19
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-12%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
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
          "rate": 2.465,
          "type": 3,
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
                    19
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
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 행동력 {0}%",
                    "type": 1,
                    "value": "-0.120000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-12%",
                      "per": "-2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
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
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 1
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
                  "icon": "BuffIcon_LightningATK_UP",
                  "desc": {
                    "desc": "일렉트릭 펜스 : 피해량+{0}%(전기)",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 86,
                    "damage_add": {
                      "elem": "lightning",
                      "damage": {
                        "base": "30%",
                        "per": "2%"
                      }
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
      "지정 범위에 [@,#thunder:공격력 :0~0:배 전기 피해]를 주고 대상이 [#thunder]전기 저항 감소 상태일 시 적 [행동력 -:12~2:%]를 감소시킵니다",
      "치명타 시, [피해량 +:30~2:%]가 증가합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "출동 지원",
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
          "grid": "258",
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
                    "desc": "출동 지원 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.110000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "11%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "출동 지원 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.110000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "11%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_SUPPORT_ATTACK",
                  "desc": {
                    "desc": "출동 지원 : 공격 지원(특정)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 77,
                    "attack_support": {
                      "base": "100%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "출동 지원 : 충전",
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
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "출동 지원 : 고전압",
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
                "unitCount": {
                  "filter": "squad",
                  "type": [
                    0,
                    2,
                    1
                  ],
                  "count": 3
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
                    "desc": "출동 지원 : 공격력+{0}%(아군 3인)",
                    "type": 1,
                    "value": "0.110000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "11%",
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
                "unitCount": {
                  "filter": "squad",
                  "type": [
                    0,
                    2,
                    1
                  ],
                  "count": 5
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "출동 지원 : 치명타+{0}%(아군 5인)",
                    "type": 1,
                    "value": "0.110000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 9,
                    "critical": {
                      "base": "11%",
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
                  "Char_PECS_Serpent_N",
                  "Char_PECS_MissSafety_N",
                  "Char_PECS_Cerberus_N",
                  "Char_AGS_Rampart_N",
                  "Char_PECS_PuppHead_N",
                  "Char_PECS_Leanne_N",
                  "Char_PECS_Sadius_N"
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
                  "icon": "BuffIcon_SUPPORT_ATTACK",
                  "desc": {
                    "desc": "출동 지원 : 공격 지원(시티가드)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 77,
                    "attack_support": {
                      "base": "100%",
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
                0,
                1
              ],
              "class": [
                0
              ],
              "role": [
                0
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_SUPPORT_ATTACK",
                  "desc": {
                    "desc": "출동 지원 : 공격 지원(경장 보호기)",
                    "type": 1,
                    "value": "1"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 77,
                    "attack_support": {
                      "base": "100%",
                      "per": "0%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wave",
              "if": {
                "on": {
                  "target": "self",
                  "select": [
                    "Effect_PECS_Sadius_N_36"
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
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "출동 지원 : 충전",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 10
                  },
                  "value": {
                    "isBuff": true,
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
              "on": "wait",
              "if": {
                "on": {
                  "func": "OR",
                  "select": [
                    "Effect_PECS_Sadius_N_35"
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
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "출동 지원 : 고전압",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
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
            }
          ]
        }
      ]
    },
    "desc": [
      "라운드 개시 시, 자신의 [공격력 +:11~1:%] / [치명타 +:11~1:%]가 증가하며, 스쿼드 내 아군이 3명일 시 [공격력 +:11~1:%], 5명일 시 [치명타 +:11~1:%]가 추가로 증가합니다.",
      "지정 범위의 시티가드 / 경장 보호기의 공격을 지원하며, 전투 시작 시 <충전> 상태가 됩니다.",
      "<충전> 상태에서 대기 시, <고전압> 상태가 됩니다.",
      "시티가드 : [$ch;PECS_Serpent], [$ch;PECS_MissSafety], [$ch;PECS_Cerberus], [$ch;AGS_Rampart], [$ch;PECS_PuppHead], [$ch;PECS_Leanne]"
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "가학성",
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
          "grid": "258",
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "가학성 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.010000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "1%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "가학성 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.015000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 1,
                    "attack": {
                      "base": "1.5%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 3
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "가학성 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.015000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 3
                  },
                  "value": {
                    "isBuff": true,
                    "type": 1,
                    "attack": {
                      "base": "1.5%",
                      "per": "1.5%"
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
      "공격 적중 시, 지정 범위 아군의 [공격력 +:1.5~1.5:%] / [행동력 +:1~1:%]가 최대 3 중첩까지 증가합니다."
    ]
  },
  "passive5": {
    "key": "passive5",
    "name": "가드 오브 시티즌",
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
          "grid": "258",
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
                  "icon": "BuffIcon_LIGHTNINGRES_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌 : 전기 속성 저항력+{0}%",
                    "type": 1,
                    "value": "0.110000"
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
                        "base": "11%",
                        "per": "1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌: 공격력+{0}%",
                    "type": 1,
                    "value": "0.060000"
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
                      "base": "6%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.060000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
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
              "on": "round",
              "if": {
                "in_squad": [
                  "Char_PECS_Serpent_N"
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌: 공격력+{0}%(프로스트 서펀트)",
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌 : 치명타+{0}%(프로스트 서펀트)",
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
                  "Char_PECS_MissSafety_N"
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌: 공격력+{0}%(미스세이프티)",
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌 : 치명타+{0}%(미스세이프티)",
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
                  "Char_PECS_Cerberus_N"
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌: 공격력+{0}%(켈베로스)",
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌 : 치명타+{0}%(켈베로스)",
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
                  "Char_AGS_Rampart_N"
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌: 공격력+{0}%(램파트)",
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌 : 치명타+{0}%(램파트)",
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
                  "Char_PECS_PuppHead_N"
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌: 공격력+{0}%(펍 헤드)",
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌 : 치명타+{0}%(펍 헤드)",
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
                  "Char_PECS_Sadius_N"
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌 : 공격력+{0}%(징벌의 사디어스)",
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌 : 치명타+{0}%(징벌의 사디어스)",
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
                  "Char_PECS_Leanne_N"
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
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌: 공격력+{0}%(자비로운 리앤)",
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
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "가드 오브 시티즌 : 치명타+{0}%(자비로운 리앤)",
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
      "스쿼드 내 시티가드 소속 전투원 수에 따라 자신의 [공격력 +:6~1:%] / [치명타 +:6~1:%]가 추가로 증가합니다.",
      "지정 범위 아군의 [#thunder:전기 저항 +:11~1:%]가 증가합니다.",
      "시티가드 : [$ch;PECS_Serpent], [$ch;PECS_MissSafety], [$ch;PECS_Cerberus], [$ch;AGS_Rampart], [$ch;PECS_PuppHead], [$ch;PECS_Leanne]"
    ]
  }
};