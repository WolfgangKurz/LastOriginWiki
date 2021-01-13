export default {
  "id": "FryerShell_N",
  "name": "프라이어 쉘",
  "desc": "<교전 기록 없음>",
  "icon": "TbarIcon_MP_FryerShell_N",
  "ai": "AI_MP_FridgerShooter_01",
  "rarity": 4,
  "type": 0,
  "role": 1,
  "isBoss": false,
  "hp": [
    510.3333,
    50
  ],
  "atk": [
    168,
    6.84
  ],
  "def": [
    3640,
    92
  ],
  "spd": 3.8,
  "cri": 10,
  "acc": 300,
  "eva": 10,
  "res": {
    "fire": 50,
    "chill": 50,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_FryerShell_N_1",
      "name": "리펄서 쇼크",
      "icon": "IceShot",
      "desc": "{0} 전기 피해를 주고, 대상이 회피 감소 상태일 시 추가 전기 피해를 줍니다.",
      "passive": false,
      "type": 3,
      "target": "enemy",
      "buff": {
        "rate": 1.2,
        "range": 3,
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
                "icon": "BuffIcon_LightningATK_UP",
                "desc": {
                  "desc": "리펄서 쇼크 : 추가 전기 피해",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 86,
                  "damage_add": {
                    "elem": "lightning",
                    "damage": {
                      "base": "50%",
                      "per": "0%"
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
      "key": "Skill_MP_FryerShell_N_2",
      "name": "플라즈마 스트라이크",
      "icon": "WideIceShot",
      "desc": "{0} 전기 피해를 주고, 대상이 회피 감소 상태일 시 피해 감소를 해제합니다.",
      "passive": false,
      "type": 3,
      "target": "enemy",
      "buff": {
        "rate": 1.8,
        "range": 4,
        "ap": 6,
        "grid": "45",
        "target_ground": true,
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
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "플라즈마 스트라이크 : 피해 감소 해제",
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
    },
    {
      "key": "Skill_MP_FryerShell_N_3",
      "name": "연결 상태",
      "icon": "SelfAtkBuff",
      "desc": "라운드 개시 시, 스쿼드에 프라이어 헤드가 있는 경우 자신의 공격력 / 치명타 / 적중이 증가합니다.",
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
              "in_squad": [
                "MOB_MP_FryerHead_N",
                "MOB_MP_FryerHead_TU1",
                "MOB_MP_FryerHead_TU2",
                "MOB_MP_FryerHead_TU3",
                "MOB_MP_FryerHead_TU4",
                "MOB_MP_FryerHead_TU5"
              ]
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
                  "desc": "연결 상태 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "20%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "연결 상태 : 공격력+{0}%",
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
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "연결 상태 : 적중+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "20%",
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
      "key": "Skill_MP_FryerShell_N_4",
      "name": "충전 장치",
      "icon": "IceShot",
      "desc": "라운드 개시 시, 자신이 회피 감소 상태일 경우 공격력 / 효과 저항이 크게 증가합니다.",
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "충전 장치 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.600000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "60%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "충전 장치 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "1"
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
                      "base": "100%",
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
    }
  ]
};