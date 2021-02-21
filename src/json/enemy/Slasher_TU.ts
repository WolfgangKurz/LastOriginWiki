export default {
  "id": "Slasher_TU",
  "icon": "TbarIcon_MP_Slasher_N",
  "ai": "AI_MP_Slasher_01",
  "rarity": 4,
  "type": 0,
  "role": 1,
  "isBoss": false,
  "hp": [
    946,
    105.2
  ],
  "atk": [
    209,
    6.2
  ],
  "def": [
    0,
    0
  ],
  "spd": 3.7,
  "cri": 20,
  "acc": 240,
  "eva": 205,
  "res": {
    "fire": 50,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_Slasher_N_1",
      "name": "머신캐논 연사",
      "icon": "MGShot",
      "desc": "단일 대상에게 {0} 피해를 주고 대상의 방어력을 감소시킵니다. 치명타 시, 대상의 받는 피해 감소 효과를 해제 합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.1,
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
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "머신캐논 연사 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-30%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "criticaled",
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  36
                ],
                "attr": 0
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
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "머신캐논 연사 : 받는 피해 감소 효과 해제",
                  "type": 1,
                  "value": "36"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 88,
                  "off": {
                    "type": 36,
                    "target": 0
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
      "key": "Skill_MP_Slasher_N_2",
      "name": "장갑 찢기",
      "icon": "SwordAttk",
      "desc": "단일 대상에게 보호 무시의 {0} 화염 속성 피해를 줍니다. 치명타 시, 피해량이 증가하며 모든 강화 효과를 해제 합니다.",
      "passive": false,
      "type": 1,
      "target": "enemy",
      "buff": {
        "rate": 2,
        "range": 5,
        "ap": 9,
        "grid": "single",
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
                "icon": "BuffIcon_FireATK_UP",
                "desc": {
                  "desc": "장갑 찢기 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 84,
                  "damage_add": {
                    "elem": "fire",
                    "damage": {
                      "base": "50%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "장갑 찢기 : 모든 강화 효과 해제",
                  "type": 1,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 99,
                  "off": 0
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
      "key": "Skill_MP_Slasher_N_3",
      "name": "전투 적응",
      "icon": "SelfSpdBuff",
      "desc": "전투 개시 시, AP 증가 / 받는 피해 감소 효과가 적용 됩니다. 적 공격 시, 회피가 증가하며 회피 증가 효과는 후열에 가까울수록 증가합니다. 냉기 속성에 피격 시, 회피 증가 효과가 해제 되고 회피가 감소합니다.",
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "전투 적응 : AP+{0}",
                  "type": 0,
                  "value": "3"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 3,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "전투 적응 : 받는 피해 감소 {0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "attack",
            "if": {
              "pos": 0
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
                  "desc": "전투 적응 : 회피+{0}% (전열)",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "10%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 3
          },
          {
            "on": "attack",
            "if": {
              "pos": 1
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
                  "desc": "전투 적응 : 회피+{0}% (중열)",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "15%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 3
          },
          {
            "on": "attack",
            "if": {
              "pos": 2
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
                  "desc": "전투 적응 : 회피+{0}% (후열)",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "20%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 3
          },
          {
            "on": {
              "damaged": "ice"
            },
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Slasher_N_31"
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
            "buffs": [],
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
                  "Effect_MP_Slasher_N_32"
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
            "buffs": [],
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
                  "Effect_MP_Slasher_N_33"
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
            "buffs": [],
            "maxStack": 0
          },
          {
            "on": {
              "damaged": "ice"
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
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "둔화 : 회피 {0}%",
                  "type": 1,
                  "value": "-5"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "-500%",
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
      "key": "Skill_MP_Slasher_N_4",
      "name": "역습",
      "icon": "DefCounter",
      "desc": "회피 시, 반격 / AP 증가 / 치명타 증가가 적용되고 <치명적인 역습>이 적용 됩니다. 라운드 개시 시, <치명적인 역습>이 3중첩이라면 방어막 / 피해 감소 효과를 무시합니다.",
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
                  "desc": "역습 : {0}% 위력으로 반격",
                  "type": 1,
                  "value": "0.500000"
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
                    "base": "50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "역습 : AP+{0}",
                  "type": 0,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "until": {
                    "after": "counter"
                  }
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 0.25,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
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
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "역습 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "30%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 3
          },
          {
            "on": "evade",
            "if": {
              "on": {
                "target": "self",
                "func": "UNFILLED",
                "select": [
                  "Effect_MP_Slasher_N_43"
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "치명적인 역습 준비",
                  "type": 1,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 0,
                  "attack": {
                    "base": 0,
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
                  "Effect_MP_Slasher_N_42"
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
                "icon": "BuffIcon_BARRIER_PIERCE",
                "desc": {
                  "desc": "치명적인 역습 : 방어막 / 받는 피해 감소 무시",
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