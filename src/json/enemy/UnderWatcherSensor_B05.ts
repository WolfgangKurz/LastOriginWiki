export default {
  "id": "UnderWatcherSensor_B05",
  "name": "언더왓쳐 센서",
  "desc": "조준용 센서가 달린 파츠네요. 피해를 주거나 파괴하면 공격을 피하기 쉬워질거에요.\n\n\n- 스카디",
  "icon": "TbarIcon_MP_UnderWatcherSensor_B05",
  "ai": "AI_UnderWatcherSensor_01",
  "rarity": 5,
  "type": 1,
  "role": 0,
  "isBoss": true,
  "hp": [
    19030,
    130
  ],
  "atk": [
    0,
    0
  ],
  "def": [
    1465,
    15
  ],
  "spd": 4.5,
  "cri": 0,
  "acc": 999,
  "eva": 0,
  "res": {
    "fire": 25,
    "chill": 50,
    "thunder": -25
  },
  "skills": [
    {
      "key": "Skill_MP_UnderWatcherSensor_N_1",
      "name": "록 온 센서",
      "icon": "Scan",
      "desc": "목표 대상을 조준해 3라운드 동안 표식을 설정하고, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0,
        "range": 8,
        "ap": 4,
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
                "icon": "BuffIcon_MARKING",
                "desc": {
                  "desc": "표식 설정",
                  "type": 1,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 87,
                  "attack_target": true
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "록 온 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 48,
                  "damage_increase": {
                    "base": "50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "록 온 : 회피 {0}%",
                  "type": 1,
                  "value": "-0.600000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "-60%",
                    "per": "0%"
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
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "록 온 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "50%",
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
      "key": "Skill_MP_UnderWatcherSensor_N_2",
      "name": "다중 록 온 시스템",
      "icon": "Scan",
      "desc": "목표 대상들을 조준해 3라운드 동안 표식을 설정하고, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0,
        "range": 8,
        "ap": 6,
        "grid": "24568",
        "target_ground": false,
        "summon": null,
        "use": {
          "key": "Effect_MP_UnderWatcherGenerator_N_1",
          "count": 5
        },
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
                "icon": "BuffIcon_MARKING",
                "desc": {
                  "desc": "표식 설정",
                  "type": 1,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 87,
                  "attack_target": true
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "록 온 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "30%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "록 온 : 회피 {0}%",
                  "type": 1,
                  "value": "-0.400000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "-40%",
                    "per": "0%"
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
      "key": "Skill_MP_UnderWatcherSensor_N_3",
      "name": "조준 보정 시스템",
      "icon": "Scan",
      "desc": "라운드 개시 시, 자신의 현재 HP 비율에 따라 주변 장치에게 적중 증가 효과를 줍니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
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
            "on": "round",
            "if": {
              "hp>=": "75%"
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "조준 보정 3단계 : 적중+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "100%",
                    "per": "0%"
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
              "hp>=": "50%"
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "조준 보정 2단계 : 적중+{0}%",
                  "type": 1,
                  "value": "0.600000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 7,
                  "accuracy": {
                    "base": "60%",
                    "per": "0%"
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
              "hp>=": "25%"
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "조준 보정 1단계 : 적중+{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "20%",
                  "type": 7,
                  "accuracy": {
                    "base": "40%",
                    "per": "0%"
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
      "key": "Skill_MP_UnderWatcherSensor_N_4",
      "name": "최대 출력",
      "icon": "SelfAtkBuff",
      "desc": "에너지 충전 중첩이 3 이상이면, 방해 효과를 걸 확률이 증가합니다.",
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
                  "Effect_MP_UnderWatcherGenerator_N_1"
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
                "icon": "BuffIcon_BUFFEFFECTRATE_CHANGE",
                "desc": {
                  "desc": "효과 적중+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 92,
                  "invokeChance": {
                    "base": "100%",
                    "per": "0%"
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