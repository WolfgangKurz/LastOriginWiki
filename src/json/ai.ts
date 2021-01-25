export default [
  {
    "ai": "AI_Jako_Special_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Scout_Normal_01",
    "pattern": [
      {
        "chance": 33,
        "if": [
          {
            "type": "hp",
            "func": "<",
            "hp": 70
          },
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": "<",
            "hp": 100
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Boss_Stalker_01",
    "pattern": [
      {
        "if": [
          {
            "type": "action",
            "func": ">",
            "action": 0
          }
        ]
      },
      {
        "if": [
          {
            "type": "cri100"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_Jako_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "!front"
          },
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Boss_PWLR_02",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "Effect_MP_Predator_B0208_2",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_TrickSter_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Ncc_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Jako_Defense_02",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_NightChickS_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_NCShield_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_NightChickSI_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_BigChickM_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Hvst_Normal_02",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "!front"
          },
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_FABigChick_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Zapper_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Zapper_N_3"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Legion_Normal_03",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">",
            "hp": 70
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      }
    ]
  },
  {
    "ai": "AI_Centurion_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "action",
            "func": "=",
            "action": 1
          },
          {
            "type": "attacked"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "latest_attacked"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Jako_Sniper_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 40
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_NightChickSP_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Wasp_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<",
            "hp": 25
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Scarab_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">",
            "hp": 50
          },
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">",
            "hp": 25
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Raider_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">",
            "hp": 25
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Raider_N_5"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_NCDetector_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">",
            "hp": 65
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Jako_Special_02",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_HeavyScout_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 60
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_HeavyScout_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "heavy",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Palanx_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Phalangites_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Zapper_EX_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_ZapperEx_N_3"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_Debuffer_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">",
            "hp": 60
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_Mammoth_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_Rampart_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 50
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Rampart_N_11"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_Fallen_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">",
            "hp": 75
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_AntiAirBuffer_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">",
            "hp": 70
          },
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">",
            "hp": 10
          },
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Boss_Typhoon_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<",
            "hp": 80
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Kidnapper_N_5"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_UnderWatcher_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 80
          },
          {
            "type": "buff",
            "buff": "Effect_MP_UnderWatcher_N_4"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_UnderWatcherArm_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 100
          },
          {
            "type": "buff",
            "buff": "Effect_MP_UnderWatcherArm_N_4"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "air",
              "enemy"
            ],
            [
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_UnderWatcherSensor_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 100
          },
          {
            "type": "buff",
            "buff": "Effect_MP_UnderWatcherSensor_N_4"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "light",
              "enemy"
            ],
            [
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_UnderWatcherGene_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 25
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Raider_02",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">",
            "hp": 5
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Raider_N_5"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_UnderWatcher_02",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 100
          },
          {
            "type": "buff",
            "buff": "Effect_MP_UnderWatcher_TU2_4"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_UnderWatcherArm_02",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 100
          },
          {
            "type": "buff",
            "buff": "Effect_MP_UnderWatcherArm_TU2_4"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "light",
              "enemy"
            ],
            [
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_UnderWatcherSensor_02",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 100
          },
          {
            "type": "buff",
            "buff": "Effect_MP_UnderWatcherSensor_TU2_4"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "light",
              "enemy"
            ],
            [
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_UnderWatcherGene_02",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 25
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_UnderWatcherGenerator_TU2_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_CenturionCF_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_CenturionCF_N_2"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "Effect_MP_CenturionCF_N_2"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_CenturionCF_N_2"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_CenturionCF_N_2"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Tortoise_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Tortoise_N_2"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Tortoise_N_2"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_NightChickQM_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Spector_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_LegionSP_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_LegionSP_N_1"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "Effect_MP_LegionSP_N_1"
            ],
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_LegionSP_N_1"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_LegionSP_N_1"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_LegionSP_N_1"
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_LegionSP_N_1"
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_LegionSP_N_1"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "filter": {
            "type": "row",
            "cnt": "2",
            "func": ">="
          },
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_EmperorChick_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<",
            "hp": 50
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": "<",
            "hp": 50
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ProgramMobTS_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobTS_N_1"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "Effect_MP_ProgramMobTS_N_1"
            ],
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobTS_N_1"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobTS_N_1"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ProgramMobTT_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ProgramMobMS_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ProgramMobMT_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ProgramMobTN_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobTT_N_1"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "Effect_MP_ProgramMobTT_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobMS_N_1"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "Effect_MP_ProgramMobMS_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobMT_N_1"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "Effect_MP_ProgramMobMT_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobMS_N_1"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "Effect_MP_ProgramMobMS_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ProgramMobAS_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobTT_N_1"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "Effect_MP_ProgramMobTT_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobMS_N_1"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "Effect_MP_ProgramMobMS_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobMT_N_1"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "Effect_MP_ProgramMobMT_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobMS_N_1"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "Effect_MP_ProgramMobMS_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ProgramMobMN_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobTT_N_1"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "Effect_MP_ProgramMobTT_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobMS_N_1"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "Effect_MP_ProgramMobMS_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobTS_N_2"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "Effect_MP_ProgramMobTS_N_2"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "heavy",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ProgramMobAN_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobTT_N_1"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "Effect_MP_ProgramMobTT_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobMS_N_1"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "Effect_MP_ProgramMobMS_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobTS_N_2"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "Effect_MP_ProgramMobTS_N_2"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "heavy",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ProgramMobAT_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobTT_N_1"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "Effect_MP_ProgramMobTT_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_ProgramMobMS_N_1"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "Effect_MP_ProgramMobMS_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ExpGoblinT_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_ExpGoblinA_N_1"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "Effect_MP_ExpGoblinA_N_1"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "air",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ExpGoblinA_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1,
            "filter": {
              "type": "count",
              "cnt": 1,
              "func": ">"
            }
          }
        ],
        "act": {
          "skill": 1,
          "filter": {
            "type": "row",
            "cnt": 2,
            "func": ">="
          },
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1,
            "filter": {
              "type": "count",
              "cnt": 1,
              "func": ">"
            }
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ExpGenerator_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "attacked"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "act": {
          "skill": 1,
          "to": [
            [
              "self"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_Executioner_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 100
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Executioner_N_3"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ExecutionerLB_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 100
          },
          {
            "type": "buff",
            "buff": "Effect_MP_ExecutionerLB_N_12"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ExecutionerRB_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 100
          },
          {
            "type": "buff",
            "buff": "Effect_MP_ExecutionerRB_N_5"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Ncc_Event_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Ncc_Event_02",
    "pattern": [
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 8
          }
        ],
        "act": {
          "move": 4
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 4
          }
        ],
        "act": {
          "move": 2
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 2
          }
        ],
        "act": {
          "move": 6
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 6
          }
        ],
        "act": {
          "move": 8
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 7
          }
        ],
        "act": {
          "move": 1
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 1
          }
        ],
        "act": {
          "move": 3
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 3
          }
        ],
        "act": {
          "move": 9
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 9
          }
        ],
        "act": {
          "move": 7
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Wasp_Event_01",
    "pattern": [
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "attacked"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "attacked"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Scout_Event_01",
    "pattern": [
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 7
          }
        ],
        "act": {
          "move": 3
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 4
          }
        ],
        "act": {
          "move": 6
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 1
          }
        ],
        "act": {
          "move": 9
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_HeavyScout_Event_01",
    "pattern": [
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_HeavyScout_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_BigChickM_Event_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Jako_Event_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_LegionSP_Special_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff?",
            "buff": "Effect_MP_LegionSPEX_N_1"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_NightChickQM_Special_01",
    "pattern": [
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "buff",
            "buff": "Effect_MP_NightChickQMEX_N_2"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_NightChickQM_Special_02",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": 5
          },
          {
            "type": "buff",
            "buff": "Effect_MP_NightChickQMEX_N_2"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": 5
          },
          {
            "type": "buff",
            "buff": "Effect_MP_NightChickQMEX_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 8
          }
        ],
        "act": {
          "move": 4
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 4
          }
        ],
        "act": {
          "move": 2
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 2
          }
        ],
        "act": {
          "move": 6
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 6
          }
        ],
        "act": {
          "move": 8
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 7
          }
        ],
        "act": {
          "move": 1
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 1
          }
        ],
        "act": {
          "move": 3
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 3
          }
        ],
        "act": {
          "move": 9
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 9
          }
        ],
        "act": {
          "move": 7
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_Centurion_Normal_02",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          },
          {
            "type": "buff?",
            "negative": true,
            "buff": "Effect_MP_Centurion_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          },
          {
            "type": "buff?",
            "buff": "Effect_MP_Centurion_N_2"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "Effect_MP_Centurion_N_2"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Spector_Special_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_SpectorBS_N_13"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_Spector_Special_02",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": 5
          },
          {
            "type": "buff",
            "buff": "Effect_MP_SpectorMS_N_2"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": 5
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 8
          }
        ],
        "act": {
          "move": 4
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 4
          }
        ],
        "act": {
          "move": 2
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 2
          }
        ],
        "act": {
          "move": 6
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 6
          }
        ],
        "act": {
          "move": 8
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 7
          }
        ],
        "act": {
          "move": 1
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 1
          }
        ],
        "act": {
          "move": 3
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 3
          }
        ],
        "act": {
          "move": 9
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 9
          }
        ],
        "act": {
          "move": 7
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_SpectorMS_N_2"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_Centurion_Special_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff?",
            "negative": true,
            "buff": "Effect_MP_CenturionEX_N_2"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          },
          {
            "type": "buff?",
            "buff": "Effect_MP_CenturionEX_N_2"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "Effect_MP_CenturionEX_N_2"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Scout_Special_01",
    "pattern": [
      {
        "chance": 33,
        "if": [
          {
            "type": "pos",
            "pos": 5
          },
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": 5
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": 5
          },
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": 5
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 8
          }
        ],
        "act": {
          "move": 4
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 4
          }
        ],
        "act": {
          "move": 2
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 2
          }
        ],
        "act": {
          "move": 6
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 6
          }
        ],
        "act": {
          "move": 8
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 7
          }
        ],
        "act": {
          "move": 1
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 1
          }
        ],
        "act": {
          "move": 3
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 3
          }
        ],
        "act": {
          "move": 9
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 9
          }
        ],
        "act": {
          "move": 7
        }
      },
      {
        "chance": 33,
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_ThunderChick_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "!front"
          },
          {
            "type": "hp",
            "func": "<=",
            "hp": 33
          },
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_AquaChick_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 66
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_NightChickAQ_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Chiller_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Chiller_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_BigChickShield_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 10
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_BigChickS_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_NCDetectorG_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_NightChickDEG_N_11"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_CMChickX_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 50
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          },
          {
            "type": "exist",
            "who": "MP_EmperorChickSpCH_Challenge1"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          },
          {
            "type": "!exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_RampartC_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 66
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_RampartC_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_FallenC_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 50
          },
          {
            "type": "buff",
            "buff": "Effect_MP_FallenC_N_12"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "team"
            ],
            [
              "heavy",
              "team"
            ],
            [
              "near",
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_PupHeadC_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_PuppHeadC_N_12"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_StingerC_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_StingerC_N_4"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_AAAMG11_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_DroneC_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_DroneM_N_11"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_SeljuqC_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "buff",
            "buff": "Effect_MP_SeljuqA_N_4"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_GigantesC_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "!front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_RocC_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_RocC_N_4"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_RocC_Normal_02",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_RocC_EV2_4"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_RocGenerator_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 25
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_RocCGenerator_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_RocGenerator_Normal_02",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 50
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_RocCGenerator_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_Testudo_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 40
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Testudo_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_LegionElite_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_LegionElite_N_13"
          },
          {
            "type": "hp",
            "func": ">=",
            "hp": 50
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_CenturionG_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_CenturionG_N_11"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_CenturionEv_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Centurion_N_3"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_RocGenerator_Normal_03",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 15
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_RocCGeneratorA_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_RocGenerator_Normal_04",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 33
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_RocCGeneratorA_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Undine_Event_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Undine_EV1_11"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Undine_Event_02",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Undine_EV2_11"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Undine_Event_03",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Undine_EV3_11"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Undine_Event_04",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_SIrene_EV1_3"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Sirene_Event_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Sirene_EV1_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Sirene_Event_02",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Sirene_EV1_3"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Nereid_Event_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Nereid_EV1_13"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Nereid_Event_02",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Sirene_EV1_3"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_AAAMG11_Normal_02",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Dagon_Event_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Sirene_EV1_2"
          },
          {
            "type": "pos",
            "pos": 8
          }
        ],
        "act": {
          "move": 4
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Sirene_EV1_2"
          },
          {
            "type": "pos",
            "pos": 4
          }
        ],
        "act": {
          "move": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Sirene_EV1_2"
          },
          {
            "type": "pos",
            "pos": 2
          }
        ],
        "act": {
          "move": 6
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Sirene_EV1_2"
          },
          {
            "type": "pos",
            "pos": 6
          }
        ],
        "act": {
          "move": 8
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Sirene_EV1_2"
          },
          {
            "type": "pos",
            "pos": 7
          }
        ],
        "act": {
          "move": 1
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Sirene_EV1_2"
          },
          {
            "type": "pos",
            "pos": 1
          }
        ],
        "act": {
          "move": 3
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Sirene_EV1_2"
          },
          {
            "type": "pos",
            "pos": 3
          }
        ],
        "act": {
          "move": 9
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Sirene_EV1_2"
          },
          {
            "type": "pos",
            "pos": 9
          }
        ],
        "act": {
          "move": 7
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          },
          {
            "type": "hp",
            "func": "<=",
            "hp": 25
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_BigChickMG_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_BigChickMG_N_3"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_CMChickP_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 25
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Boss_Stalker_Event_01",
    "pattern": [
      {
        "if": [
          {
            "type": "action",
            "func": ">",
            "action": 0
          }
        ]
      },
      {
        "if": [
          {
            "type": "cri100"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_Boss_PWLR_EW_02",
    "pattern": [
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "buff",
            "buff": "Effect_MP_DoomEater_N_EW2_21"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "team"
            ]
          ]
        }
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_Executioner_EW_02",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 60
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Executioner_BEW_EW2_38"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_Tarantula_EW_02",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Tarantula_EW2_31"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Tarantula_EW2_31"
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Tarantula_EW2_31"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_NCShieldEx_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          },
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_Tarantula_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "!front"
          },
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_Tarantula_Normal_02",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 50
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 50
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 50
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "!front"
          },
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_ChDetectorEx_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          },
          {
            "type": "buff",
            "buff": "Effect_MP_NightChickDEX_N_11"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_Frostbite_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Frostbite_N_5"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_Destroyer_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Destroyer_N_2"
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_Destroyer_N_15"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_NCDetectorAA_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_NightChickDEAA_N_13"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_LegionMk2_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_LegionMk2_N_12"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_NCSniperWinter_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_NightChickSPW_N_13"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_MammothW_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_NChick_Challenge_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_NightChickS_C_2"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_NChickM_Challenge_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_NightChickS_C_2"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Mp_NCShield_Challenge_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 25
          },
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_SoldierChick_Challenge_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_EmperorChickSpCH_N_5"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_EmperorChickSpCH_N_5"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": 7
          }
        ],
        "act": {
          "move": 8
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": 8
          }
        ],
        "act": {
          "move": 9
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": 9
          }
        ],
        "act": {
          "move": 6
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": 6
          }
        ],
        "act": {
          "move": 3
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": 3
          }
        ],
        "act": {
          "move": 2
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": 2
          }
        ],
        "act": {
          "move": 1
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": 1
          }
        ],
        "act": {
          "move": 4
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": 4
          }
        ],
        "act": {
          "move": 7
        }
      }
    ]
  },
  {
    "ai": "AI_CommanderChick_Challenge_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_EmperorChickSpCH_N_33"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_Boss_PWLR_EW_01",
    "pattern": [
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_Spector_Special_03",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 60
          },
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 8
          }
        ],
        "act": {
          "move": 4
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 60
          },
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 4
          }
        ],
        "act": {
          "move": 2
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 60
          },
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 2
          }
        ],
        "act": {
          "move": 6
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 60
          },
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 6
          }
        ],
        "act": {
          "move": 8
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 60
          },
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 7
          }
        ],
        "act": {
          "move": 1
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 60
          },
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 1
          }
        ],
        "act": {
          "move": 3
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 60
          },
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 3
          }
        ],
        "act": {
          "move": 9
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 60
          },
          {
            "type": "exist",
            "who": "team"
          },
          {
            "type": "pos",
            "pos": 9
          }
        ],
        "act": {
          "move": 7
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_SpectorMS_EW_2"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_SpectorMS_EW_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_Boss_Nest_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Nest_B07_5"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Nest_B07_5"
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Nest_B07_5"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 70,
        "list": [
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_B07_33"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_B07_33"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_B07_33"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "chance": 85,
        "list": [
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_B07_34"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_B07_34"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_B07_34"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "chance": 30,
        "list": [
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_B07_35"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_B07_35"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_B07_35"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_NestChaser_Normal_01",
    "pattern": [
      {
        "chance": 30,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_4"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_4"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_4"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "chance": 45,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_41"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_41"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_41"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "chance": 55,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_42"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_42"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_42"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_NestGuardian_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_NestGuardian_N_4",
              "Effect_MP_NestGuardian_N_41"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_NestGuardian_N_4",
              "Effect_MP_NestGuardian_N_41"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_NestGuardian_N_4",
              "Effect_MP_NestGuardian_N_41"
            ]
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 60,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestGuardian_N_42"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "team"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestGuardian_N_42"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestGuardian_N_42"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_LightningBomber_Normal_01",
    "pattern": [
      {
        "chance": 60,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_LightningBomber_N_3"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_LightningBomber_N_3"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_LightningBomber_N_3"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Speaker_Normal_01",
    "pattern": [
      {
        "chance": 30,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "negative": true,
                "buff": "Effect_MP_Speaker_N_32"
              },
              {
                "type": "pos",
                "pos": 5
              }
            ],
            "act": {
              "move": 6
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "negative": true,
                "buff": "Effect_MP_Speaker_N_32"
              },
              {
                "type": "pos",
                "pos": 8
              }
            ],
            "act": {
              "move": 4
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "negative": true,
                "buff": "Effect_MP_Speaker_N_32"
              },
              {
                "type": "pos",
                "pos": 4
              }
            ],
            "act": {
              "move": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "negative": true,
                "buff": "Effect_MP_Speaker_N_32"
              },
              {
                "type": "pos",
                "pos": 2
              }
            ],
            "act": {
              "move": 6
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "negative": true,
                "buff": "Effect_MP_Speaker_N_32"
              },
              {
                "type": "pos",
                "pos": 6
              }
            ],
            "act": {
              "move": 8
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "negative": true,
                "buff": "Effect_MP_Speaker_N_32"
              },
              {
                "type": "pos",
                "pos": 7
              }
            ],
            "act": {
              "move": 1
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "negative": true,
                "buff": "Effect_MP_Speaker_N_32"
              },
              {
                "type": "pos",
                "pos": 1
              }
            ],
            "act": {
              "move": 3
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "negative": true,
                "buff": "Effect_MP_Speaker_N_32"
              },
              {
                "type": "pos",
                "pos": 3
              }
            ],
            "act": {
              "move": 9
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "negative": true,
                "buff": "Effect_MP_Speaker_N_32"
              },
              {
                "type": "pos",
                "pos": 9
              }
            ],
            "act": {
              "move": 7
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Speaker_N_32"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Speaker_N_32"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_FABigChickShield_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 10
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_FABigChickS_N_2"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_SoldierChick_Test_01",
    "pattern": [
      {
        "if": [
          {
            "type": "exist",
            "who": "Char_PECS_Sunny"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "$HPHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "skill": 1,
          "to": [
            [
              "$HPHighest",
              "enemy"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_SoldierChick_Test_02",
    "pattern": [
      {
        "if": [
          {
            "type": "exist",
            "who": "MP_NightChickSpCH_B0208"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "$APHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "skill": 1,
          "to": [
            [
              "$APHighest",
              "enemy"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_CommanderChick_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_EmperorChickSpCH_N_33"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Boss_Nest_EW_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Nest_EW_5"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Nest_EW_5"
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Nest_EW_5"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 70,
        "list": [
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_EW_33"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_EW_33"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_EW_33"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "chance": 45,
        "list": [
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_EW_34"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_EW_34"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_EW_34"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "chance": 30,
        "list": [
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_EW_35"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_EW_35"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_EW_35"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 70,
        "act": {
          "move": 5
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_NestChaser_EW_01",
    "pattern": [
      {
        "chance": 30,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_4"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_4"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_4"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "chance": 45,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_41"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_41"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_41"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "chance": 55,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_42"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_42"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_N_42"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_NestGuardian_EW_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_NestGuardian_N_4",
              "Effect_MP_NestGuardian_N_41"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_NestGuardian_N_4",
              "Effect_MP_NestGuardian_N_41"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_NestGuardian_N_4",
              "Effect_MP_NestGuardian_N_41"
            ]
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 60,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestGuardian_N_42"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "team"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestGuardian_N_42"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestGuardian_N_42"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Executioner_02",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 100
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Executioner_TU2_3"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "heavy",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "air",
              "enemy"
            ],
            [
              "near",
              "heavy",
              "enemy"
            ],
            [
              "near",
              "light",
              "enemy"
            ],
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Boss_Nest_Normal_02",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Nest_TU2_5"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Nest_TU2_5"
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "buff",
            "buff": "Effect_MP_Nest_TU2_5"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 60,
        "list": [
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_TU2_33"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_TU2_33"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_TU2_33"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "chance": 30,
        "list": [
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_TU2_34"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_TU2_34"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_TU2_34"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "chance": 20,
        "list": [
          {
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_TU2_35"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "chance": 20,
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_TU2_35"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "chance": 20,
            "if": [
              {
                "type": "pos",
                "pos": [
                  4,
                  5
                ]
              },
              {
                "type": "buff",
                "buff": "Effect_MP_Nest_TU2_35"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              4,
              5
            ]
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 70,
        "act": {
          "move": 5
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_NestChaser_Normal_02",
    "pattern": [
      {
        "chance": 30,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_TU2_4"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_TU2_4"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_TU2_4"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "chance": 45,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_TU2_41"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_TU2_41"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_TU2_41"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "chance": 55,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_TU2_42"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_TU2_42"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestChaser_TU2_42"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_NestGuardian_Normal_02",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_NestGuardian_TU2_4",
              "Effect_MP_NestGuardian_TU2_41"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          },
          {
            "type": "buff",
            "negative": true,
            "buff": "Effect_MP_NestGuardian_TU2_52"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_NestGuardian_TU2_4",
              "Effect_MP_NestGuardian_TU2_41"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_NestGuardian_TU2_4",
              "Effect_MP_NestGuardian_TU2_41"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_NestGuardian_TU2_4",
              "Effect_MP_NestGuardian_TU2_41"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_NestGuardian_TU2_4",
              "Effect_MP_NestGuardian_TU2_41"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_NestGuardian_TU2_4",
              "Effect_MP_NestGuardian_TU2_41"
            ]
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 60,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestGuardian_TU2_42"
              },
              {
                "type": "canuse",
                "skill": 2
              },
              {
                "type": "buff",
                "negative": true,
                "buff": "Effect_MP_NestGuardian_TU2_52"
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "team"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestGuardian_TU2_42"
              },
              {
                "type": "canuse",
                "skill": 2
              },
              {
                "type": "canuse",
                "skill": 1
              }
            ],
            "act": {
              "skill": 1,
              "to": [
                [
                  "$AtkHighest",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestGuardian_TU2_42"
              },
              {
                "type": "canuse",
                "skill": 2
              },
              {
                "type": "canusepos",
                "skill": 1
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 1
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestGuardian_TU2_42"
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "wait": true
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestGuardian_TU2_42"
              },
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": "Effect_MP_NestGuardian_TU2_42"
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_NightChickQMSK_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_NightChickQMSK_N_4"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "!exist",
            "who": "team"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_NightChickQMSK_N_4"
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "!exist",
            "who": "team"
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_NightChickQMSK_N_4"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "!exist",
            "who": "team"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_MP_PalanxH_01",
    "pattern": [
      {
        "chance": 20,
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_PhalangitesH_N_4"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_RobertCore_01",
    "pattern": [
      {
        "chance": 80,
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_RobertCore_N_42"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_RobertCore_N_42"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_RobertCore_N_42"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 80,
        "list": [
          {
            "if": [
              {
                "type": "canuse",
                "skill": 1
              }
            ],
            "act": {
              "skill": 1,
              "to": [
                [
                  "rand",
                  "enemy"
                ]
              ]
            }
          },
          {
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_MP_RobertArm_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 50
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 50
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 30,
        "list": [
          {
            "if": [
              {
                "type": "canuse",
                "skill": 1
              }
            ],
            "act": {
              "skill": 1,
              "to": [
                [
                  "rand",
                  "enemy"
                ]
              ]
            }
          },
          {
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Robert_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 70
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$HPLow",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 70
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 70
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 40,
        "list": [
          {
            "if": [
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "$HPLow",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$HPLow",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_RampartC_Normal_02",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "!exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_PupHeadC_Normal_02",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              "middle",
              "back"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              "middle",
              "back"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": [
              "middle",
              "back"
            ]
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_DroneC_Normal_02",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 60
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 60
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 60
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 40,
        "list": [
          {
            "if": [
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "heavy",
                  "enemy"
                ],
                [
                  "rand",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_SeljuqC_Normal_02",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_SeljuqA_SA1_4",
              "Effect_MP_SeljuqA_SA2_4",
              "Effect_MP_SeljuqA_SA3_4",
              "Effect_MP_SeljuqA_SA4_4",
              "Effect_MP_SeljuqA_SA5_4"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_SeljuqA_SA1_4",
              "Effect_MP_SeljuqA_SA2_4",
              "Effect_MP_SeljuqA_SA3_4",
              "Effect_MP_SeljuqA_SA4_4",
              "Effect_MP_SeljuqA_SA5_4"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_SeljuqA_SA1_4",
              "Effect_MP_SeljuqA_SA2_4",
              "Effect_MP_SeljuqA_SA3_4",
              "Effect_MP_SeljuqA_SA4_4",
              "Effect_MP_SeljuqA_SA5_4"
            ]
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 70,
        "list": [
          {
            "if": [
              {
                "type": "canuse",
                "skill": 1
              }
            ],
            "act": {
              "skill": 1,
              "to": [
                [
                  "near",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "canusepos",
                "skill": 1
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 1
            }
          },
          {
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "far",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Tyrant_Challenge_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_3",
              "Effect_MP_Tyrant_N_33",
              "Effect_MP_Tyrant_N_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_3",
              "Effect_MP_Tyrant_N_33",
              "Effect_MP_Tyrant_N_15"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_3",
              "Effect_MP_Tyrant_N_33",
              "Effect_MP_Tyrant_N_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_3",
              "Effect_MP_Tyrant_N_33"
            ]
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_3",
              "Effect_MP_Tyrant_N_33"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_3",
              "Effect_MP_Tyrant_N_33"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_3",
              "Effect_MP_Tyrant_N_33"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_31",
              "Effect_MP_Tyrant_N_34",
              "Effect_MP_Tyrant_N_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_31",
              "Effect_MP_Tyrant_N_34",
              "Effect_MP_Tyrant_N_15"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_31",
              "Effect_MP_Tyrant_N_34",
              "Effect_MP_Tyrant_N_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_31",
              "Effect_MP_Tyrant_N_34"
            ]
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_31",
              "Effect_MP_Tyrant_N_34"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_31",
              "Effect_MP_Tyrant_N_34"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_31",
              "Effect_MP_Tyrant_N_34"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_32",
              "Effect_MP_Tyrant_N_35",
              "Effect_MP_Tyrant_N_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_32",
              "Effect_MP_Tyrant_N_35",
              "Effect_MP_Tyrant_N_15"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_32",
              "Effect_MP_Tyrant_N_35",
              "Effect_MP_Tyrant_N_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_32",
              "Effect_MP_Tyrant_N_35"
            ]
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_32",
              "Effect_MP_Tyrant_N_35"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_32",
              "Effect_MP_Tyrant_N_35"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_32",
              "Effect_MP_Tyrant_N_35"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_15"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_N_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_MrAlfred",
    "pattern": [
      {
        "if": [
          {
            "type": "action",
            "func": ">",
            "action": 0
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_SoldierChick_Challenge_02",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_EmperorChickSpCH_N_5"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "$DefenseHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_EmperorChickSpCH_N_5"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$DefenseHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_SoldierChick_Challenge_03",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_EmperorChickSpCH_N_5"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "$DefenseHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_EmperorChickSpCH_N_5"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$DefenseHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "move": "midrow"
        }
      }
    ]
  },
  {
    "ai": "AI_CommanderChick_Challenge_02",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_EmperorChickSpCH_Challenge1_33"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_CommanderChick_Challenge_03",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_EmperorChickSpCH_Challenge2_33"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Robert_Challenge_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 70
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$HPLow",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 70
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 70
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Robert_Challenge1_58"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "$HPLow",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Robert_Challenge1_58"
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Robert_Challenge1_58"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 10,
        "list": [
          {
            "if": [
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "$HPLow",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "canusepos",
                "skill": 2
              }
            ],
            "act": {
              "move": "canuse",
              "skill": 2
            }
          },
          {
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$HPLow",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Tyrant_Challenge_02",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_3",
              "Effect_MP_Tyrant_Challenge1_33",
              "Effect_MP_Tyrant_Challenge1_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_3",
              "Effect_MP_Tyrant_Challenge1_33",
              "Effect_MP_Tyrant_Challenge1_15"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_3",
              "Effect_MP_Tyrant_Challenge1_33",
              "Effect_MP_Tyrant_Challenge1_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_3",
              "Effect_MP_Tyrant_Challenge1_33"
            ]
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_3",
              "Effect_MP_Tyrant_Challenge1_33"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "heavy",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_3",
              "Effect_MP_Tyrant_Challenge1_33"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_3",
              "Effect_MP_Tyrant_Challenge1_33"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_31",
              "Effect_MP_Tyrant_Challenge1_34",
              "Effect_MP_Tyrant_Challenge1_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_31",
              "Effect_MP_Tyrant_Challenge1_34",
              "Effect_MP_Tyrant_Challenge1_15"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_31",
              "Effect_MP_Tyrant_Challenge1_34",
              "Effect_MP_Tyrant_Challenge1_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_31",
              "Effect_MP_Tyrant_Challenge1_34"
            ]
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_31",
              "Effect_MP_Tyrant_Challenge1_34"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_31",
              "Effect_MP_Tyrant_Challenge1_34"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_31",
              "Effect_MP_Tyrant_Challenge1_34"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_32",
              "Effect_MP_Tyrant_Challenge1_35",
              "Effect_MP_Tyrant_Challenge1_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_32",
              "Effect_MP_Tyrant_Challenge1_35",
              "Effect_MP_Tyrant_Challenge1_15"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_32",
              "Effect_MP_Tyrant_Challenge1_35",
              "Effect_MP_Tyrant_Challenge1_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_32",
              "Effect_MP_Tyrant_Challenge1_35"
            ]
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_32",
              "Effect_MP_Tyrant_Challenge1_35"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_32",
              "Effect_MP_Tyrant_Challenge1_35"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_32",
              "Effect_MP_Tyrant_Challenge1_35"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_15"
            ]
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": [
              "Effect_MP_Tyrant_Challenge1_15"
            ]
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Fortress_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Fortress_N_1"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "Effect_MP_Fortress_N_1"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Fortress_N_1"
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Fortress_N_1"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_LemonadeAvatar_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Predator_Challenge_01",
    "pattern": [
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$HPLow",
              "team"
            ]
          ]
        }
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "rand",
              "enemy"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_FABigChick_Challenge_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 70
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "$HPLow",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 70
          },
          {
            "type": "canusepos",
            "skill": 2
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 2
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": "<=",
            "hp": 70
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Spector_Special_04",
    "pattern": [
      {}
    ]
  },
  {
    "ai": "AI_Scout_Event_08",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "team"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Wasp_Event_08",
    "pattern": [
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Slasher_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Slasher_N_43"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "$DefenseHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Slasher_N_43"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$HPHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Slasher_N_43"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "chance": 20,
        "list": [
          {
            "if": [
              {
                "type": "buff",
                "buff": [
                  "Effect_MP_Slasher_N_31",
                  "Effect_MP_Slasher_N_32",
                  "Effect_MP_Slasher_N_33"
                ]
              },
              {
                "type": "canuse",
                "skill": 2
              }
            ],
            "act": {
              "skill": 2,
              "to": [
                [
                  "$DefenseHighest",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": [
                  "Effect_MP_Slasher_N_31",
                  "Effect_MP_Slasher_N_32",
                  "Effect_MP_Slasher_N_33"
                ]
              },
              {
                "type": "canuse",
                "skill": 1
              }
            ],
            "act": {
              "skill": 1,
              "to": [
                [
                  "$HPHighest",
                  "enemy"
                ]
              ]
            }
          },
          {
            "if": [
              {
                "type": "buff",
                "buff": [
                  "Effect_MP_Slasher_N_31",
                  "Effect_MP_Slasher_N_32",
                  "Effect_MP_Slasher_N_33"
                ]
              }
            ],
            "act": {
              "wait": true
            }
          }
        ]
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$HPHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_Boss_IronPrince_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_IronPrince_N_4"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "$HPHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$HPHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_LemonadeOmega_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_LemonadeOmega_N_42"
          },
          {
            "type": "canuse",
            "skill": 1,
            "filter": {
              "type": "count",
              "func": ">",
              "cnt": 2
            }
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_LemonadeOmega_N_42"
          },
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_LemonadeOmega_N_42"
          },
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_LemonadeOmega_N_42"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "!exist",
            "who": "team"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "!exist",
            "who": "team"
          },
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "if": [
          {
            "type": "!exist",
            "who": "team"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "exist",
            "who": "team"
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_SpeakerEx_Normal_01",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_SpeakerEx_N_32"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "air",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_FridgerHead_01",
    "pattern": [
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 100
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 100
          },
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "if": [
          {
            "type": "hp",
            "func": ">=",
            "hp": 100
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$AtkHighest"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_FridgerShooter_01",
    "pattern": [
      {
        "chance": 70,
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "$HPLow",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Drone_EV9",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Drone_EV9_2"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Drone_EV9_2"
          },
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Drone_EV9_2"
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "near",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Machina_01",
    "pattern": [
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canuse",
            "skill": 1
          }
        ],
        "act": {
          "skill": 1,
          "to": [
            [
              "light",
              "enemy"
            ],
            [
              "rand",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          },
          {
            "type": "canusepos",
            "skill": 1
          }
        ],
        "act": {
          "move": "canuse",
          "skill": 1
        }
      },
      {
        "if": [
          {
            "type": "pos",
            "pos": "front"
          }
        ],
        "act": {
          "wait": true
        }
      },
      {
        "act": {
          "skill": 2,
          "to": [
            [
              "self"
            ]
          ]
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Drone_Challenge1",
    "pattern": [
      {
        "act": {
          "wait": true
        }
      }
    ]
  },
  {
    "ai": "AI_MP_Drone_Challenge2",
    "pattern": [
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Drone_Challenge2_4"
          },
          {
            "type": "canuse",
            "skill": 2
          }
        ],
        "act": {
          "skill": 2,
          "to": [
            [
              "$AtkHighest",
              "enemy"
            ]
          ]
        }
      },
      {
        "if": [
          {
            "type": "buff",
            "buff": "Effect_MP_Drone_Challenge2_4"
          },
          {
            "type": "canmove",
            "to": "front"
          }
        ],
        "act": {
          "move": "front"
        }
      },
      {
        "act": {
          "wait": true
        }
      }
    ]
  }
];