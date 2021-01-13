export default {
  "id": "ProgramMobMT_TU2",
  "name": "철충 사념체 (호위기)",
  "desc": "<교전 기록 없음>",
  "icon": "TbarIcon_MP_ProgramMobMT_N",
  "ai": "AI_ProgramMobMT_Normal_01",
  "rarity": 3,
  "type": 2,
  "role": 0,
  "isBoss": false,
  "hp": [
    756,
    77.7
  ],
  "atk": [
    63,
    6.3
  ],
  "def": [
    60,
    2.4
  ],
  "spd": 4.2,
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
      "key": "Skill_MP_ProgramMobMT_N_1",
      "name": "냉각탄 사격",
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
                "attr": 1,
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
      "key": "Skill_MP_ProgramMobMT_N_2",
      "name": "대 레이더 체프",
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
                "attr": 0,
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
                "attr": 0,
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
                "attr": 0,
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
      "key": "Skill_MP_ProgramMobMT_N_3",
      "name": "호위 대형",
      "icon": "TeamDefBuff",
      "desc": "전투 개시 시, 3라운드 동안 인접한 아군을 보호하며 적중을 증가시킵니다.",
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
                "icon": "BuffIcon_DEF_Char",
                "desc": {
                  "desc": "호위 대형 : 지정 대상 보호",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 76,
                  "guard": "target"
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
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
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "호위 대형 : 적중+{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "40%",
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
    }
  ]
};