export default {
  "id": "NightChickS_TU4",
  "icon": "TbarIcon_MP_NightChickS_N",
  "ai": "AI_Jako_Defense_02",
  "rarity": 2,
  "type": 0,
  "role": 0,
  "isBoss": false,
  "hp": [
    470,
    87.5
  ],
  "atk": [
    75,
    8
  ],
  "def": [
    100,
    5.5
  ],
  "spd": 3.4,
  "cri": 5,
  "acc": 180,
  "eva": 30,
  "res": {
    "fire": 20,
    "chill": 20,
    "thunder": 20
  },
  "skills": [
    {
      "key": "Skill_MP_NightChickS_N_1",
      "name": "방패 내려치기",
      "icon": "MeleeAttack",
      "desc": "방패로 내리쳐 {0} 피해를 줍니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 2,
        "ap": 4,
        "grid": "single",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 0,
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
            "buffs": [],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_NightChickS_N_2",
      "name": "칙 방패 방어술",
      "icon": "SelfDefBuff",
      "desc": "방패를 올려 3라운드 동안 받는 피해가 감소합니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 3,
        "grid": "self",
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
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "25%",
                    "per": "1.25%"
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
      "key": "Skill_MP_NightChickS_N_3",
      "name": "칙 커버링",
      "icon": "TeamDefBuff",
      "desc": "라운드 개시 시, 칙 방패 방어술이 적용된 상태면 바로 뒤에 있는 아군 1기를 보호합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "6",
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
                  "Effect_MP_NightChickS_N_2"
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
                "icon": "BuffIcon_DEF_Char",
                "desc": {
                  "desc": "칙 커버링 : 지정 대상 보호",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 76,
                  "guard": "target"
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