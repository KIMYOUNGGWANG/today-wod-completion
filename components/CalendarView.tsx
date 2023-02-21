import {format} from 'date-fns';
import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import LogContext from '../context/LogContext';
import FeedList from './FeedList';

const CalendarView = ({markedDates, selectedDate, onSelectedDate}) => {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };
  return (
    <View>
      <Calendar
        style={styles.calendar}
        markedDates={markedSelectedDate}
        selectedDate={selectedDate}
        onDayPress={day => onSelectedDate(day.dateString)}
        theme={{
          selectedDayBackgroundColor: '#009688',
          arrowColor: '#009688',
          dotColor: '#009688',
          todayTextColor: '#009688',
        }}
      />
      <FeedList />
    </View>
  );
};

export default CalendarView;

const styles = StyleSheet.create({
  calendar: {
    borderBottomColor: '#e0e0e0',
    borderWidth: 1,
  },
});
