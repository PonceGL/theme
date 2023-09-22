
# @poncegl/theme

A simple React Native library, to keep your color palette organized.

## Demo

![demo-@poncegl-theme](https://github.com/PonceGL/theme/assets/29486321/e215390d-2108-4e4c-8153-2920084d2149)


## Installation

```bash
  npm i @poncegl/theme
```

```bash
  yarn add @poncegl/theme
```


    
## Usage/Examples

Wrap your application with the `ThemeProvider` component.
Enable DarkMode Android and iOS support.


```javascript
import {ThemeProvider} from '@poncegl/theme';

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
```


## Hook

Access the color palette from any component with the custom hook `useTheme`.

```javascript
import {useTheme} from '@poncegl/theme';

export default function Main(): JSX.Element {
  const {colors} = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.content,
        {
          backgroundColor: colors.background,
        },
      ]}>
      <View style={styles.content}>
        <Text
          style={{
            color: colors.text,
          }}>
          Main
        </Text>
      </View>
    </SafeAreaView>
  );
}
```
## Convert hexadecimal to RGBA colors

The function 'hexToRGBA' receives two parameters, a hexadecimal color and a number representing the opacity you want it to have.

The function returns the same color converted to RGBA with the indicated opacity.

```javascript
import {hexToRGBA} from '@poncegl/theme';
```
## Custom color palette

The `ThemeProvider` component receives the `options` prop is an object of type `OptionsTheme`.


```javascript
import {hexToRGBA, OptionsTheme, ThemeProvider} from '@poncegl/theme';

import Main from './src/content/main';

const myCustomTheme: OptionsTheme = {
  colors: {
    primary: hexToRGBA('#1e40af', 1),
    accent: hexToRGBA('#1e3a8a', 1),
    text: hexToRGBA('#ffffff', 1),
    background: hexToRGBA('#9ca3af', 1),
    surface: hexToRGBA('#60a5fa', 1),
    info: hexToRGBA('#1d4ed8', 1),
    error: hexToRGBA('#dc2626', 1),
    success: hexToRGBA('#4ade80', 1),
    onSurface: hexToRGBA('#ffffff', 1),
    white: hexToRGBA('#ffffff', 1),
    black: hexToRGBA('#000000', 1),
    disabled: hexToRGBA('#1e3a8a', 0.5),
    placeholder: hexToRGBA('#ffffff', 0.7),
    backdrop: hexToRGBA('#000000', 0.5),
    notification: hexToRGBA('#000000', 0.5),
    tooltip: hexToRGBA('#f97316', 1),
  },v
};

export default function App(): JSX.Element {
  return (
    <ThemeProvider options={myCustomTheme}>
      <Main />
    </ThemeProvider>
  );
}
```

## ColorsTheme

**property**: the name inside the object `colors`
**initial value**: is the initial color of the available [colors](docs/colors.md)
**rgba**: is the color created via `hexToRGBA`
**type**: is the data type, `ColorValue` comes from [React Native](https://github.com/facebook/react-native/blob/2fb4547aa086f69bdf717418ef214e5544e60189/packages/react-native/Libraries/StyleSheet/StyleSheet.js#L39)

| property     | initial value | rgba                   | sample                                                       | type       |
|--------------|--------------|------------------------|--------------------------------------------------------------|------------|
| primary      | `blue[800]`    | rgba(30, 64, 175, 1)   | ![#1e40af](https://via.placeholder.com/10/1e40af?text=+)     | ColorValue |
| accent       | `blue[900]`    | rgba(30, 58, 138, 1)   | ![#1e3a8a](https://via.placeholder.com/10/1e3a8a?text=+)     | ColorValue |
| text         | `white`        | rgba(255, 255, 255, 1) | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+)     | ColorValue |
| background   | `gray[400]`    | rgba(156, 163, 175, 1) | ![#9ca3af](https://via.placeholder.com/10/9ca3af?text=+)     | ColorValue |
| surface      | `blue[400]`    | rgba(96, 165, 250, 1)  | ![#60a5fa](https://via.placeholder.com/10/60a5fa?text=+)     | ColorValue |
| info         | `blue[700]`    | rgba(29, 78, 216, 1)   | ![#1d4ed8](https://via.placeholder.com/10/1d4ed8?text=+)     | ColorValue |
| error        | `red[600]`     | rgba(220, 38, 38, 1)   | ![#dc2626](https://via.placeholder.com/10/dc2626?text=+)     | ColorValue |
| success      | `green[400]`   | rgba(74, 222, 128, 1)  | ![#4ade80](https://via.placeholder.com/10/4ade80?text=+)     | ColorValue |
| onSurface    | `white`        | rgba(255, 255, 255, 1) | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+)     | ColorValue |
| white        | `white`        | rgba(255, 255, 255, 1) | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+)     | ColorValue |
| black        | `black`        | rgba(0, 0, 0, 1)       | ![#000000](https://via.placeholder.com/10/000000?text=+)     | ColorValue |
| disabled     | `blue[900]`    | rgba(30, 58, 138, 0.5) | ![#1e3b8a80](https://via.placeholder.com/10/1e3b8a80?text=+) | ColorValue |
| placeholder  | `white`        | rgba(255, 255, 255, 1) | ![#ffffffb3](https://via.placeholder.com/10/ffffffb3?text=+) | ColorValue |
| backdrop     | `black`        | rgba(0, 0, 0, 1)       | ![#00000080](https://via.placeholder.com/10/00000080?text=+) | ColorValue |
| notification | `black`        | rgba(0, 0, 0, 1)       | ![#00000080](https://via.placeholder.com/10/00000080?text=+) | ColorValue |
| tooltip      | `orange[500]`  | rgba(249, 115, 22, 1)  | ![#f97316](https://via.placeholder.com/10/f97316?text=+)     | ColorValue |


## Colors

[More colors available](docs/colors.md)

```javascript
import {blue, green, pink} from '@poncegl/theme';
```
## Authors

- [PonceGL](https://github.com/PonceGL)


