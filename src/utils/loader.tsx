import { Dispatch, SetStateAction } from "react";
import cloneDeep from "lodash.clonedeep";

import addresses from "./addresses";
import { itemSpecial } from "./correspondances";
import { shopsTypes } from "./enums";
import HexEditor from "./hexEditor";
import i18n from "./i18n";
import { getCompressedImages, getPalette, getPortraits } from "./graphics";
import getTexts from "./texts";

export interface Game {
  zone: number;
  items: Item[];
  abilities: Ability[];
  classes: Class[];
  djinn: Djinni[];
  summons: Summon[];
  enemies: Enemy[];
  groups: Group[];
  shops: Shop[];
  partyMembers: PartyMember[];
  sprites: Sprite[];
  maps: Map[];
  texts: Text[];
  graphics: Graphics;
  inputs: Input;
}

export interface Item {
  name: string;
  description: string;
  price: number;
  type: string;
  special: ItemSpecial[];
  characters: string;
  icon: number;
  attack: number;
  defense: number;
  unleash_rate: number;
  uses: number;
  unleash: string;
  effect_1: string;
  effect_1_value: number;
  effect_2: string;
  effect_2_value: number;
  effect_3: string;
  effect_3_value: number;
  effect_4: string;
  effect_4_value: number;
  ability_on_use: string;
}

export interface ItemSpecial {
  icon: string;
  text: string;
}

export interface Ability {
  name: string;
  description: string;
  target: string;
  typeUses: string;
  attribute: string;
  effect: string;
  icon: string;
  range: string;
  pp_cost: number;
  power: number;
  utility: string;
}

export interface Class {
  name: string;
  type: number;
  venus: number;
  mercury: number;
  mars: number;
  jupiter: number;
  hp: number;
  pp: number;
  attack: number;
  defense: number;
  agility: number;
  luck: number;
  ability_1: string;
  level_1: number;
  ability_2: string;
  level_2: number;
  ability_3: string;
  level_3: number;
  ability_4: string;
  level_4: number;
  ability_5: string;
  level_5: number;
  ability_6: string;
  level_6: number;
  ability_7: string;
  level_7: number;
  ability_8: string;
  level_8: number;
  ability_9: string;
  level_9: number;
  ability_10: string;
  level_10: number;
  ability_11: string;
  level_11: number;
  ability_12: string;
  level_12: number;
  ability_13: string;
  level_13: number;
  ability_14: string;
  level_14: number;
  ability_15: string;
  level_15: number;
  ability_16: string;
  level_16: number;
}

export interface Djinni {
  name: string;
  description: string;
  ability: string;
  hp: number;
  pp: number;
  attack: number;
  defense: number;
  agility: number;
  luck: number;
}

export interface Summon {
  name: string;
  description: string;
  ability: string;
  venus: number;
  mercury: number;
  mars: number;
  jupiter: number;
}

export interface Enemy {
  name: string;
  level: number;
  hp: number;
  pp: number;
  attack: number;
  defense: number;
  agility: number;
  luck: number;
  turns: number;
  hp_regen: number;
  pp_regen: number;
  item_1: string;
  item_2: string;
  item_3: string;
  item_4: string;
  quantity_1: number;
  quantity_2: number;
  quantity_3: number;
  quantity_4: number;
  ability_1: string;
  ability_2: string;
  ability_3: string;
  ability_4: string;
  ability_5: string;
  ability_6: string;
  ability_7: string;
  ability_8: string;
  coins: number;
  drop_item: string;
  drop_rate: number;
  experience: number;
}

export interface Group {
  enemy_1: string;
  enemy_2: string;
  enemy_3: string;
  enemy_4: string;
  enemy_5: string;
  minimum_1: number;
  minimum_2: number;
  minimum_3: number;
  minimum_4: number;
  minimum_5: number;
  maximum_1: number;
  maximum_2: number;
  maximum_3: number;
  maximum_4: number;
  maximum_5: number;
}

export interface Shop {
  name: string;
  item_1: string;
  item_2: string;
  item_3: string;
  item_4: string;
  item_5: string;
  item_6: string;
  item_7: string;
  item_8: string;
  item_9: string;
  item_10: string;
  item_11: string;
  item_12: string;
  item_13: string;
  item_14: string;
  item_15: string;
  item_16: string;
  item_17: string;
  item_18: string;
  item_19: string;
  item_20: string;
  item_21: string;
  item_22: string;
  item_23: string;
  item_24: string;
  artifact_1: string;
  artifact_2: string;
  artifact_3: string;
  artifact_4: string;
  artifact_5: string;
  artifact_6: string;
  artifact_7: string;
  artifact_8: string;
  type: string;
}

