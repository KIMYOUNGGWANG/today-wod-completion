import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Picker = () => {
  return (
    <Pressable style={styles.block}>
      <View style={styles.wrapper}>
        <Text style={styles.selectValue} />
      </View>
    </Pressable>
  );
};

export default Picker;

const styles = StyleSheet.create({
  block: {
    width: 100,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
  },

  wrapper: {
    width: 90,
    padding: 12,
  },
  selectValue: {
    fontSize: 15,
  },
});
