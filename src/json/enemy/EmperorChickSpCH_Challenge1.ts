export default {
  "id": "EmperorChickSpCH_Challenge1",
  "name": "분노한 칙 커맨더",
  "desc": "외로움이 계속 쌓이면 결국 어떤 식으로든 표출되기 마련이죠. 그런데 이 화가 나 있는 철충은 비슷하게 생긴 친구보다 외로움을 훨씬 많이 타는 것 같군요? 자신을 보호할 생각도 전혀 없어 보이고, 동료를 조금만 잃어도 곧장 폭발해버리는 것 같아요.\n\n\n- 보고자 키르케",
  "icon": "TbarIcon_MP_EmperorChickSpCH_N",
  "ai": "AI_CommanderChick_Challenge_02",
  "rarity": 5,
  "type": 1,
  "role": 1,
  "isBoss": false,
  "hp": [
    300000,
    0
  ],
  "atk": [
    100,
    0
  ],
  "def": [
    2000,
    0
  ],
  "spd": 3.6,
  "cri": 15,
  "acc": 250,
  "eva": 25,
  "res": {
    "fire": 70,
    "chill": 70,
    "thunder": 70
  },
  "skills": [
    {
      "key": "Skill_MP_EmperorChickSpCH_N_1",
      "name": "칙 머신캐논",
      "icon": "MGShot",
      "desc": "대구경 기관포로 {0} 피해를 주고, 대상에게 무작위 방해 효과를 부여합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 5,
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
                "icon": "BuffIcon_ATK_DOWN",
                "desc": {
                  "desc": "무장 파괴 : 공격력 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "40%",
                  "type": 1,
                  "attack": {
                    "base": "-50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ACCURACY_DOWN",
                "desc": {
                  "desc": "조준기 파괴 : 적중 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "40%",
                  "type": 7,
                  "accuracy": {
                    "base": "-50%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "장갑 파괴 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "40%",
                  "type": 3,
                  "defense": {
                    "base": "-50%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "추진기 파괴 : 회피 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "40%",
                  "type": 11,
                  "evade": {
                    "base": "-50%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "약점 노출 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 48,
                  "damage_increase": {
                    "base": "50%",
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
      "key": "Skill_MP_EmperorChickSpCH_Challenge1_2",
      "name": "분노의 칙 파이널 어택",
      "icon": "WideBeamShot",
      "desc": "끓어오르는 분노를 소모하여 중장형을 선 타겟으로 전 무장을 발사해 목표 범위에 {0} 피해를 줍니다. 목표 중심점 밖일수록 피해가 감소합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.5,
        "range": 6,
        "ap": 10,
        "grid": "#1$2#3$45$6#7$8#9",
        "target_ground": false,
        "summon": null,
        "use": {
          "key": "Effect_MP_EmperorChickSpCH_Challenge1_33",
          "count": 1
        },
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "분노의 칙 파이널 어택 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 3,
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
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_EmperorChickSpCH_Challenge1_3",
      "name": "낙오자",
      "icon": "SelfAtkBuff",
      "desc": "철충들이 낙오(파괴)될 때마다 <복수심>이 적용 되고 낙오한 철충이 5마리가 될 시 <끓어오르는 분노> 상태로 <분노의 칙 파이널 어택> 스킬을 사용합니다. 적 군이 사망 시 <사라진 분노>가 적용 되고 3라운드 동안 철충들이 낙오(파괴)되더라도 <복수심>이 발동되지 않습니다.\n\n복수심 : 공격력 / 방어력 / 적중률 증가\n끓어오르는 분노 : 해당 상태가 적용 되있을 시 <분노의 칙 파이널 어택> 스킬 사용\n사라진 분노 : 공격력 / 방어력 감소       낙오자 발생 : 철충들이 낙오(파괴) 된 상태",
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "복수심 : 공격력 +{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "15%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "복수심 : 방어력 +{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "25%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "복수심 : 적중률 +{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "공격 명령 하달",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "낙오자 발생",
                  "type": 1,
                  "value": "-1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 2,
                  "defense": {
                    "base": -1,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 5
          },
          {
            "on": "team_dead",
            "if": {
              "on": {
                "target": "self",
                "select": [
                  "Effect_MP_EmperorChickSpCH_Challenge1_32"
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
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "끓어오르는 분노",
                  "type": 0,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 8,
                  "critical": {
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
            "on": "team_dead",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_EmperorChickSpCH_Challenge1_33"
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
                  "desc": "끓어오르는 분노",
                  "type": 0,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 69,
                  "off": {
                    "type": 2
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 1
          },
          {
            "on": "enemy_dead",
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
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "사라진 분노 : 복수심 해제",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
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
                "icon": "BuffIcon_ATK_DOWN",
                "desc": {
                  "desc": "사라진 분노 : 공격력 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "-50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "사라진 분노 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
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
              }
            ],
            "maxStack": 0
          },
          {
            "on": "team_dead",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_EmperorChickSpCH_Challenge1_35"
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
                  "desc": "사라진 분노 : 복수심 해제",
                  "type": 1,
                  "value": "0"
                },
                "attr": 3,
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
      "key": "Skill_MP_EmperorChickSpCH_Challenge1_4",
      "name": "지휘 집중",
      "icon": "SelfDefBuff",
      "desc": "분노로 인해 집중이 흩어져 <지휘 집중>할 수 없습니다.\n\n지휘 집중 : 해제 불가의 해로운 효과 저항 적용",
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
        "buff_rate": 0,
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
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "지휘 집중 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 91,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "80%",
                      "per": "0%"
                    }
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
      "key": "Skill_MP_EmperorChickSpCH_N_5",
      "name": "명령",
      "icon": "TeamAtkBuff",
      "desc": "라운드 개시 시 주위의 모든 철충들에게 쓰러져도 다시 일어날 수 있도록 <근성>을 부여하고 일정 확률로 <공격 명령>을 내립니다.\n\n근성 : 해제 불가의 전투 속행 효과\n공격 명령 : 높은 확률로 방어 관통 / 방어막 무시 / 피해 감소 무시 효과 적용",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "around",
        "target_ground": true,
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
                  "Effect_MP_EmperorChickSpCH_N_31"
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "공격 명령",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
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
                "icon": "BuffIcon_DEF_RESSURRECT",
                "desc": {
                  "desc": "근성 : {0}HP로 전투 속행 (해제 불가)",
                  "type": 0,
                  "value": "100"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 82,
                  "revive": {
                    "base": 100,
                    "per": 0
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
                  "Effect_MP_EmperorChickSpCH_N_31"
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
                "icon": "BuffIcon_BARRIER_PIERCE",
                "desc": {
                  "desc": "공격 명령 : 방어막 / 피해 감소 무시",
                  "type": 1,
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
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_PIERCE_UP",
                "desc": {
                  "desc": "공격 명령 : 방어 관통 +{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 58,
                  "penetration": {
                    "base": "30%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 2
          }
        ]
      }
    }
  ]
};