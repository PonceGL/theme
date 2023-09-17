import {useContext} from 'react';

import {ThemeContext} from '../context/ThemeContext';
import {Theme} from '../interfaces/theme';

export function useTheme(): Theme {
  const {theme} = useContext(ThemeContext);

  return {colors: theme.colors};
}
