const addresses = {
  checksum: {
    offset: 0xa0,
    length: 0x12,
    values: [
      "Golden_Sun_AAGSE01", // Golden Sun 1: Europe-USA
      "GOLDEN_SUN_AAGSF01", // Golden Sun 1: France
      "GOLDEN_SUN_AAGSD01", // Golden Sun 1: Germany
      "GOLDEN_SUN_AAGSI01", // Golden Sun 1: Italy
      "GOLDEN_SUN_AAGSS01", // Golden Sun 1: Spain
      "OugonTaiyo_AAGSJ01", // Golden Sun 1: Japan
      "GOLDEN_SUN_BAGFE01", // Golden Sun 2: Europe-USA
      "GOLDEN_SUN_BAGFF01", // Golden Sun 2: France
      "GOLDEN_SUN_BAGFD01", // Golden Sun 2: Germany
      "GOLDEN_SUN_BAGFI01", // Golden Sun 2: Italy
      "GOLDEN_SUN_BAGFS01", // Golden Sun 2: Spain
      "OUGONTAIYO_BAGFJ01", // Golden Sun 2: Japan
    ],
  },
  messages: [
    0x1556c, // Golden Sun 1: Europe-USA
    0x1456c, // Golden Sun 1: France
    0x1426c, // Golden Sun 1: Germany
    0x1556c, // Golden Sun 1: Italy
    0x1456c, // Golden Sun 1: Spain
  ],
  items: {
    pointer: [
      0x78428, // Golden Sun 1: Europe-USA
      0x7d428, // Golden Sun 1: France
      0x7c228, // Golden Sun 1: Germany
      0x78428, // Golden Sun 1: Italy
      0x7d428, // Golden Sun 1: Spain
    ],
    length: 0x10d,
    section_length: 0x2c,
    name: [
      0x182, // Golden Sun 1: Europe-USA
      0x16c, // Golden Sun 1: France
      0x16c, // Golden Sun 1: Germany
      0x16c, // Golden Sun 1: Italy
      0x16c, // Golden Sun 1: Spain
    ],
    description: [
      0x75, // Golden Sun 1: Europe-USA
      0x5f, // Golden Sun 1: France
      0x5f, // Golden Sun 1: Germany
      0x5f, // Golden Sun 1: Italy
      0x5f, // Golden Sun 1: Spain
    ],
    attributs: {
      price: { offset: 0x0, octets: 16 },
      type: { offset: 0x2, octets: 8 },
      special: { offset: 0x3, octets: 8 },
      characters: { offset: 0x4, octets: 8 },
      icon: { offset: 0x6, octets: 8 },
      attack: { offset: 0x8, octets: 16 },
      defense: { offset: 0xa, octets: 8 },
      unleash_rate: { offset: 0xb, octets: 8 },
      uses: { offset: 0xc, octets: 8 },
      unleash: { offset: 0xe, octets: 8 },
      effect_1: { offset: 0x18, octets: 8 },
      effect_1_value: { offset: 0x19, octets: 8 },
      effect_2: { offset: 0x1c, octets: 8 },
      effect_2_value: { offset: 0x1d, octets: 8 },
      effect_3: { offset: 0x20, octets: 8 },
      effect_3_value: { offset: 0x21, octets: 8 },
      effect_4: { offset: 0x24, octets: 8 },
      effect_4_value: { offset: 0x25, octets: 8 },
      ability_on_use: { offset: 0x28, octets: 16 },
    },
  },
  abilities: {
    pointer: [
      0x78bbc, // Golden Sun 1: Europe-USA
      0x7dbbc, // Golden Sun 1: France
      0x7c9bc, // Golden Sun 1: Germany
      0x78bbc, // Golden Sun 1: Italy
      0x7dbbc, // Golden Sun 1: Spain
    ],
    length: 0x207,
    section_length: 0x10,
    name: [
      0x333, // Golden Sun 1: Europe-USA
      0x42a, // Golden Sun 1: France
      0x42a, // Golden Sun 1: Germany
      0x42a, // Golden Sun 1: Italy
      0x42a, // Golden Sun 1: Spain
    ],
    description: [
      0x53a, // Golden Sun 1: Europe-USA
      0x631, // Golden Sun 1: France
      0x631, // Golden Sun 1: Germany
      0x631, // Golden Sun 1: Italy
      0x631, // Golden Sun 1: Spain
    ],
    nameAttributes: [
      0xb77, // Golden Sun 1: Europe-USA
      0xb2a, // Golden Sun 1: France
      0xb2a, // Golden Sun 1: Germany
      0xb2a, // Golden Sun 1: Italy
      0xb2a, // Golden Sun 1: Spain
    ],
    nameUses: [
      0xb13, // Golden Sun 1: Europe-USA
      0xac6, // Golden Sun 1: France
      0xac6, // Golden Sun 1: Germany
      0xac6, // Golden Sun 1: Italy
      0xac6, // Golden Sun 1: Spain
    ],
    attributs: {
      target: { offset: 0x0, octets: 8 },
      typeUses: { offset: 0x1, octets: 8 },
      attribute: { offset: 0x2, octets: 8 },
      effect: { offset: 0x3, octets: 8 },
      icon: { offset: 0x4, octets: 8 },
      range: { offset: 0x8, octets: 8 },
      pp_cost: { offset: 0x9, octets: 8 },
      power: { offset: 0xa, octets: 16 },
      utility: { offset: 0xc, octets: 8 },
    },
  },
  classes: {
    pointer: [
      0x79acc, // Golden Sun 1: Europe-USA
      0x7eacc, // Golden Sun 1: France
      0x7d8cc, // Golden Sun 1: Germany
      0x79acc, // Golden Sun 1: Italy
      0x7eacc, // Golden Sun 1: Spain
    ],
    length: 0xcb,
    section_length: 0x54,
    name: [
      0x741, // Golden Sun 1: Europe-USA
      0x838, // Golden Sun 1: France
      0x838, // Golden Sun 1: Germany
      0x838, // Golden Sun 1: Italy
      0x838, // Golden Sun 1: Spain
    ],
    attributs: {
      type: { offset: 0x0, octets: 8 },
      venus: { offset: 0x4, octets: 8 },
      mercury: { offset: 0x5, octets: 8 },
      mars: { offset: 0x6, octets: 8 },
      jupiter: { offset: 0x7, octets: 8 },
      hp: { offset: 0x8, octets: 8 },
      pp: { offset: 0x9, octets: 8 },
      attack: { offset: 0xa, octets: 8 },
      defense: { offset: 0xb, octets: 8 },
      agility: { offset: 0xc, octets: 8 },
      luck: { offset: 0xd, octets: 8 },
      ability_1: { offset: 0x10, octets: 8 },
      level_1: { offset: 0x11, octets: 8 },
      ability_2: { offset: 0x14, octets: 8 },
      level_2: { offset: 0x15, octets: 8 },
      ability_3: { offset: 0x18, octets: 8 },
      level_3: { offset: 0x19, octets: 8 },
      ability_4: { offset: 0x1c, octets: 8 },
      level_4: { offset: 0x1d, octets: 8 },
      ability_5: { offset: 0x20, octets: 8 },
      level_5: { offset: 0x21, octets: 8 },
      ability_6: { offset: 0x24, octets: 8 },
      level_6: { offset: 0x25, octets: 8 },
      ability_7: { offset: 0x28, octets: 8 },
      level_7: { offset: 0x29, octets: 8 },
      ability_8: { offset: 0x2c, octets: 8 },
      level_8: { offset: 0x2d, octets: 8 },
      ability_9: { offset: 0x30, octets: 8 },
      level_9: { offset: 0x31, octets: 8 },
      ability_10: { offset: 0x34, octets: 8 },
      level_10: { offset: 0x35, octets: 8 },
      ability_11: { offset: 0x38, octets: 8 },
      level_11: { offset: 0x39, octets: 8 },
      ability_12: { offset: 0x3c, octets: 8 },
      level_12: { offset: 0x3d, octets: 8 },
      ability_13: { offset: 0x40, octets: 8 },
      level_13: { offset: 0x41, octets: 8 },
      ability_14: { offset: 0x44, octets: 8 },
      level_14: { offset: 0x45, octets: 8 },
      ability_15: { offset: 0x48, octets: 8 },
      level_15: { offset: 0x49, octets: 8 },
      ability_16: { offset: 0x4c, octets: 8 },
      level_16: { offset: 0x4d, octets: 8 },
    },
  },
  djinn: {
    pointer: [
      0x7a0f0, // Golden Sun 1: Europe-USA
      0x7f0f0, // Golden Sun 1: France
      0x7def0, // Golden Sun 1: Germany
      0x7a0f0, // Golden Sun 1: Italy
      0x7f0f0, // Golden Sun 1: Spain
    ],
    length: 0x50,
    section_length: 0xc,
    name: [
      0x45f, // Golden Sun 1: Europe-USA
      0x556, // Golden Sun 1: France
      0x556, // Golden Sun 1: Germany
      0x556, // Golden Sun 1: Italy
      0x556, // Golden Sun 1: Spain
    ],
    description: [
      0x666, // Golden Sun 1: Europe-USA
      0x75d, // Golden Sun 1: France
      0x75d, // Golden Sun 1: Germany
      0x75d, // Golden Sun 1: Italy
      0x75d, // Golden Sun 1: Spain
    ],
    attributs: {
      ability: { offset: 0x0, octets: 16 },
      hp: { offset: 0x4, octets: 8 },
      pp: { offset: 0x5, octets: 8 },
      attack: { offset: 0x6, octets: 8 },
      defense: { offset: 0x7, octets: 8 },
      agility: { offset: 0x8, octets: 8 },
      luck: { offset: 0x9, octets: 8 },
    },
  },
  summons: {
    pointer: [
      0x797e8, // Golden Sun 1: Europe-USA
      0x7e7e8, // Golden Sun 1: France
      0x7d5e8, // Golden Sun 1: Germany
      0x797e8, // Golden Sun 1: Italy
      0x7e7e8, // Golden Sun 1: Spain
    ],
    length: 0x10,
    section_length: 0x8,
    attributs: {
      ability: { offset: 0x0, octets: 16 },
      venus: { offset: 0x4, octets: 8 },
      mercury: { offset: 0x5, octets: 8 },
      mars: { offset: 0x6, octets: 8 },
      jupiter: { offset: 0x7, octets: 8 },
    },
  },
  enemies: {
    pointer: [
      0x795f0, // Golden Sun 1: Europe-USA
      0x7e5f0, // Golden Sun 1: France
      0x7d3f0, // Golden Sun 1: Germany
      0x795f0, // Golden Sun 1: Italy
      0x7e5f0, // Golden Sun 1: Spain
    ],
    length: 0xa4,
    section_length: 0x54,
    name: [
      0x28f, // Golden Sun 1: Europe-USA
      0x386, // Golden Sun 1: France
      0x386, // Golden Sun 1: Germany
      0x386, // Golden Sun 1: Italy
      0x386, // Golden Sun 1: Spain
    ],
    attributs: {
      level: { offset: 0xf, octets: 8 },
      hp: { offset: 0x10, octets: 16 },
      pp: { offset: 0x12, octets: 16 },
      attack: { offset: 0x14, octets: 16 },
      defense: { offset: 0x16, octets: 16 },
      agility: { offset: 0x18, octets: 16 },
      luck: { offset: 0x1a, octets: 8 },
      turns: { offset: 0x1b, octets: 8 },
      hp_regen: { offset: 0x1c, octets: 8 },
      pp_regen: { offset: 0x1d, octets: 8 },
      item_1: { offset: 0x28, octets: 16 },
      item_2: { offset: 0x2a, octets: 16 },
      item_3: { offset: 0x2c, octets: 16 },
      item_4: { offset: 0x2e, octets: 16 },
      quantity_1: { offset: 0x30, octets: 8 },
      quantity_2: { offset: 0x31, octets: 8 },
      quantity_3: { offset: 0x32, octets: 8 },
      quantity_4: { offset: 0x33, octets: 8 },
      ability_1: { offset: 0x38, octets: 16 },
      ability_2: { offset: 0x3a, octets: 16 },
      ability_3: { offset: 0x3c, octets: 16 },
      ability_4: { offset: 0x3e, octets: 16 },
      ability_5: { offset: 0x40, octets: 16 },
      ability_6: { offset: 0x42, octets: 16 },
      ability_7: { offset: 0x44, octets: 16 },
      ability_8: { offset: 0x46, octets: 16 },
      coins: { offset: 0x4c, octets: 16 },
      drop_item: { offset: 0x4e, octets: 16 },
      drop_rate: { offset: 0x50, octets: 8 },
      experience: { offset: 0x52, octets: 16 },
    },
  },
  groups: {
    pointer: [
      0xc227c, // Golden Sun 1: Europe-USA
      0xc6294, // Golden Sun 1: France
      0xc4894, // Golden Sun 1: Germany
      0xc2294, // Golden Sun 1: Italy
      0xc6294, // Golden Sun 1: Spain
    ],
    length: 0x17c,
    section_length: 0x10,
    attributs: {
      enemy_1: { offset: 0x1, octets: 8 },
      enemy_2: { offset: 0x2, octets: 8 },
      enemy_3: { offset: 0x3, octets: 8 },
      enemy_4: { offset: 0x4, octets: 8 },
      enemy_5: { offset: 0x5, octets: 8 },
      minimum_1: { offset: 0x6, octets: 8 },
      minimum_2: { offset: 0x7, octets: 8 },
      minimum_3: { offset: 0x8, octets: 8 },
      minimum_4: { offset: 0x9, octets: 8 },
      minimum_5: { offset: 0xa, octets: 8 },
      maximum_1: { offset: 0xb, octets: 8 },
      maximum_2: { offset: 0xc, octets: 8 },
      maximum_3: { offset: 0xd, octets: 8 },
      maximum_4: { offset: 0xe, octets: 8 },
      maximum_5: { offset: 0xf, octets: 8 },
    },
  },
  shops: {
    pointer: [
      0xb271c, // Golden Sun 1: Europe-USA
      0xb671c, // Golden Sun 1: France
      0xb4d1c, // Golden Sun 1: Germany
      0xb271c, // Golden Sun 1: Italy
      0xb671c, // Golden Sun 1: Spain
    ],
    length: 0x23,
    section_length: 0x42,
    attributs: {
      item_1: { offset: 0x0, octets: 16 },
      item_2: { offset: 0x2, octets: 16 },
      item_3: { offset: 0x4, octets: 16 },
      item_4: { offset: 0x6, octets: 16 },
      item_5: { offset: 0x8, octets: 16 },
      item_6: { offset: 0xa, octets: 16 },
      item_7: { offset: 0xc, octets: 16 },
      item_8: { offset: 0xe, octets: 16 },
      item_9: { offset: 0x10, octets: 16 },
      item_10: { offset: 0x12, octets: 16 },
      item_11: { offset: 0x14, octets: 16 },
      item_12: { offset: 0x16, octets: 16 },
      item_13: { offset: 0x18, octets: 16 },
      item_14: { offset: 0x1a, octets: 16 },
      item_15: { offset: 0x1c, octets: 16 },
      item_16: { offset: 0x1e, octets: 16 },
      item_17: { offset: 0x20, octets: 16 },
      item_18: { offset: 0x22, octets: 16 },
      item_19: { offset: 0x24, octets: 16 },
      item_20: { offset: 0x26, octets: 16 },
      item_21: { offset: 0x28, octets: 16 },
      item_22: { offset: 0x2a, octets: 16 },
      item_23: { offset: 0x2c, octets: 16 },
      item_24: { offset: 0x2e, octets: 16 },
      artifact_1: { offset: 0x30, octets: 16 },
      artifact_2: { offset: 0x32, octets: 16 },
      artifact_3: { offset: 0x34, octets: 16 },
      artifact_4: { offset: 0x36, octets: 16 },
      artifact_5: { offset: 0x38, octets: 16 },
      artifact_6: { offset: 0x3a, octets: 16 },
      artifact_7: { offset: 0x3c, octets: 16 },
      artifact_8: { offset: 0x3e, octets: 16 },
      type: { offset: 0x40, octets: 8 },
    },
  },
  partyMembersPortraits: {
    pointer: [
      0x19da0, // Golden Sun 1: Europe-USA
      0x18cd0, // Golden Sun 1: France
      0x18a14, // Golden Sun 1: Germany
      0x19d0c, // Golden Sun 1: Italy
      0x18d80, // Golden Sun 1: Spain
    ],
    length: 0x9,
    section_length: 0x4,
    attributs: {
      character: { offset: 0x0, octets: 16 },
      portrait: { offset: 0x2, octets: 16 },
    },
  },
  partyMembersStats: {
    pointer: [
      0x78ee4, // Golden Sun 1: Europe-USA
      0x7dee4, // Golden Sun 1: France
      0x7cce4, // Golden Sun 1: Germany
      0x78ee4, // Golden Sun 1: Italy
      0x7dee4, // Golden Sun 1: Spain
    ],
    length: 0x8,
    section_length: 0xb4,
    name: [
      0x66, // Golden Sun 1: Europe-USA
      0x56, // Golden Sun 1: France
      0x56, // Golden Sun 1: Germany
      0x56, // Golden Sun 1: Italy
      0x56, // Golden Sun 1: Spain
    ],
    attributs: {
      hp_1: { offset: 0x50, octets: 16 },
      hp_2: { offset: 0x52, octets: 16 },
      hp_3: { offset: 0x54, octets: 16 },
      hp_4: { offset: 0x56, octets: 16 },
      hp_5: { offset: 0x58, octets: 16 },
      hp_6: { offset: 0x5a, octets: 16 },
      pp_1: { offset: 0x5c, octets: 16 },
      pp_2: { offset: 0x5e, octets: 16 },
      pp_3: { offset: 0x60, octets: 16 },
      pp_4: { offset: 0x62, octets: 16 },
      pp_5: { offset: 0x64, octets: 16 },
      pp_6: { offset: 0x66, octets: 16 },
      attack_1: { offset: 0x68, octets: 16 },
      attack_2: { offset: 0x6a, octets: 16 },
      attack_3: { offset: 0x6c, octets: 16 },
      attack_4: { offset: 0x6e, octets: 16 },
      attack_5: { offset: 0x70, octets: 16 },
      attack_6: { offset: 0x72, octets: 16 },
      defense_1: { offset: 0x74, octets: 16 },
      defense_2: { offset: 0x76, octets: 16 },
      defense_3: { offset: 0x78, octets: 16 },
      defense_4: { offset: 0x7a, octets: 16 },
      defense_5: { offset: 0x7c, octets: 16 },
      defense_6: { offset: 0x7e, octets: 16 },
      agility_1: { offset: 0x80, octets: 16 },
      agility_2: { offset: 0x82, octets: 16 },
      agility_3: { offset: 0x84, octets: 16 },
      agility_4: { offset: 0x86, octets: 16 },
      agility_5: { offset: 0x88, octets: 16 },
      agility_6: { offset: 0x8a, octets: 16 },
      luck_1: { offset: 0x8c, octets: 8 },
      luck_2: { offset: 0x8d, octets: 8 },
      luck_3: { offset: 0x8e, octets: 8 },
      luck_4: { offset: 0x8f, octets: 8 },
      luck_5: { offset: 0x90, octets: 8 },
      luck_6: { offset: 0x91, octets: 8 },
      venus: { offset: 0x92, octets: 8 },
      mercury: { offset: 0x93, octets: 8 },
      mars: { offset: 0x94, octets: 8 },
      jupiter: { offset: 0x95, octets: 8 },
      level: { offset: 0x96, octets: 8 },
      item_1: { offset: 0x98, octets: 16 },
      item_2: { offset: 0x9a, octets: 16 },
      item_3: { offset: 0x9c, octets: 16 },
      item_4: { offset: 0x9e, octets: 16 },
      item_5: { offset: 0xa0, octets: 16 },
      item_6: { offset: 0xa2, octets: 16 },
      item_7: { offset: 0xa4, octets: 16 },
      item_8: { offset: 0xa6, octets: 16 },
      item_9: { offset: 0xa8, octets: 16 },
      item_10: { offset: 0xaa, octets: 16 },
      item_11: { offset: 0xac, octets: 16 },
      item_12: { offset: 0xae, octets: 16 },
      item_13: { offset: 0xb0, octets: 16 },
    },
  },
  partyMembersExperience: {
    pointer: [
      0x79058, // Golden Sun 1: Europe-USA
      0x7e058, // Golden Sun 1: France
      0x7ce58, // Golden Sun 1: Germany
      0x79058, // Golden Sun 1: Italy
      0x7e058, // Golden Sun 1: Spain
    ],
    length: 0x8,
    section_length: 0x0,
  },
  sprites: {
    pointer: [
      0x185020, // Golden Sun 1: Europe-USA
      0x187820, // Golden Sun 1: France
      0x185e20, // Golden Sun 1: Germany
      0x185020, // Golden Sun 1: Italy
      0x187820, // Golden Sun 1: Spain
    ],
    length: 0x200,
    section_length: 0x14,
    attributs: {
      width: { offset: 0x0, octets: 8 },
      height: { offset: 0x01, octets: 8 },
      scale: { offset: 0x02, octets: 16 },
      directions: { offset: 0x04, octets: 8 },
      animations: { offset: 0x05, octets: 8 },
      offset_x: { offset: 0x06, octets: 8 },
      offset_y: { offset: 0x07, octets: 8 },
      collision_diameter: { offset: 0x09, octets: 8 },
    },
  },
  maps: {
    pointer: [
      0x8a8e0, // Golden Sun 1: Europe-USA
      0x8f8e8, // Golden Sun 1: France
      0x8dee8, // Golden Sun 1: Germany
      0x8a8e8, // Golden Sun 1: Italy
      0x8f8e8, // Golden Sun 1: Spain
    ],
    length: 0xc9,
    section_length: 0x8,
    name: [
      0xa07, // Golden Sun 1: Europe-USA
      0x29ce, // Golden Sun 1: France
      0x29ce, // Golden Sun 1: Germany
      0x29ce, // Golden Sun 1: Italy
      0x29ce, // Golden Sun 1: Spain
    ],
    attributs: {
      // code: { offset: 0x0, octets: 16 },
    },
  },
  graphics: {
    palette: {
      pointer: [
        0x45ec, // Golden Sun 1: Europe-USA
        0x45fc, // Golden Sun 1: France
        0x461c, // Golden Sun 1: Germany
        0x462c, // Golden Sun 1: Italy
        0x464c, // Golden Sun 1: Spain
      ],
      length: 0xdf,
    },
    icons: {
      items: {
        pointer: [
          0x19ecc, // Golden Sun 1: Europe-USA
          0x18dfc, // Golden Sun 1: France
          0x18b40, // Golden Sun 1: Germany
          0x19e38, // Golden Sun 1: Italy
          0x18eac, // Golden Sun 1: Spain
        ],
      },
      abilities: {
        pointer: [
          0x19ee0, // Golden Sun 1: Europe-USA
          0x18e10, // Golden Sun 1: France
          0x18b54, // Golden Sun 1: Germany
          0x19e4c, // Golden Sun 1: Italy
          0x18ec0, // Golden Sun 1: Spain
        ],
      },
      status: {
        pointer: [
          0x1a4f8, // Golden Sun 1: Europe-USA
          0x19428, // Golden Sun 1: France
          0x1916c, // Golden Sun 1: Germany
          0x1a464, // Golden Sun 1: Italy
          0x194d8, // Golden Sun 1: Spain
        ],
      },
    },
    portraits: {
      pointer: [
        0x3203c0, // Golden Sun 1: Europe-USA
        0x321bc0, // Golden Sun 1: France
        0x3201c0, // Golden Sun 1: Germany
        0x3203c0, // Golden Sun 1: Italy
        0x321bc0, // Golden Sun 1: Spain
      ],
    },
  },
};

export default addresses;
