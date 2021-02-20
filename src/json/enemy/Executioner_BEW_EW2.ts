export default {
  "id": "Executioner_BEW_EW2",
  "icon": "TbarIcon_MP_Executioner_BEW",
  "ai": "AI_Executioner_EW_02",
  "rarity": 5,
  "type": 2,
  "role": 1,
  "isBoss": true,
  "hp": [
    55000,
    500
  ],
  "atk": [
    320,
    23
  ],
  "def": [
    1200,
    22
  ],
  "spd": 4.6,
  "cri": 15,
  "acc": 350,
  "eva": 120,
  "res": {
    "fire": 30,
    "chill": 30,
    "thunder": 30
  },
  "skills": [
    {
      "key": "Skill_MP_Executioner_BEW_EW2_1",
      "name": "처형 개시",
      "icon": "SwordAttk",
      "desc": "지정 범위에 {0} 피해를 주고 대상들에게 처형 낙인 효과를 적용시키며 낮은 확률로 방어막 / 피해 감소 효과를 무시합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 5,
        "ap": 3,
        "grid": "#15#7",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
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
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "처형 낙인 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.200000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-20%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 10
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_BARRIER_PIERCE",
                "desc": {
                  "desc": "처형 : 방어막 / 피해 감소 무시",
                  "type": 1,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "30%",
                  "type": 94,
                  "penetration_force": true
                },
                "overlap": 0
              }
            ],
            "maxStack": 1
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Executioner_BEW_EW2_2",
      "name": "학살",
      "icon": "WideSwordAttk",
      "desc": "지정 범위에 {0} 보호 무시 피해를 주고 추가 화염 피해를 주며, 대상에게 걸려있는 강화 효과를 해제합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 4,
        "ap": 4,
        "grid": "13579",
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
                "icon": "BuffIcon_FireATK_UP",
                "desc": {
                  "desc": "대폭발 : 추가 화염 피해 +{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 84,
                  "damage_add": {
                    "elem": "fire",
                    "damage": {
                      "base": "30%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "대폭발 : 강화 효과 해제",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 99,
                  "off": 0
                },
                "overlap": 0
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Executioner_BEW_EW2_3",
      "name": "불멸∙최후",
      "icon": "Barrier",
      "desc": "<불멸의 힘>으로 인해 불멸, 불멸의 대가가 적용됩니다. 불멸이 발동 시 사라져가는 불멸이 적용되고 3중첩 시 불멸의 힘이 사라지고 <최후의 힘>이 발동됩니다.\n<최후의 힘>이 발동 시 2라운드 동안 피해가 최소화 되며 피격 시 해로운 효과 해제, 매 라운드마다 일정 확률로 공격력 / 방어력 / 적중률 / 방어 관통 효과 / 속성 저항 능력들이 증가됩니다. 불멸과 최후의 힘으로 발동되는 능력들은 해제 불가합니다.\n\n불멸 : 죽지 않습니다.    불멸의 대가 : 자신의 공격력이 대폭 감소합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "self",
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
              "hp>=": "100%"
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "불멸의 힘",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 2,
                  "defense": {
                    "base": 0,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": "revive",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_3"
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
                "icon": "BuffIcon_DEF_RESSURRECT",
                "desc": {
                  "desc": "불멸 : 죽지 않고 전투 지속",
                  "type": 0,
                  "value": "70000"
                },
                "attr": 1,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 82,
                  "revive": {
                    "base": 70000,
                    "per": 0
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 1
          },
          {
            "on": "revive",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_3"
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "사라져가는 불멸",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 2,
                  "defense": {
                    "base": 0,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 3
          },
          {
            "on": "revive",
            "if": {
              "on": {
                "target": "self",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_32"
                ],
                "stack": 3,
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
                  "desc": "최후의 힘",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 0,
                  "attack": {
                    "base": 0,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": "revive",
            "if": {
              "on": {
                "target": "self",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_32"
                ],
                "stack": 3,
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
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "최후의 힘 : 피해 최소화",
                  "type": 0,
                  "value": "999999"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 34,
                  "damage_minimize": {
                    "base": 999999,
                    "per": 0
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 1
          },
          {
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_33"
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
                  "desc": "최후의 힘 : 공격력 +{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 1,
                  "attack": {
                    "base": "40%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_33"
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "최후의 힘 : 방어력 +{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 3,
                  "defense": {
                    "base": "40%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_33"
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
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "최후의 힘 : 적중률 +{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "60%",
                  "type": 7,
                  "accuracy": {
                    "base": "100%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_33"
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
                "icon": "BuffIcon_DEF_PIERCE_UP",
                "desc": {
                  "desc": "최후의 힘 : 방어 관통 +{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "55%",
                  "type": 58,
                  "penetration": {
                    "base": "30%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_3"
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
                "icon": "BuffIcon_ATK_DOWN",
                "desc": {
                  "desc": "불멸의 대가 : 공격력 {0}%",
                  "type": 1,
                  "value": "-0.600000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "-60%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": "revive",
            "if": {
              "on": {
                "target": "self",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_32"
                ],
                "stack": 3,
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
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "사라진 불멸의 힘",
                  "type": 0,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 89,
                  "off": {
                    "type": 2,
                    "target": 1
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "사라진 불멸의 힘",
                  "type": 1,
                  "value": "82"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 89,
                  "off": {
                    "type": 82,
                    "target": 1
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 2
          },
          {
            "on": "wave",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_33"
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
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "사라진 불멸의 힘",
                  "type": 0,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 89,
                  "off": {
                    "type": 2,
                    "target": 1
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "사라진 불멸의 힘",
                  "type": 1,
                  "value": "82"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 89,
                  "off": {
                    "type": 82,
                    "target": 1
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 2
          },
          {
            "on": "damaged",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_33"
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
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "최후의 힘 : 해로운 효과 해제",
                  "type": 1,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 100,
                  "off": 1
                },
                "overlap": 0
              }
            ],
            "maxStack": 1
          },
          {
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_33"
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
                "icon": "BuffIcon_FIRERES_UP",
                "desc": {
                  "desc": "최후의 힘 : 화염 저항 +{0}%",
                  "type": 1,
                  "value": "0.600000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "30%",
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "60%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ICERES_UP",
                "desc": {
                  "desc": "최후의 힘 : 냉기 저항 +{0}%",
                  "type": 1,
                  "value": "0.600000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "40%",
                  "type": 17,
                  "resist": {
                    "elem": "ice",
                    "value": {
                      "base": "60%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_LIGHTNINGRES_UP",
                "desc": {
                  "desc": "최후의 힘 : 전기 저항 +{0}%",
                  "type": 1,
                  "value": "0.600000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "45%",
                  "type": 19,
                  "resist": {
                    "elem": "lightning",
                    "value": {
                      "base": "60%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": "wave",
            "if": {
              "hp>=": "100%"
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
                "icon": "BuffIcon_DEF_RESSURRECT",
                "desc": {
                  "desc": "불멸 : 죽지 않고 전투 지속",
                  "type": 0,
                  "value": "70000"
                },
                "attr": 1,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 82,
                  "revive": {
                    "base": 70000,
                    "per": 0
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 1
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Executioner_BEW_EW2_4",
      "name": "처형 낙인",
      "icon": "WideSwordAttk",
      "desc": "처형 개시 스킬에 피격 당한 적은 3라운드 동안 해제 불가의 방어력이 감소하는 처형 낙인 효과가 적용됩니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "self",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": "self_dead",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_3"
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
                  "desc": "최후의 순간",
                  "type": 1,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 0,
                  "attack": {
                    "base": 0,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Executioner_BEW_EW2_5",
      "name": "공포",
      "icon": "TeamAtkDeBuff",
      "desc": "<최후의 힘>이 적용돼 있을 시 매 라운드마다 바이오로이드들에게 공포심을 심어 일정 확률로 공격력 / 방어력 / 회피율 능력들을 대폭 감소시키고 낮은 확률로 1라운드 동안 행동 불가 상태로 만듭니다.",
      "passive": true,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "global",
        "target_ground": true,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_33"
                ],
                "attr": 4
              }
            },
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
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_ATK_DOWN",
                "desc": {
                  "desc": "공포 : 공격력 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 1,
                  "attack": {
                    "base": "-50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 2
          },
          {
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_33"
                ],
                "attr": 4
              }
            },
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
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "공포 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 3,
                  "defense": {
                    "base": "-50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 2
          },
          {
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_33"
                ],
                "attr": 4
              }
            },
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
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "공포 : 회피율 {0}%",
                  "type": 1,
                  "value": "-1"
                },
                "attr": 1,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 11,
                  "evade": {
                    "base": "-100%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 2
          },
          {
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_BEW_EW2_33"
                ],
                "attr": 4
              }
            },
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
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "공포 : 행동 불가",
                  "type": 1,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "15%",
                  "type": 22,
                  "stun": true
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          }
        ]
      }
    }
  ]
};