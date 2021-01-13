export default {
  "id": "Rampart_VT2",
  "name": "초코 여왕의 경비병",
  "desc": "초코 여왕이 경비용 램파트 기종을 도색해 만들어낸 기체입니다.",
  "icon": "TbarIcon_MP_Rampart_V2",
  "ai": "AI_Mp_Rampart_01",
  "rarity": 2,
  "type": 0,
  "role": 0,
  "isBoss": false,
  "hp": [
    250,
    40
  ],
  "atk": [
    50,
    5.5
  ],
  "def": [
    35,
    1.5
  ],
  "spd": 3.8,
  "cri": 5,
  "acc": 140,
  "eva": 10,
  "res": {
    "fire": 40,
    "chill": 40,
    "thunder": -25
  },
  "skills": [
    {
      "key": "Skill_MP_Rampart_N_1",
      "name": "목표 견제",
      "icon": "ARShot",
      "desc": "위협 사격으로 {0} 피해를 주고, 2라운드 동안 대상의 공격력과 적중을 낮춥니다. 스쿼드 내 미스세이프티가 있을 시, 대상에게 <고압 가스탄> 스킬 협동 공격을 합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
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
                "icon": "BuffIcon_ACCURACY_DOWN",
                "desc": {
                  "desc": "적중 {0}%",
                  "type": 1,
                  "value": "-0.350000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "-35%",
                    "per": "-1.5%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ATK_DOWN",
                "desc": {
                  "desc": "공격력 {0}%",
                  "type": 1,
                  "value": "-0.200000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "-20%",
                    "per": "-1%"
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
      "key": "Skill_MP_Rampart_N_2",
      "name": "목표 호위",
      "icon": "ShieldWall",
      "desc": "3라운드 동안 지정한 아군을 보호하며, 대상의 AP를 증가시킵니다. 해당 스킬 사용 시, 자신이 받는 피해가 감소합니다.",
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
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_Char",
                "desc": {
                  "desc": "목표 호위 : 지정 대상 보호",
                  "type": 0,
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
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "목표 호위 : AP+{0}",
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
                    "per": 0.01
                  }
                },
                "overlap": 0
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "목표 호위 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 15
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "25%",
                    "per": "2%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 1
          }
        ]
      }
    }
  ]
};