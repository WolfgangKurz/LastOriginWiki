export default {
  "id": "SpectorBS_N",
  "icon": "TbarIcon_MP_Spector_N",
  "ai": "AI_Spector_Special_01",
  "rarity": 4,
  "type": 2,
  "role": 2,
  "isBoss": false,
  "hp": [
    200,
    150
  ],
  "atk": [
    80,
    8
  ],
  "def": [
    0,
    0
  ],
  "spd": 4.2,
  "cri": 5,
  "acc": 350,
  "eva": 45,
  "res": {
    "fire": 25,
    "chill": 25,
    "thunder": 25
  },
  "skills": [
    {
      "key": "Skill_MP_SpectorBS_N_1",
      "name": "전자기장 미사일 난사",
      "icon": "MultiMissile",
      "desc": "전자기장 미사일을 난사해 {0} 피해를 주고, 대상의 치명타 / 효과 발동/ 사거리를 낮춥니다. 해당 효과는 2회까지 중첩됩니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.2,
        "range": 4,
        "ap": 6,
        "grid": "5689",
        "target_ground": true,
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
                "icon": "BuffIcon_CRITICAL_DOWN",
                "desc": {
                  "desc": "전자기장 미사일 난사 : 치명타 {0}%",
                  "type": 1,
                  "value": "-0.150000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "-15%",
                    "per": "-3%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 2
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
                "icon": "BuffIcon_BUFFEFFECTRATE_CHANGE",
                "desc": {
                  "desc": "전자기장 미사일 난사 : 효과 발동 {0}%",
                  "type": 1,
                  "value": "-0.250000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 92,
                  "invokeChance": {
                    "base": "-25%",
                    "per": "-3%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_BUFFEFFECTRATE_CHANGE",
                "desc": {
                  "desc": "전자기장 미사일 난사 : 효과 발동 {0}%",
                  "type": 1,
                  "value": "-0.250000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 92,
                  "invokeChance": {
                    "base": "-25%",
                    "per": "-3%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_RANGE_DOWN",
                "desc": {
                  "desc": "전자기장 미사일 난사 : 사거리 {0}",
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
            "maxStack": 2
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
                  "desc": "전자기장 미사일 난사 : 사거리 {0}",
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
              },
              {
                "icon": "BuffIcon_BUFFEFFECTRATE_CHANGE",
                "desc": {
                  "desc": "전자기장 미사일 난사 : 효과 발동 {0}%",
                  "type": 1,
                  "value": "-0.250000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 92,
                  "invokeChance": {
                    "base": "-25%",
                    "per": "-3%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_RANGE_DOWN",
                "desc": {
                  "desc": "전자기장 미사일 난사 : 사거리 {0}",
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
            "maxStack": 2
          }
        ]
      }
    },
    {
      "key": "Skill_MP_SpectorBS_N_2",
      "name": "강화 역장 전개",
      "icon": "TeamDefBuff",
      "desc": "반물질 역장을 넓게 전개해 주변 아군이 받는 피해를 일정 횟수 무효화하고, 자신과 주변 아군의 효과 저항을 올려줍니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 7,
        "grid": "around",
        "target_ground": false,
        "summon": null,
        "use": null,
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_All",
                "desc": {
                  "desc": "강화 역장 전개 : 피해 무효 {0}회",
                  "type": 0,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 33,
                  "damage_immune": {
                    "base": 1,
                    "per": 0
                  }
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
                  "desc": "강화 역장 전개 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 91,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "25%",
                      "per": "1%"
                    }
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "강화 역장 전개 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 91,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "25%",
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
    },
    {
      "key": "Skill_MP_SpectorBS_N_3",
      "name": "강화 반물질 역장",
      "icon": "SelfDefBuff",
      "desc": "라운드 개시 시, 반물질 역장을 전개해 자신이 받는 피해를 일정 횟수 무효화하고, 받는 피해를 낮춥니다.",
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
                "icon": "BuffIcon_DEF_All",
                "desc": {
                  "desc": "강화 반물질 역장 : 피해 무효 {0}회",
                  "type": 0,
                  "value": "3"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 33,
                  "damage_immune": {
                    "base": 3,
                    "per": 0
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "강화 반물질 역장 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "20%",
                    "per": "1%"
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
      "key": "Skill_MP_SpectorBS_N_4",
      "name": "전황 예측",
      "icon": "TeamSpdBuff",
      "desc": "스킬 사용 시, 주변 아군에게 적 분석 결과를 발신해 적중 / 회피 / AP를 올려줍니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "around",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "전황 예측 : 적중+{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
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
              },
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "전황 예측 : 회피+{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "25%",
                    "per": "4%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "전황 예측 : AP+{0}",
                  "type": 0,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 1,
                    "per": 0
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
      "key": "Skill_MP_SpectorBS_N_5",
      "name": "강화 은폐장",
      "icon": "SelfSpdBuff",
      "desc": "전투 개시 시, 은폐장을 전개해 회피가 대폭 증가합니다. 해당 효과는 전투가 진행될수록 점감됩니다.",
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
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "강화 은폐장 : 회피+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "50%",
                    "per": "2%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "강화 은폐장 : 회피+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "50%",
                    "per": "2%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "강화 은폐장 : 회피+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "50%",
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
    }
  ]
};