import React from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CalendarView = () => {
  return <Calendar style={styles.calendar} />;
};

export default CalendarView;

const styles = StyleSheet.create({
  calendar: {
    borderBottomColor: '#e0e0e0',
    borderWidth: 1,
  },
});
