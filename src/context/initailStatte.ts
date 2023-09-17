import {ColorsTheme, Theme} from '../interfaces/theme';
import {
  black,
  blue800,
  blue900,
  blueA100,
  blueA700,
  grey900,
  lightGreenA700,
  orange100,
  redA700,
  white,
} from '../styles/colors';
import {hexToRGBA} from '../utils/hexToRGBA';

export const colorsThemeState: ColorsTheme = {
  primary: hexToRGBA(blue800, 1),
  accent: hexToRGBA(blue900, 1),
  text: hexToRGBA(white, 1),
  background: hexToRGBA(grey900, 1),
  surface: hexToRGBA(blueA100, 1),
  info: hexToRGBA(blueA700, 1),
  error: hexToRGBA(redA700, 1),
  success: hexToRGBA(lightGreenA700, 1),
  onSurface: hexToRGBA(white, 1),
  white: hexToRGBA(white, 1),
  black: hexToRGBA(black, 1),
  disabled: hexToRGBA(blue900, 0.5),
  placeholder: hexToRGBA(white, 0.7),
  backdrop: hexToRGBA(black, 0.5),
  notification: hexToRGBA(black, 0.5),
  tooltip: hexToRGBA(orange100, 1),
};

export const INITIAL_STATE: Theme = {
  colors: colorsThemeState,
};
