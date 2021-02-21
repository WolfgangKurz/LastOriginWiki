export default {
  "id": "Tortoise_TU2",
  "icon": "TbarIcon_MP_Tortoise_N",
  "ai": "AI_Tortoise_Normal_01",
  "rarity": 4,
  "type": 1,
  "role": 0,
  "isBoss": false,
  "hp": [
    4320,
    113.3
  ],
  "atk": [
    67,
    6.7
  ],
  "def": [
    210,
    10.5
  ],
  "spd": 3.6,
  "cri": 5,
  "acc": 200,
  "eva": 0,
  "res": {
    "fire": 30,
    "chill": 30,
    "thunder": 30
  },
  "skills": [
    {
      "key": "Skill_MP_Tortoise_N_1",
      "name": "프래그 샷건",
      "icon": "ShotGun",
      "desc": "샷건을 발사해 {0} 피해를 줍니다. 자신이 전열이면 피해량이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1.2,
        "range": 3,
        "ap": 6,
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
            "target": 3,
            "buffs": [
              {
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "근접 사격 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.400000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "40%",
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
      "key": "Skill_MP_Tortoise_N_2",
      "name": "장갑 장착",
      "icon": "SelfDefBuff",
      "desc": "외장형 반응 장갑을 장착해 전투 속행 효과를 얻으며, 방어력과 모든 속성 저항이 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 8,
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
                "icon": "BuffIcon_DEF_RESSURRECT",
                "desc": {
                  "desc": "장갑 장착 : {0} HP로 전투 속행",
                  "type": 0,
                  "value": "4000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 9
                },
                "value": {
                  "isBuff": true,
                  "type": 82,
                  "revive": {
                    "base": 4000,
                    "per": 10
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_DEF_UP",
                "desc": {
                  "desc": "장갑 장착 : 방어력+{0}%",
                  "type": 1,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 3,
                  "defense": {
                    "base": "100%",
                    "per": "5%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_FIRERES_UP",
                "desc": {
                  "desc": "장갑 장착 : 화염 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "50%",
                      "per": "1%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ICERES_UP",
                "desc": {
                  "desc": "장갑 장착 : 냉기 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 17,
                  "resist": {
                    "elem": "ice",
                    "value": {
                      "base": "50%",
                      "per": "1%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_LIGHTNINGRES_UP",
                "desc": {
                  "desc": "장갑 장착 : 전기 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 19,
                  "resist": {
                    "elem": "lightning",
                    "value": {
                      "base": "50%",
                      "per": "1%"
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
      "key": "Skill_MP_Tortoise_N_3",
      "name": "외장형 반응 장갑",
      "icon": "SelfDefBuff",
      "desc": "공격 받는 경우, 3회까진 최소 피해만 받으며 효과 저항이 증가합니다.",
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
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "외장형 반응 장갑 : 피해 최소화 (3회)",
                  "type": 0,
                  "value": "999999"
                },
                "attr": 0,
                "erase": {
                  "count": 3,
                  "trigger": "damaged"
                },
                "value": {
                  "isBuff": true,
                  "type": 34,
                  "damage_minimize": {
                    "base": 999999,
                    "per": 1
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 1
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
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "외장형 반응 장갑 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "count": 3,
                  "trigger": "damaged"
                },
                "value": {
                  "isBuff": true,
                  "type": 91,
                  "resist": {
                    "type": "debuff",
                    "value": {
                      "base": "50%",
                      "per": "1%"
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
      "key": "Skill_MP_Tortoise_N_4",
      "name": "엄폐 지원",
      "icon": "TeamDefBuff",
      "desc": "라운드 개시 시, 같은 행의 뒤에 배치된 아군을 보호합니다. 해당 효과는 자신이 스킬을 사용하면 해제됩니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "4>456",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_Char",
                "desc": {
                  "desc": "엄폐 지원 : 지정 대상 보호",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "until": "attack"
                },
                "value": {
                  "isBuff": true,
                  "type": 76,
                  "guard": "target"
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