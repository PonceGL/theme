import {ColorsTheme, Theme} from '../interfaces/theme';
import {black, blue, gray, green, orange, red, white} from '../styles/colors';
import {hexToRGBA} from '../utils/hexToRGBA';

export const colorsThemeState: ColorsTheme = {
  primary: hexToRGBA(blue[800] as string, 1),
  accent: hexToRGBA(blue[900] as string, 1),
  text: hexToRGBA(white as string, 1),
  background: hexToRGBA(gray[400] as string, 1),
  surface: hexToRGBA(blue[400] as string, 1),
  info: hexToRGBA(blue[700] as string, 1),
  error: hexToRGBA(red[600] as string, 1),
  success: hexToRGBA(green[400] as string, 1),
  onSurface: hexToRGBA(white as string, 1),
  white: hexToRGBA(white as string, 1),
  black: hexToRGBA(black as string, 1),
  disabled: hexToRGBA(blue[900] as string, 0.5),
  placeholder: hexToRGBA(white as string, 0.7),
  backdrop: hexToRGBA(black as string, 0.5),
  notification: hexToRGBA(black as string, 0.5),
  tooltip: hexToRGBA(orange[500] as string, 1),
};

export const INITIAL_STATE: Theme = {
  colors: colorsThemeState,
};
