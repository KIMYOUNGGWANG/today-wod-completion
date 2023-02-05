import React from 'react';
import {StyleSheet, View} from 'react-native';
import CalendarView from '../components/CalendarView';
import FloatingWriteButton from '../components/FloatingWriteButton';

const CalendarScreen = () => {
  return (
    <View style={styles.block}>
      <CalendarView />
      <FloatingWriteButton />
    </View>
  );
};

export default CalendarScreen;
const styles = StyleSheet.create({
  block: {flex: 1},
});
