export default {
  "id": "BigChickSP_TU2",
  "icon": "TbarIcon_MP_BigChick_N",
  "ai": "AI_Ncc_Normal_01",
  "rarity": 3,
  "type": 0,
  "role": 1,
  "isBoss": false,
  "hp": [
    5500,
    120
  ],
  "atk": [
    175,
    17
  ],
  "def": [
    75,
    7.5
  ],
  "spd": 3.5,
  "cri": 5,
  "acc": 190,
  "eva": 5,
  "res": {
    "fire": 25,
    "chill": 25,
    "thunder": 25
  },
  "skills": [
    {
      "key": "Skill_MP_BigChickSP_N_1",
      "name": "돌격 난사",
      "icon": "Shot",
      "desc": "기관포를 발사해 목표 적에게 {0} 피해를 줍니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 0.5,
        "range": 3,
        "ap": 6,
        "grid": "258",
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
                "icon": "BuffIcon_Pull",
                "desc": {
                  "desc": "앞으로 {0}칸 이동",
                  "type": 0,
                  "value": "2"
                },
                "attr": 0,
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
                "overlap": 4
              }
            ],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_BigChickSP_N_2",
      "name": "기관포 난사",
      "icon": "Shot",
      "desc": "기관포를 난사해 목표 적들에게 {0} 피해를 줍니다.",
      "passive": false,
      "type": 0,
      "target": "enemy",
      "buff": {
        "rate": 1,
        "range": 1,
        "ap": 8,
        "grid": "1457",
        "target_ground": false,
        "summon": null,
        "use": null,
        "dismiss_guard": false,
        "acc_bonus": 0,
        "buff_rate": 0,
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
            "buffs": [],
            "maxStack": 0
          }
        ]
      }
    },
    {
      "key": "Skill_MP_BigChickSP_N_3",
      "name": "과출력 상태",
      "icon": "Shock",
      "desc": "자신의 HP가 50% 이상인 경우, 과출력 상태가 되어 공격력이 증가합니다.",
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
              "hp>=": "50%"
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
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "HP 50% 이상 시, 공격력 +{0}%",
                  "type": 1,
                  "value": "0.350000"
                },
                "attr": 0,
                "erase": {
                  "until": {
                    "hp<=": "50%"
                  }
                },
                "value": {
                  "isBuff": true,
                  "type": 1,
                  "attack": {
                    "base": "35%",
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
    }
  ]
};