import {ColorsTheme} from '../interfaces/theme';
import {
  black,
  blue800,
  blue900,
  blueA100,
  blueA700,
  lightGreenA700,
  orange100,
  redA700,
  white,
} from '../styles/colors';
import {hexToRGBA, Opacity} from '../utils/hexToRGBA';

export const colorsThemeState: ColorsTheme = {
  primary: hexToRGBA(blue800, Opacity.ONE),
  accent: hexToRGBA(blue900, Opacity.ONE),
  text: hexToRGBA(white, Opacity.ONE),
  background: hexToRGBA(white, Opacity.ONE),
  surface: hexToRGBA(blueA100, Opacity.ONE),
  info: hexToRGBA(blueA700, Opacity.ONE),
  error: hexToRGBA(redA700, Opacity.ONE),
  success: hexToRGBA(lightGreenA700, Opacity.ONE),
  onSurface: hexToRGBA(white, Opacity.ONE),
  white: hexToRGBA(white, Opacity.ONE),
  black: hexToRGBA(black, Opacity.ONE),
  disabled: hexToRGBA(blue900, Opacity['CERO.FIVE']),
  placeholder: hexToRGBA(white, Opacity['CERO.SEVEN']),
  backdrop: hexToRGBA(black, Opacity['CERO.FIVE']),
  notification: hexToRGBA(black, Opacity['CERO.FIVE']),
  tooltip: hexToRGBA(orange100, Opacity.ONE),
};
