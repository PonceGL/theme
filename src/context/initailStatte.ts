import {ColorsTheme, Theme} from '../interfaces/theme';
import {black, blue, gray, green, orange, red, white} from '../styles/colors';
import {hexToRGBA} from '../utils/hexToRGBA';

export const colorsThemeState: ColorsTheme = {
  primary: hexToRGBA(blue[800], 1),
  accent: hexToRGBA(blue[900], 1),
  text: hexToRGBA(white, 1),
  background: hexToRGBA(gray[400], 1),
  surface: hexToRGBA(blue[400], 1),
  info: hexToRGBA(blue[700], 1),
  error: hexToRGBA(red[600], 1),
  success: hexToRGBA(green[400], 1),
  onSurface: hexToRGBA(white, 1),
  white: hexToRGBA(white, 1),
  black: hexToRGBA(black, 1),
  disabled: hexToRGBA(blue[900], 0.5),
  placeholder: hexToRGBA(white, 0.7),
  backdrop: hexToRGBA(black, 0.5),
  notification: hexToRGBA(black, 0.5),
  tooltip: hexToRGBA(orange[500], 1),
};

export const INITIAL_STATE: Theme = {
  colors: colorsThemeState,
};
