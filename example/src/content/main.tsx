import React from 'react';
// Components
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@poncegl/theme';

export default function Main(): JSX.Element {
  const {colors} = useTheme();
  return (
    <View style={styles.content}>
      <Text
        style={{
          color: colors.text,
        }}>
        Main
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
