export default {
  "id": "Predator_EW",
  "name": "프레데터",
  "desc": "전장에서 등장하는 더욱 강력해진 프레데터로 강력한 방어력으로 인해 물리 공격은 통하지 않을 것입니다.\n\n\n보고자 ???",
  "icon": "TbarIcon_MP_Predator_B0208",
  "ai": "AI_Boss_PWLR_02",
  "rarity": 5,
  "type": 1,
  "role": 0,
  "isBoss": true,
  "hp": [
    50000,
    255
  ],
  "atk": [
    150,
    15
  ],
  "def": [
    2500,
    120
  ],
  "spd": 3.3,
  "cri": 10,
  "acc": 250,
  "eva": 10,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_Predator_EW_1",
      "name": "후려치기",
      "icon": "MeleeAttack",
      "desc": "적 들을 강타해 {0} 피해를 주고, 1칸 뒤로 밀어내며 일정 확률로 2라운드 동안 행동 불가 상태로 만들고 속성을 흡수한 상태라면 대상에게 해당 속성을 방출하여 지속 피해를 줍니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 1,
        "ap": 3,
        "grid": "258",
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
                "icon": "BuffIcon_Push",
                "desc": {
                  "desc": "뒤로 {0}칸 밀기",
                  "type": 0,
                  "value": "1"
                },
                "attr": 3,
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
                "overlap": 0
              },
              {
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "행동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "30%",
                  "type": 22,
                  "stun": true
                },
                "overlap": 1
              }
            ],
            "maxStack": 0
          },
          {
            "on": "attack_success",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Predator_EW_3"
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_FireDMG_DOT",
                "desc": {
                  "desc": "화염 속성 방출 : 지속 화염 피해 {0}",
                  "type": 0,
                  "value": "500"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 66,
                  "fixed_damage": {
                    "elem": "fire",
                    "damage": {
                      "base": 500,
                      "per": 0
                    }
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 0
          },
          {
            "on": "attack_success",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Predator_EW_12"
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_IceDMG_DOT",
                "desc": {
                  "desc": "냉기 속성 방출 : 지속 냉기 피해 {0}",
                  "type": 0,
                  "value": "500"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 67,
                  "fixed_damage": {
                    "elem": "ice",
                    "damage": {
                      "base": 500,
                      "per": 0
                    }
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 0
          },
          {
            "on": "attack_success",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Predator_EW_13"
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_LightningDMG_DOT",
                "desc": {
                  "desc": "전기 속성 방출 : 지속 전기 피해 {0}",
                  "type": 0,
                  "value": "500"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 68,
                  "fixed_damage": {
                    "elem": "lightning",
                    "damage": {
                      "base": 500,
                      "per": 0
                    }
                  }
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
      "key": "Skill_MP_Predator_EW_2",
      "name": "오염액",
      "icon": "TeamDefDeBuff",
      "desc": "오염액으로 목표 대상들에게 {0} 피해를 주며, 2라운드 동안 오염 상태로 만듭니다. 오염 상태인 대상은 방어력과 행동력이 감소하며, 지속 물리 피해를 입습니다. 보호 효과를 무시합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.5,
        "range": 3,
        "ap": 3,
        "grid": "4>456",
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
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "오염 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.300000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-30%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "오염 : 행동력 {0}%",
                  "type": 1,
                  "value": "-0.200000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-20%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_phyDMG_DOT",
                "desc": {
                  "desc": "오염 : 지속 물리 피해 {0}",
                  "type": 0,
                  "value": "250"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 250,
                    "per": 50
                  }
                },
                "overlap": 3
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Predator_EW_3",
      "name": "속성 흡수",
      "icon": "SelfDefBuff",
      "desc": "속성 공격에 피격 시 3라운드 동안 해당 속성을 흡수하여 해당 속성의 저항력이 증가하지만 부작용으로 특정 속성의 저항력이 대폭 감소합니다.\n화염 속성 흡수 시: 화염 저항력 소폭 증가, 냉기 저항력 대폭 감소\n냉기 속성 흡수 시: 냉기 저항력 소폭 증가, 전기 저항력 대폭 감소\n전기 속성 흡수 시: 전기 저항력 소폭 증가, 화염 저항력 대폭 감소",
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
            "on": {
              "damaged": "fire"
            },
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
                "icon": "BuffIcon_FIRERES_UP",
                "desc": {
                  "desc": "속성 흡수: 화염 속성 흡수",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "10%",
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
            "on": {
              "damaged": "ice"
            },
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
                "icon": "BuffIcon_ICERES_UP",
                "desc": {
                  "desc": "속성 흡수: 냉기 속성 흡수",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 17,
                  "resist": {
                    "elem": "ice",
                    "value": {
                      "base": "10%",
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
            "on": {
              "damaged": "lightning"
            },
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
                "icon": "BuffIcon_LIGHTNINGRES_UP",
                "desc": {
                  "desc": "속성 흡수: 전기 속성 흡수",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 19,
                  "resist": {
                    "elem": "lightning",
                    "value": {
                      "base": "10%",
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
            "on": {
              "damaged": "fire"
            },
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
                "icon": "BuffIcon_ICERES_DOWN",
                "desc": {
                  "desc": "부작용: 냉기 속성 저항력 {0}%",
                  "type": 1,
                  "value": "-0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 17,
                  "resist": {
                    "elem": "ice",
                    "value": {
                      "base": "-80%",
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
            "on": {
              "damaged": "ice"
            },
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
                "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                "desc": {
                  "desc": "부작용: 전기 속성 저항력 {0}%",
                  "type": 1,
                  "value": "-0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 19,
                  "resist": {
                    "elem": "lightning",
                    "value": {
                      "base": "-80%",
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
            "on": {
              "damaged": "lightning"
            },
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
                "icon": "BuffIcon_FIRERES_DOWN",
                "desc": {
                  "desc": "부작용: 화염 속성 저항력 {0}%",
                  "type": 1,
                  "value": "-0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "-80%",
                      "per": "0%"
                    }
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
      "key": "Skill_MP_Predator_EW_4",
      "name": "오염액 누출",
      "icon": "TeamDefDeBuff",
      "desc": "HP가 50% 이하가 되면 오염액이 누출되어 적군 전체의 화염,냉기,전기 속성 저항력을 감소시킵니다.",
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
              "hp<=": "50%"
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
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_ICERES_DOWN",
                "desc": {
                  "desc": "오염액 누출 : 냉기 속성 저항력 {0}%",
                  "type": 1,
                  "value": "-0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 17,
                  "resist": {
                    "elem": "ice",
                    "value": {
                      "base": "-80%",
                      "per": "1%"
                    }
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
              "hp<=": "50%"
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
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                "desc": {
                  "desc": "오염액 누출 : 전기 속성 저항력 {0}%",
                  "type": 1,
                  "value": "-0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 19,
                  "resist": {
                    "elem": "lightning",
                    "value": {
                      "base": "-80%",
                      "per": "1%"
                    }
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
              "hp<=": "50%"
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
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_FIRERES_DOWN",
                "desc": {
                  "desc": "오염액 누출 : 화염 속성 저항력 {0}%",
                  "type": 1,
                  "value": "-0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "-80%",
                      "per": "1%"
                    }
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
      "key": "Skill_MP_Predator_EW_5",
      "name": "보호 본능",
      "icon": "SelfDefBuff",
      "desc": "적에게 공격 당할 시 속성 흡수 부작용 효과를 제외한 자신에게 걸려있는 해로운 효과를 해제 합니다.",
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
            "on": "damaged",
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
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "보호 본능 : 해로운 효과 해제",
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
            "maxStack": 0
          }
        ]
      }
    }
  ]
};