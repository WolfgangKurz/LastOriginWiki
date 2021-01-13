export default [
  [
    {
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "20%",
          "per": "0%"
        }
      }
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
            "desc": "아쿠아 모듈 : 공격력+{0}% (침수 시)",
            "type": 1,
            "value": "0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 방어력+{0}% (침수 시)",
            "type": 1,
            "value": "0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 3,
            "defense": {
              "base": "8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 적중+{0}% (침수 시)",
            "type": 1,
            "value": "0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 회피+{0}% (침수 시)",
            "type": 1,
            "value": "0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 11,
            "evade": {
              "base": "8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 행동력+{0}% (침수 시)",
            "type": 1,
            "value": "0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "8%",
              "per": "0%"
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
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "22%",
          "per": "0%"
        }
      }
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
            "desc": "아쿠아 모듈 : 공격력+{0}% (침수 시)",
            "type": 1,
            "value": "0.085000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "8.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 방어력+{0}% (침수 시)",
            "type": 1,
            "value": "0.085000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 3,
            "defense": {
              "base": "8.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 적중+{0}% (침수 시)",
            "type": 1,
            "value": "0.085000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "8.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 회피+{0}% (침수 시)",
            "type": 1,
            "value": "0.085000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 11,
            "evade": {
              "base": "8.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 행동력+{0}% (침수 시)",
            "type": 1,
            "value": "0.085000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "8.5%",
              "per": "0%"
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
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "24%",
          "per": "0%"
        }
      }
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
            "desc": "아쿠아 모듈 : 공격력+{0}% (침수 시)",
            "type": 1,
            "value": "0.090000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "9%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 방어력+{0}% (침수 시)",
            "type": 1,
            "value": "0.090000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 3,
            "defense": {
              "base": "9%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 적중+{0}% (침수 시)",
            "type": 1,
            "value": "0.090000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "9%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 회피+{0}% (침수 시)",
            "type": 1,
            "value": "0.090000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 11,
            "evade": {
              "base": "9%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 행동력+{0}% (침수 시)",
            "type": 1,
            "value": "0.090000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "9%",
              "per": "0%"
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
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "26%",
          "per": "0%"
        }
      }
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
            "desc": "아쿠아 모듈 : 공격력+{0}% (침수 시)",
            "type": 1,
            "value": "0.095000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "9.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 방어력+{0}% (침수 시)",
            "type": 1,
            "value": "0.095000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 3,
            "defense": {
              "base": "9.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 적중+{0}% (침수 시)",
            "type": 1,
            "value": "0.095000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "9.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 회피+{0}% (침수 시)",
            "type": 1,
            "value": "0.095000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 11,
            "evade": {
              "base": "9.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 행동력+{0}% (침수 시)",
            "type": 1,
            "value": "0.095000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "9.5%",
              "per": "0%"
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
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "28%",
          "per": "0%"
        }
      }
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
            "desc": "아쿠아 모듈 : 공격력+{0}% (침수 시)",
            "type": 1,
            "value": "0.100000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "10%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 방어력+{0}% (침수 시)",
            "type": 1,
            "value": "0.100000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 3,
            "defense": {
              "base": "10%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 적중+{0}% (침수 시)",
            "type": 1,
            "value": "0.100000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "10%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 회피+{0}% (침수 시)",
            "type": 1,
            "value": "0.100000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 11,
            "evade": {
              "base": "10%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 행동력+{0}% (침수 시)",
            "type": 1,
            "value": "0.100000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "10%",
              "per": "0%"
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
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "30%",
          "per": "0%"
        }
      }
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
            "desc": "아쿠아 모듈 : 공격력+{0}% (침수 시)",
            "type": 1,
            "value": "0.105000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "10.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 방어력+{0}% (침수 시)",
            "type": 1,
            "value": "0.105000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 3,
            "defense": {
              "base": "10.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 적중+{0}% (침수 시)",
            "type": 1,
            "value": "0.105000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "10.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 회피+{0}% (침수 시)",
            "type": 1,
            "value": "0.105000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 11,
            "evade": {
              "base": "10.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 행동력+{0}% (침수 시)",
            "type": 1,
            "value": "0.105000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "10.5%",
              "per": "0%"
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
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "32%",
          "per": "0%"
        }
      }
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
            "desc": "아쿠아 모듈 : 공격력+{0}% (침수 시)",
            "type": 1,
            "value": "0.110000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "11%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 방어력+{0}% (침수 시)",
            "type": 1,
            "value": "0.110000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 3,
            "defense": {
              "base": "11%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 적중+{0}% (침수 시)",
            "type": 1,
            "value": "0.110000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "11%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 회피+{0}% (침수 시)",
            "type": 1,
            "value": "0.110000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 11,
            "evade": {
              "base": "11%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 행동력+{0}% (침수 시)",
            "type": 1,
            "value": "0.110000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "11%",
              "per": "0%"
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
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "34%",
          "per": "0%"
        }
      }
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
            "desc": "아쿠아 모듈 : 공격력+{0}% (침수 시)",
            "type": 1,
            "value": "0.115000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "11.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 방어력+{0}% (침수 시)",
            "type": 1,
            "value": "0.115000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 3,
            "defense": {
              "base": "11.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 적중+{0}% (침수 시)",
            "type": 1,
            "value": "0.115000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "11.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 회피+{0}% (침수 시)",
            "type": 1,
            "value": "0.115000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 11,
            "evade": {
              "base": "11.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 행동력+{0}% (침수 시)",
            "type": 1,
            "value": "0.115000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "11.5%",
              "per": "0%"
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
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "36%",
          "per": "0%"
        }
      }
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
            "desc": "아쿠아 모듈 : 공격력+{0}% (침수 시)",
            "type": 1,
            "value": "0.120000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "12%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 방어력+{0}% (침수 시)",
            "type": 1,
            "value": "0.120000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 3,
            "defense": {
              "base": "12%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 적중+{0}% (침수 시)",
            "type": 1,
            "value": "0.120000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "12%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 회피+{0}% (침수 시)",
            "type": 1,
            "value": "0.120000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 11,
            "evade": {
              "base": "12%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 행동력+{0}% (침수 시)",
            "type": 1,
            "value": "0.120000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "12%",
              "per": "0%"
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
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "38%",
          "per": "0%"
        }
      }
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
            "desc": "아쿠아 모듈 : 공격력+{0}% (침수 시)",
            "type": 1,
            "value": "0.125000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "12.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 방어력+{0}% (침수 시)",
            "type": 1,
            "value": "0.125000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 3,
            "defense": {
              "base": "12.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 적중+{0}% (침수 시)",
            "type": 1,
            "value": "0.125000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "12.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 회피+{0}% (침수 시)",
            "type": 1,
            "value": "0.125000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 11,
            "evade": {
              "base": "12.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 행동력+{0}% (침수 시)",
            "type": 1,
            "value": "0.125000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "12.5%",
              "per": "0%"
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
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "40%",
          "per": "0%"
        }
      }
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
            "desc": "아쿠아 모듈 : 공격력+{0}% (침수 시)",
            "type": 1,
            "value": "0.130000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "13%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 방어력+{0}% (침수 시)",
            "type": 1,
            "value": "0.130000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 3,
            "defense": {
              "base": "13%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 적중+{0}% (침수 시)",
            "type": 1,
            "value": "0.130000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "13%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 회피+{0}% (침수 시)",
            "type": 1,
            "value": "0.130000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 11,
            "evade": {
              "base": "13%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "아쿠아 모듈 : 행동력+{0}% (침수 시)",
            "type": 1,
            "value": "0.130000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "13%",
              "per": "0%"
            }
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ]
];