export default {
  "id": "FABigChickS_TU3",
  "icon": "TbarIcon_MP_FABigChickS_N",
  "ai": "AI_FABigChickShield_Normal_01",
  "rarity": 4,
  "type": 1,
  "role": 0,
  "isBoss": false,
  "hp": [
    18000,
    133.9
  ],
  "atk": [
    100,
    10
  ],
  "def": [
    750,
    23
  ],
  "spd": 3.35,
  "cri": 10,
  "acc": 105,
  "eva": 1,
  "res": {
    "fire": 25,
    "chill": 25,
    "thunder": -25
  },
  "skills": [
    {
      "key": "Skill_MP_FABigChickS_N_1",
      "name": "방패 찍기",
      "icon": "ShieldWall",
      "desc": "방패로 대상을 찍어 {0} 피해를 줍니다. 대상은 방어력이 감소하며, 높은 확률로 행동 불가 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.3,
        "range": 3,
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
                  "desc": "방패 찍기 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-30%",
                    "per": "2%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "방패 찍기 : 행동 불가",
                  "type": 1,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "60%",
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
      "key": "Skill_MP_FABigChickS_N_2",
      "name": "칙 블로킹",
      "icon": "ShieldWall",
      "desc": "방어 태세를 취해, 3라운드 동안 행 보호 / 열 보호 / 받는 피해 감소 / 효과 저항 증가 효과가 발생합니다. 자신의 HP가 25% 이하인 경우, 반격 효과가 추가됩니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 6,
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
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "칙 블로킹 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 36,
                  "damage_reduce": {
                    "base": "40%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_Line",
                "desc": {
                  "desc": "칙 블로킹 : 행 보호",
                  "type": 1,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 50,
                  "guard": "col"
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_DEF_Side",
                "desc": {
                  "desc": "칙 블로킹 : 열 보호",
                  "type": 1,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 75,
                  "guard": "row"
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "칙 블로킹 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
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
                      "base": "50%",
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
            "on": {
              "after": "use_skill"
            },
            "if": {
              "hp<=": "25%"
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
                "icon": "BuffIcon_COUNTER",
                "desc": {
                  "desc": "칙 블로킹 : {0}% 위력으로 반격",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
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
            "maxStack": 1
          }
        ]
      }
    },
    {
      "key": "Skill_MP_FABigChickS_N_3",
      "name": "칙 방어 지휘",
      "icon": "TeamDefBuff",
      "desc": "<칙 블로킹> 상태로 라운드 개시 시, 주변 아군에게 방어력 증가 / 받는 피해 감소 효과를 줍니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "23689",
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
                  "Effect_MP_FABigChickS_N_2"
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "칙 방어 지휘 : 방어력+{0}%",
                  "type": 1,
                  "value": "0.750000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "75%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "칙 방어 지휘 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
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
      "key": "Skill_MP_FABigChickS_N_4",
      "name": "칙 근성 발동",
      "icon": "SelfDefBuff",
      "desc": "피격 시, 2라운드 동안 방어력 / 행동력이 증가합니다. 라운드 개시 시, <칙 근성 발동> 방어 증가 효과가 5회 이상이면 전투 속행 효과가 추가됩니다. 전투 속행 발동 시, 2라운드 동안 최소 피해만 받지만 지속 고정 피해를 입으며 방어막과 피해 감소 효과를 무시합니다.",
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "칙 근성 발동 : 방어력+{0}%",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "35%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "칙 근성 발동 : 행동력+{0}%",
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
          },
          {
            "on": "round",
            "if": {
              "on": {
                "target": "self",
                "select": [
                  "Effect_MP_FABigChickS_N_4"
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
                "icon": "BuffIcon_DEF_RESSURRECT",
                "desc": {
                  "desc": "칙 근성 발동 : {0}HP로 전투 속행 (1회)",
                  "type": 0,
                  "value": "3000"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 82,
                  "revive": {
                    "base": 3000,
                    "per": 0
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 1
          },
          {
            "on": "revive",
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
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "최후의 근성 : 피해 최소화 (해제 불가)",
                  "type": 1,
                  "value": "999999"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 34,
                  "damage_minimize": {
                    "base": 999999,
                    "per": 0
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_BARRIER_PIERCE",
                "desc": {
                  "desc": "최후의 근성 : 방어막 / 피해 감소 무시 (해제 불가)",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
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
                  "desc": "최후의 근성 : {0} 지속 고정 피해 (해제 불가)",
                  "type": 0,
                  "value": "1500"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 1500,
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
    }
  ]
};