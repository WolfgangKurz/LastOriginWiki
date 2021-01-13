export default {
  "id": "UnderWatcher_EW",
  "name": "언더왓쳐",
  "desc": "전장에서 등장하는 더욱 강력해진 언더왓쳐로 제네레이터로부터 에너지를 공급 받는 한 계속 전투를 이어나갈 수 있습니다.\n\n\n보고자 ???",
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
    300,
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
      "key": "Skill_MP_UnderWatcher_EW_1",
      "name": "확산 플라즈마 입자포",
      "icon": "WideBeamShot",
      "desc": "지정 범위에 보호 효과를 무시하고 {0} 피해를 주는 확산 입자포를 발사합니다. 표식 상태인 대상에게 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.5,
        "range": 5,
        "ap": 3,
        "grid": "1457",
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
                "attr": 0,
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
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_UnderWatcher_EW_2",
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
          "key": "Effect_MP_UnderWatcherGenerator_EW_1",
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
                "attr": 0,
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
      "key": "Skill_MP_UnderWatcher_EW_3",
      "name": "특수 합금 발사구",
      "icon": "SelfDefBuff",
      "desc": "라운드 개시 시 에너지 충전 상태인 경우, 공격하기 전까지는 방어력과 효과 저항이 크게 증가합니다.",
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
                  "Effect_MP_UnderWatcherGenerator_EW_1"
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "특수 합금 : 방어력+{0}%",
                  "type": 1,
                  "value": "5"
                },
                "attr": 3,
                "erase": {
                  "until": "attack"
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "500%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "특수 합금 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.750000"
                },
                "attr": 3,
                "erase": {
                  "until": "attack"
                },
                "value": {
                  "isBuff": true,
                  "type": 91,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "75%",
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
      "key": "Skill_MP_UnderWatcher_EW_4",
      "name": "최대 출력 왓쳐",
      "icon": "SelfAtkBuff",
      "desc": "에너지 충전이 4중첩 이상이면, 공격할 때 방어막과 피해 감소 효과를 무시합니다.",
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
                  "Effect_MP_UnderWatcherGenerator_EW_1"
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
                "attr": 3,
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
      "key": "Skill_MP_UnderWatcher_EW_5",
      "name": "시스템 복원",
      "icon": "SelfDefBuff",
      "desc": "에너지 충전에 적용 중인 상태에서 자신의 HP가 30% 이하일 경우 HP를 회복하고 전투를 속행을 합니다.",
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
              "hp<=": "30%"
            },
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_UnderWatcherGenerator_EW_1"
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
                "icon": "BuffIcon_DEF_RESSURRECT",
                "desc": {
                  "desc": "시스템 복원 : {0}HP로 전투 속행",
                  "type": 0,
                  "value": "30000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 82,
                  "revive": {
                    "base": 30000,
                    "per": 0
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