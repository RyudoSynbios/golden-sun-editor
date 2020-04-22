export function itemSpecial(special: number) {
  const specials = {
    1: false,
    2: false,
    4: false,
    8: false,
    16: false,
  };

  if (special === 0) {
    return specials;
  }

  if (special >= 16) {
    specials["16"] = true;
    special -= 16;
  }
  if (special >= 8) {
    specials["8"] = true;
    special -= 8;
  }
  if (special >= 4) {
    specials["4"] = true;
    special -= 4;
  }
  if (special >= 2) {
    specials["2"] = true;
    special -= 2;
  }
  if (special >= 1) {
    specials["1"] = true;
    special -= 1;
  }

  return specials;
}

export function readAbilityTypeUses(typeUses: string, name: string): any {
  let type = parseInt(typeUses);

  const uses = {
    0: false,
    1: false,
  };

  if (type > 0x80) {
    type -= 0x80;
    uses[1] = true;
  }

  if (type > 0x40) {
    type -= 0x40;
    uses[0] = true;
  }

  if (name === "type") {
    return type.toString(16);
  }
  return uses;
}

export function writeAbilityTypeUses(
  typeUses: string,
  name: string,
  value: string
) {
  let type;
  let uses;
  if (name === "type") {
    type = value;
    uses = readAbilityTypeUses(typeUses, "uses");
  } else if (name === "uses") {
    type = readAbilityTypeUses(typeUses, "type");
    uses = value;
  }

  let newTypeUses = parseInt(type, 16);

  if (uses[0]) {
    newTypeUses += 0x40;
  }

  if (uses[1]) {
    newTypeUses += 0x80;
  }

  return newTypeUses;
}
