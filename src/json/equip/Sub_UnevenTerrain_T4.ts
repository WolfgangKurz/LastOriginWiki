export default [
  [
    {
      "type": 2,
      "defense": {
        "base": 95,
        "per": 0
      }
    },
    {
      "type": 4,
      "hp": {
        "base": 250,
        "per": 0
      }
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
          "icon": "BuffIcon_DEF_Side",
          "desc": {
            "desc": "험지용 특수 프레임 : 열 보호",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 75,
            "guard": "row"
          },
          "overlap": 1
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "험지용 특수 프레임 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.050000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 36,
            "damage_reduce": {
              "base": "5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_FIRERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 화염 저항+{0}%",
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
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ICERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 냉기 저항+{0}%",
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
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_LIGHTNINGRES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 전기 저항+{0}%",
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
                "per": "0%"
              }
            }
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 2,
      "defense": {
        "base": 104.5,
        "per": 0
      }
    },
    {
      "type": 4,
      "hp": {
        "base": 275,
        "per": 0
      }
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
          "icon": "BuffIcon_DEF_Side",
          "desc": {
            "desc": "험지용 특수 프레임 : 열 보호",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 75,
            "guard": "row"
          },
          "overlap": 1
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "험지용 특수 프레임 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.060000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 36,
            "damage_reduce": {
              "base": "6%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_FIRERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 화염 저항+{0}%",
            "type": 1,
            "value": "0.170000"
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
                "base": "17%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ICERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 냉기 저항+{0}%",
            "type": 1,
            "value": "0.170000"
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
                "base": "17%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_LIGHTNINGRES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 전기 저항+{0}%",
            "type": 1,
            "value": "0.170000"
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
                "base": "17%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 2,
      "defense": {
        "base": 114,
        "per": 0
      }
    },
    {
      "type": 4,
      "hp": {
        "base": 300,
        "per": 0
      }
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
          "icon": "BuffIcon_DEF_Side",
          "desc": {
            "desc": "험지용 특수 프레임 : 열 보호",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 75,
            "guard": "row"
          },
          "overlap": 1
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "험지용 특수 프레임 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.070000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 36,
            "damage_reduce": {
              "base": "7%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_FIRERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 화염 저항+{0}%",
            "type": 1,
            "value": "0.190000"
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
                "base": "19%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ICERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 냉기 저항+{0}%",
            "type": 1,
            "value": "0.190000"
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
                "base": "19%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_LIGHTNINGRES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 전기 저항+{0}%",
            "type": 1,
            "value": "0.190000"
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
                "base": "19%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 2,
      "defense": {
        "base": 123.5,
        "per": 0
      }
    },
    {
      "type": 4,
      "hp": {
        "base": 325,
        "per": 0
      }
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
          "icon": "BuffIcon_DEF_Side",
          "desc": {
            "desc": "험지용 특수 프레임 : 열 보호",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 75,
            "guard": "row"
          },
          "overlap": 1
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "험지용 특수 프레임 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.080000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 36,
            "damage_reduce": {
              "base": "8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_FIRERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 화염 저항+{0}%",
            "type": 1,
            "value": "0.210000"
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
                "base": "21%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ICERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 냉기 저항+{0}%",
            "type": 1,
            "value": "0.210000"
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
                "base": "21%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_LIGHTNINGRES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 전기 저항+{0}%",
            "type": 1,
            "value": "0.210000"
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
                "base": "21%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 2,
      "defense": {
        "base": 133,
        "per": 0
      }
    },
    {
      "type": 4,
      "hp": {
        "base": 350,
        "per": 0
      }
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
          "icon": "BuffIcon_DEF_Side",
          "desc": {
            "desc": "험지용 특수 프레임 : 열 보호",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 75,
            "guard": "row"
          },
          "overlap": 1
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "험지용 특수 프레임 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.090000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 36,
            "damage_reduce": {
              "base": "9%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_FIRERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 화염 저항+{0}%",
            "type": 1,
            "value": "0.230000"
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
                "base": "23%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ICERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 냉기 저항+{0}%",
            "type": 1,
            "value": "0.230000"
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
                "base": "23%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_LIGHTNINGRES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 전기 저항+{0}%",
            "type": 1,
            "value": "0.230000"
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
                "base": "23%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 2,
      "defense": {
        "base": 142.5,
        "per": 0
      }
    },
    {
      "type": 4,
      "hp": {
        "base": 375,
        "per": 0
      }
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
          "icon": "BuffIcon_DEF_Side",
          "desc": {
            "desc": "험지용 특수 프레임 : 열 보호",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 75,
            "guard": "row"
          },
          "overlap": 1
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "험지용 특수 프레임 : 받는 피해 {0}% 감소",
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
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_FIRERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 화염 저항+{0}%",
            "type": 1,
            "value": "0.250000"
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
                "base": "25%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ICERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 냉기 저항+{0}%",
            "type": 1,
            "value": "0.250000"
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
                "base": "25%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_LIGHTNINGRES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 전기 저항+{0}%",
            "type": 1,
            "value": "0.250000"
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
                "base": "25%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 2,
      "defense": {
        "base": 152,
        "per": 0
      }
    },
    {
      "type": 4,
      "hp": {
        "base": 400,
        "per": 0
      }
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
          "icon": "BuffIcon_DEF_Side",
          "desc": {
            "desc": "험지용 특수 프레임 : 열 보호",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 75,
            "guard": "row"
          },
          "overlap": 1
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "험지용 특수 프레임 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.110000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 36,
            "damage_reduce": {
              "base": "11%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_FIRERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 화염 저항+{0}%",
            "type": 1,
            "value": "0.270000"
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
                "base": "27%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ICERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 냉기 저항+{0}%",
            "type": 1,
            "value": "0.270000"
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
                "base": "27%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_LIGHTNINGRES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 전기 저항+{0}%",
            "type": 1,
            "value": "0.270000"
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
                "base": "27%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 2,
      "defense": {
        "base": 161.5,
        "per": 0
      }
    },
    {
      "type": 4,
      "hp": {
        "base": 425,
        "per": 0
      }
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
          "icon": "BuffIcon_DEF_Side",
          "desc": {
            "desc": "험지용 특수 프레임 : 열 보호",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 75,
            "guard": "row"
          },
          "overlap": 1
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "험지용 특수 프레임 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.120000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 36,
            "damage_reduce": {
              "base": "12%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_FIRERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 화염 저항+{0}%",
            "type": 1,
            "value": "0.290000"
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
                "base": "29%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ICERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 냉기 저항+{0}%",
            "type": 1,
            "value": "0.290000"
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
                "base": "29%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_LIGHTNINGRES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 전기 저항+{0}%",
            "type": 1,
            "value": "0.290000"
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
                "base": "29%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 2,
      "defense": {
        "base": 171,
        "per": 0
      }
    },
    {
      "type": 4,
      "hp": {
        "base": 450,
        "per": 0
      }
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
          "icon": "BuffIcon_DEF_Side",
          "desc": {
            "desc": "험지용 특수 프레임 : 열 보호",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 75,
            "guard": "row"
          },
          "overlap": 1
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "험지용 특수 프레임 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.130000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 36,
            "damage_reduce": {
              "base": "13%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_FIRERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 화염 저항+{0}%",
            "type": 1,
            "value": "0.310000"
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
                "base": "31%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ICERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 냉기 저항+{0}%",
            "type": 1,
            "value": "0.310000"
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
                "base": "31%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_LIGHTNINGRES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 전기 저항+{0}%",
            "type": 1,
            "value": "0.310000"
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
                "base": "31%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 2,
      "defense": {
        "base": 180.5,
        "per": 0
      }
    },
    {
      "type": 4,
      "hp": {
        "base": 475,
        "per": 0
      }
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
          "icon": "BuffIcon_DEF_Side",
          "desc": {
            "desc": "험지용 특수 프레임 : 열 보호",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 75,
            "guard": "row"
          },
          "overlap": 1
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "험지용 특수 프레임 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.140000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 36,
            "damage_reduce": {
              "base": "14%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_FIRERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 화염 저항+{0}%",
            "type": 1,
            "value": "0.330000"
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
                "base": "33%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ICERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 냉기 저항+{0}%",
            "type": 1,
            "value": "0.330000"
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
                "base": "33%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_LIGHTNINGRES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 전기 저항+{0}%",
            "type": 1,
            "value": "0.330000"
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
                "base": "33%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 2,
      "defense": {
        "base": 190,
        "per": 0
      }
    },
    {
      "type": 4,
      "hp": {
        "base": 500,
        "per": 0
      }
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
          "icon": "BuffIcon_DEF_Side",
          "desc": {
            "desc": "험지용 특수 프레임 : 열 보호",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 75,
            "guard": "row"
          },
          "overlap": 1
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "험지용 특수 프레임 : 받는 피해 {0}% 감소",
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
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_FIRERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 화염 저항+{0}%",
            "type": 1,
            "value": "0.350000"
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
                "base": "35%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ICERES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 냉기 저항+{0}%",
            "type": 1,
            "value": "0.350000"
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
                "base": "35%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_LIGHTNINGRES_UP",
          "desc": {
            "desc": "험지용 특수 프레임 : 전기 저항+{0}%",
            "type": 1,
            "value": "0.350000"
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
                "base": "35%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ]
];