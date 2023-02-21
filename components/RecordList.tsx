import React, {useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import RecordCard from './RecordCard';

const RecordList = ({recordList, removeRecordHandler, addRecordHandler}) => {
  return (
    <View style={styles.block}>
      <View>
        <Text style={styles.label}>기록</Text>
        {recordList.map(record => (
          <RecordCard
            key={record.id}
            item={record}
            removeRecordHandler={removeRecordHandler}
            addRecordHandler={addRecordHandler}
          />
        ))}
      </View>
    </View>
  );
};

export default RecordList;
const styles = StyleSheet.create({
  block: {flex: 1, marginTop: 8, marginBottom: 8},
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
  label: {
    marginBottom: 8,
    fontSize: 13,
    fontWeight: 700,
    color: '#1a1a1a',
  },
});
