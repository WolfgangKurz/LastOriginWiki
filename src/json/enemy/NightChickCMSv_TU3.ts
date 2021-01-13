export default {
  "id": "NightChickCMSv_TU3",
  "name": "생존형 케미컬 칙",
  "desc": "저 철충 때문에 소중한 나무들이 죽어가고 있어요! 저 녀석한테서 흘러나오는 더러운 액체를 어서 제 급수기로 씻어내버리죠!\n\n\n- 엘븐 포레스트 보고함",
  "icon": "TbarIcon_MP_NightChickCM_N",
  "ai": "AI_MP_CMChickP_Normal_01",
  "rarity": 4,
  "type": 0,
  "role": 2,
  "isBoss": false,
  "hp": [
    6929,
    468
  ],
  "atk": [
    226,
    5.8
  ],
  "def": [
    189,
    5.7
  ],
  "spd": 4.3,
  "cri": 5,
  "acc": 250,
  "eva": 115,
  "res": {
    "fire": 70,
    "chill": 70,
    "thunder": 70
  },
  "skills": [
    {
      "key": "Skill_MP_NightChickCMSv_N_1",
      "name": "강화 화학탄 발사",
      "icon": "Missile",
      "desc": "강화 화학탄을 발사해 {0} 피해를 줍니다. 3라운드 동안 대상에게 지속 고정 피해를 주고, 일정 확률로 모든 속성 저항과 행동력을 감소시킵니다. ",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.75,
        "range": 4,
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
                "icon": "BuffIcon_FIRERES_DOWN",
                "desc": {
                  "desc": "화학탄 : 화염 저항 {0}%",
                  "type": 1,
                  "value": "-0.150000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "-15%",
                      "per": "-1%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "부식 : 행동력 {0}%",
                  "type": 1,
                  "value": "-0.100000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
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
                  "desc": "부식 : 지속 물리 피해 {0}",
                  "type": 0,
                  "value": "180"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 180,
                    "per": 10
                  }
                },
                "overlap": 3
              },
              {
                "icon": "BuffIcon_ICERES_DOWN",
                "desc": {
                  "desc": "화학탄 : 냉기 저항 {0}%",
                  "type": 1,
                  "value": "-0.150000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 17,
                  "resist": {
                    "elem": "ice",
                    "value": {
                      "base": "-15%",
                      "per": "-1%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                "desc": {
                  "desc": "화학탄 : 전기 저항 {0}%",
                  "type": 1,
                  "value": "-0.150000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 19,
                  "resist": {
                    "elem": "lightning",
                    "value": {
                      "base": "-15%",
                      "per": "-1%"
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
      "key": "Skill_MP_NightChickCMSv_N_2",
      "name": "집속 화학탄 발사",
      "icon": "Missile",
      "desc": "집속 화학탄을 발사해 {0} 피해를 줍니다. 3라운드 동안 대상에게 지속 고정 피해를 주고, 일정 확률로 강화 효과를 해제합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 2,
        "range": 4,
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "집속 화학탄 : 강화 효과 해제",
                  "type": 1,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 99,
                  "off": 0
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_phyDMG_DOT",
                "desc": {
                  "desc": "부식 : 지속 물리 피해 {0}",
                  "type": 0,
                  "value": "180"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 180,
                    "per": 10
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
      "key": "Skill_MP_NightChickCMSv_N_3",
      "name": "환경 적응 시스템",
      "icon": "TeamDefBuff",
      "desc": "라운드 개시 시, 자신과 인접한 아군의 모든 저항력을 올립니다.",
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
              0,
              1,
              2
            ],
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "환경 적응 시스템 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.100000"
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
                      "base": "10%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_FIRERES_UP",
                "desc": {
                  "desc": "환경 적응 시스템 : 화염 저항+{0}%",
                  "type": 1,
                  "value": "0.200000"
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
                      "base": "20%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ICERES_UP",
                "desc": {
                  "desc": "환경 적응 시스템 : 냉기 저항+{0}%",
                  "type": 1,
                  "value": "0.200000"
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
                      "base": "20%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_LIGHTNINGRES_UP",
                "desc": {
                  "desc": "환경 적응 시스템 : 전기 저항+{0}%",
                  "type": 1,
                  "value": "0.200000"
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
                      "base": "20%",
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
      "key": "Skill_MP_NightChickCMSv_N_4",
      "name": "화학 용액 유출",
      "icon": "SelfAtkDeBuff",
      "desc": "라운드 개시 시, 자신이 침수 상태인 경우 4라운드 동안 적중률이 감소합니다.",
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
                  "Effect_BUFF_Flood_N_1",
                  "Effect_BUFF_Flood_N_2",
                  "Effect_BUFF_Flood_N_3",
                  "Effect_BUFF_Flood_N_4",
                  "Effect_BUFF_Flood_N_5",
                  "Effect_BUFF_Flood_N_6",
                  "Effect_BUFF_Flood_N_7",
                  "Effect_BUFF_Flood_N_8",
                  "Effect_BUFF_Flood_N_9",
                  "Effect_BUFF_Flood_N_11",
                  "Effect_BUFF_Flood_N_12",
                  "Effect_BUFF_Flood_N_13"
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
                "icon": "BuffIcon_ACCURACY_DOWN",
                "desc": {
                  "desc": "화학 용액 유출 : 적중 {0}%",
                  "type": 1,
                  "value": "-1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 4
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "-100%",
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
    }
  ]
};