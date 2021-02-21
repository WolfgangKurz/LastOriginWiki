export default {
  "id": "Kidnapper_B0308",
  "icon": "TbarIcon_MP_Kidnapper_B0308",
  "ai": "AI_TrickSter_01",
  "rarity": 5,
  "type": 0,
  "role": 1,
  "isBoss": true,
  "hp": [
    2850,
    275
  ],
  "atk": [
    150,
    12.5
  ],
  "def": [
    26,
    1.5
  ],
  "spd": 4.25,
  "cri": 20,
  "acc": 300,
  "eva": 60,
  "res": {
    "fire": 15,
    "chill": 15,
    "thunder": 15
  },
  "skills": [
    {
      "key": "Skill_MP_Kidnapper_N_1",
      "name": "클로 돌진",
      "icon": "AssaultAttack",
      "desc": "클로 돌진으로 목표와 바로 뒤의 대상에게 {0} 피해를 줍니다. 5라운드 동안 공격 대상의 방어력을 감소시킵니다. 최대 5번까지 중첩됩니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 4,
        "ap": 4,
        "grid": "45",
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
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "장갑 깎기 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.150000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-15%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 5
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Kidnapper_N_2",
      "name": "손톱날 발사",
      "icon": "MultiMissile",
      "desc": "폭발하는 손톱날을 발사해 목표 열에 {0} 피해를 주고 대상을 뒤로 한칸 밉니다. 공격 대상들은 2라운드 동안 적중이 감소합니다.",
      "passive": false,
      "type": 1,
      "target": "enemy",
      "buff": {
        "rate": 1.4,
        "range": 1,
        "ap": 6,
        "grid": "258",
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
                "icon": "BuffIcon_Push",
                "desc": {
                  "desc": "뒤로 {0}칸 밀기",
                  "type": 0,
                  "value": "1"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 52,
                  "position": {
                    "type": "push",
                    "range": {
                      "base": 1,
                      "per": 0
                    }
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_ACCURACY_DOWN",
                "desc": {
                  "desc": "적중 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "-50%",
                    "per": "-2.5%"
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
      "key": "Skill_MP_Kidnapper_N_3",
      "name": "살육 쾌감",
      "icon": "SelfAtkBuff",
      "desc": "도발 상태일 때 공격 적중 시, 5라운드 동안 공격력이 증가합니다. 해당 효과는 5번까지 중첩됩니다.",
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
                  74
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "살육 쾌감 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "20%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 5
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Kidnapper_N_4",
      "name": "위협 감지",
      "icon": "SelfSpdBuff",
      "desc": "피격 시, 위협을 감지해 해당 라운드 동안 회피가 증가하며 공격력이 감소합니다. 해당 효과는 중첩됩니다.",
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
            "on": "damaged",
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
                  "desc": "위협 감지 : 회피+{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "40%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ATK_DOWN",
                "desc": {
                  "desc": "위협 감지 : 공격력 {0}%",
                  "type": 1,
                  "value": "-0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "-15%",
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
      "key": "Skill_MP_Kidnapper_N_5",
      "name": "광란",
      "icon": "SelfSpdBuff",
      "desc": "적을 처치한 경우, 3라운드 동안 행동력과 치명타가 증가합니다. 해당 효과는 중첩됩니다.",
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
            "on": "enemy_killed",
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "광란 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "25%",
                    "per": "1%"
                  }
                },
                "overlap": 3
              },
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "광란 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "15%",
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
    }
  ]
};