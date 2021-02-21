export default {
  "id": "NightChickDE_EV1",
  "icon": "TbarIcon_MP_NightChickDE_N",
  "ai": "AI_NCDetector_01",
  "rarity": 3,
  "type": 0,
  "role": 2,
  "isBoss": false,
  "hp": [
    27980,
    180
  ],
  "atk": [
    90,
    10
  ],
  "def": [
    38,
    8
  ],
  "spd": 4.3,
  "cri": 25,
  "acc": 400,
  "eva": 40,
  "res": {
    "fire": 25,
    "chill": 25,
    "thunder": 25
  },
  "skills": [
    {
      "key": "Skill_MP_NightChickDE_N_1",
      "name": "약점 포착",
      "icon": "ARShot",
      "desc": "목표를 공격 대상으로 지정해 {0} 피해를 주고, 2라운드 동안 표식 상태로 만듭니다. 표식 상태인 대상인 추가 피해를 받으며, 회피가 감소합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 4,
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
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "받는 피해+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "20%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "회피 {0}%",
                  "type": 1,
                  "value": "-0.350000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "-35%",
                    "per": "-1.5%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_MARKING",
                "desc": {
                  "desc": "표식 설정",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 87,
                  "attack_target": true
                },
                "overlap": 1
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_NightChickDE_N_2",
      "name": "섬광 탄막",
      "icon": "Beam",
      "desc": "지정한 위치에 섬광탄을 발사해 2라운드 동안 적중을 낮추고, 대상의 AP를 감소시킵니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.01,
        "range": 4,
        "ap": 7,
        "grid": "45",
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
                "icon": "BuffIcon_ACCURACY_DOWN",
                "desc": {
                  "desc": "적중 {0}%",
                  "type": 1,
                  "value": "-0.350000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "-35%",
                    "per": "-1.5%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "AP {0}",
                  "type": 0,
                  "value": "-1.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": -1.5,
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
      "key": "Skill_MP_NightChickDE_N_3",
      "name": "레이더 공유",
      "icon": "TeamSpdBuff",
      "desc": "피격 시, 일정 확률로 인접한 아군에게 경보를 울리며 전황을 공유합니다. 레이더를 공유 받은 경우, AP가 증가하며 2라운드 동안 사거리와 적중률이 증가합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "2468",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 40,
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "레이더 공유 : AP+{0}",
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
                    "per": 0.05
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "레이더 공유 : 적중+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "50%",
                    "per": "2%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_RANGE_UP",
                "desc": {
                  "desc": "레이더 공유 : 사거리+{0}",
                  "type": 0,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 55,
                  "range": {
                    "base": 1,
                    "per": 0
                  }
                },
                "overlap": 1
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_NightChickDE_EV1_4",
      "name": "명령 프로토콜",
      "icon": "TeamSpdBuff",
      "desc": "자신의 HP가 50% 이하 상태에서 피격된 경우, 주변 철충들에게 요격 명령을 내려 AP를 증가시킵니다.",
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
            "on": "damaged",
            "if": {
              "hp<=": "50%"
            },
            "body": [
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "요격 명령 : AP+{0}",
                  "type": 0,
                  "value": "3"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 3,
                    "per": 0
                  }
                },
                "overlap": 3
              }
            ],
            "maxStack": 0
          }
        ]
      }
    }
  ]
};