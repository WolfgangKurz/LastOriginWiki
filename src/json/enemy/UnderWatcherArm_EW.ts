export default {
  "id": "UnderWatcherArm_EW",
  "icon": "TbarIcon_MP_UnderWatcherArm_B05",
  "ai": "AI_UnderWatcherArm_02",
  "rarity": 5,
  "type": 1,
  "role": 0,
  "isBoss": true,
  "hp": [
    25650,
    150
  ],
  "atk": [
    210,
    10
  ],
  "def": [
    1763,
    3
  ],
  "spd": 4.15,
  "cri": 20,
  "acc": 200,
  "eva": 0,
  "res": {
    "fire": 50,
    "chill": 75,
    "thunder": 50
  },
  "skills": [
    {
      "key": "Skill_MP_UnderWatcherArm_EW_1",
      "name": "플라즈마 커터",
      "icon": "MeleeAttack",
      "desc": "플라즈마 커터로 {0} 피해를 줍니다. 대상이 표식 상태면 피해량이 증가하며, 대상의 방어력을 감소시킵니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 8,
        "ap": 3,
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
                "icon": "BuffIcon_PhyATK_UP",
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
                  "type": 83,
                  "damage_add": {
                    "base": "30%",
                    "per": "1%"
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "장갑 파쇄 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.200000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 9
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-20%",
                    "per": "-1%"
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
      "key": "Skill_MP_UnderWatcherArm_EW_2",
      "name": "대공 펄스 빔 포",
      "icon": "WideBeamShot",
      "desc": "목표 열에 {0} 피해를 줍니다. 대상이 기동형이면 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 8,
        "ap": 5,
        "grid": "24568",
        "target_ground": false,
        "summon": null,
        "use": {
          "key": "Effect_MP_UnderWatcherGenerator_EW_1",
          "count": 4
        },
        "dismiss_guard": false,
        "acc_bonus": 250,
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "대공 사격 : 피해량+{0}% (기동)",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "100%",
                    "per": "5%"
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
      "key": "Skill_MP_UnderWatcherArm_EW_3",
      "name": "재 조준",
      "icon": "SelfAtkBuff",
      "desc": "공격 시, 적중 강화 상태면 적중이 추가로 증가합니다.",
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
            "on": "attack",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  7
                ],
                "attr": 0
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
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "재 조준 : 적중+{0}%",
                  "type": 1,
                  "value": "1.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "120%",
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
      "key": "Skill_MP_UnderWatcherArm_EW_4",
      "name": "최대 출력 암",
      "icon": "SelfAtkBuff",
      "desc": "에너지 충전 중첩이 5 이상이면, 적중과 치명타가 증가하며 반격합니다.",
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
                  "Effect_MP_UnderWatcherGenerator_EW_1"
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
                "icon": "BuffIcon_COUNTER",
                "desc": {
                  "desc": "최대 출력 : {0}% 위력으로 반격",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 29,
                  "counter": {
                    "base": "100%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "최대 출력 : 적중+{0}%",
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
              },
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "최대 출력 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
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
      "key": "Skill_MP_UnderWatcherArm_EW_5",
      "name": "긴급 요격 모드",
      "icon": "SelfAtkBuff",
      "desc": "자신의 HP가 50% 이하인 경우, 라운드 개시 시 AP가 증가합니다.",
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
              "hp<=": "50%"
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "긴급 요격 : AP+{0}",
                  "type": 0,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 2,
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