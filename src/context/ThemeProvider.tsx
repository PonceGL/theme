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

export default function ThemeProvider({
  children,
  options,
}: ThemeConfig): JSX.Element {
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
        updateColors,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
