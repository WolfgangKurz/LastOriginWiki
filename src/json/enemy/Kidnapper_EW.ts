export default {
  "id": "Kidnapper_EW",
  "name": "트릭스터",
  "desc": "전장에서 등장하는 더욱 강력해진 트릭스터로 적을 한번에 괴멸 시킬 수 있는 매우 강력한 반격기를 가지고 있습니다.\n\n\n보고자 ???",
  "icon": "TbarIcon_MP_Kidnapper_B0308",
  "ai": "AI_TrickSter_01",
  "rarity": 5,
  "type": 0,
  "role": 1,
  "isBoss": true,
  "hp": [
    45000,
    240
  ],
  "atk": [
    250,
    17
  ],
  "def": [
    1600,
    24
  ],
  "spd": 4.55,
  "cri": 30,
  "acc": 230,
  "eva": 0,
  "res": {
    "fire": 30,
    "chill": 10,
    "thunder": 10
  },
  "skills": [
    {
      "key": "Skill_MP_Kidnapper_EW_1",
      "name": "클로 돌진",
      "icon": "AssaultAttack",
      "desc": "클로 돌진으로 목표와 바로 뒤의 대상에게 {0} 피해를 줍니다. 5라운드 동안 공격 대상의 방어력을 감소시킵니다. 최대 5번까지 중첩됩니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 4,
        "ap": 4,
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
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "장갑 깎기 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.150000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-15%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 5
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Kidnapper_EW_2",
      "name": "손톱날 발사",
      "icon": "MultiMissile",
      "desc": "폭발하는 손톱날을 발사해 목표 열에 {0} 피해를 주고 대상을 뒤로 한칸 밉니다. 공격 대상들은 2라운드 동안 적중이 감소합니다.",
      "passive": false,
      "type": 1,
      "target": "enemy",
      "buff": {
        "rate": 1.4,
        "range": 1,
        "ap": 6,
        "grid": "258",
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
                "icon": "BuffIcon_Push",
                "desc": {
                  "desc": "뒤로 {0}칸 밀기",
                  "type": 0,
                  "value": "1"
                },
                "attr": 3,
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
                "overlap": 0
              },
              {
                "icon": "BuffIcon_ACCURACY_DOWN",
                "desc": {
                  "desc": "적중 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "-50%",
                    "per": "-2.5%"
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
      "key": "Skill_MP_Kidnapper_EW_3",
      "name": "회심의 반격",
      "icon": "DefCounter",
      "desc": "회심의 반격 준비 태세를 갖춘 상태에서 회피 시 적에게 괴멸적인 피해량으로 반격을 합니다.",
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
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Kidnapper_EW_11"
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
                "icon": "BuffIcon_DEF_PIERCE_UP",
                "desc": {
                  "desc": "회심의 반격 : 방어 관통+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 58,
                  "penetration": {
                    "base": "100%",
                    "per": "0%"
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "회심의 반격 : 적중 +{0}%",
                  "type": 1,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "200%",
                    "per": "0%"
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_COUNTER",
                "desc": {
                  "desc": "회심의 반격 : {0}% 위력으로 반격",
                  "type": 1,
                  "value": "5"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 29,
                  "counter": {
                    "base": "500%",
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
      "key": "Skill_MP_Kidnapper_EW_4",
      "name": "흥분",
      "icon": "SelfAtkBuff",
      "desc": "피격 당할 시 흥분 상태에 빠져 3라운드 동안 공격력이 증가하고 5중첩 이상이 될 시 2라운드 동안 회심의 반격 준비 태세(회피율 대폭 상승)를 갖춥니다.",
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "흥분 : 공격력 +{0}%",
                  "type": 1,
                  "value": "0.030000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "3%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 5
          },
          {
            "on": "damaged",
            "if": {
              "on": {
                "target": "self",
                "select": [
                  "Effect_MP_Kidnapper_EW_4"
                ],
                "stack": 5,
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
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "회심의 반격 준비 태세",
                  "type": 1,
                  "value": "9.990000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "999%",
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
      "key": "Skill_MP_Kidnapper_EW_5",
      "name": "흥분 진정",
      "icon": "SelfAtkDeBuff",
      "desc": "냉기 공격에 피격 당하거나 반격 준비 태세를 갖출 시 적용 중인 흥분 상태가 해제 됩니다.",
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
            "on": "damaged",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Kidnapper_EW_11"
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
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "흥분 진정 : 흥분 상태 해제",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 88,
                  "off": {
                    "type": 1,
                    "target": 0
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 0
          },
          {
            "on": {
              "damaged": "ice"
            },
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Kidnapper_EW_4"
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
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "흥분 진정 : 흥분 상태 해제",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 88,
                  "off": {
                    "type": 1,
                    "target": 0
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 0
          },
          {
            "on": {
              "damaged": "ice"
            },
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Kidnapper_EW_11"
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
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "흥분 진정 : 흥분 상태 해제",
                  "type": 1,
                  "value": "11"
                },
                "attr": 3,
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