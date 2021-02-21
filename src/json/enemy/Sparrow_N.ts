export default {
  "id": "Sparrow_N",
  "icon": "TbarIcon_MP_Scout_N",
  "ai": "AI_Scout_Normal_01",
  "rarity": 2,
  "type": 2,
  "role": 2,
  "isBoss": false,
  "hp": [
    40,
    8
  ],
  "atk": [
    25,
    2.75
  ],
  "def": [
    0,
    0
  ],
  "spd": 4.5,
  "cri": 10,
  "acc": 100,
  "eva": 30,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_Sparrow_N_1",
      "name": "스티프 미사일",
      "icon": "Missile",
      "desc": "목표 적에게 쇼크 미사일을 발사해 {0} 피해를 주며, 행동력을 낮춥니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 3,
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
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "행동력 {0}",
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
                    "per": -0.1
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
      "key": "Skill_MP_Sparrow_N_2",
      "name": "레이더 경보",
      "icon": "Scan",
      "desc": "범위 내 아군에게 경보를 해 2r 동안 적중률과 회피율을 올립니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 3,
        "ap": 8,
        "grid": "24568",
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
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "적중률 +{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "40%",
                    "per": "2%"
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "회피율 +{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "25%",
                    "per": "2%"
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