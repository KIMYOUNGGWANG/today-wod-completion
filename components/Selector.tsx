import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {WOD_TYPE} from '../constants/FeedData';
const Selector = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>제목</Text>
      <SelectDropdown
        data={WOD_TYPE}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={'Select country'}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        // renderDropdownIcon={isOpened => {
        //   return (
        //     <FontAwesome
        //       name={isOpened ? 'chevron-up' : 'chevron-down'}
        //       color={'#444'}
        //       size={18}
        //     />
        //   );
        // }}
        onChangeSearchInputText={() => {}}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
        selectedRowStyle={styles.dropdown1SelectedRowStyle}
        search
        searchInputStyle={styles.dropdown1searchInputStyleStyle}
        searchPlaceHolder={'Search here'}
        searchPlaceHolderColor={'darkgrey'}
        // renderSearchInputLeftIcon={() => {
        // return <FontAwesome name={'search'} color={'#444'} size={18} />;
      />
    </View>
  );
};

export default Selector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {},
  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1SelectedRowStyle: {backgroundColor: 'rgba(0,0,0,0.1)'},
  dropdown1searchInputStyleStyle: {
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
});
