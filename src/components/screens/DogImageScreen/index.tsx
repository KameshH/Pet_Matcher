import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';
import PrimaryButton from '../../PrimaryButton';

export default function DogImageScreen() {
  const [dogImage, setDogImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchImage = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogImage(res.data.message);
    } catch (e) {
      console.log(e);
      Alert.alert(
        'Error',
        'Failed to fetch dog image. Please try again later.',
      );
      setDogImage(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <View style={styles.container}>
      {dogImage && !loading && (
        <Image source={{ uri: dogImage }} style={styles.image} />
      )}
      {loading && (
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Fetch Another"
          onPress={fetchImage}
          disable={loading}
          isLoading={loading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#fff',
  },
  image: {
    width: '80%',
    height: '60%',
    resizeMode: 'cover',
    marginTop: 40,
    bottom: 80,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 70,
    alignItems: 'center',
  },
  loaderOverlay: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    ...StyleSheet.absoluteFillObject,
  },
});
