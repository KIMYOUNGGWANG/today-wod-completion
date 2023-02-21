import {useNavigation} from '@react-navigation/native';
import {format} from 'date-fns';
import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CalendarView from '../components/CalendarView';
import FeedList from '../components/FeedList';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../context/LogContext';

const CalendarScreen = () => {
  const {logs, selectedDate, setSelectedDate} = useContext(LogContext);
  const filterdLogs = logs?.filter(log => log.date === selectedDate);
  const markedDates = logs.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});

  return (
    <View style={styles.block}>
      <CalendarView
        markedDates={markedDates}
        selectedDate={selectedDate}
        onSelectedDate={setSelectedDate}
      />
      <FeedList logs={filterdLogs} />
      <FloatingWriteButton />
    </View>
  );
};

export default CalendarScreen;
const styles = StyleSheet.create({
  block: {flex: 1, flexDirection: 'column'},
});
