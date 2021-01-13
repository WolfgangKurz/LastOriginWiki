export default {
  "id": "GigantesC_SA5",
  "name": "기간테스 커스텀",
  "desc": "거점 방어에 특화된 모델인건가? 행동은 굼떠보이지만 좀처럼 빈틈이 안보여. 하지만 내 소우 피쉬라면 해결할 수 있을걸?\n\n\n - 트리아이나 보고함",
  "icon": "TbarIcon_MP_GigantesC_N",
  "ai": "AI_GigantesC_Normal_01",
  "rarity": 5,
  "type": 1,
  "role": 0,
  "isBoss": false,
  "hp": [
    3705,
    403
  ],
  "atk": [
    140,
    12
  ],
  "def": [
    3000,
    35
  ],
  "spd": 3.15,
  "cri": 10,
  "acc": 250,
  "eva": 0,
  "res": {
    "fire": -35,
    "chill": 20,
    "thunder": 20
  },
  "skills": [
    {
      "key": "Skill_MP_GigantesC_N_1",
      "name": "너클 버스터",
      "icon": "MeleeAttack",
      "desc": "대상을 강타해 {0} 피해를 주고 뒤로 한 칸 밉니다. 자신의 HP %가 낮을수록 피해량이 증가하며, 20% 이하인 경우 방어막과 피해 감소 효과를 무시합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 2.4,
        "range": 1,
        "ap": 8,
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
                "icon": "BuffIcon_DamageAmp_Me",
                "desc": {
                  "desc": "너클 버스터 : HP 낮을수록 피해량+{0}% (최대)",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 80,
                  "damage_by_hp": {
                    "target": "self",
                    "damage": {
                      "base": "100%",
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
            "on": "attack_success",
            "if": {
              "hp<=": "20%"
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
                  "desc": "너클 버스터 : 방어막 / 피해 감소 무시",
                  "type": 1,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
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
                "icon": "BuffIcon_Push",
                "desc": {
                  "desc": "너클 버스터 : 뒤로 {0}칸 밀기",
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
                "overlap": 0
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_GigantesC_N_2",
      "name": "차지 스매시",
      "icon": "AssaultAttack",
      "desc": "대상을 밀쳐 {0} 피해를 주고 2칸 뒤로 날립니다. 피격 대상은 AP가 감소합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 2,
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
                "icon": "BuffIcon_Push",
                "desc": {
                  "desc": "차지 스매시 : 뒤로 {0}칸 밀기",
                  "type": 0,
                  "value": "2"
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
                      "base": 2,
                      "per": 0
                    }
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "차지 스매시 : AP {0}",
                  "type": 0,
                  "value": "-2"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": -2,
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
    },
    {
      "key": "Skill_MP_GigantesC_SA5_3",
      "name": "개량형 방어 OS",
      "icon": "TeamDefBuff",
      "desc": "라운드 개시 시, HP가 20% 이하일 경우 방어력과 효과 저항이 크게 증가합니다. 해당 상태에서 화염 공격에 피격 시, OS가 오작동을 일으켜 일시적으로 해제됩니다.",
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
              "hp<=": "20%"
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
                  "desc": "개량형 방어 OS : 방어력+{0}%",
                  "type": 1,
                  "value": "3.500000"
                },
                "attr": 0,
                "erase": {
                  "until": {
                    "damaged": "fire"
                  }
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "350%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "개량형 방어 OS : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "until": {
                    "damaged": "fire"
                  }
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
            "maxStack": 2
          }
        ]
      }
    },
    {
      "key": "Skill_MP_GigantesC_N_4",
      "name": "거점 순찰",
      "icon": "TeamDefBuff",
      "desc": "인접한 보호기 제외 아군을 보호하며 대상의 행동력을 증가시킵니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "24568",
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
              1,
              2
            ],
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_Char",
                "desc": {
                  "desc": "거점 순찰 : 지정 대상 보호",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 76,
                  "guard": "target"
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "거점 순찰 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "15%",
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
      "key": "Skill_MP_GigantesC_SA5_5",
      "name": "보호 모드",
      "icon": "TeamDefBuff",
      "desc": "전투 개시 시, 범위 내 아군에게 받는 피해 감소를 1회 부여합니다. 화염 공격에 피격 시, 해당 효과를 해제 하고 받는 피해를 증가시킵니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "4>56",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "보호 모드 : 받는 피해 감소+{0}% (1회)",
                  "type": 1,
                  "value": "0.800000"
                },
                "attr": 0,
                "erase": {
                  "count": 1,
                  "trigger": "damaged"
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
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
            "on": {
              "damaged": "fire"
            },
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  "Effect_MP_GigantesC_SA1_5",
                  "Effect_MP_GigantesC_SA2_5",
                  "Effect_MP_GigantesC_SA3_5",
                  "Effect_MP_GigantesC_SA4_5",
                  "Effect_MP_GigantesC_SA5_5",
                  "Effect_MP_GigantesC_SA6_5"
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
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "보호 모드 오작동 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "30%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "보호 모드 해제",
                  "type": 0,
                  "value": "36"
                },
                "attr": 1,
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
    }
  ]
};