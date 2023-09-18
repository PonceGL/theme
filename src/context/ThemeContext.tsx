import {createContext} from 'react';

import {SatateThemeContext} from '../interfaces/reducer';

import {INITIAL_STATE} from './initailStatte';

export const ThemeContext = createContext<SatateThemeContext>({
  theme: INITIAL_STATE,
});
