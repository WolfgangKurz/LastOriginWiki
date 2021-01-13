export default {
  "id": "Zapper_N",
  "name": "재퍼",
  "desc": "호전성이 낮은 개체예요. 건드리지만 않으면 공격하지 않으니 주의해 주세요. 고압 전류 공격을 하니까요. 설마 제가 대신 맞아서 찌릿찌릿에 눈 뜨는 걸 바라는 건 아니겠죠?\n\n\n- 보고자 블랙 리리스",
  "icon": "TbarIcon_MP_Zapper_N",
  "ai": "AI_Zapper_Normal_01",
  "rarity": 3,
  "type": 0,
  "role": 2,
  "isBoss": false,
  "hp": [
    200,
    32.5
  ],
  "atk": [
    50,
    5
  ],
  "def": [
    25,
    1
  ],
  "spd": 4,
  "cri": 5,
  "acc": 140,
  "eva": 10,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 50
  },
  "skills": [
    {
      "key": "Skill_MP_Zapper_N_1",
      "name": "전격 방사",
      "icon": "Shock",
      "desc": "전격을 방사해 {0} 전기 속성 피해를 주고 일정 확률로 대상의 회피와 AP를 감소시킵니다.",
      "passive": false,
      "type": 3,
      "target": "enemy",
      "buff": {
        "rate": 0.8,
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
                  "desc": "감전 : AP {0}",
                  "type": 0,
                  "value": "-1"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 20,
                  "ap": {
                    "base": -1,
                    "per": -0.05
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "감전 : 회피 {0}%",
                  "type": 1,
                  "value": "-0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 11,
                  "evade": {
                    "base": "-30%",
                    "per": "-1.5%"
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
      "key": "Skill_MP_Zapper_N_2",
      "name": "고압 전류",
      "icon": "Shock",
      "desc": "고압 전류로 {0} 전기 속성 피해를 주고, 일정 확률로 대상을 행동 불능 상태로 만들고 회피를 감소시킵니다.",
      "passive": false,
      "type": 3,
      "target": "enemy",
      "buff": {
        "rate": 1.2,
        "range": 1,
        "ap": 8,
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
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "마비 : 행동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "40%",
                  "type": 22,
                  "stun": true
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "감전 : 회피 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 11,
                  "evade": {
                    "base": "-50%",
                    "per": "-2.5%"
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
      "key": "Skill_MP_Zapper_N_3",
      "name": "경계 모드",
      "icon": "SelfDefBuff",
      "desc": "적과 인접하거나 공격당하기 전까지 경계 상태로 대기합니다. 공격당하기 전까지 받는 피해와 행동력이 감소합니다.",
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "경계 모드 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.750000"
                },
                "attr": 0,
                "erase": {
                  "until": "damaged"
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "75%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "경계 모드 : 행동력 {0}%",
                  "type": 1,
                  "value": "-0.250000"
                },
                "attr": 0,
                "erase": {
                  "until": "damaged"
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-25%",
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