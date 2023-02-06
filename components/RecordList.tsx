import React, {useRef, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import RecordCard from './RecordCard';

const RecordList = () => {
  const [recordList, setRecordList] = useState([{id: 1, description: ''}]);
  const numberRef = useRef(2);
  const addRecordHandler = () => {
    numberRef.current++;
    setRecordList(prev => {
      const newRecord = {id: numberRef.current, description: ''};
      return [...prev, newRecord];
    });
  };
  const removeRecordHandler = id => {
    if (recordList.length === 1) {
      return;
    }
    const newList = recordList.filter(record => record.id !== id);
    setRecordList(newList);
  };
  return (
    <View style={styles.block}>
      {recordList.map(record => (
        <RecordCard
          key={record.id}
          item={record}
          removeRecordHandler={removeRecordHandler}
          addRecordHandler={addRecordHandler}
        />
      ))}
    </View>
  );
};

export default RecordList;
const styles = StyleSheet.create({
  block: {flex: 1, marginTop: 8},
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});
