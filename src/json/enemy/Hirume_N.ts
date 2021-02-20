export default {
  "id": "Hirume_N",
  "icon": "TbarIcon_MP_Hirume_N",
  "ai": "AI_MP_Hirume_01",
  "rarity": 5,
  "type": 0,
  "role": 0,
  "isBoss": false,
  "hp": [
    320,
    36
  ],
  "atk": [
    58,
    7.5
  ],
  "def": [
    20,
    3.46
  ],
  "spd": 4.33,
  "cri": 7.5,
  "acc": 150,
  "eva": 30,
  "res": {
    "fire": 35,
    "chill": 35,
    "thunder": 35
  },
  "skills": [
    {
      "key": "Skill_MP_Hirume_N_1",
      "name": "태양 숨결",
      "icon": "Particle",
      "desc": "목표 지점의 적에게 {0} 화염 피해를 주고, 뒷쪽에는 25%씩 감소된 피해를 줍니다. 3라운드 동안 지속 화염 피해를 입히고 화염 저항을 감소시키며 2라운드 동안 이동 불가 상태로 만듭니다.",
      "passive": false,
      "type": 1,
      "target": "enemy",
      "buff": {
        "rate": 1.28,
        "range": 3,
        "ap": 4,
        "grid": "4>4$5#6",
        "target_ground": true,
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
                "icon": "BuffIcon_FireDMG_DOT",
                "desc": {
                  "desc": "태양 숨결 : 지속 화염 피해 {0}",
                  "type": 0,
                  "value": "640"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 66,
                  "fixed_damage": {
                    "elem": "fire",
                    "damage": {
                      "base": 640,
                      "per": 40
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_FIRERES_DOWN",
                "desc": {
                  "desc": "태양 숨결 : 화염 저항{0}%",
                  "type": 1,
                  "value": "-0.260000"
                },
                "attr": 1,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "-26%",
                      "per": "-1%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_SNARE",
                "desc": {
                  "desc": "태양 숨결 : 이동 불가",
                  "type": 0,
                  "value": "0"
                },
                "attr": 1,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 78,
                  "immovable": true
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
      "key": "Skill_MP_Hirume_N_2",
      "name": "퇴마의 술법",
      "icon": "Barrier",
      "desc": "범위 내 아군에게 냉기 저항을 크게 높여주고 1라운드 동안 유지되는 방어막을 부여합니다. 자신이 버프 범위 내에 포함되었을 경우, [수호부]가 활성화되면서 자신과 범위 내 경장형의 회피가 증가합니다.",
      "passive": false,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 6,
        "ap": 7,
        "grid": "F>13579",
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
                "icon": "BuffIcon_ICERES_UP",
                "desc": {
                  "desc": "퇴마의 술법 : 냉기 저항+{0}%",
                  "type": 1,
                  "value": "0.330000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 17,
                  "resist": {
                    "elem": "ice",
                    "value": {
                      "base": "33%",
                      "per": "3%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DAMAGE_ABSORB",
                "desc": {
                  "desc": "퇴마의 술법 : 방어막+{0}",
                  "type": 0,
                  "value": "640"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 38,
                  "barrier": {
                    "base": 640,
                    "per": 40
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "퇴마의 술법 : 수호부 활성화(자신)",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 11,
                  "evade": {
                    "base": "0%",
                    "per": "0%"
                  }
                },
                "overlap": 0
              },
              {
                "icon": "BuffIcon_EVADE_UP",
                "desc": {
                  "desc": "퇴마의 술법 : 회피+{0}%(수호부)",
                  "type": 1,
                  "value": "0.220000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 2
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 11,
                  "evade": {
                    "base": "22%",
                    "per": "2%"
                  }
                },
                "overlap": 4
              }
            ],
            "maxStack": 2
          }
        ]
      }
    },
    {
      "key": "Skill_MP_Hirume_N_3",
      "name": "마를 물리는 신체",
      "icon": "SelfDefBuff",
      "desc": "라운드 개시 시, 냉기 저항을 증가시키고 받는 피해를 감소시킵니다. 전투 시작 시 AP를 증가시킵니다.",
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "가, 가까이 오지 말거라!",
                  "type": 1,
                  "value": "20"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 21,
                  "ap_set": {
                    "base": 20,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_phyDMG_DOT",
                "desc": {
                  "desc": "너무 배고파…",
                  "type": 1,
                  "value": "500"
                },
                "attr": 3,
                "erase": {
                  "rounds": 99
                },
                "value": {
                  "isBuff": true,
                  "type": 65,
                  "fixed_damage": {
                    "base": 500,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "마를 물리는 신체 : AP+{0}(전투 시작)",
                  "type": 0,
                  "value": "2.200000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 20,
                  "ap": {
                    "base": 2.2,
                    "per": 0.2
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
      "key": "Skill_MP_Hirume_N_4",
      "name": "신성한 광휘",
      "icon": "ShieldWall",
      "desc": "라운드 시작 시, 범위 내의 아군을 지정 보호하고 아군의 냉기 속성 저항을 증가시킵니다. 추가로 공격기의 공격력, 지원기의 행동력을 증가시킵니다.",
      "passive": true,
      "type": 0,
      "target": "team",
      "buff": {
        "rate": 0,
        "range": 0,
        "ap": 0,
        "grid": "F>13579",
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
                  "desc": "신성한 광휘 : 지정 보호",
                  "type": 0,
                  "value": "0"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 76,
                  "guard": "target"
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_ATK_UP",
                "desc": {
                  "desc": "신성한 광휘 : 공격력+{0}%(공격기)",
                  "type": 1,
                  "value": "0.055000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 1,
                  "attack": {
                    "base": "5.5%",
                    "per": "0.5%"
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "신성한 광휘 : 행동력+{0}%(지원기)",
                  "type": 1,
                  "value": "0.055000"
                },
                "attr": 0,
                "erase": {
                  "rounds": 1
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 13,
                  "turnSpeed": {
                    "base": "5.5%",
                    "per": "0.5%"
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
      "key": "Skill_MP_Hirume_N_5",
      "name": "창조신의 왼쪽 눈",
      "icon": "Scan",
      "desc": "정찰로 다음에 출현할 적을 확인할 수 있습니다. 정찰 활성화된 상태로 전투 시작 시, 자신에게 피해 최소화가 적용됩니다. 전투 시작 시, 적 전체의 효과 저항과 화염 저항을 감소시킵니다.",
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
                "icon": "BuffIcon_AP_UP",
                "desc": {
                  "desc": "가, 가까이 오지 말거라!",
                  "type": 1,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "type": 21,
                  "ap_set": {
                    "base": 1,
                    "per": 0
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_FIRERES_DOWN",
                "desc": {
                  "desc": "창조신의 왼쪽 눈 : 화염 저항{0}%",
                  "type": 1,
                  "value": "-0.110000"
                },
                "attr": 3,
                "erase": {
                  "rounds": 3
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 15,
                  "resist": {
                    "elem": "fire",
                    "value": {
                      "base": "-11%",
                      "per": "-1%"
                    }
                  }
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_SCOUTING",
                "desc": {
                  "desc": "창조신의 왼쪽 눈 : 정찰 활성화(자신)",
                  "type": 0,
                  "value": "0"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 23,
                  "scout": true
                },
                "overlap": 4
              },
              {
                "icon": "BuffIcon_DEF_All",
                "desc": {
                  "desc": "창조신의 왼쪽 눈 : 피해 최소화 {0}회(정찰시/자신)",
                  "type": 0,
                  "value": "1"
                },
                "attr": 3,
                "erase": {
                  "rounds": 0
                },
                "value": {
                  "isBuff": true,
                  "chance": "0%",
                  "type": 33,
                  "damage_immune": {
                    "base": 1,
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