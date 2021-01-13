export default {
  "id": "Fallen_TU3",
  "name": "경비용 폴른",
  "desc": "폴른의 자율 경비용 기종이다.",
  "icon": "TbarIcon_MP_Fallen_N",
  "ai": "AI_Mp_Fallen_01",
  "rarity": 2,
  "type": 0,
  "role": 2,
  "isBoss": false,
  "hp": [
    400,
    55
  ],
  "atk": [
    65,
    7
  ],
  "def": [
    40,
    2
  ],
  "spd": 3.9,
  "cri": 5,
  "acc": 195,
  "eva": 20,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": -25
  },
  "skills": [
    {
      "key": "Skill_MP_Fallen_N_1",
      "name": "머신건 사격",
      "icon": "MGShot",
      "desc": "머신건을 발사해 목표 적에게 {0}의 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
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
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  2,
                  3
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
                  "desc": "약점 공격 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "30%",
                    "per": "1%"
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
      "key": "Skill_MP_Fallen_N_2",
      "name": "대 장갑 진동탄",
      "icon": "SelfDefDeBuff",
      "desc": "대 장갑 진동탄을 발사해 {0} 피해를 주고, 목표 대상의 방어력을 낮춥니다. 대상에게 피해 감소 효과가 있는 경우, 해당 효과를 무효화합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.25,
        "range": 4,
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
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "방어력 {0}%",
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
                    "per": "-2%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "피해 감소 효과 무효",
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
    }
  ]
};