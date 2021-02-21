export default {
  "id": "RocCGenerator_EW",
  "icon": "TbarIcon_MP_RocCGenerator_N",
  "ai": "AI_RocGenerator_Normal_01",
  "rarity": 4,
  "type": 1,
  "role": 0,
  "isBoss": false,
  "hp": [
    200,
    200
  ],
  "atk": [
    1,
    0
  ],
  "def": [
    255,
    5
  ],
  "spd": 4.25,
  "cri": 0,
  "acc": 999,
  "eva": -999,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_RocCGenerator_EW_1",
      "name": "전기 충격-테스트",
      "icon": "SelfAtkBuff",
      "desc": "썬더 칙에게 전기 충격을 가해 과충전 상태로 만듭니다.",
      "passive": false,
      "type": 3,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 4,
        "grid": "global",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
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
                "icon": "BuffIcon_LightningDMG_DOT",
                "desc": {
                  "desc": "전기 충격 : 지속 전기 피해 {0}",
                  "type": 0,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 68,
                  "fixed_damage": {
                    "elem": "lightning",
                    "damage": {
                      "base": 1,
                      "per": 0
                    }
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 5
          }
        ]
      }
    },
    {
      "key": "Skill_MP_RocCGenerator_EW_2",
      "name": "실드 충전-테스트",
      "icon": "SelfDefBuff",
      "desc": "모든 아군에게 방어막을 부여합니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 7,
        "grid": "global",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
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
                "icon": "BuffIcon_DAMAGE_ABSORB",
                "desc": {
                  "desc": "실드 충전 : 방어막+{0}",
                  "type": 0,
                  "value": "5000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 38,
                  "barrier": {
                    "base": 5000,
                    "per": 0
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
      "key": "Skill_MP_RocCGenerator_EW_3",
      "name": "복원 시스템-테스트",
      "icon": "SelfDefBuff",
      "desc": "라운드 개시 시, 전투 속행 효과가 적용됩니다.",
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
                "icon": "BuffIcon_DEF_RESSURRECT",
                "desc": {
                  "desc": "복원 시스템 : {0}HP로 전투 속행",
                  "type": 0,
                  "value": "3750"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 82,
                  "revive": {
                    "base": 3750,
                    "per": 0
                  }
                },
                "overlap": 1
              }
            ],
            "maxStack": 1
          }
        ]
      }
    },
    {
      "key": "Skill_MP_RocCGenerator_EW_4",
      "name": "복원 대기-테스트",
      "icon": "SelfSpdDeBuff",
      "desc": "전투 속행 효과 발동 시, 3라운드 동안 행동 불가 상태가 됩니다.",
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
            "on": "revive",
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
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "복원 대기 : 행동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 4
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
    }
  ]
};