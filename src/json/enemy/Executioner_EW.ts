export default {
  "id": "Executioner_EW",
  "name": "익스큐셔너",
  "desc": "전장에서 등장하는 더욱 강력해진 익스큐셔너로 블레이드가 파괴된다면 막강한 파괴력을 지니게 될 것입니다.\n\n\n보고자 ???",
  "icon": "TbarIcon_MP_Executioner_B06",
  "ai": "AI_Executioner_01",
  "rarity": 5,
  "type": 2,
  "role": 1,
  "isBoss": true,
  "hp": [
    55000,
    250
  ],
  "atk": [
    300,
    20
  ],
  "def": [
    0,
    0
  ],
  "spd": 4.5,
  "cri": 15,
  "acc": 350,
  "eva": 120,
  "res": {
    "fire": 30,
    "chill": 30,
    "thunder": 30
  },
  "skills": [
    {
      "key": "Skill_MP_Executioner_EW_1",
      "name": "처형 개시",
      "icon": "SwordAttk",
      "desc": "지정 범위에 {0} 피해를 줍니다. 대상이 행동 불가 상태면 피해량이 크게 증가하며, 해제 불가 행동 불능 효과를 부여합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 5,
        "ap": 4,
        "grid": "#15#7",
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
                  22
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
                  "desc": "처형 개시 : 피해량+{0}%",
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
                    "per": "1%"
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "처형 개시 : 행동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
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
      "key": "Skill_MP_Executioner_EW_2",
      "name": "학살",
      "icon": "WideSwordAttk",
      "desc": "지정 범위에 {0} 보호 무시 피해를 줍니다. 처형자 중첩이 5 이상이면 추가 화염 피해를 주며, 대상에게 걸려있는 강화 효과를 해제합니다. 처형자 중첩을 5 소모합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.25,
        "range": 4,
        "ap": 8,
        "grid": "13579",
        "target_ground": false,
        "summon": null,
        "use": {
          "key": "Effect_MP_Executioner_EW_3",
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
                "target": "self",
                "select": [
                  "Effect_MP_Executioner_EW_3"
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_FireATK_UP",
                "desc": {
                  "desc": "대폭발 : 추가 화염 피해+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 3,
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
                      "per": "1%"
                    }
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "대폭발 : 강화 효과 해제",
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
                "overlap": 0
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Executioner_EW_3",
      "name": "처형자",
      "icon": "SelfAtkBuff",
      "desc": "피격 시, 공격력이 영구적으로 증가합니다. 자신이 <공격 연계> 효과를 받는 상태면 공격 대상의 방어막과 피해 감소 효과를 무시합니다.",
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
                  "desc": "처형자 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.080000"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "8%",
                    "per": "1%"
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
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_ExecutionerLB_EW_3"
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
                "icon": "BuffIcon_BARRIER_PIERCE",
                "desc": {
                  "desc": "처형자 : 방어막 / 피해 감소 무시",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "until": {
                    "after": "use_skill"
                  }
                },
                "value": {
                  "isBuff": true,
                  "type": 94,
                  "penetration_force": true
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
      "key": "Skill_MP_Executioner_EW_4",
      "name": "왜곡장",
      "icon": "SelfDefBuff",
      "desc": "모든 피해를 최소 피해만 받습니다. 처형자 중첩이 5이상인 상태로 피격 시, 오버플로우로 인한 고정 물리 피해를 받으며 모든 강화 효과가 해제됩니다.",
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
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "왜곡장 : 피해 최소화",
                  "type": 1,
                  "value": "999999"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 34,
                  "damage_minimize": {
                    "base": 999999,
                    "per": 1
                  }
                },
                "overlap": 0
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
                  "Effect_MP_Executioner_EW_3"
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "오버플로우 : {0}% 물리 피해",
                  "type": 1,
                  "value": "5"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "500%",
                    "per": "1%"
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "오버플로우 : 강화 해제",
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
                "overlap": 0
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Executioner_EW_5",
      "name": "파괴 본능",
      "icon": "SelfAtkBuff",
      "desc": "아군이 사망 시 파괴 본능에 빠져\n해당 라운드에는 행동 불가 상태가 되고,\n3라운드 동안 방어 관통력 / 공격력이 대폭 증가합니다.\n파괴 본능이 적용된 상태에서 속성 공격에 피격 시 높은 확률로 해당 라운드에는 행동 불가 상태에 빠지게 됩니다.",
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
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "파괴 본능 : 행동 불가",
                  "type": 0,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 22,
                  "stun": true
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_DEF_PIERCE_UP",
                "desc": {
                  "desc": "파괴 본능 : 방어 관통 {0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 58,
                  "penetration": {
                    "base": "30%",
                    "per": "0%"
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "파괴 본능 : 공격력 {0}%",
                  "type": 1,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "200%",
                    "per": "0%"
                  }
                },
                "overlap": 1
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
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_EW_5"
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
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "파괴 본능 부작용 : 행동 불가",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
                  "type": 22,
                  "stun": true
                },
                "overlap": 1
              }
            ],
            "maxStack": 1
          },
          {
            "on": {
              "damaged": "ice"
            },
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_EW_5"
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
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "파괴 본능 부작용 : 행동 불가",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
                  "type": 22,
                  "stun": true
                },
                "overlap": 1
              }
            ],
            "maxStack": 1
          },
          {
            "on": {
              "damaged": "lightning"
            },
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Executioner_EW_5"
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
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "파괴 본능 부작용 : 행동 불가",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
                  "type": 22,
                  "stun": true
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
      "key": "Skill_MP_Executioner_N_6",
      "name": "본체 파괴",
      "icon": "SuicideBomb",
      "desc": "행동 불능이 되면 모든 파츠가 파괴됩니다.",
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
            "on": "self_dead",
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "본체 파괴 : {0}% 물리 피해",
                  "type": 1,
                  "value": "999.990000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "99999%",
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