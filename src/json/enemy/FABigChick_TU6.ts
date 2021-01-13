export default {
  "id": "FABigChick_TU6",
  "name": "풀아머 빅 칙",
  "desc": "빅 칙과는 달라! 빅 칙과는! 뭐로 만든지는 몰라도 장갑이 차원이 다르니 나 같은 대 장갑 요원이 없으면 꽤나 곤란할걸?\n\n\n - 불가사리 보고함",
  "icon": "TbarIcon_MP_FABigChick_N",
  "ai": "AI_FABigChick_01",
  "rarity": 3,
  "type": 1,
  "role": 1,
  "isBoss": false,
  "hp": [
    40000,
    155
  ],
  "atk": [
    95,
    9
  ],
  "def": [
    300,
    8
  ],
  "spd": 3.35,
  "cri": 5,
  "acc": 185,
  "eva": 0,
  "res": {
    "fire": 40,
    "chill": 25,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_FABigChick_N_1",
      "name": "칙 중 기관포",
      "icon": "MGShot",
      "desc": "기관포로 {0} 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.5,
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_PIERCE_UP",
                "desc": {
                  "desc": "방어 관통 {0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 58,
                  "penetration": {
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
      "key": "Skill_MP_FABigChick_N_2",
      "name": "듀얼 칙 캐논",
      "icon": "CannonShot",
      "desc": "캐논포를 연사해 목표 열에 {0} 피해를 줍니다. 피해 감소 효과를 무효화합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.25,
        "range": 2,
        "ap": 7,
        "grid": "258",
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
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "피해 감소 효과 해제",
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
      "key": "Skill_MP_FABigChick_N_3",
      "name": "칙 반응 장갑",
      "icon": "SelfDefBuff",
      "desc": "반응 장갑으로 인해 받는 피해가 감소합니다.",
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
            "on": "wave",
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
                  "desc": "반응 장갑 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "35%",
                    "per": "1.75%"
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