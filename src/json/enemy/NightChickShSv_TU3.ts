export default {
  "id": "NightChickShSv_TU3",
  "icon": "TbarIcon_MP_NightChickS_N",
  "ai": "AI_Mp_NCShieldEx_Normal_01",
  "rarity": 4,
  "type": 0,
  "role": 0,
  "isBoss": false,
  "hp": [
    10000,
    650
  ],
  "atk": [
    61,
    5.9
  ],
  "def": [
    144,
    3.3
  ],
  "spd": 4.15,
  "cri": 5,
  "acc": 380,
  "eva": 15,
  "res": {
    "fire": 30,
    "chill": 30,
    "thunder": 30
  },
  "skills": [
    {
      "key": "Skill_MP_NightChickShSv_N_1",
      "name": "칙 방패 강타",
      "icon": "MeleeAttack",
      "desc": "대상에게 {0} 피해를 주고, 2라운드 동안 도발 / 방어력 / 치명타 감소 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.1,
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
                "icon": "BuffIcon_PROVOKE",
                "desc": {
                  "desc": "칙 방패 강타 : 대상 도발",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 74,
                  "provoke": true
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "칙 방패 강타 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.200000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-20%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_CRITICAL_DOWN",
                "desc": {
                  "desc": "칙 방패 강타 : 치명타 {0}%",
                  "type": 1,
                  "value": "-0.050000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "-5%",
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
      "key": "Skill_MP_NightChickShSv_N_2",
      "name": "칙 보호 개시",
      "icon": "SelfDefBuff",
      "desc": "지정 아군의 AP를 상승시키고, 3라운드 동안 대상을 지정 보호합니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "칙 보호 개시 : AP+{0}",
                  "type": 0,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 1,
                    "per": 0
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_DEF_Char",
                "desc": {
                  "desc": "칙 보호 개시 : 지정 대상 보호",
                  "type": 1,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 76,
                  "guard": "target"
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
      "key": "Skill_MP_NightChickShSv_N_3",
      "name": "칙 생존 대형",
      "icon": "SelfDefBuff",
      "desc": "라운드 개시 시, 행동력이 증가하며 속성 저항력이 증가합니다.",
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "칙 생존 대형 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "10%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_FIRERES_UP",
                "desc": {
                  "desc": "칙 생존 대형 : 화염 저항+{0}%",
                  "type": 1,
                  "value": "0.150000"
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
                      "base": "15%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ICERES_UP",
                "desc": {
                  "desc": "칙 생존 대형 : 냉기 저항+{0}%",
                  "type": 1,
                  "value": "0.150000"
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
                      "base": "15%",
                      "per": "0%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_LIGHTNINGRES_UP",
                "desc": {
                  "desc": "칙 생존 대형 : 전기 저항+{0}%",
                  "type": 1,
                  "value": "0.150000"
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
                      "base": "15%",
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
      "key": "Skill_MP_NightChickShSv_N_4",
      "name": "칙 생존 위험",
      "icon": "SelfDefDeBuff",
      "desc": "라운드 개시 시, 자신이 침수 상태인 경우 4라운드 동안 받는 피해가 증가합니다.",
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
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "칙 생존 위험 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "5"
                },
                "attr": 3,
                "erase": {
                  "rounds": 4
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "500%",
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