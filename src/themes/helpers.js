function toHex(value) {
  const hex = value.toString(16);
  return hex.padStart(2, '0');
}

function lightenDarkenColor(color, value) {
  let usePound = false;

  if (color[0] === '#') {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);

  // Red
  let red = (num >> 16) + value;
  if (red > 255) red = 255;
  else if (red < 0) red = 0;

  // Green
  let green = ((num >> 8) & 0x00FF) + value;
  if (green > 255) green = 255;
  else if (green < 0) green = 0;

  // Blue
  let blue = (num & 0x0000FF) + value;
  if (blue > 255) blue = 255;
  else if (blue < 0) blue = 0;

  return `${usePound ? '#' : ''}${toHex(red)}${toHex(green)}${toHex(blue)}`;
}

function convertToRgb(hexVal) {
  let color = hexVal;

  if (color[0] === '#') color = color.slice(1);
  const num = parseInt(color, 16);
  const rgbVal = {
    red: num >> 16,
    green: (num >> 8) & 0x00FF,
    blue: num & 0x0000FF,
  }
  return `${rgbVal.red}, ${rgbVal.green}, ${rgbVal.blue}`;
}

export { lightenDarkenColor, convertToRgb };
