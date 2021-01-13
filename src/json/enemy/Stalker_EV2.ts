export default {
  "id": "Stalker_EV2",
  "name": "스토커",
  "desc": "철충 연결체입니다. 힘을 모아서 엄청난 한 방을 노리는 비열한 타입의 적입니다. 하지만 힘을 모으고 있는 시간은 짧으니 최대한 공격을 늦춰서 제 포를 이용해 처리하는 게 가장 좋아 보이는군요.\n\n\n- 보고자 비스트 헌터",
  "icon": "TbarIcon_MP_Stalker_B0108",
  "ai": "AI_Boss_Stalker_Event_01",
  "rarity": 5,
  "type": 0,
  "role": 1,
  "isBoss": true,
  "hp": [
    12200,
    200
  ],
  "atk": [
    220,
    20
  ],
  "def": [
    1055,
    5
  ],
  "spd": 4.15,
  "cri": 10,
  "acc": 350,
  "eva": 75,
  "res": {
    "fire": 35,
    "chill": 35,
    "thunder": 35
  },
  "skills": [
    {
      "key": "Skill_MP_Stalker_EV2_1",
      "name": "초정밀 저격",
      "icon": "Chargeshot",
      "desc": "레일건 저격으로 {0} 보호 / 방어막 / 피해 감소 무시 피해를 줍니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.8,
        "range": 6,
        "ap": 4,
        "grid": "single",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": true,
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
                "icon": "BuffIcon_BARRIER_PIERCE",
                "desc": {
                  "desc": "초정밀 저격 : 방어막 / 피해 감소 무시",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 94,
                  "penetration_force": true
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
      "key": "Skill_MP_Stalker_EV2_2",
      "name": "조준 개시",
      "icon": "SelfAtkBuff",
      "desc": "레일건을 조준해, 다음 공격이 치명타로 적용되며 일정 라운드 동안 적중이 크게 증가합니다.",
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_charge",
                "desc": {
                  "desc": "조준 개시 : 다음 공격 치명타",
                  "type": 0,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 10
                },
                "value": {
                  "isBuff": true,
                  "type": 54,
                  "next_crit": {
                    "base": "100%",
                    "per": "0%"
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "조준 개시 : 적중+{0}%",
                  "type": 1,
                  "value": "2"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "200%",
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
      "key": "Skill_MP_Stalker_EV2_3",
      "name": "매복 공격",
      "icon": "SelfDefBuff",
      "desc": "후열에 있는 경우, 받는 피해가 감소합니다.",
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
            "if": {
              "pos": 2
            },
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
                  "desc": "매복 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "50%",
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
      "key": "Skill_MP_Stalker_EV2_4",
      "name": "영거리 저격",
      "icon": "SelfAtkBuff",
      "desc": "전열에 있는 경우, 공격력이 크게 증가합니다.",
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
            "if": {
              "pos": 0
            },
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "영거리 저격 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "30%",
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
      "key": "Skill_MP_Stalker_EV2_5",
      "name": "리액터 대폭발",
      "icon": "SuicideBomb",
      "desc": "사망 시, 리액터가 폭발에 주변에 매우 높은 고정 피해를 줍니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "around",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": "self_dead",
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "리액터 대폭발 : 공격력 {0}% 고정 피해",
                  "type": 1,
                  "value": "10"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "1000%",
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