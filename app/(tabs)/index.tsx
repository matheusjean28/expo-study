import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Imageviewer from '../components/ImageViewer';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const pickerImageAsync = async ()=> {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality:1
    });

    if(!result.canceled){
      console.log(result);
      setSelectedImage(result.assets[0].uri)
    }
      else (alert('you did not select any image! :<'))

  }

  return (
    <View style={styles.container} >

      <View style={styles.imageContainer}>
        <Imageviewer imgSource={PlaceholderImage}  selectedImage={selectedImage}/>
        <View style={styles.footerContainer}>
          <Button theme='primary' label='Choose a photo' onPress={pickerImageAsync} />
          <Button label='Use this photo' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  }

});
