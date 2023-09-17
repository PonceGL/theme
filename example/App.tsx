import React from 'react';
import {hexToRGBA, OptionsTheme} from '@poncegl/theme';

import ThemeProvider from '../src/context/ThemeProvider';

import Main from './src/content/main';

const myTheme: OptionsTheme = {
  colors: {
    success: hexToRGBA('#16FF00', 1),
  },
};

export default function App(): JSX.Element {
  return (
    <ThemeProvider options={myTheme}>
      <Main />
    </ThemeProvider>
  );
}
