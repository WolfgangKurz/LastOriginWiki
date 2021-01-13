export default {
  "id": "Predator_Challenge3",
  "name": "프레데터 변종",
  "desc": "녀석은 주변 철충을 공격해 잡아먹고 있다. 그런데 아직 흡수한 에너지를 다룰 줄은 모르는 것 같군. 철충을 먹을수록 오히려 불안정해지는 모습을 관찰했다.\n\n\n- 보고자 마리",
  "icon": "TbarIcon_MP_Predator_B0208",
  "ai": "AI_Predator_Challenge_01",
  "rarity": 5,
  "type": 1,
  "role": 0,
  "isBoss": true,
  "hp": [
    800000,
    0
  ],
  "atk": [
    150,
    0
  ],
  "def": [
    15000,
    0
  ],
  "spd": 2.5,
  "cri": 10,
  "acc": 250,
  "eva": 0,
  "res": {
    "fire": 80,
    "chill": 80,
    "thunder": 80
  },
  "skills": [
    {
      "key": "Skill_MP_Predator_Challenge3_1",
      "name": "후려치기",
      "icon": "MeleeAttack",
      "desc": "막대한 힘으로 주변 철충을 공격하고 잡아먹습니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 10,
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
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "후려치기",
                  "type": 0,
                  "value": "10000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "1000000%",
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
      "key": "Skill_MP_Predator_Challenge3_2",
      "name": "부식 용액",
      "icon": "TeamDefDeBuff",
      "desc": "부식 용액으로 목표 대상들에게 {0} 보호 무시 피해를 줍니다. 피격 당한 적은 해제 불가의 지속 물리 피해를 입습니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 5,
        "ap": 6,
        "grid": "45",
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
                "icon": "BuffIcon_phyDMG_DOT",
                "desc": {
                  "desc": "부식 용액 : 지속 물리 피해 {0}",
                  "type": 0,
                  "value": "200"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 200,
                    "per": 0
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
      "key": "Skill_MP_Predator_Challenge3_3",
      "name": "동족상잔",
      "icon": "SelfAtkDeBuff",
      "desc": "동족 식인 충동으로 인해 닥치는대로 주변 철충을 잡아먹습니다.",
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "동족상잔",
                  "type": 1,
                  "value": "0"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 0,
                  "attack": {
                    "base": 0,
                    "per": 0
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
      "key": "Skill_MP_Predator_Challenge3_4",
      "name": "포식 본능",
      "icon": "SelfAtkBuff",
      "desc": "프레데터의 눈에는 오로지 철충들을 찾는 것에 집중해 있어 도발에 넘어가지 않습니다.",
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
                "icon": "BuffIcon_REMOVE_DEBUFF",
                "desc": {
                  "desc": "포식 본능 : 도발 면역",
                  "type": 0,
                  "value": "74"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 89,
                  "off": {
                    "type": 74,
                    "target": 1
                  }
                },
                "overlap": 0
              }
            ],
            "maxStack": 1
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Predator_Challenge3_5",
      "name": "세포자멸사",
      "icon": "SuicideBomb",
      "desc": "더 이상 잡아먹을 철충이 남아있지 않을 경우, 육체가 버티지 못하고 괴사합니다.",
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
              "unitCount": {
                "filter": "squad",
                "type": [
                  0,
                  2,
                  1
                ],
                "count": 1
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
            "target": 0,
            "buffs": [
              {
                "icon": "BuffIcon_phyDMG_DOT",
                "desc": {
                  "desc": "세포 자멸사 : {0} 피해",
                  "type": 0,
                  "value": "1000000"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 1000000,
                    "per": 0
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