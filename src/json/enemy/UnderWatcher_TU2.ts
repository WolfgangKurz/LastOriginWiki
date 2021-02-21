export default {
  "id": "UnderWatcher_TU2",
  "icon": "TbarIcon_MP_UnderWatcher_B05",
  "ai": "AI_UnderWatcher_02",
  "rarity": 5,
  "type": 1,
  "role": 0,
  "isBoss": true,
  "hp": [
    49200,
    200
  ],
  "atk": [
    283,
    13.5
  ],
  "def": [
    1605,
    5
  ],
  "spd": 3.75,
  "cri": 15,
  "acc": 175,
  "eva": 0,
  "res": {
    "fire": 50,
    "chill": 75,
    "thunder": 50
  },
  "skills": [
    {
      "key": "Skill_MP_UnderWatcher_TU2_1",
      "name": "확산 플라즈마 입자포",
      "icon": "WideBeamShot",
      "desc": "지정 범위에 보호 효과를 무시하고 {0} 피해를 주는 확산 입자포를 발사합니다. 대상이 표식 상태면 피해량이 증가하며, 대상의 방어력을 감소시킵니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.5,
        "range": 5,
        "ap": 3,
        "grid": "6>1245678",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": true,
        "acc_bonus": 150,
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
                  "value": "0.300000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "30%",
                    "per": "1%"
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "장갑 융해 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.100000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-10%",
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
      "key": "Skill_MP_UnderWatcher_TU2_2",
      "name": "메가 플라즈마 캐논",
      "icon": "BeamShot",
      "desc": "지정 행에 {0} 피해를 주는 플라즈마 입자포를 발사합니다. 보호 효과를 무시하며, 표식 상태인 대상에게 피해량이 크게 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 2,
        "range": 8,
        "ap": 10,
        "grid": "6>456",
        "target_ground": false,
        "summon": null,
        "use": {
          "key": "Effect_MP_UnderWatcherGenerator_TU2_1",
          "count": 5
        },
        "dismiss_guard": true,
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
                    "per": "1%"
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
      "key": "Skill_MP_UnderWatcher_TU2_3",
      "name": "특수 합금 발사구",
      "icon": "SelfDefBuff",
      "desc": "공격 받을 때, 에너지 충전 상태면 높은 확률로 최소 피해만 받습니다.",
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
                  "Effect_MP_UnderWatcherGenerator_TU2_1"
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
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "특수 합금 : 피해 최소화",
                  "type": 0,
                  "value": "999999"
                },
                "attr": 0,
                "erase": {
                  "until": "damaged"
                },
                "value": {
                  "isBuff": true,
                  "chance": "90%",
                  "type": 34,
                  "damage_minimize": {
                    "base": 999999,
                    "per": 0
                  }
                },
                "overlap": 1
              }
            ],
            "maxStack": 1
          }
        ]
      }
    },
    {
      "key": "Skill_MP_UnderWatcher_TU2_4",
      "name": "최대 출력",
      "icon": "SelfAtkBuff",
      "desc": "에너지 충전 중첩이 4 이상이면, 공격할 때 방어막과 피해 감소 효과를 무시합니다.",
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
                "target": "self",
                "select": [
                  "Effect_MP_UnderWatcherGenerator_TU2_1"
                ],
                "stack": 4,
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
                "icon": "BuffIcon_BARRIER_PIERCE",
                "desc": {
                  "desc": "방어막 / 피해 감소 효과 무시",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 94,
                  "penetration_force": true
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
      "key": "Skill_MP_UnderWatcher_TU2_5",
      "name": "시스템 정지",
      "icon": "SuicideBomb",
      "desc": "사망할 경우, 관련된 모든 시스템이 정지합니다.",
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "시스템 정지 : {0}% 물리 피해",
                  "type": 1,
                  "value": "999.990000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "99999%",
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
    }
  ]
};