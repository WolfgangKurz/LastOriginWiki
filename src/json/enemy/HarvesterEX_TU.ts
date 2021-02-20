export default {
  "id": "HarvesterEX_TU",
  "icon": "TbarIcon_MP_Harvester_N",
  "ai": "AI_Hvst_Normal_02",
  "rarity": 3,
  "type": 1,
  "role": 2,
  "isBoss": false,
  "hp": [
    500,
    72.5
  ],
  "atk": [
    70,
    9
  ],
  "def": [
    100,
    5
  ],
  "spd": 3.25,
  "cri": 5,
  "acc": 100,
  "eva": 0,
  "res": {
    "fire": 25,
    "chill": 25,
    "thunder": 25
  },
  "skills": [
    {
      "key": "Skill_MP_HarvesterEX_N_1",
      "name": "폐기물 파쇄",
      "icon": "MeleeAttack",
      "desc": "근접 공격으로 {0} 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 2라운드 동안 행동 불가로 만듭니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 2.6,
        "range": 1,
        "ap": 9,
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
                  "value": "0.400000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 83,
                  "damage_add": {
                    "base": "40%",
                    "per": "2%"
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
      "key": "Skill_MP_HarvesterEX_N_2",
      "name": "폐기물 수집",
      "icon": "Hang",
      "desc": "집게로 목표 대상을 포획해 {0} 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 이동 불가 상태가 됩니다.",
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
                  "value": "-0.300000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "type": 13,
                  "turnSpeed": {
                    "base": "-30%",
                    "per": "-1.5%"
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
    },
    {
      "key": "Skill_MP_HarvesterEX_N_3",
      "name": "초합금 플레이팅",
      "icon": "SelfDefBuff",
      "desc": "견고한 장갑으로 인해, 일정 위력 이하의 공격은 통하지 않습니다.",
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
                  "desc": "초합금 플레이팅 : 위력 {0} 이하 공격 무효",
                  "type": 0,
                  "value": "600"
                },
                "attr": 0,
                "erase": {},
                "value": {
                  "isBuff": true,
                  "type": 34,
                  "damage_minimize": {
                    "base": 600,
                    "per": 0
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