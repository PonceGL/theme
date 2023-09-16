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

const myTheme = {
  colors: {
    background: hexToRGBA('#102541', Opacity.ONE),
  },
};

export default function App(): JSX.Element {
  const {colorsTheme} = useTheme(myTheme);

  return (
    <SafeAreaView
      style={[
        styles.content,
        {
          backgroundColor: colorsTheme.background,
        },
      ]}>
      <View
        style={[
          styles.content,
          {
            padding: 10,
          },
        ]}>
        <Text style={[styles.text, {color: colorsTheme.text}]}>App</Text>
        <Pressable
          onPress={() =>
            console.log(hexToRGBA(lightGreen700, Opacity['CERO.TWO']))
          }
          style={styles.button}>
          <Text style={[styles.text, {color: colorsTheme.text}]}>
            hexToRGBA
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
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
