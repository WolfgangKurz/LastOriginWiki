export default {
  "active1": {
    "key": "active1",
    "name": "초고압 분사",
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
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
          "rate": 1.205,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
          "rate": 1.305,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
          "rate": 1.405,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
          "rate": 1.505,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
          "rate": 1.605,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
          "rate": 1.705,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
          "rate": 1.805,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
          "rate": 1.905,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
          "rate": 2.005,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "4>456",
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
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "침수 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.500000"
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
                        "base": "50%",
                        "per": "2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "침수 : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1,
                2
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
                    "desc": "침수 : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.500000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-50%",
                        "per": "-2.5%"
                      }
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
      "지정 범위에 물대포를 발사해 [@,#chill:공격력 :0~0:배 냉기 피해]를 주고, 2라운드 동안 대상을 침수 상태로 만듭니다.",
      "침수 : [#chill:냉기 저항 -:50~2.5:%] / [#thunder:전기 저항 -:50~2.5:%] / [#fire:화염 저항 +:50~2.5:%]"
    ]
  },
  "active2": {
    "key": "active2",
    "name": "묘목 심기",
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
          "rate": 2.2,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "묘목 심기 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.300000"
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
                        "base": "-30%",
                        "per": "-1.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
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
                    3
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
                    "type": 1,
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
            }
          ]
        },
        {
          "rate": 2.4,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "묘목 심기 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.300000"
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
                        "base": "-30%",
                        "per": "-1.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
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
                    3
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
                    "type": 1,
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
            }
          ]
        },
        {
          "rate": 2.6,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "묘목 심기 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.300000"
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
                        "base": "-30%",
                        "per": "-1.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
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
                    3
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
                    "type": 1,
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
            }
          ]
        },
        {
          "rate": 2.8,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "묘목 심기 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.300000"
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
                        "base": "-30%",
                        "per": "-1.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
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
                    3
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
                    "type": 1,
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
            }
          ]
        },
        {
          "rate": 3,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "묘목 심기 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.300000"
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
                        "base": "-30%",
                        "per": "-1.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
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
                    3
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
                    "type": 1,
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
            }
          ]
        },
        {
          "rate": 3.2,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "묘목 심기 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.300000"
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
                        "base": "-30%",
                        "per": "-1.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
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
                    3
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
                    "type": 1,
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
            }
          ]
        },
        {
          "rate": 3.4,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "묘목 심기 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.300000"
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
                        "base": "-30%",
                        "per": "-1.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
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
                    3
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
                    "type": 1,
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
            }
          ]
        },
        {
          "rate": 3.6,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "묘목 심기 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.300000"
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
                        "base": "-30%",
                        "per": "-1.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
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
                    3
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
                    "type": 1,
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
            }
          ]
        },
        {
          "rate": 3.8,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "묘목 심기 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.300000"
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
                        "base": "-30%",
                        "per": "-1.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
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
                    3
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
                    "type": 1,
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
            }
          ]
        },
        {
          "rate": 4,
          "type": 0,
          "range": 2,
          "ap": 8,
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "묘목 심기 : 화염 저항 {0}%",
                    "type": 1,
                    "value": "-0.300000"
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
                        "base": "-30%",
                        "per": "-1.5%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
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
                    3
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "묘목 심기 : 받는 피해+{0}%",
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
                },
                {
                  "icon": "BuffIcon_STUN",
                  "desc": {
                    "desc": "묘목 심기 : 행동 불가",
                    "type": 1,
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
            }
          ]
        }
      ]
    },
    "desc": [
      "지정 대상에게 묘목을 심어 [@:공격력 :0~0:배 피해]를 주고, [#fire:화염 저항 -:30~1.5:%]를 낮춥니다.",
      "대상이 방어력 감소 상태면 [받는 피해 +:25~1.25:%]가 증가하는 상태로 만들며, 일정 확률로 행동 불가 상태가 됩니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "수풀 매복",
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
                    "desc": "수풀 매복 : 공격력+{0}%",
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
                    "desc": "수풀 매복 : 치명타+{0}%",
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
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "수풀 매복 : 받는 피해 {0}% 감소",
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
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "라운드 개시 시, 자신과 같은 행의 뒤에 배치된 아군의 [공격력 +:15~0.75:%] / [치명타 +:10~0.5:%]를 증가시키며 [받는 피해 -:10~0.5:%]를 감소시킵니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "숲의 교감",
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
                    "desc": "숲의 교감 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "10%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "숲의 교감 : 공격력+{0}%",
                    "type": 1,
                    "value": "0.150000"
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
                      "base": "15%",
                      "per": "0.75%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_CRITICAL_UP",
                  "desc": {
                    "desc": "숲의 교감 : 치명타+{0}%",
                    "type": 1,
                    "value": "0.100000"
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
                      "base": "10%",
                      "per": "0.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "숲의 교감 : 받는 피해 {0}% 감소",
                    "type": 1,
                    "value": "0.100000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
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
              "maxStack": 0
            },
            {
              "on": "round",
              "if": {
                "target": [
                  "Char_PECS_DarkElf_N",
                  "Char_PECS_HighElven_N"
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
                    "desc": "숲의 교감 : 공격력+{0}%",
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
                    "desc": "숲의 교감 : 치명타+{0}%",
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
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "숲의 교감 : 받는 피해 {0}% 감소",
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
              "maxStack": 0
            },
            {
              "on": "round",
              "if": {
                "on": {
                  "target": "target",
                  "func": "OR",
                  "select": [
                    "Effect_PECS_DarkElf_N_3",
                    "Effect_PECS_DarkElf_N_13"
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_ATK_UP",
                  "desc": {
                    "desc": "숲의 교감 : 공격력+{0}%",
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
                    "desc": "숲의 교감 : 치명타+{0}%",
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
                },
                {
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "숲의 교감 : 받는 피해 {0}% 감소",
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
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "라운드 개시 시, 자신의 [행동력 +:10~1:%]를 증가시키며, [$ch;PECS_DarkElf]의 패시브 효과를 받는 대상과 [$ch;PECS_HighElven], [$ch;PECS_DarkElf]의 [공격력 +:15~0.75:%] / [치명타 +:10~0.5:%]를 증가시키고 [받는 피해 -:10~0.5:%]를 감소시킵니다."
    ]
  }
};