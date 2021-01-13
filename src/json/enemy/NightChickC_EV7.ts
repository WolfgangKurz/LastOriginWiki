export default {
  "id": "NightChickC_EV7",
  "name": "나이트 칙 캐논",
  "desc": "<교전 기록 없음>",
  "icon": "TbarIcon_MP_NightChickC_N",
  "ai": "AI_Ncc_Event_02",
  "rarity": 3,
  "type": 1,
  "role": 1,
  "isBoss": false,
  "hp": [
    440,
    40
  ],
  "atk": [
    55,
    5
  ],
  "def": [
    0,
    0
  ],
  "spd": 3.3,
  "cri": 5,
  "acc": 250,
  "eva": 0,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_NightChickC_N_1",
      "name": "플레임 버너",
      "icon": "WideFireShot",
      "desc": "화염 방사로 {0} 화염 속성 피해를 주며, 일정 확률로 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
      "passive": false,
      "type": 1,
      "target": "enemy",
      "buff": {
        "rate": 0.8,
        "range": 2,
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
                "icon": "BuffIcon_FireDMG_DOT",
                "desc": {
                  "desc": "점화 : 지속 화염 피해 {0}",
                  "type": 0,
                  "value": "40"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 66,
                  "fixed_damage": {
                    "elem": "fire",
                    "damage": {
                      "base": 40,
                      "per": 30
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
    },
    {
      "key": "Skill_MP_NightChickC_N_2",
      "name": "곡사포",
      "icon": "CannonShotDelay",
      "desc": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 {0} 보호 무시 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.75,
        "range": 5,
        "ap": 8,
        "grid": "#2#45#6#8",
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
                  78
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
                  "value": "0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "50%",
                    "per": "2.5%"
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
      "key": "Skill_MP_NightChickC_EV7_3",
      "name": "연료 탱크 유폭",
      "icon": "SuicideBomb",
      "desc": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주고 피해 감소 효과를 해제합니다.",
      "passive": true,
      "type": 1,
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
            "on": "self_dead",
            "if": false,
            "body": [
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "유폭 : {0}% 물리 피해",
                  "type": 1,
                  "value": "67"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "6700%",
                    "per": "25%"
                  }
                },
                "overlap": 3
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "유폭 : 피해 감소 효과 해제",
                  "type": 0,
                  "value": "36"
                },
                "attr": 0,
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
      "key": "Skill_MP_NightChickC_N_7",
      "name": "곡사포 착탄",
      "icon": "CannonShotDelay",
      "desc": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 {0} 보호 무시 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.75,
        "range": 5,
        "ap": 0,
        "grid": "#2#45#6#8",
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
                  78
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
                  "value": "0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "50%",
                    "per": "2.5%"
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