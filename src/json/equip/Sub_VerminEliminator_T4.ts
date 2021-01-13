export default [
  [
    {
      "type": 0,
      "attack": {
        "base": 60,
        "per": 0
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "5%",
        "per": "0%"
      }
    },
    {
      "type": 6,
      "accuracy": {
        "base": "10%",
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
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "해충 파쇄기 : 방어 관통+{0}%",
            "type": 1,
            "value": "0.250000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "25%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "해충 파쇄기 : 공격력 감소 효과 해제",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 1,
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
      "type": 0,
      "attack": {
        "base": 66,
        "per": 0
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
      "type": 6,
      "accuracy": {
        "base": "12%",
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
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "해충 파쇄기 : 방어 관통+{0}%",
            "type": 1,
            "value": "0.290000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "29%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "해충 파쇄기 : 공격력 감소 효과 해제",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 1,
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
      "type": 0,
      "attack": {
        "base": 72,
        "per": 0
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "7%",
        "per": "0%"
      }
    },
    {
      "type": 6,
      "accuracy": {
        "base": "14%",
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
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "해충 파쇄기 : 방어 관통+{0}%",
            "type": 1,
            "value": "0.330000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "33%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "해충 파쇄기 : 공격력 감소 효과 해제",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 1,
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
      "type": 0,
      "attack": {
        "base": 78,
        "per": 0
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "8%",
        "per": "0%"
      }
    },
    {
      "type": 6,
      "accuracy": {
        "base": "16%",
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
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "해충 파쇄기 : 방어 관통+{0}%",
            "type": 1,
            "value": "0.370000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "37%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "해충 파쇄기 : 공격력 감소 효과 해제",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 1,
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
      "type": 0,
      "attack": {
        "base": 84,
        "per": 0
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
      "type": 6,
      "accuracy": {
        "base": "18%",
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
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "해충 파쇄기 : 방어 관통+{0}%",
            "type": 1,
            "value": "0.410000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "41%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "해충 파쇄기 : 공격력 감소 효과 해제",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 1,
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
      "type": 0,
      "attack": {
        "base": 90,
        "per": 0
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "10%",
        "per": "0%"
      }
    },
    {
      "type": 6,
      "accuracy": {
        "base": "20%",
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
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "해충 파쇄기 : 방어 관통+{0}%",
            "type": 1,
            "value": "0.450000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "45%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "해충 파쇄기 : 공격력 감소 효과 해제",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 1,
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
      "type": 0,
      "attack": {
        "base": 96,
        "per": 0
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "11%",
        "per": "0%"
      }
    },
    {
      "type": 6,
      "accuracy": {
        "base": "22%",
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
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "해충 파쇄기 : 방어 관통+{0}%",
            "type": 1,
            "value": "0.490000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "49%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "해충 파쇄기 : 공격력 감소 효과 해제",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 1,
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
      "type": 0,
      "attack": {
        "base": 102,
        "per": 0
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "12%",
        "per": "0%"
      }
    },
    {
      "type": 6,
      "accuracy": {
        "base": "24%",
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
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "해충 파쇄기 : 방어 관통+{0}%",
            "type": 1,
            "value": "0.530000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "53%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "해충 파쇄기 : 공격력 감소 효과 해제",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 1,
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
      "type": 0,
      "attack": {
        "base": 108,
        "per": 0
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "13%",
        "per": "0%"
      }
    },
    {
      "type": 6,
      "accuracy": {
        "base": "26%",
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
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "해충 파쇄기 : 방어 관통+{0}%",
            "type": 1,
            "value": "0.570000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "57%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "해충 파쇄기 : 공격력 감소 효과 해제",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 1,
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
      "type": 0,
      "attack": {
        "base": 114,
        "per": 0
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "14%",
        "per": "0%"
      }
    },
    {
      "type": 6,
      "accuracy": {
        "base": "28%",
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
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "해충 파쇄기 : 방어 관통+{0}%",
            "type": 1,
            "value": "0.610000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "61%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "해충 파쇄기 : 공격력 감소 효과 해제",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 1,
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
      "type": 0,
      "attack": {
        "base": 120,
        "per": 0
      }
    },
    {
      "type": 8,
      "critical": {
        "base": "15%",
        "per": "0%"
      }
    },
    {
      "type": 6,
      "accuracy": {
        "base": "30%",
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
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "해충 파쇄기 : 방어 관통+{0}%",
            "type": 1,
            "value": "0.650000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "65%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "해충 파쇄기 : 공격력 감소 효과 해제",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 1,
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