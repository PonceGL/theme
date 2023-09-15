import {ColorValue} from 'react-native';
export enum Opacity {
  'CERO' = 0,
  'CERO.ONE' = 0.1,
  'CERO.TWO' = 0.2,
  'CERO.THREE' = 0.3,
  'CERO.FOUR' = 0.4,
  'CERO.FIVE' = 0.5,
  'CERO.SIX' = 0.6,
  'CERO.SEVEN' = 0.7,
  'CERO.EIGHT' = 0.8,
  'CERO.NINE' = 0.9,
  'ONE' = 1,
}

export function hexToRGBA(
  hex: string,
  opacity: Opacity = Opacity.ONE,
): ColorValue {
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
