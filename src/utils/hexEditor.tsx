import FileSaver from "file-saver";

class HexEditor {
  fileName: string;
  fileReader: any;
  constructor(file: File, callback: () => void) {
    this.fileName = file.name;
    this.fileReader = new FileReader();
    this.fileReader.onload = function onload() {
      this.dataView = new DataView(this.result);
      callback();
    };
    this.fileReader.readAsArrayBuffer(file);
  }

  hex2bin(hex: number) {
    return hex.toString(2).padStart(8, "0");
  }

  reverseBin(bin: string) {
    let newBin = "";

    for (let i = 0; i < bin.length; i += 1) {
      newBin = bin[i] + newBin;
    }

    return newBin;
  }

  intToHex(int: any, length: number) {
    int = int.toString(16);
    while (int.length < length) {
      int = int.padStart(length, "0");
    }
    return int;
  }

  hexToSymbol(hex: number) {
    if (hex >= 0x20) {
      return String.fromCharCode(hex);
    } else {
      hex = this.intToHex(hex, 2);
      return `{${hex}}`;
    }
  }

  readBytes(offset: number, octets: number, toAscii?: boolean) {
    let byte;

    switch (octets) {
      case 8:
        byte = this.fileReader.dataView.getUint8(offset);
        break;
      case 16:
        byte = this.fileReader.dataView.getUint16(offset, true);
        break;
      case 32:
        byte = this.fileReader.dataView.getUint32(offset, true);
        break;
    }

    if (byte >= 0x8000000) {
      byte -= 0x8000000;
    }

    if (toAscii) {
      return String.fromCharCode(byte);
    }

    return byte;
  }

  writeByte(offset: number, value: number, octets: number) {
    switch (octets) {
      case 8:
        return this.fileReader.dataView.setUint8(offset, value);
      case 16:
        return this.fileReader.dataView.setUint16(offset, value, true);
      case 32:
        return this.fileReader.dataView.setUint32(offset, value, true);
      default:
        return null;
    }
  }

  save() {
    const blob = new Blob([this.fileReader.dataView.buffer]);
    FileSaver.saveAs(blob, this.fileName);
  }
}

export default HexEditor;
