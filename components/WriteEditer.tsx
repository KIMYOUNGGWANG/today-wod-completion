import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import Input from './Input';
import PictureButton from './PictureButton';
import RecordList from './RecordList';
import WodType from './WodType';

const WriteEditer = () => {
  const [title, setTitle] = useState('');
  const [subTitme, setSubTitle] = useState('');
  const [record, setRecord] = useState('');
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
            placeholder={'제목을 입력해주세요!'}
          />
          <View style={[styles.container]}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {wodType.map((wod, idx) => {
                return (
                  <WodType
                    key={`${wod.title}-${idx}`}
                    wod={wod}
                    setWodType={setWodType}
                  />
                );
              })}
            </ScrollView>
          </View>
          <RecordList />
          <Input
            label="기록"
            value={record}
            onChangeValue={setRecord}
            placeholder={'기록을 적어주세요!'}
            multiline={false}
          />
          <Input
            label="설명"
            value={subTitme}
            onChangeValue={setSubTitle}
            multiline={true}
            placeholder={'운동에 대해 더 적을 내용이 있으면 여기에!'}
          />
        </View>
        <PictureButton />
        <Pressable
          style={({pressed}) => [
            styles.button,
            Platform.OS === 'ios' && {opacity: pressed ? 0.6 : 1},
          ]}>
          <Text style={styles.text}> 등록하기</Text>
        </Pressable>
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
  button: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#097483',
    backgroundColor: '#097483',
  },
  text: {
    color: '#eeeeee',
  },
});
