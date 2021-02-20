export default {
  "id": "Chiller_TU",
  "icon": "TbarIcon_MP_Chiller_N",
  "ai": "AI_Chiller_Normal_01",
  "rarity": 4,
  "type": 2,
  "role": 1,
  "isBoss": false,
  "hp": [
    325,
    40
  ],
  "atk": [
    60,
    7.5
  ],
  "def": [
    50,
    1.75
  ],
  "spd": 4.25,
  "cri": 15,
  "acc": 130,
  "eva": 75,
  "res": {
    "fire": -99,
    "chill": 99,
    "thunder": 25
  },
  "skills": [
    {
      "key": "Skill_MP_Chiller_N_1",
      "name": "동결 가스",
      "icon": "BeamShot",
      "desc": "지정 범위에 {0} 냉기 속성 피해를 주고 대상을 이동 불가 상태로 만듭니다. 대상이 침수 상태인 경우, 행동 불가 / 받는 피해 증가 상태로 만들고 강화 효과를 해제합니다.",
      "passive": false,
      "type": 2,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 3,
        "ap": 6,
        "grid": "#45",
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "빙결 : 행동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 22,
                  "stun": true
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "빙결 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "35%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "빙결 : 강화 해제",
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
                "icon": "BuffIcon_SNARE",
                "desc": {
                  "desc": "동결 가스 : 이동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 78,
                  "immovable": true
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
      "key": "Skill_MP_Chiller_N_2",
      "name": "빙결 코팅",
      "icon": "TeamDefBuff",
      "desc": "지정 아군과 자신에게 방어막을 부여하며, 방어력 증가 / 받는 피해와 화염 저항 감소 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 5,
        "grid": "single",
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_DAMAGE_ABSORB",
                "desc": {
                  "desc": "빙결 코팅 : 방어막+{0}",
                  "type": 0,
                  "value": "1000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 38,
                  "barrier": {
                    "base": 1000,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "빙결 코팅 : 방어력+{0}%",
                  "type": 1,
                  "value": "1.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "150%",
                    "per": "10%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "빙결 코팅 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "15%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_FIRERES_DOWN",
                "desc": {
                  "desc": "빙결 코팅 : 화염 저항 {0}%",
                  "type": 1,
                  "value": "-1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "-100%",
                      "per": "-1%"
                    }
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
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
                "icon": "BuffIcon_DAMAGE_ABSORB",
                "desc": {
                  "desc": "빙결 코팅 : 방어막+{0}",
                  "type": 0,
                  "value": "1000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 38,
                  "barrier": {
                    "base": 1000,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "빙결 코팅 : 방어력+{0}%",
                  "type": 1,
                  "value": "1.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "150%",
                    "per": "10%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "빙결 코팅 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "15%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_FIRERES_DOWN",
                "desc": {
                  "desc": "빙결 코팅 : 화염 저항 {0}%",
                  "type": 1,
                  "value": "-1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "-100%",
                      "per": "-1%"
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
      "key": "Skill_MP_Chiller_N_3",
      "name": "급속 냉각",
      "icon": "SelfDefBuff",
      "desc": "자신이 침수 상태로 라운드 개시 시, 공격력 / 회피 / 행동력이 크게 증가하며 최소 피해만 입습니다.",
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "급속 냉각 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "50%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 2
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
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "급속 냉각 : 피해 최소화",
                  "type": 0,
                  "value": "999999"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 34,
                  "damage_minimize": {
                    "base": 999999,
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
                  "desc": "급속 냉각 : 회피+{0}%",
                  "type": 1,
                  "value": "1.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "120%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 2
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "급속 냉각 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
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
            "maxStack": 2
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Chiller_N_4",
      "name": "과열",
      "icon": "TeamSpdDeBuff",
      "desc": "화염 속성 공격을 맞는 경우, 공격력 / 방어력 / 회피 / 행동력이 크게 감소하며 피해 최소화 상태가 해제됩니다.",
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
            "on": {
              "damaged": "fire"
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_ATK_DOWN",
                "desc": {
                  "desc": "과열 : 공격력 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "-50%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "과열 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.950000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-95%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "과열 : 회피 {0}%",
                  "type": 1,
                  "value": "-1.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "-150%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "과열 : 행동력 {0}%",
                  "type": 1,
                  "value": "-0.300000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-30%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "과열 : 피해 최소화 해제",
                  "type": 0,
                  "value": "34"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 69,
                  "off": {
                    "type": 34
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