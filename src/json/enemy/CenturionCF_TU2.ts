export default {
  "id": "CenturionCF_TU2",
  "name": "센츄리온 치프틴",
  "desc": "센츄리온에서 지휘 능력이 더 강화된 기종입니다. 포착 당한 후에는 공격을 피하기 힘드니 주의하셔야 합니다. 본 기종에도 안테나 도입을 검토하면 감사하겠습니다.\n\n\n- 램파트",
  "icon": "TbarIcon_MP_CenturionCF_N",
  "ai": "AI_CenturionCF_Normal_01",
  "rarity": 4,
  "type": 0,
  "role": 1,
  "isBoss": false,
  "hp": [
    6720,
    122.4
  ],
  "atk": [
    113,
    11.3
  ],
  "def": [
    80,
    8.5
  ],
  "spd": 4.18,
  "cri": 7.5,
  "acc": 200,
  "eva": 25,
  "res": {
    "fire": 25,
    "chill": 25,
    "thunder": 25
  },
  "skills": [
    {
      "key": "Skill_MP_CenturionCF_N_1",
      "name": "정밀 유도 미사일",
      "icon": "MultiMissile",
      "desc": "정밀 유도 미사일로 {0} 피해를 줍니다. 대상이 표식 상태면 피해량이 크게 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 4,
        "ap": 7,
        "grid": "5689",
        "target_ground": true,
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
                  87
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
                  "desc": "포착 : 피해량+{0}%",
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
                    "per": "5%"
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
      "key": "Skill_MP_CenturionCF_N_2",
      "name": "멀티 록 온",
      "icon": "Scan",
      "desc": "목표 범위 대상들을 3라운드 동안 표식으로 지정하고, 회피 강화 효과를 해제하며 회피를 감소시킵니다. 자신은 적중이 증가하며, 대상들은 받는 피해 증가 상태가 됩니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.01,
        "range": 4,
        "ap": 6,
        "grid": "24568",
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_MARKING",
                "desc": {
                  "desc": "멀티 록 온 : 표식 지정",
                  "type": 0,
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
                  "desc": "멀티 록 온 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "50%",
                    "per": "5%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "멀티 록 온 : 회피 강화 해제",
                  "type": 1,
                  "value": "11"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 88,
                  "off": {
                    "type": 11,
                    "target": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "멀티 록 온 : 회피 {0}%",
                  "type": 1,
                  "value": "-0.600000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "-60%",
                    "per": "-6%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
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
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "멀티 록 온 : 적중+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "100%",
                    "per": "10%"
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
      "key": "Skill_MP_CenturionCF_N_3",
      "name": "대열 정비",
      "icon": "TeamAtkBuff",
      "desc": "아군 사망 시, 대열을 정비해 인접한 아군들과 자신의 행동력 / 적중 / 회피가 증가합니다.",
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "대열 정비 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "25%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "대열 정비 : 적중+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "50%",
                    "per": "5%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "대열 정비 : 회피+{0}%",
                  "type": 1,
                  "value": "0.330000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "33%",
                    "per": "3%"
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
      "key": "Skill_MP_CenturionCF_N_4",
      "name": "위기 극복",
      "icon": "SelfDefBuff",
      "desc": "공격 받을 때 자신에게 능력치 감소 효과가 적용되어 있으면 반격하며, 30% 확률로 해로운 효과를 해제합니다.",
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
            "on": "attacked",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  1,
                  3,
                  7,
                  9,
                  11,
                  13
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
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "위기 극복 : 방해 효과 해제",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "until": {
                    "after": "counter"
                  }
                },
                "value": {
                  "isBuff": true,
                  "chance": "30%",
                  "type": 100,
                  "off": 1
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_COUNTER",
                "desc": {
                  "desc": "위기 극복 : {0}% 위력으로 반격",
                  "type": 1,
                  "value": "0.800000"
                },
                "attr": 0,
                "erase": {
                  "until": {
                    "after": "counter"
                  }
                },
                "value": {
                  "isBuff": true,
                  "type": 29,
                  "counter": {
                    "base": "80%",
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