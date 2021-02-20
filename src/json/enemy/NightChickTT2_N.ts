export default {
  "id": "NightChickTT2_N",
  "icon": "TbarIcon_MP_NightChickM_N",
  "ai": "AI_Jako_Normal_01",
  "rarity": 2,
  "type": 1,
  "role": 1,
  "isBoss": false,
  "hp": [
    10000,
    0
  ],
  "atk": [
    20,
    0
  ],
  "def": [
    0,
    0
  ],
  "spd": 4,
  "cri": 0,
  "acc": 100,
  "eva": 100,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_NightChickTT2_N_1",
      "name": "스킬 불가 사격 I",
      "icon": "Shot",
      "desc": "미사일을 발사해 {0} 피해를 주고 스킬 봉인 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 3,
        "ap": 8,
        "grid": "single",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 0,
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
                "icon": "BuffIcon_SEAL_SKILL",
                "desc": {
                  "desc": "스킬 사용 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 79,
                  "skill_disable": true
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
      "key": "Skill_MP_NightChickTT2_N_2",
      "name": "스킬 불가 사격 II",
      "icon": "Shot",
      "desc": "미사일을 발사해 {0} 피해를 주고 스킬 봉인 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 3,
        "ap": 8,
        "grid": "single",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 0,
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
                "icon": "BuffIcon_SEAL_SKILL",
                "desc": {
                  "desc": "스킬 사용 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 79,
                  "skill_disable": true
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