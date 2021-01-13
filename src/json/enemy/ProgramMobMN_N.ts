export default {
  "id": "ProgramMobMN_N",
  "name": "철충 사념체 (폭격기)",
  "desc": "<교전 기록 없음>",
  "icon": "TbarIcon_MP_ProgramMobMN_N",
  "ai": "AI_ProgramMobMN_Normal_01",
  "rarity": 4,
  "type": 2,
  "role": 1,
  "isBoss": false,
  "hp": [
    489,
    45.3
  ],
  "atk": [
    78,
    7.7
  ],
  "def": [
    0,
    0
  ],
  "spd": 4.3,
  "cri": 7.5,
  "acc": 150,
  "eva": 37.5,
  "res": {
    "fire": 30,
    "chill": 0,
    "thunder": -20
  },
  "skills": [
    {
      "key": "Skill_MP_ProgramMobMN_N_1",
      "name": "작열 미사일",
      "icon": "Missile",
      "desc": "미사일로 {0} 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 대상이 화염 저항 감소 상태면 일정 확률로 점화 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.1,
        "range": 3,
        "ap": 6,
        "grid": "single",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": "attack_success",
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  15
                ],
                "attr": 1
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
                  "desc": "점화 : 지속 화염 피해 {0}",
                  "type": 0,
                  "value": "300"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "33%",
                  "type": 66,
                  "fixed_damage": {
                    "elem": "fire",
                    "damage": {
                      "base": 300,
                      "per": 1
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_PIERCE_UP",
                "desc": {
                  "desc": "작열 미사일 : 방어 관통+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 58,
                  "penetration": {
                    "base": "20%",
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
    },
    {
      "key": "Skill_MP_ProgramMobMN_N_2",
      "name": "소이탄 폭격",
      "icon": "AirStrike",
      "desc": "목표 범위에 {0} 화염 속성 피해를 줍니다. 대상이 표식 상태면 피해량이 증가합니다.",
      "passive": false,
      "type": 1,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 2,
        "ap": 9,
        "grid": "6>456",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": "attack_success",
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  87
                ],
                "attr": 1
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
                "icon": "BuffIcon_FireATK_UP",
                "desc": {
                  "desc": "포착 : 피해량+{0}%",
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
                      "per": "1%"
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
      "key": "Skill_MP_ProgramMobMN_N_3",
      "name": "정밀 레이더",
      "icon": "SelfSpdBuff",
      "desc": "라운드 개시 시, 적중 / 회피가 증가합니다.",
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
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "정밀 레이더 : 적중+{0}%",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "35%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
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
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "정밀 레이더 : 회피+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "30%",
                    "per": "1%"
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
      "key": "Skill_MP_ProgramMobMN_N_4",
      "name": "지상 감지 시스템",
      "icon": "SelfAtkBuff",
      "desc": "공격 시, 일정 확률로 경장 / 중장형 적에게 주는 피해가 증가합니다.",
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
        "buff_rate": 50,
        "buffs": [
          {
            "on": "attack",
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
                "icon": "BuffIcon_TROOPER_DMG_UP",
                "desc": {
                  "desc": "지상 감지 : 대 경장 피해량+{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "until": {
                    "after": "use_skill"
                  }
                },
                "value": {
                  "isBuff": true,
                  "type": 60,
                  "damage_multiply": {
                    "target": "light",
                    "value": {
                      "base": "25%",
                      "per": "1%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ARMORED_DMG_UP",
                "desc": {
                  "desc": "지상 감지 : 대 중장 피해량+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "until": {
                    "after": "use_skill"
                  }
                },
                "value": {
                  "isBuff": true,
                  "type": 61,
                  "damage_multiply": {
                    "target": "heavy",
                    "value": {
                      "base": "50%",
                      "per": "1%"
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
    }
  ]
};