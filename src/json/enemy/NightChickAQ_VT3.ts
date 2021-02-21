export default {
  "id": "NightChickAQ_VT3",
  "icon": "TbarIcon_MP_NightChickAQ_N",
  "ai": "AI_AquaChick_Normal_01",
  "rarity": 4,
  "type": 0,
  "role": 2,
  "isBoss": false,
  "hp": [
    11000,
    180
  ],
  "atk": [
    40,
    4.25
  ],
  "def": [
    100,
    7.5
  ],
  "spd": 4.15,
  "cri": 5,
  "acc": 350,
  "eva": 0,
  "res": {
    "fire": 50,
    "chill": 99,
    "thunder": -50
  },
  "skills": [
    {
      "key": "Skill_MP_NightChickAQ_N_1",
      "name": "액체 분사",
      "icon": "BeamShot",
      "desc": "지정 범위에 {0} 냉기 속성 피해를 줍니다. 적중 대상은 침수 상태가 됩니다.",
      "passive": false,
      "type": 2,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 4,
        "ap": 7,
        "grid": "6>456",
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
                "icon": "BuffIcon_FIRERES_UP",
                "desc": {
                  "desc": "침수 : 화염 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "50%",
                      "per": "2.5%"
                    }
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
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
                "icon": "BuffIcon_ICERES_DOWN",
                "desc": {
                  "desc": "침수 : 냉기 저항{0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 17,
                  "resist": {
                    "elem": "ice",
                    "value": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
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
                "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                "desc": {
                  "desc": "침수 : 전기 저항{0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 19,
                  "resist": {
                    "elem": "lightning",
                    "value": {
                      "base": "-50%",
                      "per": "-2.5%"
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
      "key": "Skill_MP_NightChickAQ_N_2",
      "name": "재 정비 프로토콜",
      "icon": "TeamDefBuff",
      "desc": "지정 범위의 아군을 재 정비해, 해로운 효과를 해제하며 AP / 적중 / 효과 저항을 올려줍니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 5,
        "grid": "24568",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 999,
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
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "재 정비 : 적중+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "30%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "재 정비 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
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
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "재 정비 : AP+{0}",
                  "type": 0,
                  "value": "1.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 1.5,
                    "per": 0
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "재 정비 : 해로운 효과 해제",
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
      "key": "Skill_MP_NightChickAQ_N_3",
      "name": "방수 장갑",
      "icon": "SelfDefBuff",
      "desc": "냉기 / 효과 저항이 증가하며, 받는 피해가 감소합니다. 침수 상태인 경우, 제어를 상실해 회피 / 행동력이 크게 증가하지만 적중이 크게 감소합니다.",
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
                  "desc": "방수 장갑 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "35%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ICERES_UP",
                "desc": {
                  "desc": "방수 장갑 : 냉기 저항+{0}%",
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
                      "per": "5%"
                    }
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
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "물 공포증 : 회피+{0}%",
                  "type": 1,
                  "value": "1.600000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "160%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ACCURACY_DOWN",
                "desc": {
                  "desc": "물 공포증 : 적중 {0}%",
                  "type": 1,
                  "value": "-1.600000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "-160%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "물 공포증 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
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
      "key": "Skill_MP_NightChickAQ_N_4",
      "name": "누수",
      "icon": "TeamSpdDeBuff",
      "desc": "처치될 경우, 범위 내에 있는 대상들을 침수 상태로 만들며 행동력과 AP를 감소시킵니다.",
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
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "누수 : 행동력 {0}%",
                  "type": 1,
                  "value": "-0.200000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-20%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "누수 : AP {0}",
                  "type": 0,
                  "value": "-1.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": -1.5,
                    "per": 0
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 0
          },
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
                "icon": "BuffIcon_FIRERES_UP",
                "desc": {
                  "desc": "침수 : 화염 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "50%",
                      "per": "2.5%"
                    }
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
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
                "icon": "BuffIcon_ICERES_DOWN",
                "desc": {
                  "desc": "침수 : 냉기 저항{0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 17,
                  "resist": {
                    "elem": "ice",
                    "value": {
                      "base": "-50%",
                      "per": "-2.5%"
                    }
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
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
                "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                "desc": {
                  "desc": "침수 : 전기 저항{0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 19,
                  "resist": {
                    "elem": "lightning",
                    "value": {
                      "base": "-50%",
                      "per": "-2.5%"
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
    }
  ]
};