export default {
  "id": "CenturionG_TU4",
  "icon": "TbarIcon_MP_CenturionG_N",
  "ai": "AI_Mp_CenturionG_Normal_01",
  "rarity": 5,
  "type": 0,
  "role": 2,
  "isBoss": false,
  "hp": [
    50000,
    500
  ],
  "atk": [
    60,
    6
  ],
  "def": [
    800,
    10
  ],
  "spd": 4.25,
  "cri": 1,
  "acc": 500,
  "eva": 55,
  "res": {
    "fire": 35,
    "chill": 35,
    "thunder": 35
  },
  "skills": [
    {
      "key": "Skill_MP_CenturionG_N_1",
      "name": "집속 연장 미사일",
      "icon": "MultiMissile",
      "desc": "지정 범위에 {0} 피해를 주고, 3라운드 동안 대상을 표식 / 받는 피해 증가 상태로 만들고 AP를 감소시킵니다. 일정 확률로 적중 대상의 강화 효과를 해제합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 6,
        "ap": 4,
        "grid": "24568",
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
                "icon": "BuffIcon_MARKING",
                "desc": {
                  "desc": "집속 연장 미사일 : 표식 설정",
                  "type": 1,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 87,
                  "attack_target": true
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "집속 연장 미사일 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "30%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "집속 연장 미사일 : AP {0}",
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
                    "per": 0
                  }
                },
                "overlap": 3
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "집속 연장 미사일 : 강화 효과 해제",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "40%",
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
      "key": "Skill_MP_CenturionG_N_2",
      "name": "출력 한도 해제",
      "icon": "TeamAtkBuff",
      "desc": "주변 아군의 공격력 / 치명타 / 행동력을 증가시키고 방어막과 받는 피해 감소 무시 효과를 부여합니다. 해당 효과를 받은 대상은 지속 고정 피해를 입습니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 8,
        "grid": "around",
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "출력 한도 해제 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
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
              },
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "출력 한도 해제 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.050000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "5%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "출력 한도 해제 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "10%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_BARRIER_PIERCE",
                "desc": {
                  "desc": "출력 한도 해제 : 방어막 / 피해 감소 무시",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 94,
                  "penetration_force": true
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_phyDMG_DOT",
                "desc": {
                  "desc": "출력 한도 해제 : {0} 지속 고정 피해",
                  "type": 0,
                  "value": "1250"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 1250,
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
      "key": "Skill_MP_CenturionG_N_3",
      "name": "전황 분석",
      "icon": "TeamSpdBuff",
      "desc": "피격 시, 모든 아군의 AP가 증가하며 2라운드 동안 효과 저항이 대폭 증가합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "global",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "전황 분석 : AP+{0}",
                  "type": 0,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 1,
                    "per": 0
                  }
                },
                "overlap": 3
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "전황 분석 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 91,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "50%",
                      "per": "1%"
                    }
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
      "key": "Skill_MP_CenturionG_N_4",
      "name": "현장 수습",
      "icon": "TeamDefBuff",
      "desc": "아군이 처치될 경우, 일정 라운드 동안 반격하며 주변 아군과 자신이 받는 피해가 감소하고 행동력이 증가합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "24568",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "전황 수습 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "35%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "전황 수습 : 행동력+{0}%",
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
                    "per": "1%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
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
                "icon": "BuffIcon_COUNTER",
                "desc": {
                  "desc": "전황 수습 : {0}% 위력으로 반격",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 29,
                  "counter": {
                    "base": "100%",
                    "per": "0%"
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
      "key": "Skill_MP_CenturionG_N_5",
      "name": "지휘 중추 상실",
      "icon": "TeamSpdDeBuff",
      "desc": "자신이 처치될 경우, 모든 아군의 공격력 / 치명타 / 적중 /행동력이 크게 감소하며 받는 피해가 증가합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "global",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": "self_dead",
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
                "icon": "BuffIcon_ATK_DOWN",
                "desc": {
                  "desc": "지휘 중추 상실 : 공격력 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "-50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ACCURACY_DOWN",
                "desc": {
                  "desc": "지휘 중추 상실 : 적중 {0}%",
                  "type": 1,
                  "value": "-1.600000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "-160%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "지휘 중추 상실 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "100%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_CRITICAL_DOWN",
                "desc": {
                  "desc": "지휘 중추 상실 : 치명타 {0}%",
                  "type": 1,
                  "value": "-0.250000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "-25%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "지휘 중추 상실 : 행동력 {0}%",
                  "type": 1,
                  "value": "-0.250000"
                },
                "attr": 3,
                "erase": {},
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