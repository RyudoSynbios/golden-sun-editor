import { Dispatch, SetStateAction } from "react";
import cloneDeep from "lodash.clonedeep";

import { itemSpecial } from "./correspondances";
import HexEditor from "./hexEditor";
import getTexts from "./texts";

import addresses from "./addresses";

export interface Game {
  zone: number;
  items: Item[];
  abilities: Ability[];
  djinn: Djinni[];
  summons: Summon[];
  enemies: Enemy[];
  groups: Group[];
  shops: Shop[];
  texts: Text[];
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
  uses: string;
  attribute: string;
  effect: string;
  icon: string;
  range: string;
  pp_cost: number;
  power: number;
  utility: string;
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
}

export interface Text {
  index: number;
  text: string;
}

export const initialStateGame: Game = {
  zone: -1,
  items: [],
  abilities: [],
  djinn: [],
  summons: [],
  enemies: [],
  groups: [],
  shops: [],
  texts: [],
};

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

      item.name = game.texts[addresses.items.name[game.zone] + i].text.replace(
        /\{.*?\}/g,
        ""
      );
      item.description = game.texts[
        addresses.items.description[game.zone] + i
      ].text.replace(/\{.*?\}/g, "");
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

      ability.name = game.texts[
        addresses.abilities.name[game.zone] + i
      ].text.replace(/\{.*?\}/g, "");
      ability.description = game.texts[
        addresses.abilities.description[game.zone] + i
      ].text.replace(/\{.*?\}/g, "");

      game.abilities.push(ability);
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

      djinni.name = game.texts[
        addresses.djinn.name[game.zone] + i
      ].text.replace(/\{.*?\}/g, "");
      djinni.description = game.texts[
        addresses.djinn.description[game.zone] + i
      ].text.replace(/\{.*?\}/g, "");

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

      enemy.name = game.texts[
        addresses.enemies.name[game.zone] + i
      ].text.replace(/\{.*?\}/g, "");

      game.enemies.push(enemy);
    }

    // Get Groups
    for (let i = 0; i < addresses.groups.length; i += 1) {
      const group: any = {};
      Object.keys(addresses.groups.attributs).forEach((attribut, index) => {
        const attr = Object.values(addresses.groups.attributs)[index];
        group[attribut] = rom.readBytes(
          addresses.groups.offset[game.zone] +
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

      shop.name = "???";

      game.shops.push(shop);
    }

    setGame(game);
    setIsLoading(false);
  });
  return rom;
}

export default loader;
