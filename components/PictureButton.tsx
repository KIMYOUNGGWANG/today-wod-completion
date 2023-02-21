import React, {useCallback, useState} from 'react';
import {Alert, Image, Pressable, StyleSheet, Text} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

const PictureButton = () => {
  const [pictureInfo, setPictureIfno] = useState(null);

  const takePictureHandler = newPictureInfo => {
    setPictureIfno(newPictureInfo);
  };
  const uploadImage = useCallback(async () => {
    const res = await launchCamera({
      mediaType: 'photo',
      saveToPhotos: false,
      quality: 1,
      maxHeight: 900,
      maxWidth: 900,
      presentationStyle: 'fullScreen',
    });
    if (res.errorCode) {
      //fix : 카메라 모듈에서 에러발생시 처리 필요
      Alert.alert(res.errorCode);
    } else if (res && res?.assets && res?.assets.length) {
      takePictureHandler({
        name: res.assets[0].fileName!,
        type: res.assets[0].type!,
        uri: res.assets[0].uri!,
      });
    }
  }, [takePictureHandler]);

  const removeImage = useCallback(async () => {}, []);
  return (
    <Pressable onPress={pictureInfo ? removeImage : uploadImage}>
      {pictureInfo ? (
        <Image source={{uri: pictureInfo?.uri}} />
      ) : (
        <Text style={styles.text}>사진 촬영</Text>
      )}
    </Pressable>
  );
};

export default PictureButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dbdbdb',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  text: {
    fontSize: 16,
    fontStyle: 'normal',
    color: 'white',
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 6,
    height: 190,
  },
});
