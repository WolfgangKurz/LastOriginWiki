export default {
  "id": "DoomEater_N_EW",
  "name": "굶주린 둠 이터",
  "desc": "오랫동안 에너지 섭취를 못해 매우 굶주려 있는 상태로 주위에 있는 모든 철충들을 닥치는 대로 먹어치워 버릴 것입니다. 더 이상 먹어치울 철충이 없을 경우 광폭화에 빠지게 되어 막을 수 없을지도 모릅니다.\n\n\n보고자 ???",
  "icon": "TbarIcon_MP_DoomEater_N",
  "ai": "AI_Boss_PWLR_EW_01",
  "rarity": 5,
  "type": 1,
  "role": 0,
  "isBoss": true,
  "hp": [
    400000,
    0
  ],
  "atk": [
    1000,
    0
  ],
  "def": [
    1500,
    0
  ],
  "spd": 2.5,
  "cri": 10,
  "acc": 100,
  "eva": 0,
  "res": {
    "fire": 40,
    "chill": 40,
    "thunder": 40
  },
  "skills": [
    {
      "key": "Skill_MP_DoomEater_N_EW_1",
      "name": "에너지 추출",
      "icon": "MeleeAttack",
      "desc": "주변 철충에게서 에너지를 추출합니다. 그리고 에너지를 추출 당한 철충은 죽음을 맞이 합니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 10,
        "ap": 3,
        "grid": "single",
        "target_ground": false,
        "summon": null,
        "use": {
          "key": "Effect_MP_DoomEater_N_EW_21",
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
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "에너지 추출",
                  "type": 0,
                  "value": "9999.990000"
                },
                "attr": 0,
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
            "maxStack": 1
          }
        ]
      }
    },
    {
      "key": "Skill_MP_DoomEater_N_EW_2",
      "name": "죽음의 에너지",
      "icon": "TeamDefDeBuff",
      "desc": "내부에 저장된 막대한 에너지를 모아, 범위 내 적들에게 {0} 보호 무시 피해를 주는 죽음의 에너지를 방사합니다. 피격 당한 적은 해제 불가의 지속 물리 피해를 입습니다. 해당 스킬을 사용 시 막대한 에너지를 소비하게 되어 <에너지 고갈> 상태에 빠지게 됩니다.",
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
                "attr": 0,
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
                "attr": 0,
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
            "maxStack": 2
          }
        ]
      }
    },
    {
      "key": "Skill_MP_DoomEater_N_EW_3",
      "name": "에너지 갈망",
      "icon": "SelfAtkDeBuff",
      "desc": "오랫동안 에너지 섭취를 못해 굶주려 있어 주위의 모든 철충들을 먹어 치울 것입니다.",
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
                  "desc": "에너지 갈망",
                  "type": 1,
                  "value": "0"
                },
                "attr": 0,
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
          }
        ]
      }
    },
    {
      "key": "Skill_MP_DoomEater_N_EW_4",
      "name": "포식 집중",
      "icon": "SelfAtkBuff",
      "desc": "굶주린 둠이터의 눈에는 오로지 에너지 섭취를 위한 철충들을 찾는 것에 집중해 있어 도발에 넘어가지 않습니다.",
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
                  "desc": "포식 집중 : 도발 면역",
                  "type": 0,
                  "value": "74"
                },
                "attr": 0,
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
    },
    {
      "key": "Skill_MP_DoomEater_N_EW_5",
      "name": "광폭화",
      "icon": "SelfAtkBuff",
      "desc": "라운드 개시 시 자신에게 <에너지 고갈> 상태가 적용돼 있을 시, <광폭화> 상태에 빠지게 되어 공격력 / 방어력 / 적중 / 효과 저항이 증가합니다. <에너지 고갈> 상태가 2중첩이라면 방어막과 피해 감소 효과를 무시 합니다. <광폭화> 능력은 중첩이 되며 해제 불가입니다.",
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
                  "Effect_MP_DoomEater_N_EW_21"
                ],
                "stack": 1,
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
                  "desc": "광폭화 : 공격력 +{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
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
                  "desc": "광폭화 : 적중률 +{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "광폭화 : 방어력 +{0}%",
                  "type": 1,
                  "value": "0.050000"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "5%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "광폭화 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
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
                  "Effect_MP_DoomEater_N_EW_21"
                ],
                "stack": 2,
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
                  "desc": "광폭화: 방어막 / 피해 감소 무시",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
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
          }
        ]
      }
    }
  ]
};