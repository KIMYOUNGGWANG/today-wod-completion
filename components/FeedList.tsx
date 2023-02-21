import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeedListItem from './FeedListItem';

const FeedList = ({logs}) => {
  return (
    <FlatList
      data={logs}
      renderItem={({item}) => <FeedListItem log={item} />}
      style={styles.block}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      keyExtractor={log => log.id}
    />
  );
};

export default FeedList;

const styles = StyleSheet.create({
  block: {flex: 1},
  seperator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});
