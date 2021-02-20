export default {
  "id": "Raider_B04",
  "icon": "TbarIcon_MP_Raider_B04",
  "ai": "AI_Raider_01",
  "rarity": 5,
  "type": 2,
  "role": 2,
  "isBoss": true,
  "hp": [
    13385,
    135
  ],
  "atk": [
    10,
    10
  ],
  "def": [
    0,
    0
  ],
  "spd": 4.3,
  "cri": 25,
  "acc": 160,
  "eva": 80,
  "res": {
    "fire": -25,
    "chill": 0,
    "thunder": 75
  },
  "skills": [
    {
      "key": "Skill_MP_Raider_N_1",
      "name": "교란 파동",
      "icon": "TeamAtkDeBuff",
      "desc": "목표 범위에 보호 효과를 무시하는 교란 파동을 발사해 {0} 피해를 주고, 3라운드 동안 대상의 사거리 / 적중 / 치명타를 감소시킵니다. 일정 확률로 대상에게 걸려있는 강화 효과를 해제합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.25,
        "range": 4,
        "ap": 8,
        "grid": "1457",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": true,
        "acc_bonus": 100,
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
                "icon": "BuffIcon_RANGE_DOWN",
                "desc": {
                  "desc": "교란 파동 : 사거리 {0}",
                  "type": 0,
                  "value": "-1"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 55,
                  "range": {
                    "base": -1,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ACCURACY_DOWN",
                "desc": {
                  "desc": "교란 파동 : 적중 {0}%",
                  "type": 1,
                  "value": "-0.600000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "-60%",
                    "per": "-2%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_CRITICAL_DOWN",
                "desc": {
                  "desc": "교란 파동 : 치명타 {0}%",
                  "type": 1,
                  "value": "-0.250000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "-25%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "교란 파동 : 강화 효과 해제",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "30%",
                  "type": 99,
                  "off": 0
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
      "key": "Skill_MP_Raider_N_2",
      "name": "반응 폭탄 투하",
      "icon": "AirStrike",
      "desc": "목표 지점에 폭탄을 투하해 보호 효과를 무시하고 {0} 피해를 줍니다. 목표 지점 주변은 피해가 50% 감소하며, 치명타 적중 시 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.2,
        "range": 4,
        "ap": 6,
        "grid": "#2#45#6#8",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": true,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": "criticaled",
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "회심의 일격 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "50%",
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
      "key": "Skill_MP_Raider_N_3",
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
                  "Effect_MP_Raider_N_5"
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
                  "value": "0.600000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "60%",
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
                  "value": "0.300000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "30%",
                    "per": "1.5%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "교신 프로토콜 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "20%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "교신 프로토콜 : 적중 감소 효과 해제",
                  "type": 0,
                  "value": "7"
                },
                "attr": 0,
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
      "key": "Skill_MP_Raider_N_4",
      "name": "명령 프로토콜",
      "icon": "TeamSpdBuff",
      "desc": "자신의 HP가 50% 이하 상태에서 피격된 경우, 주변 철충들에게 요격 명령을 내려 AP를 증가시킵니다.",
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
            "on": "damaged",
            "if": {
              "hp<=": "50%"
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "요격 명령 : AP+{0}",
                  "type": 0,
                  "value": "2"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 2,
                    "per": 0
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
      "key": "Skill_MP_Raider_N_5",
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
                  "value": "0.300000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "30%",
                    "per": "1.5%"
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