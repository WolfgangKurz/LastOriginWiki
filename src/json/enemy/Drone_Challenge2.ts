export default {
  "id": "Drone_Challenge2",
  "name": "이모탈 익스큐셔너",
  "desc": "저번 녀석이랑 비슷하지만, 뭔가 다르네. 엄청나게 튼튼해 보이는걸? 거기다 에너지를 모으느라 반격할 기미도 안보이고… 후후, 반항하는 녀석을 데리고 놀아주는 것도 즐겁지만, 저항하지 못하는 걸 짓밟는 건 또 다른 재미가 있지. 이봐, 사령관. 혹시 다른 애들을 내보낼 생각은 아니지? 나한테 맡겨주면 적당~히 재미 좀 보다가 저녀석이 에너지를 다 모으기 전에 숨통을 끊어주겠어.\n\n\n- 사디어스 보고함",
  "icon": "TbarIcon_MP_Executioner_BEW",
  "ai": "AI_MP_Drone_Challenge2",
  "rarity": 4,
  "type": 2,
  "role": 1,
  "isBoss": false,
  "hp": [
    8000000,
    0
  ],
  "atk": [
    50000,
    0
  ],
  "def": [
    0,
    0
  ],
  "spd": 4.5,
  "cri": 0,
  "acc": 150,
  "eva": 0,
  "res": {
    "fire": 100,
    "chill": 100,
    "thunder": 100
  },
  "skills": [
    {
      "key": "Skill_MP_Drone_Challenge2_1",
      "name": "처형 개시",
      "icon": "MeleeAttack",
      "desc": "지정 범위에 피해를 주고 대상들에게 처형 낙인 효과를 적용시키며 낮은 확률로 방어막 / 피해 감소 효과를 무시합니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 10,
        "ap": 3,
        "grid": "single",
        "target_ground": false,
        "summon": null,
        "use": {
          "key": "Effect_MP_DoomEater_N_EW_21",
          "count": 10
        },
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
                  "desc": "에너지 추출",
                  "type": 0,
                  "value": "9999.990000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "999999%",
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
      "key": "Skill_MP_Drone_Challenge2_2",
      "name": "학살",
      "icon": "TeamDefDeBuff",
      "desc": "지정 범위 적에게 치명적인 보호무시 고정 피해를 입힙니다. 해당 효과는 회피할 수 없습니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 10,
        "ap": 5,
        "grid": "global",
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
            "target": 4,
            "buffs": [
              {
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "죽음의 에너지",
                  "type": 0,
                  "value": "9999.990000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 70,
                  "fixed_damage": {
                    "base": "999999%",
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
      "key": "Skill_MP_Drone_Challenge2_3",
      "name": "교란 홀로그램",
      "icon": "TeamDefBuff",
      "desc": "라운드 개시 시, 지정 범위 아군의 회피를 크게 증가시킵니다. 회피 효과는 매 라운드 감소합니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "369",
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
            "target": 2,
            "buffs": [
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "교란 홀로그램 : 회피+{0}%",
                  "type": 1,
                  "value": "5"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "type": 11,
                  "evade": {
                    "base": "500%",
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
      "key": "Skill_MP_Drone_Challenge2_4",
      "name": "배터리 방전",
      "icon": "SelfSpdBuff",
      "desc": "11라운드 개시 시, 자신의 AP를 20으로 변경합니다. <학살>을 사용합니다.",
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
              "round": {
                "operator": ">=",
                "round": 11
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "배터리 방전 : AP {0}으로 변경",
                  "type": 0,
                  "value": "20"
                },
                "attr": 3,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 21,
                  "ap_set": {
                    "base": 20,
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