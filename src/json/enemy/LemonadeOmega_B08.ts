export default {
  "id": "LemonadeOmega_B08",
  "icon": "TbarIcon_MP_LemonadeOmega_B08",
  "ai": "AI_LemonadeOmega_Normal_01",
  "rarity": 5,
  "type": 1,
  "role": 2,
  "isBoss": true,
  "hp": [
    24500,
    750
  ],
  "atk": [
    180,
    10
  ],
  "def": [
    2240,
    40
  ],
  "spd": 3.52,
  "cri": 100,
  "acc": 500,
  "eva": 0,
  "res": {
    "fire": 15,
    "chill": 15,
    "thunder": 15
  },
  "skills": [
    {
      "key": "Skill_MP_LemonadeOmega_N_1",
      "name": "케스토스 히마스: 출력전개",
      "icon": "SatelliteBeam",
      "desc": "지정 범위에 {0} 피해를 주고, 대상의 적중 강화 효과를 해제하며 뒤로 밀어냅니다. 대상에게 속성 저항 감소 효과가 적용되어 있는 경우 2라운드 동안 이동 불가 상태로 만들고, 대상이 중장형 보호기일 경우 2라운드 동안 사거리를 감소시킵니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.5,
        "range": 5,
        "ap": 4,
        "grid": "124578",
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
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "케스토스 히마스 : 적중 강화 해제",
                  "type": 0,
                  "value": "7"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 88,
                  "off": {
                    "type": 7,
                    "target": 0
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_Push",
                "desc": {
                  "desc": "케스토스 히마스 : 뒤로 {0}칸 밀기",
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
                  15,
                  17,
                  19
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
                "icon": "BuffIcon_SNARE",
                "desc": {
                  "desc": "케스토스 히마스 : 이동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 78,
                  "immovable": true
                },
                "overlap": 1
              }
            ],
            "maxStack": 0
          },
          {
            "on": "attack_success",
            "if": false,
            "body": [
              0,
              1
            ],
            "class": [
              1
            ],
            "role": [
              0
            ],
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_RANGE_DOWN",
                "desc": {
                  "desc": "케스토스 히마스 : 사거리{0}",
                  "type": 0,
                  "value": "-1"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
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
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_LemonadeOmega_N_2",
      "name": "케스토스 히마스: 알고리즘 개선",
      "icon": "EnemyDetect",
      "desc": "지정 범위 아군의 현재 AP를 14로 변경시키며, 3라운드 동안 대상에게 사거리 증가 효과를 부여하고 치명타 / 효과 저항 확률을 100% 증가시킵니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 3,
        "ap": 6,
        "grid": "6>12345789",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "케스토스 히마스 : AP {0}으로 변경",
                  "type": 0,
                  "value": "14"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 21,
                  "ap_set": {
                    "base": 14,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "케스토스 히마스 : 치명타+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 9,
                  "critical": {
                    "base": "100%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "케스토스 히마스 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
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
              },
              {
                "icon": "BuffIcon_RANGE_UP",
                "desc": {
                  "desc": "케스토스 히마스 : 사거리+{0}",
                  "type": 0,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 55,
                  "range": {
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "케스토스 히마스 : 치명타+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "100%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "케스토스 히마스 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
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
            "maxStack": 1
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_RANGE_UP",
                "desc": {
                  "desc": "케스토스 히마스 : 사거리+{0}",
                  "type": 0,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 55,
                  "range": {
                    "base": 1,
                    "per": 0
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
      "key": "Skill_MP_LemonadeOmega_N_3",
      "name": "케스토스 히마스: 경장갑 OS",
      "icon": "AntiArmorShot",
      "desc": "전투 개시 시 스쿼드에 경장형 아군 수가 3 이상일 경우, 모든 경장형 아군 및 적의 받는 피해를 감소시키고, 모든 기동 / 중장형 아군 및 적의 받는 피해를 증가시킵니다. 해당 효과는 해제할 수 없습니다.",
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
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "light"
                ],
                "type": [
                  0
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              0
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
                  "desc": "케스토스 히마스 : 받는 피해-{0}%",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
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
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "light"
                ],
                "type": [
                  0
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
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
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "케스토스 히마스 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "35%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "light"
                ],
                "type": [
                  0
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              0
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "케스토스 히마스 : 받는 피해-{0}%",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
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
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "light"
                ],
                "type": [
                  0
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              1,
              2
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "케스토스 히마스 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "35%",
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
      "key": "Skill_MP_LemonadeOmega_N_4",
      "name": "케스토스 히마스: 사거리 OS",
      "icon": "Snipe",
      "desc": "전투 개시 시 스쿼드에 기동형 아군 수가 3 이상일 경우, 모든 기동형 아군 및 적의 사거리 / 적중을 증가시키고, 모든 경장 / 중장형 아군 및 적의 사거리 / 적중을 감소시킵니다. 해당 효과는 해제할 수 없습니다.",
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
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "air"
                ],
                "type": [
                  2
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
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
                "icon": "BuffIcon_RANGE_UP",
                "desc": {
                  "desc": "케스토스 히마스 : 사거리+{0}",
                  "type": 0,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 55,
                  "range": {
                    "base": 2,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "air"
                ],
                "type": [
                  2
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
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
                  "desc": "케스토스 히마스 : 적중+{0}%",
                  "type": 1,
                  "value": "0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "80%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "air"
                ],
                "type": [
                  2
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              0,
              1
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_RANGE_DOWN",
                "desc": {
                  "desc": "케스토스 히마스 : 사거리{0}",
                  "type": 0,
                  "value": "-2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 55,
                  "range": {
                    "base": -2,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "air"
                ],
                "type": [
                  2
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              0,
              1
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_ACCURACY_DOWN",
                "desc": {
                  "desc": "케스토스 히마스 : 적중{0}%",
                  "type": 1,
                  "value": "-0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "-80%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "air"
                ],
                "type": [
                  2
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              2
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_RANGE_UP",
                "desc": {
                  "desc": "케스토스 히마스 : 사거리+{0}",
                  "type": 0,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 55,
                  "range": {
                    "base": 2,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "air"
                ],
                "type": [
                  2
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              2
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "케스토스 히마스 : 적중+{0}%",
                  "type": 1,
                  "value": "0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "80%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "air"
                ],
                "type": [
                  2
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              0,
              1
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_RANGE_DOWN",
                "desc": {
                  "desc": "케스토스 히마스 : 사거리{0}",
                  "type": 0,
                  "value": "-2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 55,
                  "range": {
                    "base": -2,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "air"
                ],
                "type": [
                  2
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              0,
              1
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_ACCURACY_DOWN",
                "desc": {
                  "desc": "케스토스 히마스 : 적중{0}%",
                  "type": 1,
                  "value": "-0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "-80%",
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
      "key": "Skill_MP_LemonadeOmega_N_5",
      "name": "케스토스 히마스: 중장갑 OS",
      "icon": "TeamSpdBuff",
      "desc": "전투 개시 시 스쿼드에 중장형 아군 수가 3 이상일 경우, 모든 중장형 아군 및 적의 AP / 행동력을 증가시키고, 모든 경장 / 기동형 아군 및 적의 AP / 행동력을 감소시킵니다. 해당 효과는 해제할 수 없습니다.",
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
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "heavy"
                ],
                "type": [
                  1
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              1
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
                  "desc": "케스토스 히마스 : AP+{0}",
                  "type": 0,
                  "value": "4.700000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 4.7,
                    "per": 0
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "heavy"
                ],
                "type": [
                  1
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              1
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
                  "desc": "케스토스 히마스 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "35%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "heavy"
                ],
                "type": [
                  1
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              0,
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
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "케스토스 히마스 : AP{0}",
                  "type": 0,
                  "value": "-4.700000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": -4.7,
                    "per": 0
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "heavy"
                ],
                "type": [
                  1
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              0,
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
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "케스토스 히마스 : 행동력{0}%",
                  "type": 1,
                  "value": "-0.350000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-35%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "heavy"
                ],
                "type": [
                  1
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              1
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "케스토스 히마스 : AP+{0}",
                  "type": 0,
                  "value": "4.700000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 4.7,
                    "per": 0
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "heavy"
                ],
                "type": [
                  1
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              1
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "케스토스 히마스 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "35%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "heavy"
                ],
                "type": [
                  1
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              0,
              2
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "케스토스 히마스 : AP{0}",
                  "type": 0,
                  "value": "-4.700000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": -4.7,
                    "per": 0
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 0
          },
          {
            "on": "wave",
            "if": {
              "unitCount": {
                "filter": [
                  "squad",
                  "heavy"
                ],
                "type": [
                  1
                ],
                "count": [
                  3,
                  4,
                  5
                ]
              }
            },
            "body": [
              0,
              1
            ],
            "class": [
              0,
              2
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "케스토스 히마스 : 행동력{0}%",
                  "type": 1,
                  "value": "-0.350000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-35%",
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