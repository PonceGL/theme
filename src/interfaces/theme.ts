import {ColorValue} from 'react-native';

/* The `export interface ColorsTheme` is defining an interface called `ColorsTheme`. This interface
specifies the different colors used in a theme. Each color is represented by a property with a
specific name and type (`ColorValue`). These properties include `primary`, `accent`, `text`,
`background`, `surface`, `info`, `error`, `success`, `onSurface`, `white`, `black`, `disabled`,
`placeholder`, `backdrop`, `notification`, and `tooltip`. */
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

/* The `export interface OptionsTheme` is defining an interface called `OptionsTheme`. This interface
has an optional property called `colors` which is of type `Partial<ColorsTheme>`. */
export interface OptionsTheme {
  colors?: Partial<ColorsTheme>;
}
