export default {
  "id": "LightningBomberMP_N",
  "icon": "TbarIcon_MP_LightningBomber_N",
  "ai": "AI_LightningBomber_Normal_01",
  "rarity": 5,
  "type": 2,
  "role": 1,
  "isBoss": false,
  "hp": [
    150,
    45
  ],
  "atk": [
    200,
    10.5
  ],
  "def": [
    25,
    1.25
  ],
  "spd": 4.4,
  "cri": 5,
  "acc": 180,
  "eva": 310,
  "res": {
    "fire": 0,
    "chill": -50,
    "thunder": 99
  },
  "skills": [
    {
      "key": "Skill_MP_LightningBomberMP_N_1",
      "name": "쇼크 밤",
      "icon": "Missile",
      "desc": "대상에게 미사일을 발사해 {0} 전기 피해를 주고, 행동력을 감소시킵니다.",
      "passive": false,
      "type": 3,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 4,
        "ap": 4,
        "grid": "$45",
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
                  "desc": "쇼크 밤 : 행동력{0}%",
                  "type": 1,
                  "value": "-0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-30%",
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
      "key": "Skill_MP_LightningBomberMP_N_2",
      "name": "무차별 폭격",
      "icon": "MultiMissile",
      "desc": "지정 범위에 {0} 보호 무시 전기 피해를 줍니다. 대상이 행동력 감소 상태면 피해량이 증가합니다.",
      "passive": false,
      "type": 3,
      "target": "enemy",
      "buff": {
        "rate": 1.25,
        "range": 3,
        "ap": 9,
        "grid": "24568",
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
                  13
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
                  "desc": "무차별 폭격 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "25%",
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
      "key": "Skill_MP_LightningBomberMP_N_3",
      "name": "스피드 업",
      "icon": "SelfSpdBuff",
      "desc": "라운드 개시 시, 회피율이 감소하고 회피 시, 2라운드 동안 행동력이 증가합니다.",
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
            "on": "evade",
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
                  "desc": "스피드 업 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "15%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 4
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
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "스피드 업 : 회피 {0}% (해제 불가)",
                  "type": 1,
                  "value": "-0.300000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "-30%",
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
      "key": "Skill_MP_LightningBomberMP_N_4",
      "name": "완전 충전",
      "icon": "Shock",
      "desc": "각 액티브 스킬이 전기 속성 피해로 변경됩니다. 스킬 적중 시, 회피율이 증가합니다.",
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "완전 충전 : 회피+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "15%",
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
      "key": "Skill_MP_LightningBomberMP_N_5",
      "name": "전도 증폭",
      "icon": "WideLightning",
      "desc": "자신이 침수 상태인 경우, 지속 전기 피해를 입고 공격력 / 치명타가 증가합니다.",
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
                "icon": "BuffIcon_LightningDMG_DOT",
                "desc": {
                  "desc": "전도 증폭 : {0} 전기 피해",
                  "type": 0,
                  "value": "300"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 68,
                  "fixed_damage": {
                    "elem": "lightning",
                    "damage": {
                      "base": 300,
                      "per": 0
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