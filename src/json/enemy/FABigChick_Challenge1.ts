export default {
  "id": "FABigChick_Challenge1",
  "icon": "TbarIcon_MP_FABigChick_N",
  "ai": "AI_FABigChick_Challenge_01",
  "rarity": 3,
  "type": 1,
  "role": 1,
  "isBoss": false,
  "hp": [
    165000,
    1650
  ],
  "atk": [
    1350,
    39.4
  ],
  "def": [
    1732.5,
    55.69
  ],
  "spd": 3.5,
  "cri": 0,
  "acc": 860,
  "eva": 0,
  "res": {
    "fire": 25,
    "chill": 25,
    "thunder": 25
  },
  "skills": [
    {
      "key": "Skill_MP_FABigChick_Challenge1_1",
      "name": "칙 중 기관포",
      "icon": "MGShot",
      "desc": "기관포로 {0} 피해와 50% 감소한 추가 고정 피해를 줍니다.",
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "장갑 무시 : 고정 피해",
                  "type": 0,
                  "value": "0.750000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "75%",
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
      "key": "Skill_MP_FABigChick_Challenge1_2",
      "name": "듀얼 칙 캐논",
      "icon": "CannonShot",
      "desc": "캐논포를 연사해 목표 열에 {0} 피해와 50% 감소한 추가 고정 피해를 줍니다. 피해 감소 효과를 무효화합니다.",
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
                  "desc": "듀얼 칙 캐논 : 피해 감소 효과 해제",
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
              },
              {
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "듀얼 칙 캐논 : 고정 피해",
                  "type": 0,
                  "value": "0.630000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "63%",
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
      "key": "Skill_MP_FABigChick_Challenge1_3",
      "name": "칙 반응 장갑",
      "icon": "SelfDefBuff",
      "desc": "반응 장갑으로 인해 받는 피해가 감소하고, 피격 시 반격합니다.",
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
                "icon": "BuffIcon_COUNTER",
                "desc": {
                  "desc": "반응 장갑 : 반격",
                  "type": 1,
                  "value": "1.500000"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 29,
                  "counter": {
                    "base": "150%",
                    "per": "0%"
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
      "key": "Skill_MP_FABigChick_Challenge1_4",
      "name": "공황 상태",
      "icon": "Move",
      "desc": "프레데터에 의해 아군이 사망할 경우, 극심한 공포에 빠져 시계 반대 방향으로 이동합니다. 프레데터와 같은 행으로는 이동하지 않습니다.",
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
            "on": "team_dead",
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
                "icon": "BuffIcon_MARKING",
                "desc": {
                  "desc": "공황 상태 : 위치 이동(시계 반대 방향)",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 87,
                  "attack_target": true
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