export default {
  "id": "WaspEX_TU4",
  "name": "와습 HM",
  "desc": "누가 이 자식한테 이 뿔침을 달아준 거야? 물론 나처럼 빠르진 않지만 나보다 느린 애들은 전부 조심하도록 해. 제법 빠른 속도로 돌격을 하니 말이야.\n\n\n- 슬레이프니르",
  "icon": "TbarIcon_MP_Wasp_N",
  "ai": "AI_Wasp_Normal_01",
  "rarity": 3,
  "type": 2,
  "role": 1,
  "isBoss": false,
  "hp": [
    600,
    72.5
  ],
  "atk": [
    135,
    14.25
  ],
  "def": [
    0,
    0
  ],
  "spd": 4.4,
  "cri": 20,
  "acc": 180,
  "eva": 120,
  "res": {
    "fire": 75,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_WaspEX_N_1",
      "name": "화염 작렬",
      "icon": "WideFireShot",
      "desc": "화염 방사로 대상에게 {0} 피해를 주고, 대상 뒤에 50% 감소한 피해를 줍니다. 대상을 점화 상태로 만들어 2라운드 동안 지속 화염 피해를 줍니다.",
      "passive": false,
      "type": 1,
      "target": "enemy",
      "buff": {
        "rate": 0.8,
        "range": 3,
        "ap": 6,
        "grid": "#45",
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
                "icon": "BuffIcon_FireDMG_DOT",
                "desc": {
                  "desc": "점화 : 지속 화염 피해 {0}",
                  "type": 0,
                  "value": "100"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 66,
                  "fixed_damage": {
                    "elem": "fire",
                    "damage": {
                      "base": 100,
                      "per": 30
                    }
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
      "key": "Skill_MP_WaspEX_N_2",
      "name": "자폭 돌진",
      "icon": "SuicideBomb",
      "desc": "공격 대상에게 돌격 후, 자폭해 {0} 피해를 줍니다. 대상의 방어력을 무시합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 6,
        "range": 7,
        "ap": 10,
        "grid": "single",
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_PIERCE_UP",
                "desc": {
                  "desc": "방어 관통 {0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 58,
                  "penetration": {
                    "base": "100%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "자폭 공격",
                  "type": 0,
                  "value": "9.990000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "999%",
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
      "key": "Skill_MP_WaspEX_N_3",
      "name": "고속 기동",
      "icon": "SelfSpdBuff",
      "desc": "아군이 사망한 경우, 2라운드 동안 회피가 증가하며 행동력 / 적중이 감소합니다. 해당 효과는 중첩됩니다.",
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
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "고속 기동 : 회피+{0}%",
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
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ACCURACY_DOWN",
                "desc": {
                  "desc": "고속 기동 : 적중 {0}%",
                  "type": 1,
                  "value": "-0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "-15%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "고속 기동 : 행동력 {0}%",
                  "type": 1,
                  "value": "-0.050000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-5%",
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
    }
  ]
};