export default {
  "id": "Nereid_EV3",
  "name": "AG-1 네레이드_적",
  "desc": "<교전 기록 없음>",
  "icon": "TbarIcon_MP_Nereid_N",
  "ai": "AI_PupHeadC_Normal_01",
  "rarity": 4,
  "type": 1,
  "role": 1,
  "isBoss": false,
  "hp": [
    220,
    600
  ],
  "atk": [
    58,
    8.4
  ],
  "def": [
    17,
    2.7
  ],
  "spd": 3.75,
  "cri": 10,
  "acc": 121,
  "eva": 0,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_Nereid_EV3_1",
      "name": "벌집 만들기",
      "icon": "MGShot",
      "desc": "",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.5,
        "range": 4,
        "ap": 5,
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
            "if": {
              "on": {
                "target": "target",
                "func": "OR",
                "select": [
                  3,
                  11
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
                  "desc": "집중 공격 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 1,
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
              },
              {
                "icon": "BuffIcon_MOBILITY_DMG_UP",
                "desc": {
                  "desc": "벌집 만들기 : 대 기동형 피해량+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 62,
                  "damage_multiply": {
                    "target": "air",
                    "value": {
                      "base": "15%",
                      "per": "0.75%"
                    }
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
      "key": "Skill_MP_Nereid_EV3_2",
      "name": "무차별 난사",
      "icon": "MGWideShot",
      "desc": "",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.25,
        "range": 3,
        "ap": 8,
        "grid": "1457",
        "target_ground": true,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 100,
        "buffs": [
          {
            "on": "enemy_killed",
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
                  "desc": "신난다! : 공격력+{0}%",
                  "type": 1,
                  "value": "0.060000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "6%",
                    "per": "0.3%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "신난다! : AP+{0}",
                  "type": 0,
                  "value": "1.500000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 20,
                  "ap": {
                    "base": 1.5,
                    "per": 0.05
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
      "key": "Skill_MP_Nereid_EV3_3",
      "name": "덤벼덤벼!",
      "icon": "SelfAtkBuff",
      "desc": "",
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
                "icon": "BuffIcon_DamageAmp_Me",
                "desc": {
                  "desc": "덤벼덤벼! : 자신 HP%에 따라 피해량+{0}% (최대)",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 1,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 80,
                  "damage_by_hp": {
                    "target": "self",
                    "damage": {
                      "base": "35%",
                      "per": "2%"
                    }
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "덤벼덤벼! : 받는 피해 {0}% 감소 (최대)",
                  "type": 1,
                  "value": "0.240000"
                },
                "attr": 1,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 36,
                  "damage_reduce": {
                    "base": "24%",
                    "per": "2.4%"
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
      "key": "Skill_MP_Nereid_EV3_4",
      "name": "전투 과몰입",
      "icon": "SelfDefBuff",
      "desc": "",
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
                  "desc": "전투 과몰입 : {0}HP로 전투 속행 (1회)",
                  "type": 0,
                  "value": "10"
                },
                "attr": 1,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 82,
                  "revive": {
                    "base": 10,
                    "per": 60
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "전투 과몰입 : 공격력+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 1,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 1,
                  "attack": {
                    "base": "15%",
                    "per": "0.75%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "전투 과몰입 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 1,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 9,
                  "critical": {
                    "base": "15%",
                    "per": "0.75%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "전투 과몰입 : 행동력+{0}%",
                  "type": 1,
                  "value": "0.150000"
                },
                "attr": 1,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 13,
                  "turnSpeed": {
                    "base": "15%",
                    "per": "0.75%"
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