import React from 'react';
// Components
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {hexToRGBA, Opacity} from '@poncegl/theme';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.content}>
        <Text style={styles.text}>App</Text>
        <Pressable
          onPress={() => {
            console.log('====================================');
            console.log(hexToRGBA('#4E4FEB', Opacity['CERO.TWO']));
            console.log('====================================');
          }}
          style={styles.button}>
          <Text style={styles.text}>hexToRGBA</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 5,
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#525FE1',
    textAlign: 'center',
  },
  button: {
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F86F03',
    borderRadius: 10,
  },
});
