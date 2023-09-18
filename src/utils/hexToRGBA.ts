import {ColorValue} from 'react-native';

function verifyHexadecimalColor(color: string): string {
  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (regex.test(color)) {
    return color;
  } else {
    throw new Error(
      `The string => ${color} <= does not have the format of a hexadecimal color.`,
    );
  }
}

/**
 * The function takes a hexadecimal color code and opacity value, and returns the corresponding RGBA
 * color value.
 * @param {string} hex - The `hex` parameter is a string representing a hexadecimal color value. It can
 * be either a 3-digit or 6-digit hexadecimal value, starting with a `#` symbol.
 * @param {number} opacity - The `opacity` parameter is a number that represents the opacity value for
 * the RGBA color. It should be a value between 0 and 1, where 0 represents fully transparent and 1
 * represents fully opaque.
 * @returns a string in the format "rgba(r, g, b, opacity)". The values of r, g, and b are obtained by
 * converting the hexadecimal color code to decimal values, and the opacity is provided as an argument
 * to the function.
 */
export function hexToRGBA(hex: string, opacity: number): ColorValue {
  verifyHexadecimalColor(hex);
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
