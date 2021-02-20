export default {
  "id": "UnderWatcherArm_B05",
  "icon": "TbarIcon_MP_UnderWatcherArm_B05",
  "ai": "AI_UnderWatcherArm_01",
  "rarity": 5,
  "type": 1,
  "role": 0,
  "isBoss": true,
  "hp": [
    25650,
    150
  ],
  "atk": [
    160,
    10
  ],
  "def": [
    793,
    3
  ],
  "spd": 4.15,
  "cri": 15,
  "acc": 180,
  "eva": 0,
  "res": {
    "fire": 25,
    "chill": 50,
    "thunder": -25
  },
  "skills": [
    {
      "key": "Skill_MP_UnderWatcherArm_N_1",
      "name": "플라즈마 커터",
      "icon": "MeleeAttack",
      "desc": "플라즈마 커터로 {0} 피해를 줍니다. 대상이 표식 상태면 피해량이 증가합니다.",
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
                  "value": "0.200000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "20%",
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
      "key": "Skill_MP_UnderWatcherArm_N_2",
      "name": "대공 펄스 빔 포",
      "icon": "WideBeamShot",
      "desc": "목표 열에 {0} 피해를 줍니다. 대상이 기동형이면 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 8,
        "ap": 6,
        "grid": "24568",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 200,
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
                    "per": "2.5%"
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
      "key": "Skill_MP_UnderWatcherArm_N_3",
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
            "on": "attack_success",
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
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "100%",
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
      "key": "Skill_MP_UnderWatcherArm_N_4",
      "name": "최대 출력",
      "icon": "SelfAtkBuff",
      "desc": "에너지 충전 중첩이 5 이상이면, 적중이 증가하며 반격합니다.",
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