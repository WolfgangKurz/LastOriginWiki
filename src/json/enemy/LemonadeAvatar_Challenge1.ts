export default {
  "id": "LemonadeAvatar_Challenge1",
  "name": "레모네이드 아바타",
  "desc": "내 무기가 전혀 안 먹히는걸? 저 녀석, 이 공간을 완전히 장악했어. 아무리 그래도 혼자서는… 아! 주변의 부하들과 연결되어서 출력을 상승시키고 있는 건가? 내 생각이 맞다면, 부하들을 먼저 쓰러뜨리면 약화시킬 수 있을 거야. 물론 부하들도 연결되어서 강해졌겠지만… 반드시 이겨낼 수 있어. 우린 친구니까!\n\n\n- 리앤",
  "icon": "TbarIcon_MP_LemonadeAvatar_N",
  "ai": "AI_LemonadeAvatar_Normal_01",
  "rarity": 5,
  "type": 0,
  "role": 2,
  "isBoss": false,
  "hp": [
    1500,
    0
  ],
  "atk": [
    200,
    0
  ],
  "def": [
    0,
    0
  ],
  "spd": 10,
  "cri": 0,
  "acc": 500,
  "eva": 0,
  "res": {
    "fire": 0,
    "chill": 0,
    "thunder": 0
  },
  "skills": [
    {
      "key": "Skill_MP_LemonadeAvatar_N_1",
      "name": "화신",
      "icon": "SuicideBomb",
      "desc": "대상 범위에 {0} 피해를 주고, 완전한 모습으로 실체화합니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 2,
        "range": 9,
        "ap": 10,
        "grid": "global",
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
            "target": 3,
            "buffs": [],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_LemonadeAvatar_Challenge1_2",
      "name": "주인님을 위하여",
      "icon": "Command",
      "desc": "경장형 아군의 AP를 상승시키고 전투 속행 효과를 부여합니다. 대상의 공격력 / 치명타 확률을 5라운드 동안 증가시킵니다. 해당 효과는 해제할 수 없습니다. ",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 9,
        "ap": 10,
        "grid": "global",
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
              1
            ],
            "class": [
              0
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "주인님을 위하여 : AP+{0}",
                  "type": 0,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 20,
                  "ap": {
                    "base": 2,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_RESSURRECT",
                "desc": {
                  "desc": "주인님을 위하여 : 전투 속행",
                  "type": 0,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 10
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 98,
                  "revive": {
                    "base": "100%",
                    "per": "0%"
                  }
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "주인님을 위하여 : 공격력+{0}%",
                  "type": 1,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 1,
                  "attack": {
                    "base": "200%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "주인님을 위하여 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 9,
                  "critical": {
                    "base": "20%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": {
              "after": "use_skill"
            },
            "if": false,
            "body": [
              1
            ],
            "class": [
              0
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_DEF_RESSURRECT",
                "desc": {
                  "desc": "주인님을 위하여 : 전투 속행",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 10
                },
                "value": {
                  "isBuff": true,
                  "type": 98,
                  "revive": {
                    "base": "100%",
                    "per": "0%"
                  }
                },
                "overlap": 1
              }
            ],
            "maxStack": 0
          },
          {
            "on": {
              "after": "use_skill"
            },
            "if": false,
            "body": [
              1
            ],
            "class": [
              0
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
                  "desc": "주인님을 위하여 : 공격력+{0}%",
                  "type": 1,
                  "value": "2"
                },
                "attr": 3,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "200%",
                    "per": "0%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 0
          },
          {
            "on": {
              "after": "use_skill"
            },
            "if": false,
            "body": [
              1
            ],
            "class": [
              0
            ],
            "role": [
              0,
              1,
              2
            ],
            "target": 1,
            "buffs": [
              {
                "icon": "BuffIcon_CRITICAL_UP",
                "desc": {
                  "desc": "주인님을 위하여 : 치명타+{0}%",
                  "type": 1,
                  "value": "0.200000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 5
                },
                "value": {
                  "isBuff": true,
                  "type": 9,
                  "critical": {
                    "base": "20%",
                    "per": "0%"
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
      "key": "Skill_MP_LemonadeAvatar_N_3",
      "name": "은총 부여",
      "icon": "Barrier",
      "desc": "전투 개시 시, 기동형 아군에게 방어막을 제공합니다.",
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
            "on": "wave",
            "if": false,
            "body": [
              0,
              1
            ],
            "class": [
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
                "icon": "BuffIcon_DAMAGE_ABSORB",
                "desc": {
                  "desc": "은총 부여 : 방어막+{0}",
                  "type": 0,
                  "value": "1000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 38,
                  "barrier": {
                    "base": 1000,
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
    },
    {
      "key": "Skill_MP_LemonadeAvatar_N_4",
      "name": "공간 장악",
      "icon": "Barrier",
      "desc": "받는 피해를 영구적으로 무효화합니다. 해당 효과는 해제할 수 없습니다. ",
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
                  "desc": "공간 장악 : 피해 무효화",
                  "type": 0,
                  "value": "99999"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 33,
                  "damage_immune": {
                    "base": 99999,
                    "per": 0
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
      "key": "Skill_MP_LemonadeAvatar_N_5",
      "name": "연결 해제",
      "icon": "WideLightning",
      "desc": "모든 아군 사망 시, <공간 장악> 효과를 강제로 해제합니다.",
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
            "on": {
              "_comment": "IF_BUFFED"
            },
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
            "buffs": [],
            "maxStack": 0
          }
        ]
      }
    }
  ]
};