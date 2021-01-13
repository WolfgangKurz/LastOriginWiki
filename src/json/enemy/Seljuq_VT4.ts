export default {
  "id": "Seljuq_VT4",
  "name": "초코 여왕의 포병",
  "desc": "초코 여왕이 양산형 셀주크 기종을 도색해 만들어낸 기체입니다.",
  "icon": "TbarIcon_MP_Seljuq_V2",
  "ai": "AI_Mp_Mammoth_01",
  "rarity": 3,
  "type": 1,
  "role": 1,
  "isBoss": false,
  "hp": [
    950,
    108
  ],
  "atk": [
    125,
    12.5
  ],
  "def": [
    120,
    6
  ],
  "spd": 3.1,
  "cri": 5,
  "acc": 150,
  "eva": 0,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": -25
  },
  "skills": [
    {
      "key": "Skill_MP_Seljuq_N_1",
      "name": "175mm 직사포",
      "icon": "CannonShotWide",
      "desc": "직사 포격으로 목표 대상이 있는 열에 {0} 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
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
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  78
                ],
                "attr": 1
              }
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "직격 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "20%",
                    "per": "1%"
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
      "key": "Skill_MP_Seljuq_N_2",
      "name": "175mm 곡사포",
      "icon": "CannonShotDelay",
      "desc": "2라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 {0} 보호 무시 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 표식 상태인 대상에게는 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 2,
        "range": 6,
        "ap": 10,
        "grid": "#2#45#6#8",
        "target_ground": true,
        "summon": null,
        "use": null,
        "dismiss_guard": true,
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "포착 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "20%",
                    "per": "1%"
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
      "key": "Skill_MP_Seljuq_N_3",
      "name": "대 보병 고폭탄",
      "icon": "SelfAtkBuff",
      "desc": "대 보병 고폭탄을 장전해, 경장형에게 주는 피해가 증가합니다.",
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
                "icon": "BuffIcon_TROOPER_DMG_UP",
                "desc": {
                  "desc": "고폭탄 : 대 경장 피해량+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 60,
                  "damage_multiply": {
                    "target": "light",
                    "value": {
                      "base": "15%",
                      "per": "1.25%"
                    }
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
      "key": "Skill_MP_Seljuq_N_7",
      "name": "203mm 곡사포 착탄 (몹)",
      "icon": "CannonShotDelay",
      "desc": "2라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 {0} 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 표식 상태인 대상에게는 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 2,
        "range": 6,
        "ap": 0,
        "grid": "#2#45#6#8",
        "target_ground": true,
        "summon": null,
        "use": null,
        "dismiss_guard": true,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": "attack_success",
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  87
                ],
                "attr": 1
              }
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "포착 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "20%",
                    "per": "1%"
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