export default {
  "id": "NightChickSpCH_C",
  "icon": "TbarIcon_MP_NightChickSpCH_N",
  "ai": "AI_SoldierChick_Challenge_01",
  "rarity": 5,
  "type": 0,
  "role": 1,
  "isBoss": false,
  "hp": [
    100,
    0
  ],
  "atk": [
    100,
    9
  ],
  "def": [
    0,
    0
  ],
  "spd": 5,
  "cri": 2.5,
  "acc": 250,
  "eva": 0,
  "res": {
    "fire": -50,
    "chill": 75,
    "thunder": 50
  },
  "skills": [
    {
      "key": "Skill_MP_NightChickSpCH_N_1",
      "name": "머신건 견제 사격",
      "icon": "ARShot",
      "desc": "머신건 견제 사격으로 {0} 피해를 주며 방어력을 3라운드 동안 감소 시킵니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 6,
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
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "머신건 견제 사격 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.200000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-20%",
                    "per": "0%"
                  }
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
      "key": "Skill_MP_NightChickSpCH_N_2",
      "name": "머신건 연사",
      "icon": "ARShot",
      "desc": "머신건을 조준 사격해 {0} 피해를 줍니다. 3라운드 동안 받는 피해가 증가하는 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.2,
        "range": 1,
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
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "머신건 연사 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "30%",
                    "per": "0%"
                  }
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
      "key": "Skill_MP_NightChickSpCH_N_3",
      "name": "근성",
      "icon": "SelfDefBuff",
      "desc": "솔져 칙들은 낙오(파괴) 되더라도 칙 커맨더가 존재한다면 <근성>으로 다시 일어나 싸웁니다.\n\n근성 : 해제 불가의 전투 속행 효과",
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
                "icon": "BuffIcon_DEF_RESSURRECT",
                "desc": {
                  "desc": "근성 : {0}HP로 전투 속행 (해제 불가)",
                  "type": 0,
                  "value": "100"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 82,
                  "revive": {
                    "base": 100,
                    "per": 0
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          },
          {
            "on": "revive",
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
                "icon": "BuffIcon_DEF_RESSURRECT",
                "desc": {
                  "desc": "근성 : {0}HP로 전투 속행 (해제 불가)",
                  "type": 0,
                  "value": "100"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 82,
                  "revive": {
                    "base": 100,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "명령 최우선 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
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
          },
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
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "명령 집중 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
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
            "maxStack": 1
          }
        ]
      }
    },
    {
      "key": "Skill_MP_NightChickSpCH_N_4",
      "name": "호위",
      "icon": "Move",
      "desc": "라운드 개시 시 칙 커맨더의 명령을 따르기 위해 <명령 집중>이 적용 되고 <공격 명령>을 받기 전까지 칙 커맨더를 호위하기 위해 주위를 돌아다니다가 간혹 <과부하>에 걸립니다.\n\n명령 집중 : 해제 불가의 해로운 효과 저항 적용\n과부하 : 스스로에게 일정량 피해",
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
            "on": "move",
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "과부하",
                  "type": 1,
                  "value": "0.050000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "70%",
                  "type": 70,
                  "fixed_damage": {
                    "base": "5%",
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
      "key": "Skill_MP_NightChickSpCH_N_5",
      "name": "희생",
      "icon": "SelfDefBuff",
      "desc": "전열에 있는 경우 자신의 몸을 바쳐 칙 커맨더를 보호할 수 있도록 행 보호가 적용 됩니다.",
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
              "pos": 0
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
                "icon": "BuffIcon_DEF_Line",
                "desc": {
                  "desc": "희생 : 행 보호 (해제불가)",
                  "type": 1,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 50,
                  "guard": "col"
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