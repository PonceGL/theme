import type {PropsWithChildren} from 'react';
import React, {useCallback, useEffect, useReducer} from 'react';

import {useColorsByColorScheme} from '../hooks/useColorsByColorScheme';
import {ReducerActionType} from '../interfaces/reducer';
import {OptionsTheme} from '../interfaces/theme';

import {INITIAL_STATE} from './initailStatte';
// Components
import {ThemeContext} from './ThemeContext';
import {themeReducer} from './themeReducer';

export interface ThemeConfig extends PropsWithChildren {
  options?: OptionsTheme;
}

/**
 * The `ThemeProvider` function is a React component that provides a theme context to its children, allowing them to access and use the current theme.
 * Enable DarkMode support and customize the color palette.
 * @param {ThemeConfig}  - The `ThemeProvider` function takes in a single parameter, which is an object
 * with the following properties:
 * @returns a JSX element.
 */
export function ThemeProvider({children, options}: ThemeConfig): JSX.Element {
  const {colorsByColorScheme} = useColorsByColorScheme();
  const [stateTheme, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  const updateColors = useCallback(() => {
    dispatch({
      type: ReducerActionType.UPDATE_COLORS,
      payload: {
        colors: {
          ...colorsByColorScheme,
          ...options?.colors,
        },
      },
    });
  }, [colorsByColorScheme, options?.colors]);

  useEffect(() => {
    updateColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorsByColorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: stateTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
