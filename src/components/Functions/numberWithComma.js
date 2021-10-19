export default function numberWithComma(number) {
  let numLength = String(number).length;
  let buffer = String(number);
  if (numLength > 3) {
    let modNumber = '';
    for (let i = 0; i < ~~(numLength / 3); i++) {
      modNumber =
        ',' +
        buffer.slice(numLength - 3 * (i + 1), numLength - 3 * i) +
        modNumber;
    }
    if (numLength % 3 == 0) {
      modNumber = modNumber.slice(1);
    } else {
      modNumber =
        buffer.slice(0, numLength - 3 * ~~(numLength / 3)) + modNumber;
    }
    return modNumber;
  } else {
    return buffer;
  }
}
