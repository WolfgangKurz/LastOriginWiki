export default {
  "active1": {
    "key": "active1",
    "name": "케스토스 히마스: 회로 침식",
    "icon": "EnemyDetect",
    "target": "enemy",
    "buffs": {
      "index": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "data": [
        {
          "rate": 0.95,
          "type": 0,
          "range": 6,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "60%",
                      "per": "10%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "40%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "30%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "hp>=": {
                  "target": "target",
                  "value": "100%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1,
          "type": 0,
          "range": 6,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "60%",
                      "per": "10%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "40%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "30%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "hp>=": {
                  "target": "target",
                  "value": "100%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.05,
          "type": 0,
          "range": 6,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "60%",
                      "per": "10%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "40%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "30%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "hp>=": {
                  "target": "target",
                  "value": "100%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.1,
          "type": 0,
          "range": 6,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "60%",
                      "per": "10%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "40%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "30%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "hp>=": {
                  "target": "target",
                  "value": "100%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.15,
          "type": 0,
          "range": 6,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "60%",
                      "per": "10%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "40%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "30%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "hp>=": {
                  "target": "target",
                  "value": "100%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.2,
          "type": 0,
          "range": 6,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "60%",
                      "per": "10%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "40%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "30%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "hp>=": {
                  "target": "target",
                  "value": "100%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.25,
          "type": 0,
          "range": 6,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "60%",
                      "per": "10%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "40%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "30%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "hp>=": {
                  "target": "target",
                  "value": "100%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.3,
          "type": 0,
          "range": 6,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "60%",
                      "per": "10%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "40%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "30%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "hp>=": {
                  "target": "target",
                  "value": "100%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.35,
          "type": 0,
          "range": 6,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "60%",
                      "per": "10%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "40%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "30%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "hp>=": {
                  "target": "target",
                  "value": "100%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.4,
          "type": 0,
          "range": 6,
          "ap": 4,
          "grid": "single",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "60%",
                      "per": "10%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                },
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "회로 침식 : {0}% 추가 물리 피해",
                    "type": 1,
                    "value": "0.140000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "50%",
                    "type": 70,
                    "fixed_damage": {
                      "base": "14%",
                      "per": "3%"
                    }
                  },
                  "overlap": 0
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "회로 침식 : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.260000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "40%",
                    "type": 48,
                    "damage_increase": {
                      "base": "26%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_SEAL_SKILL",
                  "desc": {
                    "desc": "회로 침식 : 스킬 사용 불가",
                    "type": 0,
                    "value": "0"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 1
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "30%",
                    "type": 79,
                    "skill_disable": true
                  },
                  "overlap": 1
                }
              ],
              "maxStack": 0
            },
            {
              "on": {
                "after": "use_skill"
              },
              "if": {
                "hp>=": {
                  "target": "target",
                  "value": "100%"
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_DEBUFF_RATEUP",
                  "desc": {
                    "desc": "회로 침식 : 효과 저항 {0}% 감소",
                    "type": 1,
                    "value": "0.600000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 5
                  },
                  "value": {
                    "isBuff": true,
                    "type": 90,
                    "resist": {
                      "type": "debuff",
                      "value": {
                        "base": "-60%",
                        "per": "-10%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "대상 HP가 100%일 경우 5라운드 동안 대상의 [효과 저항 -:60~10:%]를 감소시킵니다.",
      "대상에게 [@:공격력 :0~0:배 피해]와 [:60~10:% 고정 물리 피해]를 입히며, 대상은 50% 확률로 [:14~3:% 추가 물리 피해]를 입고, 40% 확률로 2라운드 동안 [받는 피해 +:26~2:%]가 증가하고, 30% 확률로 해당 라운드 동안 스킬을 사용할 수 없습니다.",
      "해당 효과 적용 확률은 효과 저항의 영향을 받습니다."
    ]
  },
  "active2": {
    "key": "active2",
    "name": "케스토스 히마스: 출력전개",
    "icon": "SatelliteBeam",
    "target": "enemy",
    "buffs": {
      "index": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "data": [
        {
          "rate": 0.95,
          "type": 0,
          "range": 6,
          "ap": 9,
          "grid": "235689",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "출력전개 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.900000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "90%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 보호 효과 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 행 보호 해제",
                    "type": 0,
                    "value": "50"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 50,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 열 보호 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 지정 보호 해제",
                    "type": 0,
                    "value": "76"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 76,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1,
          "type": 0,
          "range": 6,
          "ap": 9,
          "grid": "235689",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "출력전개 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.900000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "90%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 보호 효과 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 행 보호 해제",
                    "type": 0,
                    "value": "50"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 50,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 열 보호 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 지정 보호 해제",
                    "type": 0,
                    "value": "76"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 76,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.05,
          "type": 0,
          "range": 6,
          "ap": 9,
          "grid": "235689",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "출력전개 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.900000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "90%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 보호 효과 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 행 보호 해제",
                    "type": 0,
                    "value": "50"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 50,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 열 보호 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 지정 보호 해제",
                    "type": 0,
                    "value": "76"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 76,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.1,
          "type": 0,
          "range": 6,
          "ap": 9,
          "grid": "235689",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "출력전개 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.900000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "90%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 보호 효과 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 행 보호 해제",
                    "type": 0,
                    "value": "50"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 50,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 열 보호 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 지정 보호 해제",
                    "type": 0,
                    "value": "76"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 76,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.15,
          "type": 0,
          "range": 6,
          "ap": 9,
          "grid": "235689",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "출력전개 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.900000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "90%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 보호 효과 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 행 보호 해제",
                    "type": 0,
                    "value": "50"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 50,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 열 보호 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 지정 보호 해제",
                    "type": 0,
                    "value": "76"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 76,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.2,
          "type": 0,
          "range": 6,
          "ap": 9,
          "grid": "235689",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "출력전개 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.900000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "90%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 보호 효과 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 행 보호 해제",
                    "type": 0,
                    "value": "50"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 50,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 열 보호 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 지정 보호 해제",
                    "type": 0,
                    "value": "76"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 76,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.25,
          "type": 0,
          "range": 6,
          "ap": 9,
          "grid": "235689",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "출력전개 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.900000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "90%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 보호 효과 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 행 보호 해제",
                    "type": 0,
                    "value": "50"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 50,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 열 보호 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 지정 보호 해제",
                    "type": 0,
                    "value": "76"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 76,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.3,
          "type": 0,
          "range": 6,
          "ap": 9,
          "grid": "235689",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "출력전개 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.900000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "90%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 보호 효과 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 행 보호 해제",
                    "type": 0,
                    "value": "50"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 50,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 열 보호 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 지정 보호 해제",
                    "type": 0,
                    "value": "76"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 76,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.35,
          "type": 0,
          "range": 6,
          "ap": 9,
          "grid": "235689",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "출력전개 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.900000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "90%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 보호 효과 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 행 보호 해제",
                    "type": 0,
                    "value": "50"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 50,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 열 보호 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 지정 보호 해제",
                    "type": 0,
                    "value": "76"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 76,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        },
        {
          "rate": 1.4,
          "type": 0,
          "range": 6,
          "ap": 9,
          "grid": "235689",
          "target_ground": true,
          "summon": null,
          "use": null,
          "dismiss_guard": true,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_PhyATK_UP",
                  "desc": {
                    "desc": "출력전개 : {0}% 물리 피해",
                    "type": 1,
                    "value": "0.900000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 70,
                    "fixed_damage": {
                      "base": "90%",
                      "per": "5%"
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 보호 효과 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_Push",
                  "desc": {
                    "desc": "출력전개 : 뒤로 {0}칸 밀기",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 52,
                    "position": {
                      "type": "push",
                      "range": {
                        "base": 1,
                        "per": 0
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 행 보호 해제",
                    "type": 0,
                    "value": "50"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 50,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 열 보호 해제",
                    "type": 0,
                    "value": "75"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 75,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_REMOVE_BUFF",
                  "desc": {
                    "desc": "출력전개 : 지정 보호 해제",
                    "type": 0,
                    "value": "76"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 88,
                    "off": {
                      "type": 76,
                      "target": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_EVADE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 회피{0}%",
                    "type": 1,
                    "value": "-0.340000"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 11,
                    "evade": {
                      "base": "-34%",
                      "per": "-3%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "attack_success",
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
              "target": 3,
              "buffs": [
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "출력전개 : 사거리 {0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 1,
                  "erase": {
                    "rounds": 2
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "지정 범위에 [@:공격력 :0~0:배 피해]와 [:90~5:% 물리 피해]를 주고 대상을 [밀기 :1~0:칸] 뒤로 밀어냅니다.",
      "적중 시, 대상에게 걸려있는 모든 보호 효과를 해제하고 2라운드 동안 [회피 -:34~3:%] / [사거리 -:1~0:]을 감소시킵니다."
    ]
  },
  "passive3": {
    "key": "passive3",
    "name": "케스토스 히마스: 경장갑 OS",
    "icon": "AntiArmorShot",
    "target": "team",
    "buffs": {
      "index": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "data": [
        {
          "rate": 0,
          "type": 0,
          "range": 0,
          "ap": 0,
          "grid": "global",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "wave",
              "if": {
                "unitCount": {
                  "filter": [
                    "squad",
                    "light"
                  ],
                  "type": [
                    0
                  ],
                  "count": [
                    2,
                    3,
                    4,
                    5
                  ]
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_DEF_PIERCE_UP",
                  "desc": {
                    "desc": "경장갑 OS : 방어 관통+{0}%",
                    "type": 1,
                    "value": "0.160000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "type": 58,
                    "penetration": {
                      "base": "16%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "경장갑 OS : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.160000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 48,
                    "damage_increase": {
                      "base": "16%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wave",
              "if": {
                "unitCount": {
                  "filter": [
                    "squad",
                    "light"
                  ],
                  "type": [
                    0
                  ],
                  "count": [
                    2,
                    3,
                    4,
                    5
                  ]
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                1,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_VULNERABLE",
                  "desc": {
                    "desc": "경장갑 OS : 받는 피해+{0}%",
                    "type": 1,
                    "value": "0.160000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "type": 48,
                    "damage_increase": {
                      "base": "16%",
                      "per": "2%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "전투 개시 시 스쿼드에 경장형 아군 수가 2 이상일 경우, 경장형 아군의 [방어 관통 +:16~2:%]를 증가시키고, 기동 / 중장형 적의 [받는 피해 +:16~2:%]를 증가시킵니다.",
      "해당 효과는 해제할 수 없습니다."
    ]
  },
  "passive4": {
    "key": "passive4",
    "name": "케스토스 히마스: 사거리 OS",
    "icon": "Snipe",
    "target": "team",
    "buffs": {
      "index": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "data": [
        {
          "rate": 0,
          "type": 0,
          "range": 0,
          "ap": 0,
          "grid": "global",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "wave",
              "if": {
                "unitCount": {
                  "filter": [
                    "squad",
                    "air"
                  ],
                  "type": [
                    2
                  ],
                  "count": [
                    2,
                    3,
                    4,
                    5
                  ]
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "사거리 OS : 사거리±{0}",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 55,
                    "range": {
                      "base": 1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "사거리 OS : 적중±{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 7,
                    "accuracy": {
                      "base": "40%",
                      "per": "5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wave",
              "if": {
                "unitCount": {
                  "filter": [
                    "squad",
                    "air"
                  ],
                  "type": [
                    2
                  ],
                  "count": [
                    2,
                    3,
                    4,
                    5
                  ]
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_RANGE_UP",
                  "desc": {
                    "desc": "사거리 OS : 사거리+{0}",
                    "type": 0,
                    "value": "1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
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
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wave",
              "if": {
                "unitCount": {
                  "filter": [
                    "squad",
                    "air"
                  ],
                  "type": [
                    2
                  ],
                  "count": [
                    2,
                    3,
                    4,
                    5
                  ]
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_UP",
                  "desc": {
                    "desc": "사거리 OS : 적중+{0}%",
                    "type": 1,
                    "value": "0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "40%",
                      "per": "5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wave",
              "if": {
                "unitCount": {
                  "filter": [
                    "squad",
                    "air"
                  ],
                  "type": [
                    2
                  ],
                  "count": [
                    2,
                    3,
                    4,
                    5
                  ]
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_RANGE_DOWN",
                  "desc": {
                    "desc": "사거리 OS : 사거리{0}",
                    "type": 0,
                    "value": "-1"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "type": 55,
                    "range": {
                      "base": -1,
                      "per": 0
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wave",
              "if": {
                "unitCount": {
                  "filter": [
                    "squad",
                    "air"
                  ],
                  "type": [
                    2
                  ],
                  "count": [
                    2,
                    3,
                    4,
                    5
                  ]
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_ACCURACY_DOWN",
                  "desc": {
                    "desc": "사거리 OS : 적중{0}%",
                    "type": 1,
                    "value": "-0.400000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "type": 7,
                    "accuracy": {
                      "base": "-40%",
                      "per": "-5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "전투 개시 시 스쿼드에 기동형 아군 수가 2 이상일 경우, 기동형 아군의 [사거리 +:1~0:] / [적중 +:40~5:%]를 증가시키고, 경장 / 중장형 적의 [사거리 -:1~0:] / [적중 -:40~5:%]를 감소시킵니다.",
      "해당 효과는 해제할 수 없습니다."
    ]
  },
  "passive5": {
    "key": "passive5",
    "name": "케스토스 히마스: 중장갑 OS",
    "icon": "TeamSpdBuff",
    "target": "team",
    "buffs": {
      "index": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "data": [
        {
          "rate": 0,
          "type": 0,
          "range": 0,
          "ap": 0,
          "grid": "global",
          "target_ground": false,
          "summon": null,
          "use": null,
          "dismiss_guard": false,
          "acc_bonus": 0,
          "buff_rate": 100,
          "buffs": [
            {
              "on": "wave",
              "if": {
                "unitCount": {
                  "filter": [
                    "squad",
                    "heavy"
                  ],
                  "type": [
                    1
                  ],
                  "count": [
                    2,
                    3,
                    4,
                    5
                  ]
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "중장갑 OS : AP+{0}",
                    "type": 0,
                    "value": "1.800000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 0
                  },
                  "value": {
                    "isBuff": true,
                    "type": 20,
                    "ap": {
                      "base": 1.8,
                      "per": 0.2
                    }
                  },
                  "overlap": 0
                },
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "중장갑 OS : 행동력±{0}%",
                    "type": 1,
                    "value": "0.070000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 13,
                    "turnSpeed": {
                      "base": "7%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "중장갑 OS : 화염 저항{0}%",
                    "type": 1,
                    "value": "-0.160000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "-16%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "중장갑 OS : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.160000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-16%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                },
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "중장갑 OS : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.160000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "chance": "0%",
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-16%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wave",
              "if": {
                "unitCount": {
                  "filter": [
                    "squad",
                    "heavy"
                  ],
                  "type": [
                    1
                  ],
                  "count": [
                    2,
                    3,
                    4,
                    5
                  ]
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                1
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 2,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_UP",
                  "desc": {
                    "desc": "중장갑 OS : 행동력+{0}%",
                    "type": 1,
                    "value": "0.070000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "7%",
                      "per": "1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wave",
              "if": {
                "unitCount": {
                  "filter": [
                    "squad",
                    "heavy"
                  ],
                  "type": [
                    1
                  ],
                  "count": [
                    2,
                    3,
                    4,
                    5
                  ]
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_FIRERES_DOWN",
                  "desc": {
                    "desc": "중장갑 OS : 화염 저항{0}%",
                    "type": 1,
                    "value": "-0.160000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "type": 15,
                    "resist": {
                      "elem": "fire",
                      "value": {
                        "base": "-16%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wave",
              "if": {
                "unitCount": {
                  "filter": [
                    "squad",
                    "heavy"
                  ],
                  "type": [
                    1
                  ],
                  "count": [
                    2,
                    3,
                    4,
                    5
                  ]
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_ICERES_DOWN",
                  "desc": {
                    "desc": "중장갑 OS : 냉기 저항{0}%",
                    "type": 1,
                    "value": "-0.160000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "type": 17,
                    "resist": {
                      "elem": "ice",
                      "value": {
                        "base": "-16%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wave",
              "if": {
                "unitCount": {
                  "filter": [
                    "squad",
                    "heavy"
                  ],
                  "type": [
                    1
                  ],
                  "count": [
                    2,
                    3,
                    4,
                    5
                  ]
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                  "desc": {
                    "desc": "중장갑 OS : 전기 저항{0}%",
                    "type": 1,
                    "value": "-0.160000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "type": 19,
                    "resist": {
                      "elem": "lightning",
                      "value": {
                        "base": "-16%",
                        "per": "-1%"
                      }
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            },
            {
              "on": "wave",
              "if": {
                "unitCount": {
                  "filter": [
                    "squad",
                    "heavy"
                  ],
                  "type": [
                    1
                  ],
                  "count": [
                    2,
                    3,
                    4,
                    5
                  ]
                }
              },
              "body": [
                0,
                1
              ],
              "class": [
                0,
                2
              ],
              "role": [
                0,
                1,
                2
              ],
              "target": 4,
              "buffs": [
                {
                  "icon": "BuffIcon_AP_DOWN",
                  "desc": {
                    "desc": "중장갑 OS : 행동력{0}%",
                    "type": 1,
                    "value": "-0.070000"
                  },
                  "attr": 3,
                  "erase": {
                    "rounds": 99
                  },
                  "value": {
                    "isBuff": true,
                    "type": 13,
                    "turnSpeed": {
                      "base": "-7%",
                      "per": "-1.5%"
                    }
                  },
                  "overlap": 4
                }
              ],
              "maxStack": 0
            }
          ]
        }
      ]
    },
    "desc": [
      "전투 개시 시 스쿼드에 중장형 아군 수가 2 이상일 경우, 중장형 아군의 [AP +:1.8~0.2:] / [행동력 +:7~1.5:%]를 증가시키고, 경장 / 기동형 적의 [#fire,#chill,#thunder:모든 속성 저항 -:16~1:%] / [행동력 -:7~1.5:%]를 감소시킵니다.",
      "해당 효과는 해제할 수 없습니다."
    ]
  }
};