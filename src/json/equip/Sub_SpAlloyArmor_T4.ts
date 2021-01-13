export default [
  [
    {
      "type": 15,
      "resist": {
        "elem": "fire",
        "value": {
          "base": "25%",
          "per": "0%"
        }
      }
    },
    {
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "25%",
          "per": "0%"
        }
      }
    },
    {
      "type": 19,
      "resist": {
        "elem": "lightning",
        "value": {
          "base": "25%",
          "per": "0%"
        }
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
          "icon": "BuffIcon_DEBUFF_PERDOWN",
          "desc": {
            "desc": "초합금 플레이트 아머 : 효과 저항+{0}%",
            "type": 1,
            "value": "0.150000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 91,
            "resist": {
              "type": "debuff",
              "value": {
                "base": "15%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "초합금 플레이트 아머 : 해로운 효과 해제 (15% 확률)",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "15%",
            "type": 100,
            "off": 1
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 15,
      "resist": {
        "elem": "fire",
        "value": {
          "base": "27.5%",
          "per": "0%"
        }
      }
    },
    {
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "27.5%",
          "per": "0%"
        }
      }
    },
    {
      "type": 19,
      "resist": {
        "elem": "lightning",
        "value": {
          "base": "27.5%",
          "per": "0%"
        }
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
          "icon": "BuffIcon_DEBUFF_PERDOWN",
          "desc": {
            "desc": "초합금 플레이트 아머 : 효과 저항+{0}%",
            "type": 1,
            "value": "0.170000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 91,
            "resist": {
              "type": "debuff",
              "value": {
                "base": "17%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "초합금 플레이트 아머 : 해로운 효과 해제 (16% 확률)",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "16%",
            "type": 100,
            "off": 1
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 15,
      "resist": {
        "elem": "fire",
        "value": {
          "base": "30%",
          "per": "0%"
        }
      }
    },
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
      "type": 19,
      "resist": {
        "elem": "lightning",
        "value": {
          "base": "30%",
          "per": "0%"
        }
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
          "icon": "BuffIcon_DEBUFF_PERDOWN",
          "desc": {
            "desc": "초합금 플레이트 아머 : 효과 저항+{0}%",
            "type": 1,
            "value": "0.190000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 91,
            "resist": {
              "type": "debuff",
              "value": {
                "base": "19%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "초합금 플레이트 아머 : 해로운 효과 해제 (17% 확률)",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "17%",
            "type": 100,
            "off": 1
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 15,
      "resist": {
        "elem": "fire",
        "value": {
          "base": "32.5%",
          "per": "0%"
        }
      }
    },
    {
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "32.5%",
          "per": "0%"
        }
      }
    },
    {
      "type": 19,
      "resist": {
        "elem": "lightning",
        "value": {
          "base": "32.5%",
          "per": "0%"
        }
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
          "icon": "BuffIcon_DEBUFF_PERDOWN",
          "desc": {
            "desc": "초합금 플레이트 아머 : 효과 저항+{0}%",
            "type": 1,
            "value": "0.210000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 91,
            "resist": {
              "type": "debuff",
              "value": {
                "base": "21%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "초합금 플레이트 아머 : 해로운 효과 해제 (18% 확률)",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "18%",
            "type": 100,
            "off": 1
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 15,
      "resist": {
        "elem": "fire",
        "value": {
          "base": "35%",
          "per": "0%"
        }
      }
    },
    {
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "35%",
          "per": "0%"
        }
      }
    },
    {
      "type": 19,
      "resist": {
        "elem": "lightning",
        "value": {
          "base": "35%",
          "per": "0%"
        }
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
          "icon": "BuffIcon_DEBUFF_PERDOWN",
          "desc": {
            "desc": "초합금 플레이트 아머 : 효과 저항+{0}%",
            "type": 1,
            "value": "0.230000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 91,
            "resist": {
              "type": "debuff",
              "value": {
                "base": "23%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "초합금 플레이트 아머 : 해로운 효과 해제 (19% 확률)",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "19%",
            "type": 100,
            "off": 1
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 15,
      "resist": {
        "elem": "fire",
        "value": {
          "base": "37.5%",
          "per": "0%"
        }
      }
    },
    {
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "37.5%",
          "per": "0%"
        }
      }
    },
    {
      "type": 19,
      "resist": {
        "elem": "lightning",
        "value": {
          "base": "37.5%",
          "per": "0%"
        }
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
          "icon": "BuffIcon_DEBUFF_PERDOWN",
          "desc": {
            "desc": "초합금 플레이트 아머 : 효과 저항+{0}%",
            "type": 1,
            "value": "0.250000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 91,
            "resist": {
              "type": "debuff",
              "value": {
                "base": "25%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "초합금 플레이트 아머 : 해로운 효과 해제 (20% 확률)",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "20%",
            "type": 100,
            "off": 1
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 15,
      "resist": {
        "elem": "fire",
        "value": {
          "base": "40%",
          "per": "0%"
        }
      }
    },
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
      "type": 19,
      "resist": {
        "elem": "lightning",
        "value": {
          "base": "40%",
          "per": "0%"
        }
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
          "icon": "BuffIcon_DEBUFF_PERDOWN",
          "desc": {
            "desc": "초합금 플레이트 아머 : 효과 저항+{0}%",
            "type": 1,
            "value": "0.270000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 91,
            "resist": {
              "type": "debuff",
              "value": {
                "base": "27%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "초합금 플레이트 아머 : 해로운 효과 해제 (22% 확률)",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "22%",
            "type": 100,
            "off": 1
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 15,
      "resist": {
        "elem": "fire",
        "value": {
          "base": "42.5%",
          "per": "0%"
        }
      }
    },
    {
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "42.5%",
          "per": "0%"
        }
      }
    },
    {
      "type": 19,
      "resist": {
        "elem": "lightning",
        "value": {
          "base": "42.5%",
          "per": "0%"
        }
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
          "icon": "BuffIcon_DEBUFF_PERDOWN",
          "desc": {
            "desc": "초합금 플레이트 아머 : 효과 저항+{0}%",
            "type": 1,
            "value": "0.290000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 91,
            "resist": {
              "type": "debuff",
              "value": {
                "base": "29%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "초합금 플레이트 아머 : 해로운 효과 해제 (24% 확률)",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "24%",
            "type": 100,
            "off": 1
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 15,
      "resist": {
        "elem": "fire",
        "value": {
          "base": "45%",
          "per": "0%"
        }
      }
    },
    {
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "45%",
          "per": "0%"
        }
      }
    },
    {
      "type": 19,
      "resist": {
        "elem": "lightning",
        "value": {
          "base": "45%",
          "per": "0%"
        }
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
          "icon": "BuffIcon_DEBUFF_PERDOWN",
          "desc": {
            "desc": "초합금 플레이트 아머 : 효과 저항+{0}%",
            "type": 1,
            "value": "0.310000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 91,
            "resist": {
              "type": "debuff",
              "value": {
                "base": "31%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "초합금 플레이트 아머 : 해로운 효과 해제 (26% 확률)",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "26%",
            "type": 100,
            "off": 1
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 15,
      "resist": {
        "elem": "fire",
        "value": {
          "base": "47.5%",
          "per": "0%"
        }
      }
    },
    {
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "47.5%",
          "per": "0%"
        }
      }
    },
    {
      "type": 19,
      "resist": {
        "elem": "lightning",
        "value": {
          "base": "47.5%",
          "per": "0%"
        }
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
          "icon": "BuffIcon_DEBUFF_PERDOWN",
          "desc": {
            "desc": "초합금 플레이트 아머 : 효과 저항+{0}%",
            "type": 1,
            "value": "0.330000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 91,
            "resist": {
              "type": "debuff",
              "value": {
                "base": "33%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "초합금 플레이트 아머 : 해로운 효과 해제 (28% 확률)",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "28%",
            "type": 100,
            "off": 1
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ],
  [
    {
      "type": 15,
      "resist": {
        "elem": "fire",
        "value": {
          "base": "50%",
          "per": "0%"
        }
      }
    },
    {
      "type": 17,
      "resist": {
        "elem": "ice",
        "value": {
          "base": "50%",
          "per": "0%"
        }
      }
    },
    {
      "type": 19,
      "resist": {
        "elem": "lightning",
        "value": {
          "base": "50%",
          "per": "0%"
        }
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
          "icon": "BuffIcon_DEBUFF_PERDOWN",
          "desc": {
            "desc": "초합금 플레이트 아머 : 효과 저항+{0}%",
            "type": 1,
            "value": "0.350000"
          },
          "attr": 0,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 91,
            "resist": {
              "type": "debuff",
              "value": {
                "base": "35%",
                "per": "0%"
              }
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "초합금 플레이트 아머 : 해로운 효과 해제 (30% 확률)",
            "type": 0,
            "value": "0"
          },
          "attr": 0,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "30%",
            "type": 100,
            "off": 1
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ]
];