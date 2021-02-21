export default {
  "id": "Harvester_TU6",
  "icon": "TbarIcon_MP_Harvester_N",
  "ai": "AI_Hvst_Normal_02",
  "rarity": 2,
  "type": 1,
  "role": 2,
  "isBoss": false,
  "hp": [
    518,
    106.8375
  ],
  "atk": [
    56,
    6.1
  ],
  "def": [
    187,
    5.1597
  ],
  "spd": 3.35,
  "cri": 5,
  "acc": 150,
  "eva": 0,
  "res": {
    "fire": 15,
    "chill": 15,
    "thunder": 15
  },
  "skills": [
    {
      "key": "Skill_MP_Harvester_N_1",
      "name": "폐기물 분쇄",
      "icon": "MeleeAttack",
      "desc": "근접 공격으로 {0} 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 일정 확률로 2라운드 동안 행동 불가로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 2,
        "range": 1,
        "ap": 10,
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
                "icon": "BuffIcon_STUN",
                "desc": {
                  "desc": "강타 : 행동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 22,
                  "stun": true
                },
                "overlap": 1
              },
              {
                "icon": "BuffIcon_PhyATK_UP",
                "desc": {
                  "desc": "강타 : 피해량+{0}%",
                  "type": 1,
                  "value": "0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "30%",
                    "per": "1.5%"
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
      "key": "Skill_MP_Harvester_N_2",
      "name": "폐기물 수거",
      "icon": "Hang",
      "desc": "집게로 목표 대상을 포획해 {0} 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 일정 확률로 이동 불가 상태가 됩니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.5,
        "range": 4,
        "ap": 4,
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
                "icon": "BuffIcon_Pull",
                "desc": {
                  "desc": "앞으로 {0}칸 당김",
                  "type": 0,
                  "value": "2"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 53,
                  "position": {
                    "type": "pull",
                    "range": {
                      "base": 2,
                      "per": 0
                    }
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_AP_DOWN",
                "desc": {
                  "desc": "행동력 {0}%",
                  "type": 1,
                  "value": "-0.250000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-25%",
                    "per": "-1.25%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_SNARE",
                "desc": {
                  "desc": "이동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "50%",
                  "type": 78,
                  "immovable": true
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