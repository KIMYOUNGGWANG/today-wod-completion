import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WriteHeader = () => {
  const navigation = useNavigation<NavigationProp>();
  const goToBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <Pressable style={[styles.buttons]} onPress={goToBack}>
          <Icon name="arrow-back" size={24} />
        </Pressable>
      </View>
      <View>
        <Text style={styles.text}>오늘 운동 일지</Text>
      </View>
      <View style={styles.iconButtonWrapper} />
    </View>
  );
};

export default WriteHeader;

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
