import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const WodType = ({wod, setWodType}) => {
  const onPress = wod => {
    setWodType(prev => {
      const result = prev.map(el => {
        return el.title === wod.title ? {...el, selected: !el.selected} : el;
      });
      console.log(result);
      return result;
    });
  };
  return (
    <Pressable style={styles.container} onPress={() => onPress(wod)}>
      <Text>{wod.title}</Text>
    </Pressable>
  );
};

export default WodType;

const styles = StyleSheet.create({
  container: {
    width: 100,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    borderRadius: 16,
    marginRight: 8,
  },
});
