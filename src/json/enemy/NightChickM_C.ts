export default {
  "id": "NightChickM_C",
  "name": "나이트 칙 런처??",
  "desc": "중장형을 상대하기 위해 반만년 동안 수련해 기동 공격기가 된 나이트 칙 런처라는 것 같다. 어떤 바이오로이드가 부러워 할 것 같다…",
  "icon": "TbarIcon_MP_NightChickM_N",
  "ai": "AI_Mp_NChickM_Challenge_01",
  "rarity": 5,
  "type": 2,
  "role": 1,
  "isBoss": false,
  "hp": [
    100000,
    0
  ],
  "atk": [
    1250,
    0
  ],
  "def": [
    1200,
    0
  ],
  "spd": 4.5,
  "cri": 15,
  "acc": 160,
  "eva": 120,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_NightChickM_C_1",
      "name": "칙 미사일",
      "icon": "Missile",
      "desc": "대상에게 {0} 피해를 줍니다. 치명타 시, 75% 확률로 대상의 강화 효과를 해제하며 5라운드 동안 방어력을 감소시키고 받는 피해를 증가시킵니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.2,
        "range": 4,
        "ap": 5,
        "grid": "single",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
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
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "칙 요격 미사일 : 강화 해제",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
                  "type": 99,
                  "off": 0
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "칙 요격 미사일 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.400000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
                  "type": 3,
                  "defense": {
                    "base": "-40%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "칙 요격 미사일 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
                  "type": 48,
                  "damage_increase": {
                    "base": "25%",
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
    },
    {
      "key": "Skill_MP_NightChickM_C_2",
      "name": "풀 오픈 칙 미사일",
      "icon": "MultiMissile",
      "desc": "대상에게 {0} 보호 무시 피해를 줍니다. 대상이 중장형일 경우 강화 효과를 해제하며 피해량이 증가하고, 2라운드 동안 방어력 감소 / 행동 불가 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.2,
        "range": 5,
        "ap": 8,
        "grid": "24568",
        "target_ground": true,
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
              1
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
                  "desc": "풀 오픈 칙 미사일 : 강화 해제 (중장)",
                  "type": 0,
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
              },
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "칙 지상 폭격 : 방어력 {0}% (중장)",
                  "type": 1,
                  "value": "-0.800000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-80%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "칙 지상 폭격 : 피해량+{0}% (중장)",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 1,
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
              },
              {
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "칙 지상 폭격 : 행동 불가 (중장)",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 22,
                  "stun": true
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
      "key": "Skill_MP_NightChickM_C_3",
      "name": "칙 포메이션 (런쳐)",
      "icon": "SelfAtkBuff",
      "desc": "자신 앞 / 뒤에 인접한 아군의 공격력 / 치명타 / 행동력을 증가시킵니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "46",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "칙 포메이션 (런쳐) : 공격력+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
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
                  "desc": "칙 포메이션 (런쳐) : 치명타+{0}%",
                  "type": 1,
                  "value": "0.050000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
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
                  "desc": "칙 포메이션 (런쳐) : 행동력+{0}%",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
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
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_NightChickM_C_4",
      "name": "칙 복원 시스템",
      "icon": "SelfDefBuff",
      "desc": "라운드 개시 시, 나이트 칙 실더???의 <복원 시스템 제어> 효과를 받는 상태면 효과 저항이 증가하며, 전투 속행 효과가 적용됩니다. <복원 시스템 제어> 상태에서 전투 속행 시, 영구 적용되는 전투 속행인  <칙 영구 복원> 상태가 됩니다. <칙 영구 복원> 상태로 라운드 개시 시, 공격력 / 적중 / 치명타 / 회피 / 행동력이 증가합니다. 해당 효과들은 강화 해제로 효과로는 해제되지 않습니다.",
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
                  "Effect_MP_NightChickS_C_4",
                  "Effect_MP_NightChickS_C_15"
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
              1
            ],
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_RESSURRECT",
                "desc": {
                  "desc": "칙 복원 시스템 : {0}HP로 전투 속행 (해제 불가)",
                  "type": 0,
                  "value": "50000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 82,
                  "revive": {
                    "base": 50000,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "칙 복원 시스템 : 효과 저항+{0}% (해제 불가)",
                  "type": 1,
                  "value": "0.660000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 91,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "66%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "revive",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_NightChickS_C_4",
                  "Effect_MP_NightChickS_C_15"
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
                  "desc": "칙 영구 복원 시스템 : {0}HP로 전투 속행 (해제 불가)",
                  "type": 0,
                  "value": "100000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 82,
                  "revive": {
                    "base": 100000,
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
                "target": "self",
                "select": [
                  "Effect_MP_NightChickS_C_17"
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
              1,
              2
            ],
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_BARRIER_PIERCE",
                "desc": {
                  "desc": "칙 풀 업그레이드 : 방어막 / 피해 감소 무시",
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
              },
              {
                "icon": "BuffIcon_DEF_PIERCE_UP",
                "desc": {
                  "desc": "칙 풀 업그레이드 : 방어력 무시",
                  "type": 0,
                  "value": "1"
                },
                "attr": 0,
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
                "overlap": 4
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_NightChickM_C_5",
      "name": "칙 복원 시스템 오류",
      "icon": "SelfDefDeBuff",
      "desc": "라운드 개시 시, <복원 시스템 오류> 상태면 받는 피해가 증가하며 전투 속행 효과가 제거됩니다.",
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
                  "Effect_MP_NightChickS_C_12"
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
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "칙 복원 시스템 오류 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "25%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "칙 복원 시스템 오류 : 전투 속행 해제",
                  "type": 0,
                  "value": "82"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 69,
                  "off": {
                    "type": 82
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_NightChick_C_11",
                  "Effect_MP_NightChickM_C_11"
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
                  "desc": "칙 영구 강화 : 공격력+{0}% (해제 불가)",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 3,
                "erase": {},
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
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "칙 영구 강화 : 적중+{0}% (해제 불가)",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "40%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "칙 영구 강화 : 치명타+{0}% (해제 불가)",
                  "type": 1,
                  "value": "0.050000"
                },
                "attr": 3,
                "erase": {},
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
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "칙 영구 강화 : 회피+{0}% (해제 불가)",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "20%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "칙 영구 강화 : 행동력+{0}% (해제 불가)",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 3,
                "erase": {},
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