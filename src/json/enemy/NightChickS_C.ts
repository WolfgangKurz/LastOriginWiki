export default {
  "id": "NightChickS_C",
  "icon": "TbarIcon_MP_NightChickS_N",
  "ai": "AI_Mp_NCShield_Challenge_01",
  "rarity": 5,
  "type": 1,
  "role": 0,
  "isBoss": false,
  "hp": [
    240000,
    0
  ],
  "atk": [
    750,
    0
  ],
  "def": [
    3000,
    0
  ],
  "spd": 4,
  "cri": 10,
  "acc": 960,
  "eva": 40,
  "res": {
    "fire": 75,
    "chill": 75,
    "thunder": 75
  },
  "skills": [
    {
      "key": "Skill_MP_NightChickS_C_1",
      "name": "칙 마무리 강타",
      "icon": "MeleeAttack",
      "desc": "대상에게 {0} 보호 무시 피해를 줍니다. 대상이 <나이트 칙?> 또는 <나이트 칙 런쳐??>의 해로운 효과가 적용된 상태면 강화 효과를 해제하며 피해량이 크게 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.5,
        "range": 5,
        "ap": 4,
        "grid": "single",
        "target_ground": false,
        "summon": null,
        "use": null,
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
                  "Effect_MP_NightChick_C_1",
                  "Effect_MP_NightChick_C_2",
                  "Effect_MP_NightChickM_C_1",
                  "Effect_MP_NightChickM_C_2"
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
                  "desc": "칙 마무리 강타 : 강화 해제",
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "칙 마무리 강타 : 피해량+{0}%",
                  "type": 1,
                  "value": "5"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "500%",
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
      "key": "Skill_MP_NightChickS_C_2",
      "name": "칙 업그레이드 준비",
      "icon": "ShieldWall",
      "desc": "5라운드 동안 대상을 지정 보호하며 <칙 업그레이드 준비> 효과가 적용됩니다. <칙 업그레이드 준비> 상태인 대상은 다음 라운드부터 <칙 업그레이드> 효과를 받아 공격력 / 적중 / 치명타 / 회피 / 행동력이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
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
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_Char",
                "desc": {
                  "desc": "칙 업그레이드 준비 : 지정 대상 보호",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 76,
                  "guard": "target"
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
      "key": "Skill_MP_NightChickS_C_3",
      "name": "칙 방패 방어술 (고급)",
      "icon": "SelfDefBuff",
      "desc": "라운드 개시 시, 모든 저항이 증가하며 해로운 효과를 해제합니다. 피격 시, <칙 방패 올리기> 효과가 발동해 2라운드 동안 방어력이 증가합니다. <칙 방패 올리기> 방어력 중첩이 7 이상인 상태에서 추가 피격 시, 해당 효과를 해제하고 해당 라운드 동안 해제 불가능한 피해 최소화 / 반격 효과가 적용됩니다.",
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
                "icon": "BuffIcon_FIRERES_UP",
                "desc": {
                  "desc": "칙 방패 방어술 (고급) : 화염 저항+{0}%",
                  "type": 1,
                  "value": "0.750000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "75%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ICERES_UP",
                "desc": {
                  "desc": "칙 방패 방어술 (고급) : 냉기 저항+{0}%",
                  "type": 1,
                  "value": "0.750000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 17,
                  "resist": {
                    "elem": "ice",
                    "value": {
                      "base": "75%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_LIGHTNINGRES_UP",
                "desc": {
                  "desc": "칙 방패 방어술 (고급) : 전기 저항+{0}%",
                  "type": 1,
                  "value": "0.750000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 19,
                  "resist": {
                    "elem": "lightning",
                    "value": {
                      "base": "75%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "칙 방패 방어술 (고급) : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.750000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
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
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "칙 방패 방어술 (고급) : 해로운 효과 해제",
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "칙 방패 올리기 : 방어력+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "50%",
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
      "key": "Skill_MP_NightChickS_C_4",
      "name": "칙 복원 시스템 제어",
      "icon": "SelfDefBuff",
      "desc": "전투 개시 시, 주변 아군들에게 <칙 복원 시스템> 효과가 적용됩니다. 라운드 개시 시, <칙 방패 올리기>중첩이 7 이면 <복원 시스템 오류> 상태가 되어 주변 아군의 <칙 복원 시스템>을 해제합니다. <칙 복원 시스템>은 자신이 <복원 시스템 오류> 상태가 아니면 라운드 개시 시, 다시 활성화됩니다.",
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "칙 복원 시스템 제어 : 복원 시스템 활성화 (해제 불가)",
                  "type": 0,
                  "value": "1"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 2,
                  "defense": {
                    "base": 1,
                    "per": 0
                  }
                },
                "overlap": 0
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "칙 복원 시스템 제어 : 복원 시스템 활성화 (해제 불가)",
                  "type": 0,
                  "value": "1"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 2,
                  "defense": {
                    "base": 1,
                    "per": 0
                  }
                },
                "overlap": 0
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
                  "Effect_MP_NightChickS_C_11"
                ],
                "stack": 7,
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
                "icon": "BuffIcon_DamageAmp_Opp",
                "desc": {
                  "desc": "칙 복원 시스템 오류 : 오류 발생",
                  "type": 0,
                  "value": "0.010000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 81,
                  "damage_by_hp": {
                    "target": "target",
                    "damage": {
                      "base": "1%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "칙 복원 시스템 오류 : 복원 시스템 해제",
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
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": "damaged",
            "if": {
              "on": {
                "target": "self",
                "select": [
                  "Effect_MP_NightChickS_C_11"
                ],
                "stack": 8,
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
                  "desc": "칙 철벽 방어술 : 피해 최소화 (해제 불가)",
                  "type": 0,
                  "value": "9999999"
                },
                "attr": 3,
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
              },
              {
                "icon": "BuffIcon_COUNTER",
                "desc": {
                  "desc": "칙 철벽 방어술 : {0}% 위력으로 반격",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
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
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "칙 방패 올리기 해제",
                  "type": 0,
                  "value": "3"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 88,
                  "off": {
                    "type": 3,
                    "target": 0
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
              1,
              2
            ],
            "target": 2,
            "buffs": [
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
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "칙 복원 시스템 오류 : 효과 저항 해제",
                  "type": 0,
                  "value": "91"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 69,
                  "off": {
                    "type": 91
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
      "key": "Skill_MP_NightChickS_C_5",
      "name": "칙 업그레이드",
      "icon": "SelfDefDeBuff",
      "desc": "라운드 개시 시, <칙 업그레이드 준비> 상태인 공격기와 지원기의 공격력 / 적중 / 회피 / 치명타 / 행동력이 증가합니다. 공격력 업그레이드가 4단계 이상인 경우, 대상의 공격은 방어력 / 방어막 / 피해 감소 효과를 무시합니다. 대상이 보호기일 경우, 강화 효과가 적용되지 않고 받는 피해가 크게 증가하며 강화 효과가 해제됩니다.",
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
            "on": "round",
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  "Effect_MP_NightChickS_C_2"
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
              1,
              2
            ],
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "칙 업그레이드 : 공격력+{0}%",
                  "type": 1,
                  "value": "0"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 1,
                  "attack": {
                    "base": "0%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "칙 업그레이드 : 적중+{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 0,
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
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "칙 업그레이드 : 회피+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "20%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "칙 업그레이드 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.050000"
                },
                "attr": 0,
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "칙 업그레이드 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 0,
                "erase": {},
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
          },
          {
            "on": "round",
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  "Effect_MP_NightChickS_C_2"
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
              1,
              2
            ],
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "칙 업그레이드 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 0,
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
              }
            ],
            "maxStack": 0
          },
          {
            "on": "round",
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  "Effect_MP_NightChickS_C_2"
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
              0
            ],
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "칙 업그레이드 호환 오류 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "100%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "칙 업그레이드 호환 오류 : 강화 해제",
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
              }
            ],
            "maxStack": 0
          }
        ]
      }
    }
  ]
};