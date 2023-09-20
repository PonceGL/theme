import React, {useEffect, useState} from 'react';
// Components
import {SafeAreaView, SectionList, StyleSheet, Text, View} from 'react-native';
import {
  amber,
  blue,
  cyan,
  emerald,
  fuchsia,
  gray,
  green,
  indigo,
  lime,
  neutral,
  orange,
  pink,
  purple,
  red,
  rose,
  sky,
  slate,
  stone,
  teal,
  useTheme,
  violet,
  yellow,
  zinc,
} from '@poncegl/theme';

const colorsListInital = [
  {
    name: 'slate',
    value: slate,
  },
  {
    name: 'gray',
    value: gray,
  },
  {
    name: 'zinc',
    value: zinc,
  },
  {
    name: 'neutral',
    value: neutral,
  },
  {
    name: 'stone',
    value: stone,
  },
  {
    name: 'red',
    value: red,
  },
  {
    name: 'orange',
    value: orange,
  },
  {
    name: 'amber',
    value: amber,
  },
  {
    name: 'yellow',
    value: yellow,
  },
  {
    name: 'lime',
    value: lime,
  },
  {
    name: 'green',
    value: green,
  },
  {
    name: 'emerald',
    value: emerald,
  },
  {
    name: 'teal',
    value: teal,
  },
  {
    name: 'cyan',
    value: cyan,
  },
  {
    name: 'sky',
    value: sky,
  },
  {
    name: 'blue',
    value: blue,
  },
  {
    name: 'indigo',
    value: indigo,
  },
  {
    name: 'violet',
    value: violet,
  },
  {
    name: 'purple',
    value: purple,
  },
  {
    name: 'fuchsia',
    value: fuchsia,
  },
  {
    name: 'pink',
    value: pink,
  },
  {
    name: 'rose',
    value: rose,
  },
];

export default function Main(): JSX.Element {
  const {colors} = useTheme();
  const [colorsList, setColorsList] = useState<
    {name: string; data: [string, any][]}[]
  >([]);

  useEffect(() => {
    const list = colorsListInital.map(item => ({
      name: item.name,
      data: Object.entries(item.value),
    }));
    setColorsList(list);
  }, []);

  return (
    <SafeAreaView
      style={[
        styles.content,
        {
          backgroundColor: colors.background,
        },
      ]}>
      <SectionList
        sections={colorsList}
        keyExtractor={item => item[0] + item[1]}
        renderItem={({item}) => (
          <View
            style={[
              styles.content,
              styles.row,
              styles.box,
              {
                backgroundColor: item[1],
              },
            ]}>
            <Text
              style={[
                styles.text,
                {
                  color: colors.text,
                },
              ]}>
              {item[0]}: {item[1]}
            </Text>
          </View>
        )}
        renderSectionHeader={({section: {name}}) => (
          <View
            style={[
              styles.header,
              {
                backgroundColor: colors.background,
              },
            ]}>
            <Text
              style={[
                styles.text,
                {
                  color: colors.text,
                },
              ]}>
              {name}
            </Text>
          </View>
        )}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  row: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  box: {
    minHeight: 80,
    padding: 10,
  },
});
