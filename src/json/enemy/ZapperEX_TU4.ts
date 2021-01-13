export default {
  "id": "ZapperEX_TU4",
  "name": "강화형 재퍼",
  "desc": "호전성이 낮은 개체예요. 건드리지만 않으면 공격하지 않으니 주의해 주세요. 고압 전류 공격을 하니까요. 설마 제가 대신 맞아서 찌릿찌릿에 눈 뜨는 걸 바라는 건 아니겠죠?\n\n\n- 보고자 블랙 리리스",
  "icon": "TbarIcon_MP_Zapper_N",
  "ai": "AI_Zapper_EX_01",
  "rarity": 3,
  "type": 0,
  "role": 2,
  "isBoss": false,
  "hp": [
    875,
    105
  ],
  "atk": [
    85,
    7.5
  ],
  "def": [
    100,
    2.5
  ],
  "spd": 4.1,
  "cri": 10,
  "acc": 295,
  "eva": 80,
  "res": {
    "fire": 25,
    "chill": 25,
    "thunder": 75
  },
  "skills": [
    {
      "key": "Skill_MP_ZapperEX_N_1",
      "name": "전격 체인",
      "icon": "Shock",
      "desc": "전격을 방사해 {0} 전기 속성 피해를 주고 대상의 AP와 회피를 감소시킵니다.",
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
      "key": "Skill_MP_ZapperEX_N_2",
      "name": "초고압 전류",
      "icon": "Shock",
      "desc": "고압 전류로 {0} 전기 속성 피해를 주고, 회피를 감소시킵니다. 일정 확률로 대상을 행동 불가 상태로 만듭니다.",
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
                  "desc": "감전 : 행동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "66%",
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
      "key": "Skill_MP_ZapperEX_N_3",
      "name": "사주 경계",
      "icon": "SelfDefBuff",
      "desc": "적을 발견하거나 적에게 공격당하기 전 까지는 경계 상태로 대기합니다. 공격당하기 전까지 받는 피해가 대폭 감소합니다.",
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
                  "desc": "사주 경계 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.900000"
                },
                "attr": 0,
                "erase": {
                  "until": "damaged"
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "90%",
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