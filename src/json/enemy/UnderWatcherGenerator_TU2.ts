export default {
  "id": "UnderWatcherGenerator_TU2",
  "name": "언더왓쳐 제네레이터",
  "desc": "에너지 공급용 제네레이터네요. 계속 공격해보면 에너지 공급을 멈출 수 있을 것 같네요.\n\n\n- 스카디",
  "icon": "TbarIcon_MP_UnderWatcherGenerator_B05",
  "ai": "AI_UnderWatcherGene_02",
  "rarity": 5,
  "type": 1,
  "role": 0,
  "isBoss": true,
  "hp": [
    47755,
    155
  ],
  "atk": [
    0,
    0
  ],
  "def": [
    0,
    0
  ],
  "spd": 7,
  "cri": 0,
  "acc": 999,
  "eva": 0,
  "res": {
    "fire": 50,
    "chill": 75,
    "thunder": 50
  },
  "skills": [
    {
      "key": "Skill_MP_UnderWatcherGenerator_TU2_1",
      "name": "에너지 충전",
      "icon": "SelfAtkBuff",
      "desc": "각 장치들에게 에너지를 전달해, 공격력과 효과 저항을 증가시키며 받는 피해를 1회 무효화합니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 8,
        "ap": 7,
        "grid": "6>12345789",
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
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "충전 : 공격력+{0}%",
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
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_All",
                "desc": {
                  "desc": "충전 : 피해 무효 {0}회",
                  "type": 0,
                  "value": "1"
                },
                "attr": 0,
                "erase": {
                  "rounds": 9
                },
                "value": {
                  "isBuff": true,
                  "type": 33,
                  "damage_immune": {
                    "base": 1,
                    "per": 0
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "충전 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
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
                "overlap": 1
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_UnderWatcherGenerator_TU2_2",
      "name": "에너지 실드",
      "icon": "SelfDefBuff",
      "desc": "에너지 실드를 전개해 피해를 흡수하는 방어막을 부여하고, 상태 이상을 해제합니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 8,
        "ap": 4,
        "grid": "6>123456789",
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
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_DAMAGE_ABSORB",
                "desc": {
                  "desc": "에너지 실드 : 방어막+{0}",
                  "type": 0,
                  "value": "9000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 9
                },
                "value": {
                  "isBuff": true,
                  "type": 38,
                  "barrier": {
                    "base": 9000,
                    "per": 0
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "에너지 실드 : 해로운 효과 제거",
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
      "key": "Skill_MP_UnderWatcherGenerator_TU2_3",
      "name": "에너지 코팅",
      "icon": "SelfDefBuff",
      "desc": "스킬 사용 시, 받는 공격을 3회 무효화합니다. 3라운드 동안 받는 피해가 감소하며, 효과 저항이 증가합니다.",
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
                "icon": "BuffIcon_DEF_All",
                "desc": {
                  "desc": "에너지 코팅 : 피해 무효 {0}회",
                  "type": 0,
                  "value": "3"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 33,
                  "damage_immune": {
                    "base": 3,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DAMAGE_REDUCE",
                "desc": {
                  "desc": "에너지 코팅 : 받는 피해 {0}% 감소",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 36,
                  "damage_reduce": {
                    "base": "50%",
                    "per": "1%"
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_DEBUFF_PERDOWN",
                "desc": {
                  "desc": "에너지 코팅 : 효과 저항+{0}%",
                  "type": 1,
                  "value": "0.500000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
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
                "overlap": 1
              }
            ],
            "maxStack": 0
          },
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
                "icon": "BuffIcon_DEF_All",
                "desc": {
                  "desc": "에너지 코팅 : 피해 무효 {0}회",
                  "type": 0,
                  "value": "3"
                },
                "attr": 0,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "type": 33,
                  "damage_immune": {
                    "base": 3,
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
      "key": "Skill_MP_UnderWatcherGenerator_TU2_4",
      "name": "제네레이터 쇼트",
      "icon": "SelfSpdDeBuff",
      "desc": "피격 시, 높은 확률로 AP가 감소하며 낮은 확률로 쇼트가 생겨 행동 불능이 됩니다.",
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
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "제네레이터 쇼트 : AP {0}",
                  "type": 0,
                  "value": "-0.500000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "75%",
                  "type": 20,
                  "ap": {
                    "base": -0.5,
                    "per": -0.01
                  }
                },
                "overlap": 3
              }
            ],
            "maxStack": 0
          },
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
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "제네레이터 쇼트 : 행동 불능",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "4%",
                  "type": 22,
                  "stun": true
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
      "key": "Skill_MP_UnderWatcherGenerator_TU2_5",
      "name": "제네레이터 파괴",
      "icon": "SuicideBomb",
      "desc": "파괴될 경우, 모든 파츠의 강화 효과가 해제되고 행동 불가 상태가 됩니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "global",
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
                "icon": "BuffIcon_REMOVE_BUFF",
                "desc": {
                  "desc": "제네레이터 파괴 : 강화 효과 해제",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 99,
                  "off": 0
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "제네레이터 파괴 : 행동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 22,
                  "stun": true
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