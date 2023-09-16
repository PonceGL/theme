import {createContext} from 'react';

import {colorsThemeState} from './initailStatte';
import {Theme} from '../interfaces/theme';

export const ThemeContext = createContext<Theme>({
  colors: colorsThemeState,
});
