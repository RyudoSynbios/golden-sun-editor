export function itemSpecial(special: number) {
  const specials = {
    1: false,
    2: false,
    4: false,
    8: false,
    16: false
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
