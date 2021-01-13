export default {
  "id": "NightChickCMP_N",
  "name": "케미컬 칙 Type-X",
  "desc": "히익… 다신 보기 싫을 정도로 징그러웠어요…... 불에는 약한지 불을 붙이니 폭발해서 깜짝 놀랐네요.\n\n\n - 뽀끄루 보고함",
  "icon": "TbarIcon_MP_NightChickCMP_N",
  "ai": "AI_MP_CMChickX_Normal_01",
  "rarity": 5,
  "type": 0,
  "role": 1,
  "isBoss": false,
  "hp": [
    1,
    1
  ],
  "atk": [
    20,
    20
  ],
  "def": [
    52,
    2
  ],
  "spd": 4.5,
  "cri": 5,
  "acc": 350,
  "eva": 100,
  "res": {
    "fire": 0,
    "chill": 99,
    "thunder": 99
  },
  "skills": [
    {
      "key": "Skill_MP_NightChickCMP_N_1",
      "name": "급속 부식탄",
      "icon": "Missile",
      "desc": "급속 부식탄을 발사해 {0} 피해를 줍니다. 2라운드 동안 대상을 급속 부식 상태로 만들어 효과 저항 / 방어력 / 행동력을 감소시키고 매 라운드 지속 피해를 입힙니다. 대상이 이미 부식 상태면 일정 확률로 강화 효과를 해제합니다. ",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.33,
        "range": 5,
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
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  "Effect_MP_NightChickCM_N_1",
                  "Effect_MP_NightChickCMP_N_1",
                  "Effect_MP_NightChickCMP_N_11"
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "급속 부식 : 강화 효과 해제",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "35%",
                  "type": 99,
                  "off": 0
                },
                "overlap": 0
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
                "icon": "BuffIcon_DEBUFF_RATEUP",
                "desc": {
                  "desc": "급속 부식 : 효과 저항 {0}% 감소",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 90,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "-15%",
                      "per": "-1%"
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
                  "desc": "급속 부식 : 방어력 {0}%",
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
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "급속 부식 : 행동력 {0}%",
                  "type": 1,
                  "value": "-0.100000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-10%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_phyDMG_DOT",
                "desc": {
                  "desc": "급속 부식 : 지속 피해 {0}",
                  "type": 0,
                  "value": "160"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 160,
                    "per": 10
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
      "key": "Skill_MP_NightChickCMP_N_2",
      "name": "급속 부식탄 난사",
      "icon": "MultiMissile",
      "desc": "급속 부식탄을 발사해 지정 범위에 {0} 피해를 줍니다. 2라운드 동안 대상을 급속 부식 상태로 만들어 효과 저항 / 방어력 / 행동력을 감소시키고 매 라운드 지속 피해를 입힙니다. 대상이 이미 부식 상태면 일정 확률로 강화 효과를 해제합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.33,
        "range": 4,
        "ap": 7,
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
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  "Effect_MP_NightChickCM_N_1",
                  "Effect_MP_NightChickCMP_N_1",
                  "Effect_MP_NightChickCMP_N_11"
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "급속 부식 : 강화 효과 해제",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "35%",
                  "type": 99,
                  "off": 0
                },
                "overlap": 0
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
                "icon": "BuffIcon_DEBUFF_RATEUP",
                "desc": {
                  "desc": "급속 부식 : 효과 저항 {0}% 감소",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 90,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "-15%",
                      "per": "-1%"
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
                  "desc": "급속 부식 : 방어력 {0}%",
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
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "급속 부식 : 행동력 {0}%",
                  "type": 1,
                  "value": "-0.100000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-10%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_phyDMG_DOT",
                "desc": {
                  "desc": "급속 부식 : 지속 피해 {0}",
                  "type": 0,
                  "value": "160"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 160,
                    "per": 10
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
      "key": "Skill_MP_NightChickCMP_N_3",
      "name": "부식액 누출",
      "icon": "TeamDefDeBuff",
      "desc": "적 공격 시, 주변에 부식액이 누출되어 지속 고정 피해를 주며 방어력을 감소시킵니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "around",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": "attack",
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
                "icon": "BuffIcon_phyDMG_DOT",
                "desc": {
                  "desc": "부식액 누출 : {0} 지속 피해",
                  "type": 0,
                  "value": "2000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 2000,
                    "per": 0
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "부식액 누출 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-50%",
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
      "key": "Skill_MP_NightChickCMP_N_4",
      "name": "내성 장갑",
      "icon": "SelfDefBuff",
      "desc": "공격 당할 경우, 상대의 스킬이 최소 피해로 적용됩니다. 라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "13579",
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
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "내성 장갑 : 피해 최소화",
                  "type": 1,
                  "value": "9999999"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 34,
                  "damage_minimize": {
                    "base": 9999999,
                    "per": 0
                  }
                },
                "overlap": 1
              }
            ],
            "maxStack": 0
          },
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
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "내성 공유 : 해로운 효과 해제",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 100,
                  "off": 1
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
      "key": "Skill_MP_NightChickCMP_N_5",
      "name": "부식액 폭발",
      "icon": "SuicideBomb",
      "desc": "화염 속성 액티브 스킬 공격 피격 시, 부식액에 불이 붙어 점화 상태가 됩니다. 점화 상태로 처치되면 부식액 폭발로 범위 내 아군에게 괴멸적인 고정 피해를 입힙니다.",
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
            "on": {
              "damaged": "fire"
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
                "icon": "BuffIcon_FireDMG_DOT",
                "desc": {
                  "desc": "부식액 점화 : {0} 지속 화염 피해",
                  "type": 0,
                  "value": "100"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 66,
                  "fixed_damage": {
                    "elem": "fire",
                    "damage": {
                      "base": 100,
                      "per": 0
                    }
                  }
                },
                "overlap": 3
              }
            ],
            "maxStack": 0
          },
          {
            "on": "self_dead",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  66
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "부식액 폭발 : 공격력 {0}% 고정 피해",
                  "type": 1,
                  "value": "37.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "3750%",
                    "per": "0%"
                  }
                },
                "overlap": 3
              }
            ],
            "maxStack": 0
          }
        ]
      }
    }
  ]
};