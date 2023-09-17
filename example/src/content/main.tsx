import React from 'react';
// Components
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {hexToRGBA, lightBlue800, useTheme} from '@poncegl/theme';

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
      <View
        style={[
          styles.content,
          {
            padding: 10 + 2,
          },
        ]}>
        <Text style={[styles.text, {color: colors.text}]}>App</Text>
        <Pressable
          onPress={() => console.log(hexToRGBA('#ff00ff', 1))}
          style={styles.button}>
          <Text style={[styles.text, {color: colors.text}]}>hexToRGBA</Text>
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
