export default {
  "id": "ProgramMobMT_EW",
  "icon": "TbarIcon_MP_ProgramMobMT_N",
  "ai": "AI_ProgramMobMT_Normal_01",
  "rarity": 4,
  "type": 2,
  "role": 0,
  "isBoss": false,
  "hp": [
    43296,
    116.55
  ],
  "atk": [
    133,
    9.75
  ],
  "def": [
    236,
    8.33
  ],
  "spd": 0,
  "cri": 10,
  "acc": 175,
  "eva": 25,
  "res": {
    "fire": -25,
    "chill": 0,
    "thunder": 50
  },
  "skills": [
    {
      "key": "Skill_MP_ProgramMobMT_EW_1",
      "name": "냉각탄 사격-테스트",
      "icon": "IceShot",
      "desc": "냉각탄 사격으로 {0} 냉기 속성 피해를 주고, 대상의 냉기 저항을 낮춥니다.",
      "passive": false,
      "type": 2,
      "target": "enemy",
      "buff": {
        "rate": 0.7,
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
                "icon": "BuffIcon_ICERES_DOWN",
                "desc": {
                  "desc": "냉각탄 : 냉기 저항 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "33%",
                  "type": 17,
                  "resist": {
                    "elem": "ice",
                    "value": {
                      "base": "-50%",
                      "per": "-1%"
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
      "key": "Skill_MP_ProgramMobMT_EW_2",
      "name": "대 레이더 체프-테스트",
      "icon": "MultiMissile",
      "desc": "지정 범위에 챼프를 살포해 2라운드 동안 범위 내 아군의 회피 / 행동력을 증가시키며 받는 피해를 감소시킵니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 2,
        "ap": 7,
        "grid": "5689",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "대 레이더 쳬프 : 회피+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "30%",
                    "per": "2%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "대 레이더 쳬프 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "15%",
                    "per": "2%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "대 레이더 쳬프 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "10%",
                    "per": "2%"
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
      "key": "Skill_MP_ProgramMobMT_EW_3",
      "name": "광폭화-테스트-파이터",
      "icon": "TeamAtkBuff",
      "desc": "광폭화-매 라운드마다 회피율이 증가합니다.",
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
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "광폭화: 매 라운드마다 회피율 +{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "15%",
                    "per": "0%"
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
      "key": "Skill_MP_ProgramMobMT_EW_4",
      "name": "앙갚음-테스트",
      "icon": "TeamDefBuff",
      "desc": "적에게 공격을 받을 시 반격을 하고 아군이 사망시 행동력이 증가합니다.",
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
            "on": "attacked",
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
                "icon": "BuffIcon_COUNTER",
                "desc": {
                  "desc": "앙갚음 : {0}% 위력으로 반격",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "until": {
                    "after": "counter"
                  }
                },
                "value": {
                  "isBuff": true,
                  "type": 29,
                  "counter": {
                    "base": "100%",
                    "per": "0%"
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 0
          },
          {
            "on": "team_dead",
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "앙갚음 : 행동력+{0}",
                  "type": 0,
                  "value": "1.500000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 12,
                  "turnSpeed": {
                    "base": 1.5,
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