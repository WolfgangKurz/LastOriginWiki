export default {
  "id": "NightChickTD_TU2",
  "icon": "TbarIcon_MP_NightChickTD_N",
  "ai": "AI_ThunderChick_Normal_01",
  "rarity": 4,
  "type": 0,
  "role": 1,
  "isBoss": false,
  "hp": [
    400,
    65
  ],
  "atk": [
    75,
    9
  ],
  "def": [
    15,
    0.75
  ],
  "spd": 4.1,
  "cri": 10,
  "acc": 180,
  "eva": 60,
  "res": {
    "fire": -25,
    "chill": -25,
    "thunder": 99
  },
  "skills": [
    {
      "key": "Skill_MP_NightChickTD_N_1",
      "name": "스턴 샷",
      "icon": "Shock",
      "desc": "지정 대상에게 {0} 전기 속성 피해를 줍니다. 적중 대상은 높은 확률로 AP / 회피 / 전기 저항이 감소합니다. 대상이 침수 상태면 피해량이 크게 증가하며, 일정 확률로 행동 불가 상태로 만듭니다.",
      "passive": false,
      "type": 3,
      "target": "enemy",
      "buff": {
        "rate": 1,
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
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "감전 : AP {0}",
                  "type": 0,
                  "value": "-1"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
                  "type": 20,
                  "ap": {
                    "base": -1,
                    "per": 0
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "감전 : 회피 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
                  "type": 11,
                  "evade": {
                    "base": "-50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_LIGHTNINGRES_DOWN",
                "desc": {
                  "desc": "감전 : 전기 저항 {0}%",
                  "type": 1,
                  "value": "-0.100000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
                  "type": 19,
                  "resist": {
                    "elem": "lightning",
                    "value": {
                      "base": "-10%",
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
                "icon": "BuffIcon_LightningATK_UP",
                "desc": {
                  "desc": "고압 전류 : 피해량+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 86,
                  "damage_add": {
                    "elem": "lightning",
                    "damage": {
                      "base": "100%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "고압 전류 : 행동 불가",
                  "type": 1,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
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
      "key": "Skill_MP_NightChickTD_N_2",
      "name": "일렉트릭 쇼크",
      "icon": "WideLightning",
      "desc": "지정 범위에 {0} 보호 무시 전기 속성 피해를 줍니다. 적중 대상은 높은 확률로 AP / 회피가 감소합니다. 대상이 침수 상태면 피해량이 크게 증가하며, 받는 피해 감소 상태를 해제합니다.",
      "passive": false,
      "type": 3,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 1,
        "ap": 8,
        "grid": "6>456",
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "감전 : AP {0}",
                  "type": 0,
                  "value": "-1"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
                  "type": 20,
                  "ap": {
                    "base": -1,
                    "per": 0
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "감전 : 회피 {0}%",
                  "type": 1,
                  "value": "-0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
                  "type": 11,
                  "evade": {
                    "base": "-50%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
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
                "icon": "BuffIcon_LightningATK_UP",
                "desc": {
                  "desc": "고압 전류 : 피해량+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 86,
                  "damage_add": {
                    "elem": "lightning",
                    "damage": {
                      "base": "100%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "고압 전류 : 받는 피해 감소 해제",
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
                "overlap": 0
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_NightChickTD_N_3",
      "name": "과충전",
      "icon": "Shock",
      "desc": "전기 속성 공격을 맞을 경우, 과충전 상태가 되어 공격력 / 적중 / 회피 / AP / 행동력이 크게 증가합니다.",
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
              "damaged": "lightning"
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "과충전 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "50%",
                    "per": "1.5%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "과충전 : 회피+{0}%",
                  "type": 1,
                  "value": "0.750000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "75%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "과충전 : 행동력+{0}%",
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
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "과충전 : AP+{0}",
                  "type": 0,
                  "value": "2"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 2,
                    "per": 0.1
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "과충전 : 적중+{0}%",
                  "type": 1,
                  "value": "0.750000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "75%",
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
      "key": "Skill_MP_NightChickTD_N_4",
      "name": "방전",
      "icon": "Shock",
      "desc": "공격 시, 자신이 침수 상태인 경우 방전으로 인한 고정 피해를 입습니다. 침수 상태로 처치될 경우, 범위 내 대상들에게 전기 피해를 줍니다. 해당 효과가 적용되는 대상이 침수 상태인 경우, 행동 불가가 됩니다.",
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
            "on": "attack",
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "방전 : 공격력 {0}% 고정 피해",
                  "type": 1,
                  "value": "3.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "350%",
                    "per": "1.5%"
                  }
                },
                "overlap": 3
              }
            ],
            "maxStack": 0
          },
          {
            "on": "self_dead",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_LightningATK_UP",
                "desc": {
                  "desc": "방전 : 공격력 {0}% 전기 피해",
                  "type": 1,
                  "value": "7.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 73,
                  "fixed_damage": {
                    "elem": "fire",
                    "damage": {
                      "base": "750%",
                      "per": "1.5%"
                    }
                  }
                },
                "overlap": 3
              }
            ],
            "maxStack": 0
          },
          {
            "on": "self_dead",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "방전 : 행동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 1
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
    }
  ]
};