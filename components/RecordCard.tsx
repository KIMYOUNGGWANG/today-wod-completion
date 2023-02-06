import React from 'react';
import {Pressable, StyleSheet, TextInput} from 'react-native';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const RecordCard = ({item, addRecordHandler, removeRecordHandler}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wapper}>
        <TextInput placeholder="운동 입력" style={styles.input} />
        <Pressable style={styles.iconWrapper}>
          <Icon
            name="add-circle"
            size={24}
            color="green"
            onPress={addRecordHandler}
          />
          <Icon
            name="remove-circle"
            size={24}
            color="red"
            onPress={() => removeRecordHandler(item.id)}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default RecordCard;

const styles = StyleSheet.create({
  container: {flex: 1, marginBottom: 5},
  wapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 16,
    fontSize: 13,
  },
  iconWrapper: {
    flexDirection: 'row',
  },
});
