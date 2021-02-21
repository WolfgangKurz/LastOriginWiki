export default {
  "id": "CenturionEX_TU",
  "icon": "TbarIcon_MP_Centurion_N",
  "ai": "AI_Mp_Debuffer_01",
  "rarity": 4,
  "type": 0,
  "role": 1,
  "isBoss": false,
  "hp": [
    3000,
    75
  ],
  "atk": [
    80,
    10
  ],
  "def": [
    50,
    2
  ],
  "spd": 4,
  "cri": 15,
  "acc": 175,
  "eva": 25,
  "res": {
    "fire": 25,
    "chill": 25,
    "thunder": 25
  },
  "skills": [
    {
      "key": "Skill_MP_CenturionEX_N_1",
      "name": "XM 로켓 런쳐",
      "icon": "GrenadeAttack_2",
      "desc": "유탄을 발사해 목표 대상들에게 {0} 피해를 줍니다. 대상이 이동 불가 상태인 경우, 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 4,
        "ap": 6,
        "grid": "6>456",
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
                  "value": "0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "50%",
                    "per": "2.5%"
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
      "key": "Skill_MP_CenturionEX_N_2",
      "name": "일제 공격 표식",
      "icon": "Scan",
      "desc": "대상에게 {0} 보호 무시 피해를 줍니다. 적중 여부와 상관없이 2라운드 동안 대상을 표식 / 받는 피해 증가 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.15,
        "range": 5,
        "ap": 3,
        "grid": "single",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": true,
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_VULNERABLE",
                "desc": {
                  "desc": "일제 공격 표식 : 받는 피해+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 48,
                  "damage_increase": {
                    "base": "30%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_MARKING",
                "desc": {
                  "desc": "일제 공격 표식 : 표식 지정",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 87,
                  "attack_target": true
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
      "key": "Skill_MP_CenturionEX_N_3",
      "name": "역습 태세",
      "icon": "DefCounter",
      "desc": "아군이 파괴될 경우, 2라운드 동안 공격력과 치명타가 증가하며 반격합니다.",
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "역습 태세 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "20%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "역습 태세 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.100000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "10%",
                    "per": "2%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_COUNTER",
                "desc": {
                  "desc": "역습 태세 : {0}% 위력으로 반격",
                  "type": 1,
                  "value": "0.700000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 29,
                  "counter": {
                    "base": "70%",
                    "per": "5%"
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
      "key": "Skill_MP_CenturionEX_N_4",
      "name": "부대 재 정비",
      "icon": "TeamSpdBuff",
      "desc": "라운드 개시 시 역습 태세인 경우, 인접한 아군들의 행동력과 적중이 증가합니다.",
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
            "if": {
              "on": {
                "func": "OR",
                "select": [
                  "Effect_MP_CenturionEX_N_3"
                ],
                "attr": 4
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "부대 재 정비 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.080000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "8%",
                    "per": "0.3%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ACCURACY_UP",
                "desc": {
                  "desc": "부대 재 정비 : 적중+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 7,
                  "accuracy": {
                    "base": "50%",
                    "per": "2%"
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