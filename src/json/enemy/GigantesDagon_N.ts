export default {
  "id": "GigantesDagon_N",
  "icon": "TbarIcon_MP_GigantesDagon_N",
  "ai": "AI_MP_Dagon_Event_01",
  "rarity": 4,
  "type": 1,
  "role": 0,
  "isBoss": false,
  "hp": [
    16500,
    1500
  ],
  "atk": [
    220,
    20
  ],
  "def": [
    440,
    40
  ],
  "spd": 3.3,
  "cri": 50,
  "acc": 125,
  "eva": 0,
  "res": {
    "fire": 25,
    "chill": 99,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_GigantesDagon_N_1",
      "name": "심해의 분노",
      "icon": "MeleeAttack",
      "desc": "대상을 강타해 {0} 보호 무시 피해를 줍니다. 대상의 방어력 / 방어막 / 피해 감소 효과를 무시합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 3,
        "range": 1,
        "ap": 8,
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
                "icon": "BuffIcon_DEF_PIERCE_UP",
                "desc": {
                  "desc": "심해의 분노 : 방어 관통+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
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
              },
              {
                "icon": "BuffIcon_BARRIER_PIERCE",
                "desc": {
                  "desc": "심해의 분노 : 방어막 / 피해 감소 무시",
                  "type": 0,
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
          }
        ]
      }
    },
    {
      "key": "Skill_MP_GigantesDagon_N_2",
      "name": "타이달 어썰트",
      "icon": "AssaultAttack",
      "desc": "대상에게 돌격해 {0} 피해를 줍니다. 대상이 표식 상태면 강화 효과를 해제하고 행동 불가 상태로 만든 후, 뒤로 1칸 밀어냅니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.5,
        "range": 2,
        "ap": 6,
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
                  87
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
                "icon": "BuffIcon_Push",
                "desc": {
                  "desc": "타이달 어썰트 : 뒤로 {0}칸 밀기",
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
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "타이달 어썰트 : 강화 해제",
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
                "overlap": 0
              },
              {
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "타이달 어썰트 : 행동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
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
      "key": "Skill_MP_GigantesDagon_N_3",
      "name": "심해의 거신",
      "icon": "SelfDefBuff",
      "desc": "전투 개시 시 방어력 / 냉기 / 효과 저항이 크게 증가하며, 5라운드 동안 행 보호 / 받는 피해 감소 효과가 적용됩니다.",
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "심해의 거신 : 방어력+{0}%",
                  "type": 1,
                  "value": "5"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "500%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ICERES_UP",
                "desc": {
                  "desc": "심해의 거신 : 냉기 저항+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 17,
                  "resist": {
                    "elem": "ice",
                    "value": {
                      "base": "100%",
                      "per": "1%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "심해의 거신 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.750000"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 91,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "75%",
                      "per": "1%"
                    }
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
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
                "icon": "BuffIcon_DEF_Line",
                "desc": {
                  "desc": "심해의 수호 : 행 보호 (해제불가)",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 50,
                  "guard": "col"
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "심해의 수호 : 받는 피해 {0}% 감소 (해제불가)",
                  "type": 1,
                  "value": "0.950000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "95%",
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
      "key": "Skill_MP_GigantesDagon_N_4",
      "name": "보호 전환",
      "icon": "TeamDefBuff",
      "desc": "공격 시, 2라운드 동안 범위 내에 있는 아군에게 지정 대상 보호 효과를 부여합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "4>2389",
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
                "icon": "BuffIcon_DEF_Char",
                "desc": {
                  "desc": "보호 전환 : 지정 대상 보호",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
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
    }
  ]
};