export interface PartyMember {
  name: string;
  portrait: number;
  hp_1: number;
  hp_2: number;
  hp_3: number;
  hp_4: number;
  hp_5: number;
  hp_6: number;
  pp_1: number;
  pp_2: number;
  pp_3: number;
  pp_4: number;
  pp_5: number;
  pp_6: number;
  attack_1: number;
  attack_2: number;
  attack_3: number;
  attack_4: number;
  attack_5: number;
  attack_6: number;
  defense_1: number;
  defense_2: number;
  defense_3: number;
  defense_4: number;
  defense_5: number;
  defense_6: number;
  agility_1: number;
  agility_2: number;
  agility_3: number;
  agility_4: number;
  agility_5: number;
  agility_6: number;
  luck_1: number;
  luck_2: number;
  luck_3: number;
  luck_4: number;
  luck_5: number;
  luck_6: number;
  venus: number;
  mercury: number;
  mars: number;
  jupiter: number;
  level: number;
  item_1: number;
  item_2: number;
  item_3: number;
  item_4: number;
  item_5: number;
  item_6: number;
  item_7: number;
  item_8: number;
  item_9: number;
  item_10: number;
  item_11: number;
  item_12: number;
  item_13: number;
}

export interface Sprite {
  width: number;
  height: number;
  scale: number;
  directions: number;
  animations: number;
  offset_x: number;
  offset_y: number;
}

export interface Map {
  name: string;
}

export interface Text {
  text: string;
}

export interface Graphics {
  palette: any;
  icons: Icons;
  portraits: any;
}

export interface Icons {
  items: any;
  abilities: any;
  status: any;
}

export interface Input {
  abilityAttributes: string[];
  abilityUses: string[];
}

export const initialStateGame: Game = {
  zone: -1,
  items: [],
  abilities: [],
  classes: [],
  djinn: [],
  summons: [],
  enemies: [],
  groups: [],
  shops: [],
  partyMembers: [],
  sprites: [],
  texts: [],
  maps: [],
  graphics: {
    palette: [],
    icons: {
      items: [],
      abilities: [],
      status: [],
    },
    portraits: [],
  },
  inputs: {
    abilityAttributes: [],
    abilityUses: [],
  },
};

function removeTextCodes(text: string) {
  return text.replace(/\{.*?\}/g, "");
}

