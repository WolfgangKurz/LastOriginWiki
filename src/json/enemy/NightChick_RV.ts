export default {
  "id": "NightChick_RV",
  "icon": "TbarIcon_MP_NightChick_RV",
  "ai": "AI_Jako_Special_01",
  "rarity": 5,
  "type": 0,
  "role": 1,
  "isBoss": false,
  "hp": [
    41835,
    300
  ],
  "atk": [
    150,
    0
  ],
  "def": [
    50,
    0
  ],
  "spd": 5,
  "cri": 25,
  "acc": 222,
  "eva": 25,
  "res": {
    "fire": 99,
    "chill": -50,
    "thunder": -50
  },
  "skills": [
    {
      "key": "Skill_MP_NightChick_RV_1",
      "name": "S.C. 머신건",
      "icon": "MGShot",
      "desc": "머신건 사격으로 {0} 피해를 줍니다. 대상이 회피 감소 상태면 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 5,
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
      "key": "Skill_MP_NightChick_RV_2",
      "name": "근접 난사",
      "icon": "MGShot",
      "desc": "머신건 근접 사격으로 {0} 피해를 줍니다. 대상이 방어 감소 상태면 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.5,
        "range": 1,
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
                  2,
                  3
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
                  "desc": "약점 공격 : 피해량+{0}%",
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
      "key": "Skill_MP_NightChick_RV_3",
      "name": "기동 준비",
      "icon": "SelfSpdDeBuff",
      "desc": "적을 공격하기 전까지 행동력이 감소하며 받는 피해가 증가합니다.",
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
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "기동 준비 : 행동력 {0}%",
                  "type": 1,
                  "value": "-0.010000"
                },
                "attr": 3,
                "erase": {
                  "until": "attack"
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 13,
                  "turnSpeed": {
                    "base": "-1%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "기동 준비 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 3,
                "erase": {
                  "until": "attack"
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "50%",
                    "per": "0%"
                  }
                },
                "overlap": 1
              }
            ],
            "maxStack": 1
          },
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
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "기동 준비 : 행동력 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "until": "attack"
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          }
        ]
      }
    },
    {
      "key": "Skill_MP_NightChick_RV_4",
      "name": "전투 적응 회로",
      "icon": "SelfAtkBuff",
      "desc": "라운드 개시 시, 공격력 / 방어력 / 명중 / 회피가 증가합니다. 해당 효과는 중첩됩니다.",
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "전투 적응 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "50%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 7
          },
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "전투 적응 : 방어력+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "100%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 7
          },
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "전투 적응 : 회피+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 7
          },
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "전투 적응 : 적중+{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "25%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 7
          }
        ]
      }
    },
    {
      "key": "Skill_MP_NightChick_RV_5",
      "name": "칙 기회 포착",
      "icon": "DefCounter",
      "desc": "회피 성공 시, 해당 라운드 동안 적의 빈틈을 노려 반격 합니다.",
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
            "on": "evade",
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
                "icon": "BuffIcon_COUNTER",
                "desc": {
                  "desc": "기회 포착 : {0}% 위력으로 반격",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 29,
                  "counter": {
                    "base": "50%",
                    "per": "5%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          }
        ]
      }
    }
  ]
};