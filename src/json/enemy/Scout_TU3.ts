export default {
  "id": "Scout_TU3",
  "name": "스카우트",
  "desc": "저 망할 날파리들! 엄청 빨라서 잘 맞지도 않고 뭐만 하려하면 방해해서 진짜 짜증나는 녀석들이야. 백발백중인 미호가 필요해!\n\n\n- 스틸 드라코",
  "icon": "TbarIcon_MP_Scout_N",
  "ai": "AI_Scout_Normal_01",
  "rarity": 2,
  "type": 2,
  "role": 2,
  "isBoss": false,
  "hp": [
    150,
    28.5
  ],
  "atk": [
    50,
    5
  ],
  "def": [
    0,
    0
  ],
  "spd": 4.5,
  "cri": 10,
  "acc": 110,
  "eva": 60,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_Scout_N_1",
      "name": "충격 미사일",
      "icon": "Missile",
      "desc": "충격 미사일을 발사해 {0} 피해를 주며, 일정 확률로 대상의 AP를 감소시킵니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.2,
        "range": 2,
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
                  "desc": "AP {0}",
                  "type": 0,
                  "value": "-1"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "40%",
                  "type": 20,
                  "ap": {
                    "base": -1,
                    "per": -0.05
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
      "key": "Skill_MP_Scout_N_2",
      "name": "색적 보고",
      "icon": "SelfSpdBuff",
      "desc": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 8,
        "grid": "single",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 999,
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "AP+{0}",
                  "type": 0,
                  "value": "4"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 4,
                    "per": 0.2
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_RANGE_UP",
                "desc": {
                  "desc": "사거리+{0}",
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
    }
  ]
};