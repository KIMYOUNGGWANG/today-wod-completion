import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import LogContext from '../context/LogContext';
import Input from './Input';
import PictureButton from './PictureButton';
import RecordList from './RecordList';
import WodType from './WodType';

const WriteEditer = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {log} = route.params;
  const {onCreate, selectedDate, onModify} = useContext(LogContext);
  const [title, setTitle] = useState(route?.params?.log?.title ?? '');
  const [subTitle, setSubTitle] = useState(route?.params?.log.subTitle ?? '');
  const [wodType, setWodType] = useState([
    {title: 'EMOM', selected: false},
    {title: 'AMRAP', selected: false},
    {title: 'Full-Time', selected: false},
    {title: 'team-WOD', selected: false},
  ]);
  const [wodLevel, setWodLevel] = useState([
    {title: 'Rxd', selected: false},
    {title: 'A', selected: false},
    {title: 'B', selected: false},
    {title: 'C', selected: false},
  ]);
  const [recordList, setRecordList] = useState([{id: 1, description: ''}]);

  const numberRef = useRef(2);
  const addRecordHandler = () => {
    numberRef.current++;
    setRecordList(prev => {
      const newRecord = {id: numberRef.current, description: ''};
      return [...prev, newRecord];
    });
  };
  const removeRecordHandler = id => {
    if (recordList.length === 1) {
      return;
    }
    const newList = recordList.filter(record => record.id !== id);
    setRecordList(newList);
  };
  const createRecordData = () => {
    const recordData = {
      title,
      body: subTitle,
      wodType: wodType.filter(el => el.selected === true),
      wodLevel: wodLevel.filter(el => el.selected === true),
      date: selectedDate,
    };
    if (log) {
      onModify({
        id: log.id,
        date: selectedDate,
        body: subTitle,
        title: title,
        wodType: wodType.filter(el => el.selected === true),
        wodLevel: wodLevel.filter(el => el.selected === true),
      });
    } else {
      onCreate(recordData);
    }
    navigation.pop();

    // goToCalendarScreen();
  };
  const goToCalendarScreen = () => {
    navigation.navigate('Calendar');
  };

  useEffect(() => {
    if (route?.params?.log) {
      setWodType(prev => {
        const result = prev.map(wod =>
          route?.params?.log?.wodType.some(i => i.title === wod.title) === true
            ? {...wod, selected: true}
            : {...wod},
        );
        return result;
      });
      setWodLevel(prev => {
        const result = prev.map(wod =>
          route?.params?.log?.wodLevel.some(i => i.title === wod.title) === true
            ? {...wod, selected: true}
            : {...wod},
        );
        return result;
      });
    }
  }, []);

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
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {wodLevel.map((wod, idx) => {
                return (
                  <WodType
                    key={`${wod.title}-${idx}`}
                    wod={wod}
                    setWodType={setWodLevel}
                  />
                );
              })}
            </ScrollView>
          </View>
          <RecordList
            recordList={recordList}
            addRecordHandler={addRecordHandler}
            removeRecordHandler={removeRecordHandler}
          />
          <Input
            label="설명"
            value={subTitle}
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
          ]}
          onPress={createRecordData}>
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
    marginBottom: 8,
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
