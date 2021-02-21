export default {
  "id": "ExpGoblinT_TU2",
  "icon": "TbarIcon_MP_ExpGoblinT_N",
  "ai": "AI_ExpGoblinT_Normal_01",
  "rarity": 4,
  "type": 1,
  "role": 1,
  "isBoss": false,
  "hp": [
    396,
    91.0938
  ],
  "atk": [
    94,
    9.4
  ],
  "def": [
    75,
    4.6875
  ],
  "spd": 3.95,
  "cri": 12.5,
  "acc": 225,
  "eva": 50,
  "res": {
    "fire": 30,
    "chill": 30,
    "thunder": 30
  },
  "skills": [
    {
      "key": "Skill_MP_ExpGoblinT_N_1",
      "name": "부식탄 사격",
      "icon": "MGShot",
      "desc": "대상에게 {0} 피해를 주고, 대상이 표식 상태인 경우 일정 확률로 부식 상태로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 3,
        "ap": 5,
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
                "icon": "BuffIcon_phyDMG_DOT",
                "desc": {
                  "desc": "부식 : 지속 물리 피해 {0}",
                  "type": 0,
                  "value": "200"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 200,
                    "per": 10
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "부식 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.200000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-20%",
                    "per": "-1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "부식 : 행동력 {0}%",
                  "type": 1,
                  "value": "-0.100000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-10%",
                    "per": "-1%"
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
      "key": "Skill_MP_ExpGoblinT_N_2",
      "name": "충격탄 투척",
      "icon": "MGWideShot",
      "desc": "목표 범위에 {0} 피해를 주고, 대상이 표식 상태인 경우 일정 확률로 강화 효과를 해제합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 3,
        "ap": 8,
        "grid": "#25#8",
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
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "충격탄 투척 : 강화 효과 해제",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 99,
                  "off": 0
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
      "key": "Skill_MP_ExpGoblinT_N_3",
      "name": "격분",
      "icon": "SelfAtkBuff",
      "desc": "피격 시, AP / 공격력 / 치명타가 증가하며 방어력이 감소합니다.",
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
            "on": "damaged",
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "격분 : AP+{0}",
                  "type": 0,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 1,
                    "per": 0
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "격분 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "15%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "격분 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.050000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "5%",
                    "per": "1%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_DOWN",
                "desc": {
                  "desc": "격분 : 방어력 {0}%",
                  "type": 1,
                  "value": "-0.200000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "-20%",
                    "per": "-1%"
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
      "key": "Skill_MP_ExpGoblinT_N_4",
      "name": "재생 기능",
      "icon": "SelfDefBuff",
      "desc": "전투 불능 시, 1회에 한해 HP를 회복하고 전투를 속행합니다.",
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
                "icon": "BuffIcon_DEF_RESSURRECT",
                "desc": {
                  "desc": "재생 기능 : {0}HP로 전투 속행",
                  "type": 0,
                  "value": "2000"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 82,
                  "revive": {
                    "base": 2000,
                    "per": 300
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