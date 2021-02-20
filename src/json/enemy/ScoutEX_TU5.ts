export default {
  "id": "ScoutEX_TU5",
  "icon": "TbarIcon_MP_Scout_N",
  "ai": "AI_Scout_Normal_01",
  "rarity": 3,
  "type": 2,
  "role": 2,
  "isBoss": false,
  "hp": [
    5000,
    67.5
  ],
  "atk": [
    120,
    12
  ],
  "def": [
    0,
    0
  ],
  "spd": 4.65,
  "cri": 10,
  "acc": 200,
  "eva": 120,
  "res": {
    "fire": 15,
    "chill": 15,
    "thunder": 15
  },
  "skills": [
    {
      "key": "Skill_MP_ScoutEX_N_1",
      "name": "강화 충격탄",
      "icon": "Missile",
      "desc": "충격 미사일을 발사해 {0} 피해를 주고 대상의 AP를 감소시킵니다.",
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
                  "type": 20,
                  "ap": {
                    "base": -1,
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
      "key": "Skill_MP_ScoutEX_N_2",
      "name": "색적 경보",
      "icon": "Scan",
      "desc": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 6,
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
                  "value": "5"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 5,
                    "per": 0.25
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
    },
    {
      "key": "Skill_MP_ScoutEX_N_3",
      "name": "강습 대열",
      "icon": "TeamAtkBuff",
      "desc": "이동 시, 3라운드 동안 인접한 공격기의 공격을 지원하며 AP를 증가시킵니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "28",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": "move",
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
              1
            ],
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_SUPPORT_ATTACK",
                "desc": {
                  "desc": "강습 대열 : 공격 지원 (공격기)",
                  "type": 0,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 77,
                  "attack_support": {
                    "base": "100%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "강습 대열 : AP+{0} (공격기)",
                  "type": 0,
                  "value": "1.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 1.5,
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
    }
  ]
};