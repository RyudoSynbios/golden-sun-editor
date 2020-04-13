import HexEditor from "./hexEditor";

interface CharTree {
  binary: string;
  code: string;
}

function getTexts(rom: HexEditor, initialPointer: number) {
  const pointerToStartCharTrees = rom.readBytes(initialPointer, 32);
  const startOffsetsTable = rom.readBytes(pointerToStartCharTrees + 0x4, 32);
  const startCharTrees = rom.readBytes(pointerToStartCharTrees, 32);
  const pointerToStartTextBitstream = rom.readBytes(initialPointer + 0x60, 32);

  let lastOffsetAddress = 0x0;

  const trees: Array<Array<CharTree>> = [];

  for (
    let i = 0;
    i < (pointerToStartCharTrees - startOffsetsTable) / 2;
    i += 1
  ) {
    trees[i] = [];

    const offset = rom.readBytes(startOffsetsTable + i * 0x2, 16);
    let indexLimit = Math.round(
      ((lastOffsetAddress === 0x0
        ? offset
        : startCharTrees + offset - lastOffsetAddress) *
        8) /
        12
    );

    if (offset !== 0x8000) {
      let charsBitstream = "";

      for (let j = 1; j <= offset; j += 1) {
        charsBitstream += rom.hex2bin(
          rom.readBytes(startCharTrees + offset - j, 8)
        );
      }

      let char = "";
      let chars = [];
      for (let j = 0; j < charsBitstream.length; j += 1) {
        if (j >= 12 * chars.length + 4) {
          char += charsBitstream[j];
          if (char.length === 8) {
            const charToInt = parseInt(char, 2);
            const charToStr = String.fromCharCode(charToInt);
            chars.push({
              code: charToInt.toString(16),
              symbol:
                charToInt >= 0x20 ? charToStr : `{${charToInt.toString(16)}}`,
            });
            char = "";
          }
        }
      }

      let binary = "";
      let graph = "";
      let index = 0;
      for (let j = 0; index < indexLimit; j += 1) {
        let graphBitstream = rom.reverseBin(
          rom.hex2bin(rom.readBytes(startCharTrees + offset + j, 8))
        );

        for (let k = 0; k < graphBitstream.length; k += 1) {
          graph += `-${
            graphBitstream[k] === "0"
              ? "-o"
              : `[${index}: {${chars[index].symbol}} {0x${chars[index].code}} {${binary}}]`
          }`;
          if (graphBitstream[k] === "0") {
            binary += "0";
          } else if (graphBitstream[k] === "1") {
            trees[i].push({
              binary: `{${binary}}`,
              code: chars[index].code,
            });
            graph = graph
              .replace(/`/g, " ")
              .replace(/-/g, " ")
              .replace(/o/g, "|")
              .replace(/\[.*?\]/g, "");
            index += 1;
            while (graph.match(/ {3}$/g)) {
              graph = graph.replace(/ {3}$/g, "");
              binary = binary.substring(0, binary.length - 1);
            }
            while (graph.match(/\| $/g)) {
              graph = graph.replace(/\| $/g, "");
              binary = binary.substring(0, binary.length - 1);
            }
            binary += "1";
            graph += "`";
          }
        }
        if (index === indexLimit) {
          lastOffsetAddress = startCharTrees + offset + j + 1;
        }
      }
    }
  }

  const texts = [];
  let end = false;
  let textBitstream = pointerToStartTextBitstream;
  while (!end) {
    const textBlock = rom.readBytes(textBitstream, 32);
    const textBlockLengths = rom.readBytes(textBitstream + 0x4, 32);

    let length = 0x100;

    if (textBlockLengths + length > pointerToStartTextBitstream) {
      length = pointerToStartTextBitstream - textBlockLengths - 0x1;
      end = true;
    }

    let cumuledTextsLength = 0x0;
    for (let j = textBlockLengths; j < textBlockLengths + length; j += 1) {
      let charsBitstream = "";
      for (let k = 0x0; k <= rom.readBytes(j, 8); k += 1) {
        charsBitstream += rom.reverseBin(
          rom.hex2bin(rom.readBytes(textBlock + cumuledTextsLength + k, 8))
        );
      }

      cumuledTextsLength += rom.readBytes(j, 8);

      let binaries = "";
      let text = "";
      let lastCharacterDecoded = 0;
      for (let k = 0; k <= charsBitstream.length; k += 1) {
        binaries += charsBitstream[k];
        // TODO: Faire une fonction search() de START à END (récursive à l'interieur de #214)
        // START
        let index = -1;
        if (trees[lastCharacterDecoded].length > 1) {
          index = trees[lastCharacterDecoded].findIndex(
            // eslint-disable-next-line no-loop-func
            (item: CharTree) => item.binary === `{${binaries}}`
          );
        } else {
          index = 0;
        }
        if (index !== -1) {
          const code = trees[lastCharacterDecoded][index].code;
          const charToInt = parseInt(code, 16);
          const symbol = rom.hexToSymbol(charToInt);

          if (trees[lastCharacterDecoded].length > 1) {
            binaries = "";
          }

          lastCharacterDecoded = charToInt;

          text += symbol;
          if (charToInt === 0) {
            texts.push({ index: texts.length, text });
            text = "";
            break;
          }

          if (trees[lastCharacterDecoded].length === 1) {
            // START
            let index = -1;
            if (trees[lastCharacterDecoded].length > 1) {
              index = trees[lastCharacterDecoded].findIndex(
                // eslint-disable-next-line no-loop-func
                (item: CharTree) => item.binary === `{${binaries}}`
              );
            } else {
              index = 0;
            }
            if (index !== -1) {
              const code = trees[lastCharacterDecoded][index].code;
              const charToInt = parseInt(code, 16);
              const symbol = rom.hexToSymbol(charToInt);

              if (trees[lastCharacterDecoded].length > 1) {
                binaries = "";
              }

              lastCharacterDecoded = charToInt;
              text += symbol;
              if (charToInt === 0) {
                texts.push({ index: texts.length, text });
                text = "";
                break;
              }

              // if (trees[lastCharacterDecoded].length === 1) {
              // ...
              // }
              // END
            }
            // END
          }
        }
      }
      if (text !== "") {
        texts.push({ index: texts.length, text: "DECODE ERROR!" });
      }
    }
    textBitstream += 0x8;
  }

  return texts;
}

export default getTexts;
