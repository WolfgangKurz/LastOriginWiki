export default {
  "id": "ProgramMobAS_TU2",
  "icon": "TbarIcon_MP_ProgramMobAS_N",
  "ai": "AI_ProgramMobAS_Normal_01",
  "rarity": 4,
  "type": 1,
  "role": 2,
  "isBoss": false,
  "hp": [
    648,
    90.7
  ],
  "atk": [
    69,
    6.9
  ],
  "def": [
    142,
    6.1045
  ],
  "spd": 3.55,
  "cri": 5,
  "acc": 225,
  "eva": 27.5,
  "res": {
    "fire": -25,
    "chill": 0,
    "thunder": 50
  },
  "skills": [
    {
      "key": "Skill_MP_ProgramMobAS_N_1",
      "name": "스턴 스파이크",
      "icon": "MultiMissile",
      "desc": "대상에게 {0} 전기 속성 피해를 줍니다. 대상이 냉기 저항 감소 상태면 감전시켜 지속 전기 피해를 줍니다.",
      "passive": false,
      "type": 3,
      "target": "enemy",
      "buff": {
        "rate": 0.9,
        "range": 3,
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
                  17
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
                "icon": "BuffIcon_LightningDMG_DOT",
                "desc": {
                  "desc": "감전 : 지속 전기 피해 {0}",
                  "type": 0,
                  "value": "300"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "33%",
                  "type": 68,
                  "fixed_damage": {
                    "elem": "lightning",
                    "damage": {
                      "base": 300,
                      "per": 1
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
      "key": "Skill_MP_ProgramMobAS_N_2",
      "name": "파일 벙커 드라이브",
      "icon": "Scan",
      "desc": "파일 벙커로 대상에게 {0} 피해를 주며, 대상을 뒤로 밉니다. 대상에게 적용 중인 모든 보호효과를 해제하며, 표식 상태면 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.8,
        "range": 2,
        "ap": 9,
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "포착 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.330000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "33%",
                    "per": "1%"
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "파일 벙커 드라이브 : 행 보호 해제",
                  "type": 0,
                  "value": "50"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 88,
                  "off": {
                    "type": 50,
                    "target": 0
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "파일 벙커 드라이브 : 열 보호 해제",
                  "type": 0,
                  "value": "75"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 88,
                  "off": {
                    "type": 75,
                    "target": 0
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "파일 벙커 드라이브 : 지정 보호 해제",
                  "type": 0,
                  "value": "76"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 88,
                  "off": {
                    "type": 76,
                    "target": 0
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_Push",
                "desc": {
                  "desc": "파일 벙커 드라이브 : 뒤로 {0}칸 밀기",
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
      "key": "Skill_MP_ProgramMobAS_N_3",
      "name": "노즐 강화",
      "icon": "TeamAtkBuff",
      "desc": "경장형에게 주는 피해가 증가하며, 피해 감소 효과와 방어막을 무시합니다.",
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
                "icon": "BuffIcon_TROOPER_DMG_UP",
                "desc": {
                  "desc": "노즐 강화 : 대 경장 피해량+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 60,
                  "damage_multiply": {
                    "target": "light",
                    "value": {
                      "base": "30%",
                      "per": "1%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_BARRIER_PIERCE",
                "desc": {
                  "desc": "노즐 강화 : 방어막 / 피해 감소 무시",
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
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_ProgramMobAS_N_4",
      "name": "전열 돌파",
      "icon": "SelfDefBuff",
      "desc": "라운드 개시 시, 일정 확률로 같은 열에 인접한 아군의 공격을 지원합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "28",
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
                "icon": "BuffIcon_SUPPORT_ATTACK",
                "desc": {
                  "desc": "전열 돌파 : {0}% 확률 공격 지원",
                  "type": 1,
                  "value": "0.670000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 77,
                  "attack_support": {
                    "base": "67%",
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