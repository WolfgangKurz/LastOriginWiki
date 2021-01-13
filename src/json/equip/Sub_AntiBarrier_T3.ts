export default [
  [
    {
      "on": "round",
      "if": {
        "on": {
          "func": "OR",
          "select": [
            38
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
      "target": 0,
      "buffs": [
        {
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "에너지 전환 : 공격력+{0}%",
            "type": 1,
            "value": "0.060000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "6%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "에너지 전환 : 행동력+{0}%",
            "type": 1,
            "value": "0.060000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "6%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_BUFF",
          "desc": {
            "desc": "에너지 전환 : 방어막 해제",
            "type": 0,
            "value": "38"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 88,
            "off": {
              "type": 38,
              "target": 0
            }
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "on": "round",
      "if": {
        "on": {
          "func": "OR",
          "select": [
            38
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
      "target": 0,
      "buffs": [
        {
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "에너지 전환 : 공격력+{0}%",
            "type": 1,
            "value": "0.065000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "6.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "에너지 전환 : 행동력+{0}%",
            "type": 1,
            "value": "0.065000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "6.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_BUFF",
          "desc": {
            "desc": "에너지 전환 : 방어막 해제",
            "type": 0,
            "value": "38"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 88,
            "off": {
              "type": 38,
              "target": 0
            }
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "on": "round",
      "if": {
        "on": {
          "func": "OR",
          "select": [
            38
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
      "target": 0,
      "buffs": [
        {
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "에너지 전환 : 공격력+{0}%",
            "type": 1,
            "value": "0.070000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "7%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "에너지 전환 : 행동력+{0}%",
            "type": 1,
            "value": "0.070000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "7%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_BUFF",
          "desc": {
            "desc": "에너지 전환 : 방어막 해제",
            "type": 0,
            "value": "38"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 88,
            "off": {
              "type": 38,
              "target": 0
            }
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "on": "round",
      "if": {
        "on": {
          "func": "OR",
          "select": [
            38
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
      "target": 0,
      "buffs": [
        {
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "에너지 전환 : 공격력+{0}%",
            "type": 1,
            "value": "0.075000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "7.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "에너지 전환 : 행동력+{0}%",
            "type": 1,
            "value": "0.075000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "7.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_BUFF",
          "desc": {
            "desc": "에너지 전환 : 방어막 해제",
            "type": 0,
            "value": "38"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 88,
            "off": {
              "type": 38,
              "target": 0
            }
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "on": "round",
      "if": {
        "on": {
          "func": "OR",
          "select": [
            38
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
      "target": 0,
      "buffs": [
        {
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "에너지 전환 : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "에너지 전환 : 행동력+{0}%",
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
        },
        {
          "icon": "BuffIcon_REMOVE_BUFF",
          "desc": {
            "desc": "에너지 전환 : 방어막 해제",
            "type": 0,
            "value": "38"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 88,
            "off": {
              "type": 38,
              "target": 0
            }
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "on": "round",
      "if": {
        "on": {
          "func": "OR",
          "select": [
            38
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
      "target": 0,
      "buffs": [
        {
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "에너지 전환 : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "에너지 전환 : 행동력+{0}%",
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
        },
        {
          "icon": "BuffIcon_REMOVE_BUFF",
          "desc": {
            "desc": "에너지 전환 : 방어막 해제",
            "type": 0,
            "value": "38"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 88,
            "off": {
              "type": 38,
              "target": 0
            }
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "on": "round",
      "if": {
        "on": {
          "func": "OR",
          "select": [
            38
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
      "target": 0,
      "buffs": [
        {
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "에너지 전환 : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "에너지 전환 : 행동력+{0}%",
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
        },
        {
          "icon": "BuffIcon_REMOVE_BUFF",
          "desc": {
            "desc": "에너지 전환 : 방어막 해제",
            "type": 0,
            "value": "38"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 88,
            "off": {
              "type": 38,
              "target": 0
            }
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "on": "round",
      "if": {
        "on": {
          "func": "OR",
          "select": [
            38
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
      "target": 0,
      "buffs": [
        {
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "에너지 전환 : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "에너지 전환 : 행동력+{0}%",
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
        },
        {
          "icon": "BuffIcon_REMOVE_BUFF",
          "desc": {
            "desc": "에너지 전환 : 방어막 해제",
            "type": 0,
            "value": "38"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 88,
            "off": {
              "type": 38,
              "target": 0
            }
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "on": "round",
      "if": {
        "on": {
          "func": "OR",
          "select": [
            38
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
      "target": 0,
      "buffs": [
        {
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "에너지 전환 : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "에너지 전환 : 행동력+{0}%",
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
        },
        {
          "icon": "BuffIcon_REMOVE_BUFF",
          "desc": {
            "desc": "에너지 전환 : 방어막 해제",
            "type": 0,
            "value": "38"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 88,
            "off": {
              "type": 38,
              "target": 0
            }
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "on": "round",
      "if": {
        "on": {
          "func": "OR",
          "select": [
            38
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
      "target": 0,
      "buffs": [
        {
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "에너지 전환 : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "에너지 전환 : 행동력+{0}%",
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
        },
        {
          "icon": "BuffIcon_REMOVE_BUFF",
          "desc": {
            "desc": "에너지 전환 : 방어막 해제",
            "type": 0,
            "value": "38"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 88,
            "off": {
              "type": 38,
              "target": 0
            }
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "on": "round",
      "if": {
        "on": {
          "func": "OR",
          "select": [
            38
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
      "target": 0,
      "buffs": [
        {
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "에너지 전환 : 공격력+{0}%",
            "type": 1,
            "value": "0.140000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "14%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_UP",
          "desc": {
            "desc": "에너지 전환 : 행동력+{0}%",
            "type": 1,
            "value": "0.140000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "14%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_BUFF",
          "desc": {
            "desc": "에너지 전환 : 방어막 해제",
            "type": 0,
            "value": "38"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 88,
            "off": {
              "type": 38,
              "target": 0
            }
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ]
];