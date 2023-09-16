import type {PropsWithChildren} from 'react';
import React, {useRef} from 'react';

import {OptionsTheme, Theme} from '../interfaces/theme';

import {colorsThemeState} from './initailStatte';
// Components
import {ThemeContext} from './ThemeContext';

export interface ThemeConfig extends PropsWithChildren {
  options?: OptionsTheme;
}

export default function ThemeProvider({
  children,
  options,
}: ThemeConfig): JSX.Element {
  const theme = useRef<Theme>({
    colors: colorsThemeState,
  });

  if (options?.colors) {
    theme.current = {
      colors: {
        ...colorsThemeState,
        ...options?.colors,
      },
    };
  }

  return (
    <ThemeContext.Provider value={theme.current}>
      {children}
    </ThemeContext.Provider>
  );
}
