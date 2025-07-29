import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import PrimaryButton from '../PrimaryButton';

export default function ImagePicker({ onImagePicked, image }: any) {
  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response: any) => {
      if (response.assets?.length) {
        onImagePicked(response.assets[0].uri);
      }
    });
  };

  const takePhoto = () => {
    launchCamera({ mediaType: 'photo' }, (response: any) => {
      if (response.assets?.length) {
        onImagePicked(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={{ alignItems: 'center', marginVertical: 20 }}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <PrimaryButton
        title="Upload Image"
        onPress={pickImage}
        style={{ marginBottom: 10 }}
      />
      <PrimaryButton title="Take Photo" onPress={takePhoto} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: '100%', height: 200, marginVertical: 10 },
});
