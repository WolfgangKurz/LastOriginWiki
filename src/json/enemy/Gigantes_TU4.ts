export default {
  "id": "Gigantes_TU4",
  "icon": "TbarIcon_MP_Gigantes_N",
  "ai": "AI_Mp_Mammoth_01",
  "rarity": 3,
  "type": 1,
  "role": 0,
  "isBoss": false,
  "hp": [
    2150,
    140
  ],
  "atk": [
    90,
    9
  ],
  "def": [
    200,
    12
  ],
  "spd": 3.2,
  "cri": 5,
  "acc": 130,
  "eva": 0,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": -25
  },
  "skills": [
    {
      "key": "Skill_MP_Gigantes_N_1",
      "name": "로켓 배쉬",
      "icon": "MeleeAttack",
      "desc": "대상을 강타해 {0} 피해를 주고, 일정 확률로 해당 라운드 동안 행동 불가 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.8,
        "range": 1,
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
      "key": "Skill_MP_Gigantes_N_2",
      "name": "실드 차지",
      "icon": "AssaultAttack",
      "desc": "대상에게 돌진해 {0} 피해를 주고, 뒤로 1칸 밀며 대상에게 걸린 행 보호 또는 열 보호 효과를 해제합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.3,
        "range": 2,
        "ap": 7,
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
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "행 보호 해제",
                  "type": 0,
                  "value": "50"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 88,
                  "off": {
                    "type": 50,
                    "target": 0
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "열 보호 해제",
                  "type": 0,
                  "value": "75"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 88,
                  "off": {
                    "type": 75,
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
      "key": "Skill_MP_Gigantes_N_3",
      "name": "거점 방어 모드",
      "icon": "TeamDefBuff",
      "desc": "전투 개시 시, 3라운드 동안 행 보호 효과를 활성화하며 방어력이 증가합니다.",
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
                "icon": "BuffIcon_DEF_Line",
                "desc": {
                  "desc": "거점 방어 모드 : 행 보호",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 50,
                  "guard": "col"
                },
                "overlap": 1
              }
            ],
            "maxStack": 0
          },
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
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "거점 방어 모드 : 방어력+{0}%",
                  "type": 1,
                  "value": "1.250000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "125%",
                    "per": "1%"
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