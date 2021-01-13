export default [
  [
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
            "desc": "달의 가호 : 공격력+{0}%",
            "type": 1,
            "value": "0.150000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 1,
            "attack": {
              "base": "15%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "달의 가호 : 적중+{0}%",
            "type": 1,
            "value": "0.250000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 7,
            "accuracy": {
              "base": "25%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "달의 가호 : 회피+{0}%",
            "type": 1,
            "value": "0.250000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "25%",
            "type": 11,
            "evade": {
              "base": "25%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "달의 가호 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.150000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "15%",
            "type": 36,
            "damage_reduce": {
              "base": "15%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "달의 가호 : 해로운 효과 해제",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "10%",
            "type": 89,
            "off": {
              "type": 0,
              "target": 1
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
            "desc": "달의 가호 : 공격력+{0}%",
            "type": 1,
            "value": "0.180000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 1,
            "attack": {
              "base": "18%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "달의 가호 : 적중+{0}%",
            "type": 1,
            "value": "0.300000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 7,
            "accuracy": {
              "base": "30%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "달의 가호 : 회피+{0}%",
            "type": 1,
            "value": "0.300000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "25%",
            "type": 11,
            "evade": {
              "base": "30%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "달의 가호 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.180000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "15%",
            "type": 36,
            "damage_reduce": {
              "base": "18%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "달의 가호 : 해로운 효과 해제",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "12%",
            "type": 89,
            "off": {
              "type": 0,
              "target": 1
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
            "desc": "달의 가호 : 공격력+{0}%",
            "type": 1,
            "value": "0.210000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 1,
            "attack": {
              "base": "21%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "달의 가호 : 적중+{0}%",
            "type": 1,
            "value": "0.350000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 7,
            "accuracy": {
              "base": "35%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "달의 가호 : 회피+{0}%",
            "type": 1,
            "value": "0.350000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "25%",
            "type": 11,
            "evade": {
              "base": "35%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "달의 가호 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.210000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "15%",
            "type": 36,
            "damage_reduce": {
              "base": "21%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "달의 가호 : 해로운 효과 해제",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "14%",
            "type": 89,
            "off": {
              "type": 0,
              "target": 1
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
            "desc": "달의 가호 : 공격력+{0}%",
            "type": 1,
            "value": "0.240000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 1,
            "attack": {
              "base": "24%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "달의 가호 : 적중+{0}%",
            "type": 1,
            "value": "0.400000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 7,
            "accuracy": {
              "base": "40%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "달의 가호 : 회피+{0}%",
            "type": 1,
            "value": "0.400000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "25%",
            "type": 11,
            "evade": {
              "base": "40%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "달의 가호 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.240000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "15%",
            "type": 36,
            "damage_reduce": {
              "base": "24%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "달의 가호 : 해로운 효과 해제",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "16%",
            "type": 89,
            "off": {
              "type": 0,
              "target": 1
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
            "desc": "달의 가호 : 공격력+{0}%",
            "type": 1,
            "value": "0.270000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 1,
            "attack": {
              "base": "27%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "달의 가호 : 적중+{0}%",
            "type": 1,
            "value": "0.450000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 7,
            "accuracy": {
              "base": "45%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "달의 가호 : 회피+{0}%",
            "type": 1,
            "value": "0.450000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "25%",
            "type": 11,
            "evade": {
              "base": "45%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "달의 가호 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.270000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "15%",
            "type": 36,
            "damage_reduce": {
              "base": "27%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "달의 가호 : 해로운 효과 해제",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "18%",
            "type": 89,
            "off": {
              "type": 0,
              "target": 1
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
            "desc": "달의 가호 : 공격력+{0}%",
            "type": 1,
            "value": "0.300000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 1,
            "attack": {
              "base": "30%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "달의 가호 : 적중+{0}%",
            "type": 1,
            "value": "0.500000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 7,
            "accuracy": {
              "base": "50%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "달의 가호 : 회피+{0}%",
            "type": 1,
            "value": "0.500000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "25%",
            "type": 11,
            "evade": {
              "base": "50%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "달의 가호 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.300000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "15%",
            "type": 36,
            "damage_reduce": {
              "base": "30%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "달의 가호 : 해로운 효과 해제",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "20%",
            "type": 89,
            "off": {
              "type": 0,
              "target": 1
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
            "desc": "달의 가호 : 공격력+{0}%",
            "type": 1,
            "value": "0.330000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 1,
            "attack": {
              "base": "33%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "달의 가호 : 적중+{0}%",
            "type": 1,
            "value": "0.550000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 7,
            "accuracy": {
              "base": "55%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "달의 가호 : 회피+{0}%",
            "type": 1,
            "value": "0.550000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "25%",
            "type": 11,
            "evade": {
              "base": "55%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "달의 가호 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.330000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "15%",
            "type": 36,
            "damage_reduce": {
              "base": "33%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "달의 가호 : 해로운 효과 해제",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "22%",
            "type": 89,
            "off": {
              "type": 0,
              "target": 1
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
            "desc": "달의 가호 : 공격력+{0}%",
            "type": 1,
            "value": "0.360000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 1,
            "attack": {
              "base": "36%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "달의 가호 : 적중+{0}%",
            "type": 1,
            "value": "0.600000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 7,
            "accuracy": {
              "base": "60%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "달의 가호 : 회피+{0}%",
            "type": 1,
            "value": "0.600000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "25%",
            "type": 11,
            "evade": {
              "base": "60%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "달의 가호 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.360000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "15%",
            "type": 36,
            "damage_reduce": {
              "base": "36%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "달의 가호 : 해로운 효과 해제",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "24%",
            "type": 89,
            "off": {
              "type": 0,
              "target": 1
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
            "desc": "달의 가호 : 공격력+{0}%",
            "type": 1,
            "value": "0.390000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 1,
            "attack": {
              "base": "39%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "달의 가호 : 적중+{0}%",
            "type": 1,
            "value": "0.650000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 7,
            "accuracy": {
              "base": "65%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "달의 가호 : 회피+{0}%",
            "type": 1,
            "value": "0.650000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "25%",
            "type": 11,
            "evade": {
              "base": "65%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "달의 가호 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.390000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "15%",
            "type": 36,
            "damage_reduce": {
              "base": "39%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "달의 가호 : 해로운 효과 해제",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "26%",
            "type": 89,
            "off": {
              "type": 0,
              "target": 1
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
            "desc": "달의 가호 : 공격력+{0}%",
            "type": 1,
            "value": "0.420000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 1,
            "attack": {
              "base": "42%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "달의 가호 : 적중+{0}%",
            "type": 1,
            "value": "0.700000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 7,
            "accuracy": {
              "base": "70%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "달의 가호 : 회피+{0}%",
            "type": 1,
            "value": "0.700000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "25%",
            "type": 11,
            "evade": {
              "base": "70%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "달의 가호 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.420000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "15%",
            "type": 36,
            "damage_reduce": {
              "base": "42%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "달의 가호 : 해로운 효과 해제",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "28%",
            "type": 89,
            "off": {
              "type": 0,
              "target": 1
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
            "desc": "달의 가호 : 공격력+{0}%",
            "type": 1,
            "value": "0.450000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 1,
            "attack": {
              "base": "45%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "달의 가호 : 적중+{0}%",
            "type": 1,
            "value": "0.750000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 7,
            "accuracy": {
              "base": "75%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_EVADE_UP",
          "desc": {
            "desc": "달의 가호 : 회피+{0}%",
            "type": 1,
            "value": "0.750000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "25%",
            "type": 11,
            "evade": {
              "base": "75%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DAMAGE_REDUCE",
          "desc": {
            "desc": "달의 가호 : 받는 피해 {0}% 감소",
            "type": 1,
            "value": "0.450000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "15%",
            "type": 36,
            "damage_reduce": {
              "base": "45%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_REMOVE_DEBUFF",
          "desc": {
            "desc": "달의 가호 : 해로운 효과 해제",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 0
          },
          "value": {
            "isBuff": true,
            "chance": "33%",
            "type": 89,
            "off": {
              "type": 0,
              "target": 1
            }
          },
          "overlap": 0
        }
      ],
      "maxStack": 0
    }
  ]
];