export default [
  [
    {
      "type": 6,
      "accuracy": {
        "base": "20%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "3%",
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
        "base": "22%",
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
        "base": "24%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "4.2%",
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
        "base": "26%",
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
        "base": "28%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "5.4%",
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
        "base": "32%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "6.6%",
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
        "base": "34%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "7.2%",
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
  ],
  [
    {
      "type": 6,
      "accuracy": {
        "base": "36%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "7.8%",
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
            "value": "0.145000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "14.5%",
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
        "base": "38%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "8.4%",
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
            "value": "0.150000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "15%",
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
        "base": "40%",
        "per": "0%"
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "9%",
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
            "value": "0.155000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "15.5%",
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