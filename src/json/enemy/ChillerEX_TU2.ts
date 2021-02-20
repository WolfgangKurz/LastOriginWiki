export default {
  "id": "ChillerEX_TU2",
  "icon": "TbarIcon_MP_Chiller_N",
  "ai": "AI_Chiller_Normal_01",
  "rarity": 4,
  "type": 2,
  "role": 1,
  "isBoss": false,
  "hp": [
    675,
    65
  ],
  "atk": [
    105,
    12
  ],
  "def": [
    200,
    65
  ],
  "spd": 4.4,
  "cri": 30,
  "acc": 200,
  "eva": 140,
  "res": {
    "fire": -25,
    "chill": 100,
    "thunder": 50
  },
  "skills": [
    {
      "key": "Skill_MP_ChillerEX_N_1",
      "name": "냉각 가스",
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
                  "value": "0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "50%",
                    "per": "0%"
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
                  "desc": "냉각 가스 : 이동 불가",
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
      "key": "Skill_MP_ChillerEX_N_2",
      "name": "동결 코팅",
      "icon": "TeamDefBuff",
      "desc": "지정 아군과 자신에게 방어막을 부여하며, 받는 피해와 화염 저항 감소 상태로 만듭니다.",
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_DAMAGE_ABSORB",
                "desc": {
                  "desc": "동결 코팅 : 방어막+{0}",
                  "type": 0,
                  "value": "1500"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 38,
                  "barrier": {
                    "base": 1500,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_FIRERES_DOWN",
                "desc": {
                  "desc": "동결 코팅 : 화염 저항{0}%",
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
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "동결 코팅 : 받는 피해{0}% 감소",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "50%",
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
                  "desc": "동결 코팅 : 방어막+{0}",
                  "type": 0,
                  "value": "1500"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 38,
                  "barrier": {
                    "base": 1500,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_FIRERES_DOWN",
                "desc": {
                  "desc": "동결 코팅 : 화염 저항{0}%",
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
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "동결 코팅 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
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
      "key": "Skill_MP_ChillerEX_N_3",
      "name": "급속 빙결",
      "icon": "SelfAtkBuff",
      "desc": "자신이 침수 상태로 라운드 개시 시, 공격력 / 행동력이 크게 증가하며 표식 / 이동 불가 상태가 됩니다.",
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
                  "desc": "급속 빙결 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.800000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "80%",
                    "per": "0%"
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
                  "desc": "급속 빙결 : 행동력+{0}%",
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
                    "per": "0%"
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
                "icon": "BuffIcon_MARKING",
                "desc": {
                  "desc": "급속 빙결 : 표식",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 87,
                  "attack_target": true
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_SNARE",
                "desc": {
                  "desc": "급속 빙결 : 이동 불가",
                  "type": 1,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 78,
                  "immovable": true
                },
                "overlap": 1
              }
            ],
            "maxStack": 2
          }
        ]
      }
    },
    {
      "key": "Skill_MP_ChillerEX_N_4",
      "name": "과부하",
      "icon": "SelfAtkDeBuff",
      "desc": "화염 속성 공격 피격 시, 공격력 / 방어력 / 행동력이 크게 감소하며 점화 상태가 되어 3라운드 동안 지속 화염 피해를 입습니다.",
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
                  "desc": "과부하 : 공격력{0}%",
                  "type": 1,
                  "value": "-0.800000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "-80%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "과부하 : 행동력{0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_FireDMG_DOT",
                "desc": {
                  "desc": "점화 : 지속 화염 피해 {0}",
                  "type": 0,
                  "value": "1000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 66,
                  "fixed_damage": {
                    "elem": "fire",
                    "damage": {
                      "base": 1000,
                      "per": 0
                    }
                  }
                },
                "overlap": 3
              }
            ],
            "maxStack": 0
          }
        ]
      }
    }
  ]
};