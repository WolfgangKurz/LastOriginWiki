export default {
  "id": "ProgramMobTN_EW",
  "icon": "TbarIcon_MP_ProgramMobTN_N",
  "ai": "AI_ProgramMobTN_Normal_01",
  "rarity": 5,
  "type": 0,
  "role": 1,
  "isBoss": false,
  "hp": [
    25740,
    115.32
  ],
  "atk": [
    164,
    12.6
  ],
  "def": [
    192,
    5.31
  ],
  "spd": 3.9,
  "cri": 10,
  "acc": 200,
  "eva": 15,
  "res": {
    "fire": -25,
    "chill": 0,
    "thunder": 50
  },
  "skills": [
    {
      "key": "Skill_MP_ProgramMobTN_EW_1",
      "name": "헤드샷-테스트",
      "icon": "Snipe",
      "desc": "공격이 치명타로 적중 시 2라운드 동안 행동 불가 상태가 됩니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.2,
        "range": 4,
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
            "on": "criticaled",
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
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "헤드샷 : 행동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 22,
                  "stun": true
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
      "key": "Skill_MP_ProgramMobTN_EW_2",
      "name": "쇼크탄 사격-테스트",
      "icon": "Shock",
      "desc": "쇼크탄 저격으로 {0} 전기 속성 피해를 줍니다. 대상이 냉기 저항 감소 상태면 피해량이 증가합니다.",
      "passive": false,
      "type": 3,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 4,
        "ap": 7,
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
                  17
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "감전 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "40%",
                    "per": "1%"
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
      "key": "Skill_MP_ProgramMobTN_EW_3",
      "name": "광폭화-테스트-스나이퍼",
      "icon": "TeamAtkBuff",
      "desc": "광폭화-매 라운드마다 치명타 확률이 증가합니다.",
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
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "광폭화: 매 라운드마다 치명타 확률 +{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "20%",
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
      "key": "Skill_MP_ProgramMobTN_EW_4",
      "name": "전열 지원 사격-테스트",
      "icon": "TeamAtkBuff",
      "desc": "라운드 개시 시, 자신과 같은 행 앞에 배치된 아군의 AP를 증가시키며 일정 확률로 대상의 공격을 지원합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "6>456",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_SUPPORT_ATTACK",
                "desc": {
                  "desc": "전열 지원 : {0}% 확률 공격 지원 (보호기)",
                  "type": 1,
                  "value": "0.750000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 77,
                  "attack_support": {
                    "base": "75%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "전열 지원 : AP+{0}",
                  "type": 0,
                  "value": "1"
                },
                "attr": 3,
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
      "key": "Skill_MP_ProgramMobTN_EW_5",
      "name": "대응 사격-테스트",
      "icon": "DefCounter",
      "desc": "아군 사망 시, 해당 라운드 동안에는 반격합니다.",
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
                "icon": "BuffIcon_COUNTER",
                "desc": {
                  "desc": "대응 사격 : {0}% 위력으로 반격",
                  "type": 1,
                  "value": "0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 29,
                  "counter": {
                    "base": "80%",
                    "per": "1%"
                  }
                },
                "overlap": 1
              }
            ],
            "maxStack": 0
          }
        ]
      }
    }
  ]
};