export default {
  "active1": {
    "key": "active1",
    "name": "고압 분사",
    "icon": "IceShot",
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
          "rate": 0.535,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "24568",
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
          "rate": 0.58,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "24568",
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
          "rate": 0.625,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "24568",
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
          "rate": 0.67,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "24568",
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
          "rate": 0.715,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "24568",
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
          "rate": 0.76,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "24568",
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
          "rate": 0.805,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "24568",
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
          "rate": 0.85,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "24568",
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
          "rate": 0.895,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "24568",
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
          "rate": 0.94,
          "type": 2,
          "range": 3,
          "ap": 7,
          "grid": "24568",
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
      "물 대포를 고압 분사해 [@,#chill:공격력 :0~0:배 냉기 피해]를 주며, 2라운드 동안 [#chill,#thunder:냉기/전기 저항 -:50~2.5:%]가 감소하며 [#fire:화염 저항 +:50~2.5:%]가 증가하는 침수 상태로 만듭니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "액화 질소 분사",
    "icon": "IceShot",
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
          "rate": 1.075,
          "type": 2,
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
                    "desc": "빙결 : 행동 불능",
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_Sadius_N"
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
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
                      "with": "Char_PECS_Sadius_N"
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
          "rate": 1.165,
          "type": 2,
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
                    "desc": "빙결 : 행동 불능",
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_Sadius_N"
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
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
                      "with": "Char_PECS_Sadius_N"
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
          "rate": 1.255,
          "type": 2,
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
                    "desc": "빙결 : 행동 불능",
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_Sadius_N"
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
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
                      "with": "Char_PECS_Sadius_N"
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
          "rate": 1.345,
          "type": 2,
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
                    "desc": "빙결 : 행동 불능",
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_Sadius_N"
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
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
                      "with": "Char_PECS_Sadius_N"
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
          "rate": 1.435,
          "type": 2,
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
                    "desc": "빙결 : 행동 불능",
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_Sadius_N"
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
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
                      "with": "Char_PECS_Sadius_N"
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
          "rate": 1.525,
          "type": 2,
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
                    "desc": "빙결 : 행동 불능",
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_Sadius_N"
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
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
                      "with": "Char_PECS_Sadius_N"
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
          "rate": 1.615,
          "type": 2,
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
                    "desc": "빙결 : 행동 불능",
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_Sadius_N"
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
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
                      "with": "Char_PECS_Sadius_N"
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
          "rate": 1.705,
          "type": 2,
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
                    "desc": "빙결 : 행동 불능",
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_Sadius_N"
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
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
                      "with": "Char_PECS_Sadius_N"
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
          "rate": 1.795,
          "type": 2,
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
                    "desc": "빙결 : 행동 불능",
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_Sadius_N"
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
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
                      "with": "Char_PECS_Sadius_N"
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
          "rate": 1.885,
          "type": 2,
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
                    "desc": "빙결 : 행동 불능",
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
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "빙결 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.300000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
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
                },
                {
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                    "type": 78,
                    "immovable": true
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 103,
                    "collaborate": {
                      "skill": 2,
                      "with": "Char_PECS_Sadius_N"
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
                  "icon": "BuffIcon_SNARE",
                  "desc": {
                    "desc": "이동 불가",
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
                  "icon": "BuffIcon_TOGETHER_ATTACK",
                  "desc": {
                    "desc": "액화 질소 분사 : 협동 공격",
                    "type": 1,
                    "value": "Char_PECS_Sadius_N"
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
                      "with": "Char_PECS_Sadius_N"
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
      "액화 질소를 분사해 [@,#chill:공격력 :0~0:배 냉기 피해]를 주며, 2라운드 동안 이동 불가 상태로 만듭니다.",
      "대상이 침수 상태면 빙결 상태로 만듭니다.",
      "빙결 상태에선 행동 불가이며, 피격시 [받는 피해 +:30~1.5:%]가 증가됩니다.",
      "스쿼드 내 [$ch;PECS_Sadius]가 있을 시, 지정 대상에게 <일렉트릭 펜스> 스킬 협동 공격을 합니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "긴급 구조",
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
          "grid": "12478",
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
                  "icon": "BuffIcon_DEF_Char",
                  "desc": {
                    "desc": "긴급 구조 : 지정 대상 보호",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 76,
                    "guard": "target"
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "긴급 구조 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.040000"
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
                      "base": "4%",
                      "per": "1%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "0",
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
                    "type": 0,
                    "attack": {
                      "base": 0,
                      "per": 0
                    }
                  },
                  "overlap": 0
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
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "긴급 구조 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.040000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "4%",
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
      "라운드 개시 시, 지정 범위의 경장 / 중장형 아군을 보호하고 [행동력 +:4~1:%]을 증가시킵니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "불굴의 소방관",
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
                  "icon": "BuffIcon_DAMAGE_REDUCE",
                  "desc": {
                    "desc": "불굴의 소방관 : 받는 피해 {0}% 감소",
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
                      "per": "3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "불굴의 소방관 : 행동력+{0}%",
                    "type": 1,
                    "value": "0.030000"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "3%",
                      "per": "0.15%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_DEF_RESSURRECT",
                  "desc": {
                    "desc": "불굴의 소방관 : {0}HP로 전투 속행(해제 불가)",
                    "type": 0,
                    "value": "100"
                  },
                  "attr": 0,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 82,
                    "revive": {
                      "base": 100,
                      "per": 100
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
                    "desc": "불굴의 소방관 : {0}HP로 전투 속행(해제 불가)",
                    "type": 0,
                    "value": "100"
                  },
                  "attr": 0,
                  "erase": {},
                  "value": {
                    "isBuff": true,
                    "type": 82,
                    "revive": {
                      "base": 100,
                      "per": 100
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
                  "icon": "BuffIcon_FIRERES_UP",
                  "desc": {
                    "desc": "불굴의 소방관 : 화염 저항+{0}%",
                    "type": 1,
                    "value": "0.120000"
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
                        "base": "12%",
                        "per": "2%"
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
              "if": false,
              "body": [
                0,
                1
              ],
              "class": [
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
                    "desc": "불굴의 소방관 : 냉기 저항+{0}%",
                    "type": 1,
                    "value": "0.120000"
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
                        "base": "12%",
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
      "전투 개시시 [:100~100:HP로 전투 속행] 효과를 얻습니다.",
      "라운드 개시 시, [받는 피해 -:15~3:%]가 감소하며 [행동력 +:3~0.15:%] / [#fire:화염 저항 +:12~2:%] / [#chill:냉기 저항 +:12~2:%]가 증가합니다."
    ]
  }
};