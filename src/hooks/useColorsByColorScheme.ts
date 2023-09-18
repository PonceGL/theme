import {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';

import {INITIAL_STATE} from '../context/initailStatte';
import {ColorsTheme} from '../interfaces/theme';
import {gray, white} from '../styles/colors';
import {hexToRGBA} from '../utils/hexToRGBA';

export function useColorsByColorScheme() {
  const isDarkMode = useColorScheme() === 'dark';

  const [colors, setColors] = useState<ColorsTheme>(INITIAL_STATE.colors);

  const colorsLightMode: ColorsTheme = {
    ...INITIAL_STATE.colors,
    text: hexToRGBA(gray[900], 1),
    background: hexToRGBA(white, 1),
  };

  const colorsDarkMode: ColorsTheme = {
    ...INITIAL_STATE.colors,
    text: hexToRGBA(white, 1),
    background: hexToRGBA(gray[900], 1),
  };

  useEffect(() => {
    setColors(isDarkMode ? colorsDarkMode : colorsLightMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  return {colorsByColorScheme: colors};
}
