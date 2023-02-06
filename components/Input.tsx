import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface Props {
  label: string;
  value: string;
  onChangeValue: Dispatch<SetStateAction<string>>;
  multiline: boolean;
  placeholder: string;
}
const Input: React.FC<Props> = ({
  label,
  value,
  onChangeValue,
  multiline = false,
  placeholder,
}) => {
  return (
    <View style={styles.block}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.container, multiline && {height: 100}]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeValue}
          multiline={multiline}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  block: {flex: 1},
  container: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4d4d4d',
    height: 30,
    marginBottom: 8,
  },
  label: {
    marginBottom: 8,
    fontSize: 13,
    fontWeight: 700,
    color: '#1a1a1a',
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 13,
    paddingVertical: 0,
    color: '#263238',
    fontWeight: 'bold',
  },
});
