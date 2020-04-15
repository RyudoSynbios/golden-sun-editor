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
    attributs: {
      target: { offset: 0x0, octets: 8 },
      uses: { offset: 0x1, octets: 8 },
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
    // TODO: find pointer
    offset: [
      0xc5c49, // Golden Sun 1: Europe-USA
      0xc9c61, // Golden Sun 1: France
      0xc8261, // Golden Sun 1: Germany
      0xc5c61, // Golden Sun 1: Italy
      0xc9c61, // Golden Sun 1: Spain
    ],
    length: 0x17b,
    section_length: 0x10,
    attributs: {
      enemy_1: { offset: 0x0, octets: 8 },
      enemy_2: { offset: 0x1, octets: 8 },
      enemy_3: { offset: 0x2, octets: 8 },
      enemy_4: { offset: 0x3, octets: 8 },
      enemy_5: { offset: 0x4, octets: 8 },
      minimum_1: { offset: 0x5, octets: 8 },
      minimum_2: { offset: 0x6, octets: 8 },
      minimum_3: { offset: 0x7, octets: 8 },
      minimum_4: { offset: 0x8, octets: 8 },
      minimum_5: { offset: 0x9, octets: 8 },
      maximum_1: { offset: 0xa, octets: 8 },
      maximum_2: { offset: 0xb, octets: 8 },
      maximum_3: { offset: 0xc, octets: 8 },
      maximum_4: { offset: 0xd, octets: 8 },
      maximum_5: { offset: 0xe, octets: 8 },
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
    },
  },
};

export default addresses;
