export default {
  "id": "MammothW_TU2",
  "icon": "TbarIcon_MP_MammothW_N",
  "ai": "AI_Mp_MammothW_Normal_01",
  "rarity": 5,
  "type": 1,
  "role": 1,
  "isBoss": false,
  "hp": [
    6000,
    200
  ],
  "atk": [
    150,
    12
  ],
  "def": [
    800,
    20
  ],
  "spd": 3.8,
  "cri": 5,
  "acc": 175,
  "eva": 0,
  "res": {
    "fire": -50,
    "chill": 75,
    "thunder": 50
  },
  "skills": [
    {
      "key": "Skill_MP_MammothW_N_1",
      "name": "확산 포격",
      "icon": "CannonShotWide",
      "desc": "포격으로 지정 범위에 {0} 피해를 줍니다. 대상이 회피 / 방어력 감소 상태면 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 2,
        "ap": 6,
        "grid": "1457",
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
                  3,
                  11
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
                  "desc": "집중 포격 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "20%",
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
      "key": "Skill_MP_MammothW_N_2",
      "name": "클러스터 캐논",
      "icon": "CannonShotDelay",
      "desc": "1라운드 뒤에 착탄하는 포격으로 지정 범위에 {0} 보호 무시 피해를 줍니다. 목표 지점은 50% 피해만 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.35,
        "range": 6,
        "ap": 6,
        "grid": "24#568",
        "target_ground": true,
        "summon": null,
        "use": null,
        "dismiss_guard": true,
        "acc_bonus": 0,
        "buff_rate": 0,
        "buffs": [
          {
            "on": "attack_success",
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  78,
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "직격 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "40%",
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
      "key": "Skill_MP_MammothW_N_3",
      "name": "설원 위장",
      "icon": "SelfDefBuff",
      "desc": "냉기 속성 저항이 증가하며, <혹한> 효과를 받는 상태에선 방어력 / 효과 저항이 증가합니다.",
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
                "icon": "BuffIcon_ICERES_UP",
                "desc": {
                  "desc": "한랭지 적응 : 냉기 저항+{0}% (해제 불가)",
                  "type": 1,
                  "value": "0.750000"
                },
                "attr": 3,
                "erase": {},
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
              }
            ],
            "maxStack": 1
          },
          {
            "on": "round",
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_Frostbite_N_4"
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "설원 위장 : 방어력+{0}%",
                  "type": 1,
                  "value": "5"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "500%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "설원 위장 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
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
                      "base": "50%",
                      "per": "0%"
                    }
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
      "key": "Skill_MP_MammothW_N_4",
      "name": "포신 급속 냉각",
      "icon": "SelfSpdBuff",
      "desc": "공격 후, 포신을 냉각해 3라운드 동안 행동력이 증가합니다.",
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "포신 급속 냉각 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "25%",
                    "per": "1%"
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
      "key": "Skill_MP_MammothW_N_7",
      "name": "클러스터 캐논 (착탄)",
      "icon": "CannonShotDelay",
      "desc": "포격으로 지정 범위에 {0} 보호 무시 피해를 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.2,
        "range": 6,
        "ap": 0,
        "grid": "24#568",
        "target_ground": true,
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
                  78,
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "직격 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "40%",
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
    }
  ]
};