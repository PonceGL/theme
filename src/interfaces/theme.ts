import {ColorValue} from 'react-native';

export interface ColorsTheme {
  primary: ColorValue;
  accent: ColorValue;
  text: ColorValue;
  background: ColorValue;
  surface: ColorValue;
  info: ColorValue;
  error: ColorValue;
  success: ColorValue;
  onSurface: ColorValue;
  white: ColorValue;
  black: ColorValue;
  disabled: ColorValue;
  placeholder: ColorValue;
  backdrop: ColorValue;
  notification: ColorValue;
  tooltip: ColorValue;
}

export interface Theme {
  colors: ColorsTheme;
}

export interface OptionsTheme {
  colors?: Partial<ColorsTheme>;
}
