export default {
  "id": "DoomEater_N_EW2",
  "name": "둠 이터",
  "desc": "같은 철충들을 먹어치워버리는 이 무자비한 철충을 막을 방법은 오직 포식 후, 에너지를 흡수할 때 밖에는 없는 듯 합니다.\n\n\n보고자 ???",
  "icon": "TbarIcon_MP_DoomEater_N",
  "ai": "AI_Boss_PWLR_EW_02",
  "rarity": 5,
  "type": 1,
  "role": 0,
  "isBoss": true,
  "hp": [
    800000,
    0
  ],
  "atk": [
    1000,
    0
  ],
  "def": [
    15000,
    0
  ],
  "spd": 4.1,
  "cri": 10,
  "acc": 400,
  "eva": 10,
  "res": {
    "fire": 40,
    "chill": 40,
    "thunder": 40
  },
  "skills": [
    {
      "key": "Skill_MP_DoomEater_N_EW2_1",
      "name": "에너지 추출",
      "icon": "MeleeAttack",
      "desc": "<에너지 고갈> 상태에 빠져있을 시 주변 철충에게서 에너지를 추출합니다. 그리고 에너지를 추출 당한 철충은 죽음을 맞이 합니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 10,
        "ap": 5,
        "grid": "single",
        "target_ground": false,
        "summon": null,
        "use": {
          "key": "Effect_MP_DoomEater_N_EW2_21",
          "count": 10
        },
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": {
              "after": "use_skill"
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "에너지 흡수 중…",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
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
            "on": {
              "after": "use_skill"
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
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "에너지 추출",
                  "type": 0,
                  "value": "9999.990000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "999999%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": {
              "after": "use_skill"
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
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "에너지 흡수 중 : 행동 동결",
                  "type": 0,
                  "value": "-1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-100%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": {
              "after": "use_skill"
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
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "에너지 흡수 중 : 받는 피해 +{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
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
            "on": {
              "after": "use_skill"
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
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "에너지 흡수 중 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": {
              "after": "use_skill"
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
                  "desc": "에너지 흡수 중 : 화염 저항력 {0}%",
                  "type": 1,
                  "value": "-0.300000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "30%",
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "-30%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_FIRERES_DOWN",
                "desc": {
                  "desc": "에너지 흡수 중 : 냉기 저항력 {0}%",
                  "type": 1,
                  "value": "-0.300000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "30%",
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "-30%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_FIRERES_DOWN",
                "desc": {
                  "desc": "에너지 흡수 중 : 전기 저항력 {0}%",
                  "type": 1,
                  "value": "-0.300000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "30%",
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "-30%",
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
      "key": "Skill_MP_DoomEater_N_EW2_2",
      "name": "죽음의 에너지",
      "icon": "TeamDefDeBuff",
      "desc": "내부에 저장된 막대한 에너지를 모아, 범위 내 적들에게 {0} 보호 무시 피해를 주는 죽음의 에너지를 방사합니다. 피격 당한 적은 해제 불가의 지속 물리 피해를 입습니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 5,
        "ap": 3,
        "grid": "45",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": true,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": {
              "after": "use_skill"
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_phyDMG_DOT",
                "desc": {
                  "desc": "죽음의 에너지 : 지속 물리 피해 {0}",
                  "type": 0,
                  "value": "200"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 200,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": {
              "after": "use_skill"
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "에너지 고갈",
                  "type": 1,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 10
                },
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
            "maxStack": 5
          }
        ]
      }
    },
    {
      "key": "Skill_MP_DoomEater_N_EW2_3",
      "name": "에너지 고갈",
      "icon": "SelfAtkDeBuff",
      "desc": "<죽음의 에너지> 스킬을 사용 시 막대한 에너지를 소비하게 되어 <에너지 고갈> 상태에 빠지게 됩니다. <에너지 고갈> 상태에 빠지게 되면 도발에 면역이 되며 주위 철충에게서 에너지를 추출하여 손실된 에너지를 보충합니다. 손실된 에너지가 보충이 되면 <에너지 완충> 상태가 되어 피해가 최소화 되고 해로운 효과에 면역이 됩니다. ",
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "에너지 완충",
                  "type": 1,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
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
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_DoomEater_N_EW2_3"
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
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "에너지 완충 : 피해 최소화",
                  "type": 0,
                  "value": "9999999"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 34,
                  "damage_minimize": {
                    "base": 9999999,
                    "per": 0
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 1
          },
          {
            "on": "damaged",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_DoomEater_N_EW2_31"
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
                  "desc": "에너지 완충 : 해로운 효과 면역",
                  "type": 0,
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
                  "Effect_MP_DoomEater_N_EW2_21",
                  "Effect_MP_DoomEater_N_EW2_1"
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
                  "desc": "에너지 부족",
                  "type": 0,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 69,
                  "off": {
                    "type": 2
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "에너지 부족",
                  "type": 0,
                  "value": "34"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 69,
                  "off": {
                    "type": 34
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "에너지 부족",
                  "type": 0,
                  "value": "89"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 69,
                  "off": {
                    "type": 89
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 3
          }
        ]
      }
    },
    {
      "key": "Skill_MP_DoomEater_N_EW2_4",
      "name": "에너지 흡수",
      "icon": "SelfAtkBuff",
      "desc": "에너지 추출 시, 온 신경을 흡수에만 집중해 도발에 면역이 되고 2라운드 동안 행동을 정지합니다. 해당 상태에선 방어력이 감소하며, 받는 피해가 증가합니다. 30% 확률로 특정 속성 저항력이 감소합니다.",
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
        "buff_rate": 0,
        "buffs": [
          {
            "on": {
              "after": "use_skill"
            },
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_DoomEater_N_EW2_1"
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
            "buffs": [],
            "maxStack": 1
          }
        ]
      }
    },
    {
      "key": "Skill_MP_DoomEater_N_EW2_5",
      "name": "폭주",
      "icon": "SelfDefBuff",
      "desc": "라운드 개시 시 자신에게 <에너지 고갈> 상태가 3중첩이라면 <폭주> 상태에 빠지게 되어 공격력 / 적중 / 효과 저항이 증가하지만 방어력이 감소합니다. <에너지 고갈> 상태가 5중첩이라면 방어막과 피해 감소 효과를 무시 합니다. <폭주> 능력은 중첩이 되며 해제 불가입니다.",
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
            "on": "round",
            "if": {
              "on": {
                "target": "self",
                "select": [
                  "Effect_MP_DoomEater_N_EW2_21"
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
                  "desc": "폭주 : 공격력 +{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "폭주 : 적중률 +{0}%",
                  "type": 1,
                  "value": "0.800000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "80%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "폭주 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.100000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-10%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "폭주 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 91,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "50%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "round",
            "if": {
              "on": {
                "target": "self",
                "select": [
                  "Effect_MP_DoomEater_N_EW2_21"
                ],
                "stack": 5,
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
                "icon": "BuffIcon_BARRIER_PIERCE",
                "desc": {
                  "desc": "폭주: 방어막 / 피해 감소 무시",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 94,
                  "penetration_force": true
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": "damaged",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_DoomEater_N_EW2_21",
                  "Effect_MP_DoomEater_N_EW2_1"
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
                  "desc": "도발 면역",
                  "type": 0,
                  "value": "74"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 89,
                  "off": {
                    "type": 74,
                    "target": 1
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 1
          }
        ]
      }
    }
  ]
};