export default {
  "id": "FridgerShooter_TU3",
  "icon": "TbarIcon_MP_FridgerShooter_N",
  "ai": "AI_MP_FridgerShooter_01",
  "rarity": 4,
  "type": 0,
  "role": 2,
  "isBoss": false,
  "hp": [
    3561,
    294
  ],
  "atk": [
    327,
    8.82
  ],
  "def": [
    15102,
    424
  ],
  "spd": 4,
  "cri": 10,
  "acc": 280,
  "eva": 10,
  "res": {
    "fire": -25,
    "chill": 100,
    "thunder": 50
  },
  "skills": [
    {
      "key": "Skill_MP_FridgerShooter_N_1",
      "name": "퀵 프리저",
      "icon": "IceShot",
      "desc": "{0} 냉기 피해를 주고, 2라운드 동안 대상의 공격력 / 치명타를 감소시키고 받는 피해를 증가시킵니다.",
      "passive": false,
      "type": 2,
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
                "icon": "BuffIcon_ATK_DOWN",
                "desc": {
                  "desc": "퀵 프리저 : 공격력{0}%",
                  "type": 1,
                  "value": "-0.200000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "-20%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_CRITICAL_DOWN",
                "desc": {
                  "desc": "퀵 프리저 : 치명타{0}%",
                  "type": 1,
                  "value": "-0.200000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "-20%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "퀵 프리저 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "20%",
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
      "key": "Skill_MP_FridgerShooter_N_2",
      "name": "액체질소탄",
      "icon": "GrenadeAttack_1",
      "desc": "{0} 냉기 피해를 주고, 2라운드 동안 대상의 적중을 감소시킵니다. 대상이 침수 상태일 시, 추가로 효과 저항을 감소시킵니다.",
      "passive": false,
      "type": 2,
      "target": "enemy",
      "buff": {
        "rate": 0.5,
        "range": 4,
        "ap": 5,
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
                "icon": "BuffIcon_ACCURACY_DOWN",
                "desc": {
                  "desc": "액체질소탄 : 적중{0}%",
                  "type": 1,
                  "value": "-0.400000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "-40%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "attack_success",
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  "Effect_BUFF_Flood_N_1",
                  "Effect_BUFF_Flood_N_2",
                  "Effect_BUFF_Flood_N_3",
                  "Effect_BUFF_Flood_N_4",
                  "Effect_BUFF_Flood_N_5",
                  "Effect_BUFF_Flood_N_6",
                  "Effect_BUFF_Flood_N_7",
                  "Effect_BUFF_Flood_N_8",
                  "Effect_BUFF_Flood_N_9",
                  "Effect_BUFF_Flood_N_11",
                  "Effect_BUFF_Flood_N_12",
                  "Effect_BUFF_Flood_N_13"
                ],
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "액체질소탄 : 효과 저항{0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 91,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "-50%",
                      "per": "0%"
                    }
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
      "key": "Skill_MP_FridgerShooter_N_3",
      "name": "바이오 레이더",
      "icon": "AWACS",
      "desc": "라운드 개시 시, 자신과 지정 범위 아군의 공격력 / 치명타 / 행동력이 증가합니다. 해당 효과는 프리져 슈터가 적을 공격할 때마다 추가 적용됩니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "fill",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": "round",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "바이오 레이더 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "15%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "바이오 레이더 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "15%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "바이오 레이더 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "15%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "attack",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "바이오 레이더 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "15%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "바이오 레이더 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "15%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "바이오 레이더 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "15%",
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
      "key": "Skill_MP_FridgerShooter_N_4",
      "name": "냉각 장치",
      "icon": "IceShot",
      "desc": "라운드 개시 시, 자신이 침수 상태일 경우 행동력 / 효과 저항이 크게 증가합니다.",
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
                "func": "OR",
                "select": [
                  "Effect_BUFF_Flood_N_1",
                  "Effect_BUFF_Flood_N_2",
                  "Effect_BUFF_Flood_N_3",
                  "Effect_BUFF_Flood_N_4",
                  "Effect_BUFF_Flood_N_5",
                  "Effect_BUFF_Flood_N_6",
                  "Effect_BUFF_Flood_N_7",
                  "Effect_BUFF_Flood_N_8",
                  "Effect_BUFF_Flood_N_9",
                  "Effect_BUFF_Flood_N_11",
                  "Effect_BUFF_Flood_N_12",
                  "Effect_BUFF_Flood_N_13"
                ],
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "냉각 장치 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "40%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "냉각 장치 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 91,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "100%",
                      "per": "0%"
                    }
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