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
        "base": "5%",
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
          "icon": "BuffIcon_RANGE_UP",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리+{0}",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 55,
            "range": {
              "base": 1,
              "per": 0
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리 감소 해제 (50%)",
            "type": 0,
            "value": "55"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "50%",
            "type": 89,
            "off": {
              "type": 55,
              "target": 1
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "개량형 관측 장비 : 적중 감소 해제 (50%)",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "50%",
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
          "icon": "BuffIcon_RANGE_UP",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리+{0}",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 55,
            "range": {
              "base": 1,
              "per": 0
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리 감소 해제 (55%)",
            "type": 0,
            "value": "55"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "55%",
            "type": 89,
            "off": {
              "type": 55,
              "target": 1
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "개량형 관측 장비 : 적중 감소 해제 (55%)",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "55%",
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
        "base": "7%",
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
          "icon": "BuffIcon_RANGE_UP",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리+{0}",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 55,
            "range": {
              "base": 1,
              "per": 0
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리 감소 해제 (60%)",
            "type": 0,
            "value": "55"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "60%",
            "type": 89,
            "off": {
              "type": 55,
              "target": 1
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "개량형 관측 장비 : 적중 감소 해제 (60%)",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "60%",
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
        "base": "8%",
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
          "icon": "BuffIcon_RANGE_UP",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리+{0}",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 55,
            "range": {
              "base": 1,
              "per": 0
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리 감소 해제 (65%)",
            "type": 0,
            "value": "55"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "65%",
            "type": 89,
            "off": {
              "type": 55,
              "target": 1
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "개량형 관측 장비 : 적중 감소 해제 (65%)",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "65%",
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
          "icon": "BuffIcon_RANGE_UP",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리+{0}",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 55,
            "range": {
              "base": 1,
              "per": 0
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리 감소 해제 (70%)",
            "type": 0,
            "value": "55"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "70%",
            "type": 89,
            "off": {
              "type": 55,
              "target": 1
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "개량형 관측 장비 : 적중 감소 해제 (70%)",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "70%",
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
          "icon": "BuffIcon_RANGE_UP",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리+{0}",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 55,
            "range": {
              "base": 1,
              "per": 0
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리 감소 해제 (75%)",
            "type": 0,
            "value": "55"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "75%",
            "type": 89,
            "off": {
              "type": 55,
              "target": 1
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "개량형 관측 장비 : 적중 감소 해제 (75%)",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "75%",
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
        "base": "33%",
        "per": "0%"
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
          "icon": "BuffIcon_RANGE_UP",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리+{0}",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 55,
            "range": {
              "base": 1,
              "per": 0
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리 감소 해제 (80%)",
            "type": 0,
            "value": "55"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "80%",
            "type": 89,
            "off": {
              "type": 55,
              "target": 1
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "개량형 관측 장비 : 적중 감소 해제 (80%)",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "80%",
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
          "icon": "BuffIcon_RANGE_UP",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리+{0}",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 55,
            "range": {
              "base": 1,
              "per": 0
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리 감소 해제 (85%)",
            "type": 0,
            "value": "55"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "85%",
            "type": 89,
            "off": {
              "type": 55,
              "target": 1
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "개량형 관측 장비 : 적중 감소 해제 (85%)",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "85%",
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
        "base": "39%",
        "per": "0%"
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
          "icon": "BuffIcon_RANGE_UP",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리+{0}",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 55,
            "range": {
              "base": 1,
              "per": 0
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리 감소 해제 (90%)",
            "type": 0,
            "value": "55"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "90%",
            "type": 89,
            "off": {
              "type": 55,
              "target": 1
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "개량형 관측 장비 : 적중 감소 해제 (90%)",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "90%",
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
        "base": "42%",
        "per": "0%"
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
          "icon": "BuffIcon_RANGE_UP",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리+{0}",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 55,
            "range": {
              "base": 1,
              "per": 0
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리 감소 해제 (95%)",
            "type": 0,
            "value": "55"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "95%",
            "type": 89,
            "off": {
              "type": 55,
              "target": 1
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "개량형 관측 장비 : 적중 감소 해제 (95%)",
            "type": 0,
            "value": "7"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "95%",
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
        "base": "45%",
        "per": "0%"
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
          "icon": "BuffIcon_RANGE_UP",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리+{0}",
            "type": 0,
            "value": "1"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 55,
            "range": {
              "base": 1,
              "per": 0
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "정밀형 관측 장비 : 사거리 감소 해제 (100%)",
            "type": 0,
            "value": "55"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "type": 89,
            "off": {
              "type": 55,
              "target": 1
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "개량형 관측 장비 : 적중 감소 해제 (100%)",
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