import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {WOD_TYPE} from '../constants/FeedData';
import Input from './Input';
import Picker from './Picker';
import Selector from './Selector';
import WodType from './WodType';

const WriteEditer = () => {
  const [title, setTitle] = useState('');
  const [subTitme, setSubTitle] = useState('');
  const [wodType, setWodType] = useState([
    {title: 'EMOM', selected: false},
    {title: 'AMRAP', selected: false},
    {title: 'Full-Time', selected: false},
    {title: 'team-WOD', selected: false},
  ]);
  return (
    <View style={styles.block}>
      <ScrollView>
        {/* <Selector /> */}
        <View>
          <Input
            label="제목"
            value={title}
            onChangeValue={setTitle}
            multiline={false}
          />
          <View style={[styles.container]}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {wodType.map(wod => {
                return <WodType wod={wod} setWodType={setWodType} />;
              })}
            </ScrollView>
          </View>
          <Input
            label="설명"
            value={subTitme}
            onChangeValue={setSubTitle}
            multiline={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default WriteEditer;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  container: {
    flex: 1,
  },
});
