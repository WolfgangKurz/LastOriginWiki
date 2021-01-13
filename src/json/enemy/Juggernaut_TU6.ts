export default {
  "id": "Juggernaut_TU6",
  "name": "저거너트",
  "desc": "성격이 나빠 보이는 철충인 거예요. 공격을 시작하면 끝까지 공격하거든요. 그래서 공중 부대로 유인을 하는 게 좋을 것 같아요. 그 덩치로 다른 철충들을 보호하지 못하게요.\n\n\n- 블랙 하운드",
  "icon": "TbarIcon_MP_Juggernaut_N",
  "ai": "AI_Hvst_Normal_02",
  "rarity": 4,
  "type": 1,
  "role": 0,
  "isBoss": false,
  "hp": [
    7500,
    255
  ],
  "atk": [
    120,
    12.5
  ],
  "def": [
    475,
    18
  ],
  "spd": 3.3,
  "cri": 10,
  "acc": 180,
  "eva": 0,
  "res": {
    "fire": 25,
    "chill": 25,
    "thunder": 25
  },
  "skills": [
    {
      "key": "Skill_MP_Juggernaut_N_1",
      "name": "스턴 펀치",
      "icon": "MeleeAttack",
      "desc": "대상을 강타해 {0} 피해를 주고, 일정 확률로 행동 불가 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 2.4,
        "range": 1,
        "ap": 10,
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
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "행동 불능",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 22,
                  "stun": true
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
      "key": "Skill_MP_Juggernaut_N_2",
      "name": "몸통 박치기",
      "icon": "AssaultAttack",
      "desc": "대상에게 돌진해 {0} 피해를 주고, 뒤로 1칸 밀어냅니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.6,
        "range": 2,
        "ap": 9,
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
                "icon": "BuffIcon_Push",
                "desc": {
                  "desc": "뒤로 {0}칸 밀기",
                  "type": 0,
                  "value": "1"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 52,
                  "position": {
                    "type": "push",
                    "range": {
                      "base": 1,
                      "per": 0
                    }
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
      "key": "Skill_MP_Juggernaut_N_3",
      "name": "방벽 전환",
      "icon": "TeamDefBuff",
      "desc": "아군이 사망한 경우, 방어 태세로 전환해 2라운드 동안 행 보호와 열 보호 효과를 활성화합니다.",
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
                "icon": "BuffIcon_DEF_Line",
                "desc": {
                  "desc": "방벽 전환 : 행 보호",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 50,
                  "guard": "col"
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_DEF_Side",
                "desc": {
                  "desc": "방벽 전환 : 열 보호",
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
      "key": "Skill_MP_Juggernaut_N_4",
      "name": "방어 프로토콜",
      "icon": "SelfDefBuff",
      "desc": "피격 시, 일정 확률로 방어력이 대폭 증가합니다.",
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
        "buff_rate": 45,
        "buffs": [
          {
            "on": "attacked",
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "블로킹 : 방어력+{0}%",
                  "type": 1,
                  "value": "2"
                },
                "attr": 0,
                "erase": {
                  "until": "damaged"
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "200%",
                    "per": "3.75%"
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