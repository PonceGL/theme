
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


## Custom color palette

The `ThemeProvider` component receives the `options` prop is an object of type `OptionsTheme`.


```javascript
import {hexToRGBA, OptionsTheme, ThemeProvider} from '@poncegl/theme';

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
## Colors

[More colors available](docs/colors.md)

```javascript
import {blue, green, pink} from '@poncegl/theme';
```
## Authors

- [PonceGL](https://github.com/PonceGL)


