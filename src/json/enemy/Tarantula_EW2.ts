export default {
  "id": "Tarantula_EW2",
  "icon": "TbarIcon_MP_Tarantula_N",
  "ai": "AI_Mp_Tarantula_EW_02",
  "rarity": 4,
  "type": 0,
  "role": 1,
  "isBoss": false,
  "hp": [
    2000,
    80
  ],
  "atk": [
    200,
    14.5
  ],
  "def": [
    0,
    0
  ],
  "spd": 4.6,
  "cri": 0,
  "acc": 400,
  "eva": 150,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_Tarantula_EW2_1",
      "name": "히트 머신건",
      "icon": "MeleeAttack",
      "desc": "대상에게 {0} 화염 속성 피해를 주고, 50% 확률로 최대 3회까지 화염 저항을 감소시킵니다.",
      "passive": false,
      "type": 1,
      "target": "enemy",
      "buff": {
        "rate": 0.5,
        "range": 4,
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
                "icon": "BuffIcon_FIRERES_DOWN",
                "desc": {
                  "desc": "히트 머신건 : 화염 저항 {0}%",
                  "type": 1,
                  "value": "-0.100000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 9
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "-10%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 3
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Tarantula_EW2_2",
      "name": "자폭 개시",
      "icon": "SelfDefBuff",
      "desc": "<자폭 준비 완료>가 적용되 있는 상태라면 목표 대상에게 {0} 화염 속성 피해를 주고 자폭합니다. 대상의 방어막 / 피해 감소 효과를 무시합니다.",
      "passive": false,
      "type": 1,
      "target": "enemy",
      "buff": {
        "rate": 5,
        "range": 3,
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_BARRIER_PIERCE",
                "desc": {
                  "desc": "자폭 개시 : 방어막 / 피해 감소 무시",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 94,
                  "penetration_force": true
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "자폭",
                  "type": 1,
                  "value": "9999.990000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "999999%",
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
      "key": "Skill_MP_Tarantula_EW2_3",
      "name": "자폭 준비",
      "icon": "SelfDefBuff",
      "desc": "스스로 자폭을 하기 위해 매 라운드마다 일정 확률로 내부를 과열하여 자폭 준비를 합니다. 자폭 준비가 3중첩이 될 시 <자폭 준비 완료> 상태가 되어 자폭을 실행 합니다.",
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
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "자폭 준비 : 내부 과열 중…",
                  "type": 1,
                  "value": "-1"
                },
                "attr": 1,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "chance": "30%",
                  "type": 2,
                  "defense": {
                    "base": -1,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 3
          },
          {
            "on": "round",
            "if": {
              "on": {
                "target": "self",
                "select": [
                  "Effect_MP_Tarantula_EW2_3"
                ],
                "stack": 3,
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "자폭 준비 완료",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 0,
                  "attack": {
                    "base": 1,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Tarantula_EW2_31"
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
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "자폭 준비 완료",
                  "type": 1,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 89,
                  "off": {
                    "type": 2,
                    "target": 1
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 1
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Tarantula_EW2_4",
      "name": "내부 과열 냉각",
      "icon": "SelfDefBuff",
      "desc": "냉기 공격에 피격 시 내부 과열 상태를 해제 합니다. 하지만 이미 <자폭 준비 완료>가 된 상태라면 자폭을 막을 수 없습니다.",
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
            "on": {
              "damaged": "ice"
            },
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Tarantula_EW2_3"
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
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "내부 과열 냉각",
                  "type": 1,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 89,
                  "off": {
                    "type": 2,
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
    }
  ]
};