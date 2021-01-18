export default {
  "id": "Drone_Challenge1",
  "name": "익스큐셔너",
  "desc": "스캔 완료! 결과를 분석해보니 이건… 일종의 허상인가? 틀림없이 형태는 갖추고 있지만, 내구력이 굉장히 약해. 거기다 얼마 안가서 스스로 작동을 정지할 것으로 보여. 툭 치면 부서지겠지만 영 석연치 않네… 엄~청나게 강력한 한 방으로 날려버리는게 어때? 예를 들면... 우리 에밀리라던가?\n\n\n- 레이븐 누나가♥",
  "icon": "TbarIcon_MP_Executioner_B06",
  "ai": "AI_MP_Drone_Challenge1",
  "rarity": 4,
  "type": 2,
  "role": 1,
  "isBoss": false,
  "hp": [
    40,
    0
  ],
  "atk": [
    50,
    0
  ],
  "def": [
    0,
    0
  ],
  "spd": 4.5,
  "cri": 0,
  "acc": 150,
  "eva": 0,
  "res": {
    "fire": 100,
    "chill": 100,
    "thunder": 100
  },
  "skills": [
    {
      "key": "Skill_MP_Drone_Challenge1_1",
      "name": "충격파 미사일",
      "icon": "Missile",
      "desc": "충격파 미사일을 발사해 {0} 피해를 주고, 대상을 뒤로 1칸 밀어내며 AP를 감소시킵니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.1,
        "range": 3,
        "ap": 5,
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
                "icon": "BuffIcon_Push",
                "desc": {
                  "desc": "뒤로 {0}칸 밀기",
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
                "overlap": 0
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "AP{0}",
                  "type": 0,
                  "value": "-1"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": -1,
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
      "key": "Skill_MP_Drone_Challenge1_2",
      "name": "정밀 스캔",
      "icon": "Scan",
      "desc": "목표 지점에 있는 대상들의 약점을 분석해, 3라운드 동안 받는 피해를 증가시키며 효과 저항과 회피를 감소시킵니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0,
        "range": 3,
        "ap": 7,
        "grid": "258",
        "target_ground": true,
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "정밀 스캔 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "25%",
                    "per": "0%"
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_DEBUFF_RATEUP",
                "desc": {
                  "desc": "정밀 스캔 : 효과 저항 {0}% 감소",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 90,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "-25%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "정밀 스캔 : 회피{0}%",
                  "type": 1,
                  "value": "-0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "-30%",
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
      "key": "Skill_MP_Drone_Challenge1_3",
      "name": "교란 홀로그램",
      "icon": "TeamDefBuff",
      "desc": "라운드 개시 시, 지정 범위 아군의 회피를 크게 증가시킵니다. 회피 효과는 매 라운드 감소합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "369",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "교란 홀로그램 : 회피+{0}%",
                  "type": 1,
                  "value": "5"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "500%",
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
      "key": "Skill_MP_Drone_Challenge1_4",
      "name": "배터리 방전",
      "icon": "SelfDefDeBuff",
      "desc": "5라운드 개시 시, 자신의 AP를 20으로 변경합니다. 라운드 종료 시, 배터리가 방전되어 정지합니다.",
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
              "round": {
                "operator": ">=",
                "round": 5
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
                "icon": "BuffIcon_phyDMG_DOT",
                "desc": {
                  "desc": "배터리 방전 : 기능 정지",
                  "type": 0,
                  "value": "40"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 40,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "배터리 방전 : AP {0}으로 변경",
                  "type": 0,
                  "value": "20"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 21,
                  "ap_set": {
                    "base": 20,
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
    }
  ]
};