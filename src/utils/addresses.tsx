const addresses = {
  checksum: {
    offset: 0xa0,
    length: 0x12,
    values: [
      "GOLDEN_SUN_AAGSF01", // France
      "GOLDEN_SUN_AAGSD01", // Germany
      "GOLDEN_SUN_AAGSI01", // Italy
      "GOLDEN_SUN_AAGSS01", // Spain
      "Golden_Sun_AAGSE01", // USA-Europe
    ],
  },
  messages: [
    0x1456c, // France
    0x1426c, // Germany
    0x1556c, // Italy
    0x1456c, // Spain
    0x1556c, // USA-Europe
  ],
  items: {
    pointer: [
      0x7d428, // France
      0x0, // Germany
      0x0, // Italy
      0x0, // Spain
      0x78428, // USA-Europe
    ],
    length: 0x10d,
    section_length: 0x2c,
    name: [
      0x16c, // France
      0x0, // Germany
      0x0, // Italy
      0x0, // Spain
      0x182, // USA-Europe
    ],
    description: [
      0x5f, // France
      0x0, // Germany
      0x0, // Italy
      0x0, // Spain
      0x75, // USA-Europe
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
      0x7dbbc, // France
      0x0, // Germany
      0x0, // Italy
      0x0, // Spain
      0x78bbc, // USA-Europe
    ],
    length: 0x207,
    section_length: 0x10,
    name: [
      0x42a, // France
      0x0, // Germany
      0x0, // Italy
      0x0, // Spain
      0x333, // USA-Europe
    ],
    description: [
      0x631, // France
      0x0, // Germany
      0x0, // Italy
      0x0, // Spain
      0x53a, // USA-Europe
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
  djinn: {
    pointer: [
      0x7f0f0, // France
      0x0, // Germany
      0x0, // Italy
      0x0, // Spain
      0x7a0f0, // USA-Europe
    ],
    length: 0x50,
    section_length: 0xc,
    name: [
      0x556, // France
      0x0, // Germany
      0x0, // Italy
      0x0, // Spain
      0x45f, // USA-Europe
    ],
    description: [
      0x75d, // France
      0x0, // Germany
      0x0, // Italy
      0x0, // Spain
      0x666, // USA-Europe
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
      0x7e7e8, // France
      0x0, // Germany
      0x0, // Italy
      0x0, // Spain
      0x797e8, // USA-Europe
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
      0x7e5f0, // France
      0x0, // Germany
      0x0, // Italy
      0x0, // Spain
      0x795f0, // USA-Europe
    ],
    length: 0xa4,
    section_length: 0x54,
    name: [
      0x386, // France
      0x0, // Germany
      0x0, // Italy
      0x0, // Spain
      0x28f, // USA-Europe
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
      0xc9c61, // France
      0x0, // Germany
      0x0, // Italy
      0x0, // Spain
      0xc5c49, // USA-Europe
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
};

export default addresses;
