import HexEditor, { hex2bin, reverseBin } from "./hexEditor";

const compressed16Scheme = [
  "0", // #0
  "100", // #1
  "1010", // #2
  "1011", // #3
  "1100", // #4
  "1101", // #5
  "1110", // #6
  "111100", // #7
  "111101", // #8
  "111110", // #9
  "11111100", // #A
  "11111101", // #B
  "11111110", // #C
  "1111111100", // #D
  "1111111101", // #E
  "1111111110", // #F
  "1111111111", // End
];

export function getCompressedIconsLength(rom: HexEditor, offset: number) {
  const compressedArray = [];
  let buffer = "";
  while (true) {
    const bitstream = reverseBin(hex2bin(rom.readBytes(offset, 8)));
    compressedArray.push(rom.readBytes(offset, 8));
    for (let i = 0; i < bitstream.length; i += 1) {
      buffer += bitstream[i];
      if (compressed16Scheme.includes(buffer)) {
        // eslint-disable-next-line no-loop-func
        const index = compressed16Scheme.findIndex((item) => item === buffer);
        if (index === 16) {
          return compressedArray;
        }
        buffer = "";
      }
    }
    offset += 0x1;
  }
}

export function getCompressedIcons(rom: HexEditor, initialPointer: number) {
  const icons: any = [];
  let pointer = initialPointer;
  while (rom.readBytes(pointer, 32) !== 0xffffffff) {
    icons.push(getCompressedIconsLength(rom, rom.readBytes(pointer, 32)));
    pointer += 0x4;
  }
  return icons;
}

export function decompressIcons(src: any, palette: any) {
  let bitstream = "";
  for (let i = 0; i < src.length; i += 1) {
    bitstream += reverseBin(hex2bin(src[i]));
  }
  let reference: any = "0123456789ABCDEF";
  let buffer = "";
  let image = [];
  for (let i = 0; i < bitstream.length; i += 1) {
    buffer += bitstream[i];
    if (compressed16Scheme.includes(buffer)) {
      // eslint-disable-next-line no-loop-func
      const index = compressed16Scheme.findIndex((item) => item === buffer);
      if (index === 16) {
        break;
      }
      image.push(palette[parseInt(reference[index], 16)]);
      reference =
        reference[index] +
        reference.substr(0, index) +
        reference.substr(index + 1);
      buffer = "";
    }
  }
  return image;
}

export function getPalette(
  rom: HexEditor,
  initialPointer: number,
  length: number
) {
  const offset = rom.readBytes(initialPointer, 16);
  const palette = [];
  for (let i = offset; i <= offset + length * 2; i += 0x2) {
    const hex = rom.readBytes(i, 16);
    const red = (hex & 31) << 3;
    const green = ((hex >> 5) & 31) << 3;
    const blue = ((hex >> 10) & 31) << 3;
    palette.push(
      `#${red.toString(16).padStart(2, "0")}${green
        .toString(16)
        .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`
    );
  }
  return palette;
}
