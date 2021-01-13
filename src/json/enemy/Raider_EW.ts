export default {
  "id": "Raider_EW",
  "name": "레이더",
  "desc": "전장에서 등장하는 더욱 강력해진 레이더로 철충들의 공격을 지원하여 지속적으로 막강한 피해를 줄 것입니다.\n\n\n보고자 ???",
  "icon": "TbarIcon_MP_Raider_B04",
  "ai": "AI_Raider_02",
  "rarity": 5,
  "type": 2,
  "role": 2,
  "isBoss": true,
  "hp": [
    45000,
    232
  ],
  "atk": [
    200,
    12
  ],
  "def": [
    1500,
    14
  ],
  "spd": 4.55,
  "cri": 15,
  "acc": 180,
  "eva": 120,
  "res": {
    "fire": -25,
    "chill": 0,
    "thunder": 75
  },
  "skills": [
    {
      "key": "Skill_MP_Raider_EW_1",
      "name": "플라즈마 광탄",
      "icon": "Shock",
      "desc": "전격구를 발사해 {0} 전기 속성 피해를 줍니다. 대상이 감전 상태면 회피를 감소시키며, 일정 확률로 행동 불능 상태로 만듭니다.",
      "passive": false,
      "type": 3,
      "target": "enemy",
      "buff": {
        "rate": 1.5,
        "range": 5,
        "ap": 7,
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
                  "Effect_MP_Raider_EW_2"
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
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "마비 : 행동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
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
                  "desc": "마비 : 회피 {0}%",
                  "type": 1,
                  "value": "-0.400000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "-40%",
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
      "key": "Skill_MP_Raider_EW_2",
      "name": "광탄 난사",
      "icon": "WideLightning",
      "desc": "방전 공격으로 보호 효과를 무시하고 {0} 전기 속성 피해를 줍니다. 일정 확률로 대상을 감전시켜 3라운드 동안 행동력과 회피를 낮춥니다.",
      "passive": false,
      "type": 3,
      "target": "enemy",
      "buff": {
        "rate": 0.5,
        "range": 5,
        "ap": 5,
        "grid": "1457",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": true,
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
                  "desc": "감전 : 행동력 {0}%",
                  "type": 1,
                  "value": "-0.100000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 13,
                  "turnSpeed": {
                    "base": "-10%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "감전 : 회피 {0}%",
                  "type": 1,
                  "value": "-0.300000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
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
      "key": "Skill_MP_Raider_EW_3",
      "name": "교신 프로토콜",
      "icon": "TeamSpdBuff",
      "desc": "경계 상태로 라운드 개시 시, 인접한 철충들의 적중 감소 효과를 해제하고 적중 / 회피 / 치명타를 증가시킵니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "around",
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
                  "Effect_MP_Raider_EW_5"
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "교신 프로토콜 : 적중+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "30%",
                    "per": "2%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "교신 프로토콜 : 회피+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "20%",
                    "per": "2%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "교신 프로토콜 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "10%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "교신 프로토콜 : 적중 방해 효과 해제",
                  "type": 0,
                  "value": "7"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 89,
                  "off": {
                    "type": 7,
                    "target": 1
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
      "key": "Skill_MP_Raider_EW_4",
      "name": "지원 프로토콜",
      "icon": "TeamSpdBuff",
      "desc": "경계 상태로 라운드 개시 시, 2라운드 동안 일정 확률로 아군 철충들의 공격을 지원합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "global",
        "target_ground": true,
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
                  "Effect_MP_Raider_EW_5"
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_SUPPORT_ATTACK",
                "desc": {
                  "desc": "지원 프로토콜 : 공격 지원",
                  "type": 0,
                  "value": "0.550000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 77,
                  "attack_support": {
                    "base": "55%",
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
      "key": "Skill_MP_Raider_EW_5",
      "name": "경계",
      "icon": "SelfSpdBuff",
      "desc": "통솔하는 철충이 처치된 경우, 경계 상태가 되어 2라운드 동안 행동력과 회피가 증가합니다. 해당 효과는 중첩됩니다.",
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
                  "desc": "경계 : 회피+{0}%",
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
                    "per": "5%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "경계 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "10%",
                    "per": "1%"
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