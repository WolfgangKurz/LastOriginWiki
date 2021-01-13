export default {
  "id": "Phalangites_TU5",
  "name": "팔랑스",
  "desc": "각이 잡힌 대열로 행군하는 철충입니다. 철충 놈들 중엔 드물게 군기가 들어있지 말입니다. 딱 밀착해서 서로서로를 보호하는 녀석들이니 진형을 아작내는 게 중요하지 말임다.\n\n\n- 블러디팬서",
  "icon": "TbarIcon_MP_Phalangites_N",
  "ai": "AI_MP_Palanx_01",
  "rarity": 3,
  "type": 0,
  "role": 0,
  "isBoss": false,
  "hp": [
    1200,
    125
  ],
  "atk": [
    97.5,
    8.5
  ],
  "def": [
    190,
    9
  ],
  "spd": 4.05,
  "cri": 10,
  "acc": 235,
  "eva": 70,
  "res": {
    "fire": 40,
    "chill": 40,
    "thunder": 40
  },
  "skills": [
    {
      "key": "Skill_MP_Phalangites_N_1",
      "name": "머신건 속사",
      "icon": "ARShot",
      "desc": "머신건을 발사해 {0} 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
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
            "if": false,
            "body": [
              0,
              1
            ],
            "class": [
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
                  "desc": "대공 사격 : 피해량+{0}% (기동)",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "20%",
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
      "key": "Skill_MP_Phalangites_N_2",
      "name": "대열 방어",
      "icon": "TeamDefBuff",
      "desc": "3라운드 동안 같은 열의 아군을 보호하며, 받는 피해가 감소합니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 4,
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
                  "value": "0.300000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "30%",
                    "per": "1.5%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_Side",
                "desc": {
                  "desc": "열 보호",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 75,
                  "guard": "row"
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
      "key": "Skill_MP_Phalangites_N_3",
      "name": "밀집 대형",
      "icon": "TeamDefBuff",
      "desc": "라운드 개시 시, 같은 열에 인접한 아군에게 피해 감소 효과를 부여합니다. 해당 효과는 중첩됩니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "28",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "밀집 대형 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "15%",
                    "per": "0%"
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