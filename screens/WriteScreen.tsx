import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteEditer from '../components/WriteEditer';
import WriteHeader from '../components/WriteHeader';

const WriteScreen = () => {
  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader />
        <WriteEditer />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default WriteScreen;
const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoidingView: {
    flex: 1,
  },
});
