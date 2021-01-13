export default [
  [
    {
      "type": 6,
      "accuracy": {
        "base": "15%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "2%",
        "per": "0%"
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
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "정밀형 전투 OS : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_DOWN",
          "desc": {
            "desc": "정밀형 전투 OS : 행동력 {0}%",
            "type": 1,
            "value": "-0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "-8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 전투 OS : 적중 감소 해제",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 7,
              "target": 1
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
      "type": 6,
      "accuracy": {
        "base": "16.5%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "2.4%",
        "per": "0%"
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
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "정밀형 전투 OS : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_DOWN",
          "desc": {
            "desc": "정밀형 전투 OS : 행동력 {0}%",
            "type": 1,
            "value": "-0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "-8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 전투 OS : 적중 감소 해제",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 7,
              "target": 1
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
      "type": 6,
      "accuracy": {
        "base": "18%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "2.8%",
        "per": "0%"
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
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "정밀형 전투 OS : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_DOWN",
          "desc": {
            "desc": "정밀형 전투 OS : 행동력 {0}%",
            "type": 1,
            "value": "-0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "-8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 전투 OS : 적중 감소 해제",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 7,
              "target": 1
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
      "type": 6,
      "accuracy": {
        "base": "19.5%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "3.2%",
        "per": "0%"
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
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "정밀형 전투 OS : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_DOWN",
          "desc": {
            "desc": "정밀형 전투 OS : 행동력 {0}%",
            "type": 1,
            "value": "-0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "-8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 전투 OS : 적중 감소 해제",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 7,
              "target": 1
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
      "type": 6,
      "accuracy": {
        "base": "21%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "3.6%",
        "per": "0%"
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
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "정밀형 전투 OS : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_DOWN",
          "desc": {
            "desc": "정밀형 전투 OS : 행동력 {0}%",
            "type": 1,
            "value": "-0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "-8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 전투 OS : 적중 감소 해제",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 7,
              "target": 1
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
      "type": 6,
      "accuracy": {
        "base": "22.5%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "4%",
        "per": "0%"
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
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "정밀형 전투 OS : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_DOWN",
          "desc": {
            "desc": "정밀형 전투 OS : 행동력 {0}%",
            "type": 1,
            "value": "-0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "-8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 전투 OS : 적중 감소 해제",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 7,
              "target": 1
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
      "type": 6,
      "accuracy": {
        "base": "24%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "4.4%",
        "per": "0%"
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
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "정밀형 전투 OS : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_DOWN",
          "desc": {
            "desc": "정밀형 전투 OS : 행동력 {0}%",
            "type": 1,
            "value": "-0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "-8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 전투 OS : 적중 감소 해제",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 7,
              "target": 1
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
      "type": 6,
      "accuracy": {
        "base": "25.5%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "4.8%",
        "per": "0%"
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
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "정밀형 전투 OS : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_DOWN",
          "desc": {
            "desc": "정밀형 전투 OS : 행동력 {0}%",
            "type": 1,
            "value": "-0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "-8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 전투 OS : 적중 감소 해제",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 7,
              "target": 1
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
      "type": 6,
      "accuracy": {
        "base": "27%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "5.2%",
        "per": "0%"
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
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "정밀형 전투 OS : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_DOWN",
          "desc": {
            "desc": "정밀형 전투 OS : 행동력 {0}%",
            "type": 1,
            "value": "-0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "-8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 전투 OS : 적중 감소 해제",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 7,
              "target": 1
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
      "type": 6,
      "accuracy": {
        "base": "28.5%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "5.6%",
        "per": "0%"
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
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "정밀형 전투 OS : 공격력+{0}%",
            "type": 1,
            "value": "0.135000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "13.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_AP_DOWN",
          "desc": {
            "desc": "정밀형 전투 OS : 행동력 {0}%",
            "type": 1,
            "value": "-0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "-8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 전투 OS : 적중 감소 해제",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 7,
              "target": 1
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
      "type": 6,
      "accuracy": {
        "base": "30%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "6%",
        "per": "0%"
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
          "icon": "BuffIcon_ATK_UP",
          "desc": {
            "desc": "정밀형 전투 OS : 공격력+{0}%",
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
          "icon": "BuffIcon_AP_DOWN",
          "desc": {
            "desc": "정밀형 전투 OS : 행동력 {0}%",
            "type": 1,
            "value": "-0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 13,
            "turnSpeed": {
              "base": "-8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 전투 OS : 적중 감소 해제",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 7,
              "target": 1
            }
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ]
];