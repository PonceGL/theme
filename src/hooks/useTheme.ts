import {useContext} from 'react';

import {ThemeContext} from '../context/ThemeContext';
import {Theme} from '../interfaces/theme';

/**
 * The `useTheme` function returns the colors from the current theme using the `useContext` hook.
 * @returns an object that contains the colors from the theme.
 */
export function useTheme(): Theme {
  const {theme} = useContext(ThemeContext);

  return {colors: theme.colors};
}
