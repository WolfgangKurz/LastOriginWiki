export default {
  "id": "NightChick_TU2",
  "name": "나이트 칙",
  "desc": "하아… 이 예쁜 애의 이름은 나이트 칙입니당. 예쁘지만 더 예쁜 폴른이를 잡아먹은 무서운 녀석들이에용. 쉬지않고 기관총을 난사하니 주의해 주세용~!\n\n\n- 보고자 그렘린입니당! ",
  "icon": "TbarIcon_MP_NightChick_N",
  "ai": "AI_Jako_Special_01",
  "rarity": 2,
  "type": 0,
  "role": 1,
  "isBoss": false,
  "hp": [
    130,
    29.5
  ],
  "atk": [
    45,
    5.5
  ],
  "def": [
    15,
    0.6
  ],
  "spd": 4,
  "cri": 5,
  "acc": 130,
  "eva": 10,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_NightChick_N_1",
      "name": "머신건 견제 사격",
      "icon": "ARShot",
      "desc": "머신건 견제 사격으로 {0} 피해를 줍니다. 일정 확률로 2라운드 동안 대상의 회피를 낮츱니다.",
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
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "회피 {0}%",
                  "type": 1,
                  "value": "-0.150000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "40%",
                  "type": 11,
                  "evade": {
                    "base": "-15%",
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
    },
    {
      "key": "Skill_MP_NightChick_N_2",
      "name": "머신건 연사",
      "icon": "ARShot",
      "desc": "머신건을 조준 사격해 {0} 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
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
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  10,
                  11
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
                  "desc": "집중 사격 : 피해량+{0}%",
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
                    "per": "0%"
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
      "key": "Skill_MP_NightChick_N_3",
      "name": "정조준",
      "icon": "Snipe",
      "desc": "대기 시, 적을 조준해 2라운드 동안 적중과 사거리가 증가합니다.",
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
            "on": "wait",
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
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "정조준 : 적중+{0}%",
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
                "overlap": 4
              },
              {
                "icon": "BuffIcon_RANGE_UP",
                "desc": {
                  "desc": "정조준 : 사거리+{0}",
                  "type": 0,
                  "value": "2"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 55,
                  "range": {
                    "base": 2,
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