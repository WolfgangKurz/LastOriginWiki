export default {
  "id": "RocCGeneratorA_EV2",
  "name": "강화 에너지 컨덴서",
  "desc": "전력을 공급하기 위한 장치네요. 웬만한 충격으론 금방 복원되니 무력화되었을 때 본체를 노리는게 좋을 것 같아요.\n\n\n- 세이렌 보고함",
  "icon": "TbarIcon_MP_RocCGenerator_N",
  "ai": "AI_RocGenerator_Normal_04",
  "rarity": 4,
  "type": 1,
  "role": 0,
  "isBoss": false,
  "hp": [
    21600,
    600
  ],
  "atk": [
    0,
    0
  ],
  "def": [
    1555,
    5
  ],
  "spd": 6.5,
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
      "key": "Skill_MP_RocCGeneratorA_N_1",
      "name": "전하 충전",
      "icon": "SelfAtkBuff",
      "desc": "로크 (최대 충전)에게 에너지를 충전해 공격력과 AP를 높입니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 10,
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
              1
            ],
            "class": [
              2
            ],
            "role": [
              1
            ],
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "전하 충전 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "10%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 5
          },
          {
            "on": {
              "after": "use_skill"
            },
            "if": false,
            "body": [
              1
            ],
            "class": [
              2
            ],
            "role": [
              1
            ],
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "전하 충전 : AP+{0}",
                  "type": 0,
                  "value": "1.350000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 1.35,
                    "per": 0
                  }
                },
                "overlap": 3
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_RocCGeneratorA_N_2",
      "name": "실드 충전",
      "icon": "SelfDefBuff",
      "desc": "모든 아군에게 방어막을 부여하고 해로운 효과를 해제합니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 10,
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
                  "value": "25000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 38,
                  "barrier": {
                    "base": 25000,
                    "per": 0
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "실드 충전 : 해로운 효과 해제",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 100,
                  "off": 1
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
      "key": "Skill_MP_RocCGeneratorA_N_3",
      "name": "복원 시스템",
      "icon": "SelfDefBuff",
      "desc": "라운드 개시 시, 전투 속행 효과가 적용됩니다. 해당 효과는 해제할 수 없습니다.",
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
                  "desc": "복원 시스템 : {0}HP로 전투 속행 (해제 불가)",
                  "type": 0,
                  "value": "25000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 82,
                  "revive": {
                    "base": 25000,
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
      "key": "Skill_MP_RocCGeneratorA_N_4",
      "name": "복원 대기",
      "icon": "SelfSpdDeBuff",
      "desc": "전투 속행 효과 발동 시, 4라운드 동안 행동 불가 상태가 되며 받는 피해가 최소화됩니다. 해당 효과는 해제할 수 없습니다.",
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
                  "desc": "복원 대기 : 행동 불가 (해제 불가)",
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
              },
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "복원 대기 : 피해 최소화 (해제 불가)",
                  "type": 0,
                  "value": "999999"
                },
                "attr": 3,
                "erase": {
                  "rounds": 4
                },
                "value": {
                  "isBuff": true,
                  "type": 34,
                  "damage_minimize": {
                    "base": 999999,
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
    }
  ]
};