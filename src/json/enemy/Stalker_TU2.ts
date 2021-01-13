export default {
  "id": "Stalker_TU2",
  "name": "스토커",
  "desc": "철충 연결체입니다. 힘을 모아서 엄청난 한 방을 노리는 비열한 타입의 적입니다. 하지만 힘을 모으고 있는 시간은 짧으니 최대한 공격을 늦춰서 제 포를 이용해 처리하는 게 가장 좋아 보이는군요.\n\n\n- 보고자 비스트 헌터",
  "icon": "TbarIcon_MP_Stalker_B0108",
  "ai": "AI_Boss_Stalker_01",
  "rarity": 5,
  "type": 0,
  "role": 1,
  "isBoss": true,
  "hp": [
    160,
    140
  ],
  "atk": [
    81,
    13.5
  ],
  "def": [
    40,
    0.75
  ],
  "spd": 4.1,
  "cri": 10,
  "acc": 280,
  "eva": 50,
  "res": {
    "fire": 35,
    "chill": 35,
    "thunder": 35
  },
  "skills": [
    {
      "key": "Skill_MP_Stalker_N_1",
      "name": "저격",
      "icon": "Chargeshot",
      "desc": "레일건 저격으로 {0} 피해를 줍니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 6,
        "ap": 4,
        "grid": "single",
        "target_ground": false,
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
      "key": "Skill_MP_Stalker_TU2_2",
      "name": "챠지",
      "icon": "SelfAtkBuff",
      "desc": "레일건을 충전해, 다음 공격이 치명타로 적용되며 공격력이 크게 증가합니다.",
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
                  "desc": "챠지 : 다음 공격 치명타 적용",
                  "type": 0,
                  "value": "1"
                },
                "attr": 3,
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
                "overlap": 0
              },
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "챠지 : 공격력+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 15
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "100%",
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
      "key": "Skill_MP_Stalker_N_3",
      "name": "리액터 폭발",
      "icon": "SuicideBomb",
      "desc": "사망 시, 리액터가 폭발에 주변에 매우 높은 물리 피해를 줍니다.",
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
                  "desc": "리액터 폭발 : {0}% 물리 피해",
                  "type": 1,
                  "value": "2.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "250%",
                    "per": "0%"
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