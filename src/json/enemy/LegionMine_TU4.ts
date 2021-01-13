export default {
  "id": "LegionMine_TU4",
  "name": "레기온 마인레이어",
  "desc": "평범한 철충이다.",
  "icon": "TbarIcon_MP_Legion_N",
  "ai": "AI_Wasp_Normal_01",
  "rarity": 3,
  "type": 0,
  "role": 2,
  "isBoss": false,
  "hp": [
    130,
    28
  ],
  "atk": [
    65,
    9
  ],
  "def": [
    15,
    0.5
  ],
  "spd": 4.1,
  "cri": 5,
  "acc": 155,
  "eva": 15,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_LegionMine_N_1",
      "name": "충격탄 사격",
      "icon": "Shot",
      "desc": "충격탄을 발사해 {0} 피해를 주며, 2라운드 동안 대상의 방어력을 낮춥니다.",
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
                  "value": "-0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-30%",
                    "per": "-1.5%"
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
      "key": "Skill_MP_LegionMine_N_2",
      "name": "대 보병 지뢰",
      "icon": "Missile",
      "desc": "목표 지점에 밟으면 폭발하는 대 보병 지뢰를 설치합니다. 경장형 또는 중장형에게만 피해를 주며, 5라운드 후에 자동으로 제거됩니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0,
        "range": 3,
        "ap": 6,
        "grid": "single",
        "target_ground": true,
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
      "key": "Skill_MP_LegionMine_N_3",
      "name": "지원 사격",
      "icon": "Scan",
      "desc": "양 옆의 아군 공격기가 공격하는 경우, 공격 대상이 자신의 사거리 내에 있으면 공격 지원을 합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "2468",
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
              2
            ],
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_SUPPORT_ATTACK",
                "desc": {
                  "desc": "인접 공격기 공격 지원",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 77,
                  "attack_support": {
                    "base": "100%",
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
    }
  ]
};