function loader(
  file: File,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string>>,
  setGame: Dispatch<SetStateAction<Game>>
) {
  const rom = new HexEditor(file, () => {
    const game = cloneDeep(initialStateGame);

    let checksum = "";
    for (
      let i = addresses.checksum.offset;
      i < addresses.checksum.offset + addresses.checksum.length;
      i += 0x1
    ) {
      checksum += rom.readBytes(i, 8, true);
    }

    game.zone = addresses.checksum.values.findIndex(
      (value) => value === checksum
    );

    if (game.zone === -1) {
      setIsLoading(false);
      setError("notGoldenSun");
      return;
    } else if (game.zone >= 5) {
      setIsLoading(false);
      setError("notAvailable");
      return;
    }

    setError("");

    // Get Texts
    game.texts = getTexts(rom, addresses.messages[game.zone]);

    // Get Items
    for (let i = 0; i < addresses.items.length; i += 1) {
      const item: any = {};
      Object.keys(addresses.items.attributs).forEach((attribut, index) => {
        const attr = Object.values(addresses.items.attributs)[index];
        item[attribut] = rom.readBytes(
          rom.readBytes(addresses.items.pointer[game.zone], 32) +
            i * addresses.items.section_length +
            attr.offset,
          attr.octets
        );
      });

      item.name = removeTextCodes(
        game.texts[addresses.items.name[game.zone] + i].text
      );
      item.description = removeTextCodes(
        game.texts[addresses.items.description[game.zone] + i].text
      );
      item.special = itemSpecial(item.special);

      game.items.push(item);
    }

    // Get Abilities
    for (let i = 0; i < addresses.abilities.length; i += 1) {
      const ability: any = {};
      Object.keys(addresses.abilities.attributs).forEach((attribut, index) => {
        const attr = Object.values(addresses.abilities.attributs)[index];
        ability[attribut] = rom.readBytes(
          rom.readBytes(addresses.abilities.pointer[game.zone], 32) +
            i * addresses.abilities.section_length +
            attr.offset,
          attr.octets
        );
      });

      ability.name = removeTextCodes(
        game.texts[addresses.abilities.name[game.zone] + i].text
      );
      ability.description = removeTextCodes(
        game.texts[addresses.abilities.description[game.zone] + i].text
      );

      game.abilities.push(ability);
    }

    // Get Classes
    for (let i = 0; i < addresses.classes.length; i += 1) {
      const Class: any = {};
      Object.keys(addresses.classes.attributs).forEach((attribut, index) => {
        const attr = Object.values(addresses.classes.attributs)[index];
        Class[attribut] = rom.readBytes(
          rom.readBytes(addresses.classes.pointer[game.zone], 32) +
            i * addresses.classes.section_length +
            attr.offset,
          attr.octets
        );
      });

      Class.name = removeTextCodes(
        game.texts[addresses.classes.name[game.zone] + i].text
      );

      game.classes.push(Class);
    }

    // Get Djinn
    for (let i = 0; i < addresses.djinn.length; i += 1) {
      const djinni: any = {};
      Object.keys(addresses.djinn.attributs).forEach((attribut, index) => {
        const attr = Object.values(addresses.djinn.attributs)[index];
        djinni[attribut] = rom.readBytes(
          rom.readBytes(addresses.djinn.pointer[game.zone], 32) +
            i * addresses.djinn.section_length +
            attr.offset,
          attr.octets
        );
      });

      djinni.name = removeTextCodes(
        game.texts[addresses.djinn.name[game.zone] + i].text
      );
      djinni.description = removeTextCodes(
        game.texts[addresses.djinn.description[game.zone] + i].text
      );

      game.djinn.push(djinni);
    }

    // Get Summons
    for (let i = 0; i < addresses.summons.length; i += 1) {
      const summon: any = {};
      Object.keys(addresses.summons.attributs).forEach((attribut, index) => {
        const attr = Object.values(addresses.summons.attributs)[index];
        summon[attribut] = rom.readBytes(
          rom.readBytes(addresses.summons.pointer[game.zone], 32) +
            i * addresses.summons.section_length +
            attr.offset,
          attr.octets
        );
      });

      // TODO: Change
      summon.name = game.abilities[summon.ability];
      summon.name = summon.name.name;
      summon.description = game.abilities[summon.ability];
      summon.description = summon.description.description;

      game.summons.push(summon);
    }

    // Get Enemies
    for (let i = 0; i < addresses.enemies.length; i += 1) {
      const enemy: any = {};
      Object.keys(addresses.enemies.attributs).forEach((attribut, index) => {
        const attr = Object.values(addresses.enemies.attributs)[index];
        enemy[attribut] = rom.readBytes(
          rom.readBytes(addresses.enemies.pointer[game.zone], 32) +
            i * addresses.enemies.section_length +
            attr.offset,
          attr.octets
        );
      });

      enemy.name = removeTextCodes(
        game.texts[addresses.enemies.name[game.zone] + i].text
      );

      game.enemies.push(enemy);
    }

    // Get Groups
    for (let i = 0; i < addresses.groups.length; i += 1) {
      const group: any = {};
      Object.keys(addresses.groups.attributs).forEach((attribut, index) => {
        const attr = Object.values(addresses.groups.attributs)[index];
        group[attribut] = rom.readBytes(
          rom.readBytes(addresses.groups.pointer[game.zone], 32) +
            i * addresses.groups.section_length +
            attr.offset,
          attr.octets
        );
      });

      // TODO: Change
      group.name = game.enemies[group.enemy_1];
      group.name = group.name.name;

      game.groups.push(group);
    }

    // Get Shops
    for (let i = 0; i < addresses.shops.length; i += 1) {
      const shop: any = {};
      Object.keys(addresses.shops.attributs).forEach((attribut, index) => {
        const attr = Object.values(addresses.shops.attributs)[index];
        shop[attribut] = rom.readBytes(
          rom.readBytes(addresses.shops.pointer[game.zone], 32) +
            i * addresses.shops.section_length +
            attr.offset,
          attr.octets
        );
      });

      shop.name = i18n.t(`shops.types.${shopsTypes[shop.type]}`);

      game.shops.push(shop);
    }

    // Get Party Members Portraits
    const portraits = [];
    for (let i = 0; i < addresses.partyMembersPortraits.length; i += 1) {
      const portrait: any = [];
      Object.keys(addresses.partyMembersPortraits.attributs).forEach(
        (attribut, index) => {
          const attr = Object.values(addresses.partyMembersPortraits.attributs)[
            index
          ];
          portrait[attribut] = rom.readBytes(
            rom.readBytes(
              addresses.partyMembersPortraits.pointer[game.zone],
              32
            ) +
              i * addresses.partyMembersPortraits.section_length +
              attr.offset,
            attr.octets
          );
        }
      );

      portraits.push(portrait);
    }

    // Get Party Members Stats
    for (let i = 0; i < addresses.partyMembersStats.length; i += 1) {
      const partyMember: any = {};
      Object.keys(addresses.partyMembersStats.attributs).forEach(
        (attribut, index) => {
          const attr = Object.values(addresses.partyMembersStats.attributs)[
            index
          ];
          partyMember[attribut] = rom.readBytes(
            rom.readBytes(addresses.partyMembersStats.pointer[game.zone], 32) +
              i * addresses.partyMembersStats.section_length +
              attr.offset,
            attr.octets
          );
        }
      );

      partyMember.name = removeTextCodes(
        game.texts[addresses.partyMembersStats.name[game.zone] + i].text
      );

      const portraitIndex = portraits.findIndex(
        (portrait) => portrait.character === i
      );
      partyMember.portrait =
        portraitIndex !== -1 ? portraits[portraitIndex].portrait : null;

      game.partyMembers.push(partyMember);
    }

    // Get Sprites
    for (let i = 0; i < addresses.sprites.length; i += 1) {
      const sprite: any = {};
      Object.keys(addresses.sprites.attributs).forEach((attribut, index) => {
        const attr = Object.values(addresses.sprites.attributs)[index];
        sprite[attribut] = rom.readBytes(
          rom.readBytes(addresses.sprites.pointer[game.zone], 32) +
            i * addresses.sprites.section_length +
            attr.offset,
          attr.octets
        );
      });

      sprite.name = "???";

      game.sprites.push(sprite);
    }

    // Get Maps
    for (let i = 0; i < addresses.maps.length; i += 1) {
      const map: any = {};
      // Object.keys(addresses.maps.attributs).forEach((attribut, index) => {
      //   const attr = Object.values(addresses.maps.attributs)[index];
      //   map[attribut] = rom.readBytes(
      //     rom.readBytes(addresses.maps.pointer[game.zone], 32) +
      //       i * addresses.maps.section_length +
      //       attr.offset,
      //     attr.octets
      //   );
      // });

      map.name = removeTextCodes(
        game.texts[addresses.maps.name[game.zone] + i].text
      );

      game.maps.push(map);
    }

    // Get Palette
    game.graphics.palette = getPalette(
      rom,
      rom.readBytes(addresses.graphics.palette.pointer[game.zone], 16),
      addresses.graphics.palette.length
    );

    // Get Icons
    game.graphics.icons.items = getCompressedImages(
      rom,
      rom.readBytes(addresses.graphics.icons.items.pointer[game.zone], 32)
    );

    game.graphics.icons.abilities = getCompressedImages(
      rom,
      rom.readBytes(addresses.graphics.icons.abilities.pointer[game.zone], 32)
    );

    game.graphics.icons.status = getCompressedImages(
      rom,
      rom.readBytes(addresses.graphics.icons.status.pointer[game.zone], 32)
    );

    // Get Portraits
    game.graphics.portraits = getPortraits(
      rom,
      rom.readBytes(addresses.graphics.portraits.pointer[game.zone], 32)
    );

    // Get Inputs
    game.inputs.abilityAttributes = [...new Array(5)].map((_, index) => {
      return game.texts[
        addresses.abilities.nameAttributes[game.zone] + index
      ].text.replace(/\{.*?\}/g, "");
    });

    game.inputs.abilityUses = [
      removeTextCodes(
        game.texts[addresses.abilities.nameUses[game.zone] + 1].text
      ),
      removeTextCodes(game.texts[addresses.abilities.nameUses[game.zone]].text),
    ];

    setGame(game);
    setIsLoading(false);
  });
  return rom;
}

export default loader;
