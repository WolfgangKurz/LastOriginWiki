export default [
  [
    {
      "on": "round",
      "if": false,
      "body": [
        0
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
            "desc": "뽀끄루…뽀끄루… : 공격력+{0}%",
            "type": 1,
            "value": "0.050000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 1,
            "attack": {
              "base": "5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 적중+{0}%",
            "type": 1,
            "value": "0.050000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_CRITICAL_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 치명타+{0}%",
            "type": 1,
            "value": "0.025000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 9,
            "critical": {
              "base": "2.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 방어 관통+{0}%",
            "type": 1,
            "value": "0.100000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "10%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_SEAL_SKILL",
          "desc": {
            "desc": "뽀끄루…? : 스킬 사용 불가 (10%)",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "10%",
            "type": 79,
            "skill_disable": true
          },
          "overlap": 4
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
        0
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
            "desc": "뽀끄루…뽀끄루… : 공격력+{0}%",
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
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 적중+{0}%",
            "type": 1,
            "value": "0.060000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "6%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_CRITICAL_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 치명타+{0}%",
            "type": 1,
            "value": "0.030000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 9,
            "critical": {
              "base": "3%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 방어 관통+{0}%",
            "type": 1,
            "value": "0.110000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "11%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_SEAL_SKILL",
          "desc": {
            "desc": "뽀끄루…? : 스킬 사용 불가 (10%)",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "10%",
            "type": 79,
            "skill_disable": true
          },
          "overlap": 4
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
        0
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
            "desc": "뽀끄루…뽀끄루… : 공격력+{0}%",
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
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 적중+{0}%",
            "type": 1,
            "value": "0.070000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "7%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_CRITICAL_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 치명타+{0}%",
            "type": 1,
            "value": "0.035000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 9,
            "critical": {
              "base": "3.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 방어 관통+{0}%",
            "type": 1,
            "value": "0.120000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "12%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_SEAL_SKILL",
          "desc": {
            "desc": "뽀끄루…? : 스킬 사용 불가 (10%)",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "10%",
            "type": 79,
            "skill_disable": true
          },
          "overlap": 4
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
        0
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
            "desc": "뽀끄루…뽀끄루… : 공격력+{0}%",
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
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 적중+{0}%",
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
          "icon": "BuffIcon_CRITICAL_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 치명타+{0}%",
            "type": 1,
            "value": "0.040000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 9,
            "critical": {
              "base": "4%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 방어 관통+{0}%",
            "type": 1,
            "value": "0.130000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "13%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_SEAL_SKILL",
          "desc": {
            "desc": "뽀끄루…? : 스킬 사용 불가 (10%)",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "10%",
            "type": 79,
            "skill_disable": true
          },
          "overlap": 4
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
        0
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
            "desc": "뽀끄루…뽀끄루… : 공격력+{0}%",
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
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 적중+{0}%",
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
          "icon": "BuffIcon_CRITICAL_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 치명타+{0}%",
            "type": 1,
            "value": "0.045000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 9,
            "critical": {
              "base": "4.5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 방어 관통+{0}%",
            "type": 1,
            "value": "0.140000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "14%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_SEAL_SKILL",
          "desc": {
            "desc": "뽀끄루…? : 스킬 사용 불가 (10%)",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "10%",
            "type": 79,
            "skill_disable": true
          },
          "overlap": 4
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
        0
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
            "desc": "뽀끄루…뽀끄루… : 공격력+{0}%",
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
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 적중+{0}%",
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
          "icon": "BuffIcon_CRITICAL_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 치명타+{0}%",
            "type": 1,
            "value": "0.050000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 9,
            "critical": {
              "base": "5%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 방어 관통+{0}%",
            "type": 1,
            "value": "0.150000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "15%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_SEAL_SKILL",
          "desc": {
            "desc": "뽀끄루…? : 스킬 사용 불가 (10%)",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "10%",
            "type": 79,
            "skill_disable": true
          },
          "overlap": 4
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
        0
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
            "desc": "뽀끄루…뽀끄루… : 공격력+{0}%",
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
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 적중+{0}%",
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
          "icon": "BuffIcon_CRITICAL_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 치명타+{0}%",
            "type": 1,
            "value": "0.060000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 9,
            "critical": {
              "base": "6%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 방어 관통+{0}%",
            "type": 1,
            "value": "0.170000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "17%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_SEAL_SKILL",
          "desc": {
            "desc": "뽀끄루…? : 스킬 사용 불가 (10%)",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "10%",
            "type": 79,
            "skill_disable": true
          },
          "overlap": 4
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
        0
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
            "desc": "뽀끄루…뽀끄루… : 공격력+{0}%",
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
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 적중+{0}%",
            "type": 1,
            "value": "0.150000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "15%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_CRITICAL_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 치명타+{0}%",
            "type": 1,
            "value": "0.070000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 9,
            "critical": {
              "base": "7%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 방어 관통+{0}%",
            "type": 1,
            "value": "0.190000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "19%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_SEAL_SKILL",
          "desc": {
            "desc": "뽀끄루…? : 스킬 사용 불가 (10%)",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "10%",
            "type": 79,
            "skill_disable": true
          },
          "overlap": 4
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
        0
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
            "desc": "뽀끄루…뽀끄루… : 공격력+{0}%",
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
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 적중+{0}%",
            "type": 1,
            "value": "0.180000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "18%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_CRITICAL_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 치명타+{0}%",
            "type": 1,
            "value": "0.080000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 9,
            "critical": {
              "base": "8%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 방어 관통+{0}%",
            "type": 1,
            "value": "0.210000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "21%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_SEAL_SKILL",
          "desc": {
            "desc": "뽀끄루…? : 스킬 사용 불가 (10%)",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "10%",
            "type": 79,
            "skill_disable": true
          },
          "overlap": 4
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
        0
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
            "desc": "뽀끄루…뽀끄루… : 공격력+{0}%",
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
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 적중+{0}%",
            "type": 1,
            "value": "0.210000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "21%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_CRITICAL_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 치명타+{0}%",
            "type": 1,
            "value": "0.090000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 9,
            "critical": {
              "base": "9%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 방어 관통+{0}%",
            "type": 1,
            "value": "0.230000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 58,
            "penetration": {
              "base": "23%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_SEAL_SKILL",
          "desc": {
            "desc": "뽀끄루…? : 스킬 사용 불가 (10%)",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "10%",
            "type": 79,
            "skill_disable": true
          },
          "overlap": 4
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
        0
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
            "desc": "뽀끄루…뽀끄루… : 공격력+{0}%",
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
          "icon": "BuffIcon_ACCURACY_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 적중+{0}%",
            "type": 1,
            "value": "0.250000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 7,
            "accuracy": {
              "base": "25%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_CRITICAL_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 치명타+{0}%",
            "type": 1,
            "value": "0.100000"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "type": 9,
            "critical": {
              "base": "10%",
              "per": "0%"
            }
          },
          "overlap": 4
        },
        {
          "icon": "BuffIcon_DEF_PIERCE_UP",
          "desc": {
            "desc": "뽀끄루…뽀끄루… : 방어 관통+{0}%",
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
          "icon": "BuffIcon_SEAL_SKILL",
          "desc": {
            "desc": "뽀끄루…? : 스킬 사용 불가 (10%)",
            "type": 0,
            "value": "0"
          },
          "attr": 3,
          "erase": {
            "rounds": 1
          },
          "value": {
            "isBuff": true,
            "chance": "10%",
            "type": 79,
            "skill_disable": true
          },
          "overlap": 4
        }
      ],
      "maxStack": 0
    }
  ]
];