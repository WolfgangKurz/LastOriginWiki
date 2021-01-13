export default {
  "id": "PuppHead_VT4",
  "name": "초코 여왕의 애완기계",
  "desc": "초코 여왕이 경비용 펍 헤드 기종을 도색해 만들어낸 애완기계입니다. ",
  "icon": "TbarIcon_MP_PuppHead_V2",
  "ai": "AI_Hvst_Normal_02",
  "rarity": 2,
  "type": 0,
  "role": 2,
  "isBoss": false,
  "hp": [
    450,
    67
  ],
  "atk": [
    70,
    6
  ],
  "def": [
    45,
    2.25
  ],
  "spd": 4.05,
  "cri": 5,
  "acc": 200,
  "eva": 60,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 50
  },
  "skills": [
    {
      "key": "Skill_MP_PuppHead_N_1",
      "name": "테이저 발사",
      "icon": "Shock",
      "desc": "목표 적을 감전시켜 {0}의 전기 속성 피해를 주고 AP와 회피를 감소시킵니다.",
      "passive": false,
      "type": 3,
      "target": "enemy",
      "buff": {
        "rate": 0.75,
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
                  "chance": "50%",
                  "type": 20,
                  "ap": {
                    "base": -1,
                    "per": -0.05
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_EVADE_DOWN",
                "desc": {
                  "desc": "감전 : 회피 {0}%",
                  "type": 1,
                  "value": "-0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
                  "type": 11,
                  "evade": {
                    "base": "-30%",
                    "per": "-1.5%"
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
      "key": "Skill_MP_PuppHead_N_2",
      "name": "체포 사슬",
      "icon": "Hang",
      "desc": "목표 대상을 체포해 {0} 피해를 주면서 최대 2칸까지 앞으로 당기고, 3라운드 동안 이동 불가 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.01,
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
                "icon": "BuffIcon_Pull",
                "desc": {
                  "desc": "{0}칸 앞으로 당김",
                  "type": 0,
                  "value": "2"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 53,
                  "position": {
                    "type": "pull",
                    "range": {
                      "base": 2,
                      "per": 0
                    }
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_SNARE",
                "desc": {
                  "desc": "이동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
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
    }
  ]
};