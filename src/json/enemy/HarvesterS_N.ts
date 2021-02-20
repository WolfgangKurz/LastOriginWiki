export default {
  "id": "HarvesterS_N",
  "icon": "TbarIcon_MP_Harvester_N",
  "ai": "AI_Jako_Normal_01",
  "rarity": 3,
  "type": 1,
  "role": 0,
  "isBoss": false,
  "hp": [
    80,
    30
  ],
  "atk": [
    35,
    3.75
  ],
  "def": [
    15,
    1.5
  ],
  "spd": 3,
  "cri": 3,
  "acc": 70,
  "eva": 0,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_HarvesterS_N_1",
      "name": "실드 강타",
      "icon": "SwordAttk",
      "desc": "적을 방패로 강타해 {0} 피해를 주며, 일정 확률로 행동 불가 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 1,
        "ap": 4,
        "grid": "single",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 50,
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
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "행동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 22,
                  "stun": true
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
      "key": "Skill_MP_HarvesterS_N_2",
      "name": "실드 전개",
      "icon": "ShieldWall",
      "desc": "같은 열에 있는 대상이 공격당하는 경우, 가로막아 자신이 대신 맞습니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 6,
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
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_Side",
                "desc": {
                  "desc": "같은 열 가로막기",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
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
      "key": "Skill_MP_HarvesterS_N_3",
      "name": "두꺼운 방패",
      "icon": "ShieldWall",
      "desc": "두꺼운 방패로 인해 최종 피해량이 일정 이하인 경우, 공격이 무효화됩니다.",
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
        "buff_rate": 50,
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
                  "desc": "{0} 피해 이하 무효화",
                  "type": 1,
                  "value": "100"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 34,
                  "damage_minimize": {
                    "base": 100,
                    "per": 10
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