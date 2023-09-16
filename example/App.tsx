import React from 'react';
// Components
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  hexToRGBA,
  lightBlue800,
  lightGreen700,
  Opacity,
  useTheme,
} from '@poncegl/theme';

import ThemeProvider from '../src/context/ThemeProvider';
import {OptionsTheme} from '../src/interfaces/theme';

import Main from './src/content/main';

const myTheme: OptionsTheme = {
  colors: {
    background: hexToRGBA('#ff00ff', Opacity.ONE),
  },
};

export default function App(): JSX.Element {
  const {colors} = useTheme();

  return (
    <ThemeProvider options={myTheme}>
      <SafeAreaView
        style={[
          styles.content,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <Main />
        <View
          style={[
            styles.content,
            {
              padding: 10 + 2,
            },
          ]}>
          <Text style={[styles.text, {color: colors.text}]}>App</Text>
          <Pressable
            onPress={() =>
              console.log(hexToRGBA(lightGreen700, Opacity['CERO.TWO']))
            }
            style={styles.button}>
            <Text style={[styles.text, {color: colors.text}]}>hexToRGBA</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: lightBlue800,
    borderRadius: 10,
  },
});
