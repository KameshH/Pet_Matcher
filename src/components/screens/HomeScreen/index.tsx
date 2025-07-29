import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import ImagePicker from '../../ImagePicker';
import PetForm from '../../PetForm';
import PrimaryButton from '../../PrimaryButton';
import Toast from 'react-native-toast-message';
import axios from 'axios';

export default function HomeScreen({ navigation }: any) {
  const [image, setImage] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resetForm, setResetForm] = useState(false);

  const handleRemoveImage = () => setImage(null);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post('https://webhook.site/api/users', {
        ...formData,
        image,
      });
      setError(null);
      Toast.show({
        type: 'success',
        text1: 'Pet submitted successfully!',
      });
      setFormData({});
      setImage(null);
      setResetForm(true); // trigger reset
      setTimeout(() => setResetForm(false), 100); // allow PetForm to reset
    } catch (err) {
      setError('Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.card}>
          <ImagePicker onImagePicked={setImage} image={image} />
          {image && (
            <PrimaryButton
              title="Remove Image"
              onPress={handleRemoveImage}
              style={styles.removeBtn}
            />
          )}
          <PetForm setFormData={setFormData} reset={resetForm} />
          {error && <Text style={styles.error}>{error}</Text>}
          <PrimaryButton
            title={loading ? 'Submitting...' : 'Submit'}
            onPress={handleSubmit}
            disable={loading || !image || !formData.name}
            isLoading={loading}
            style={styles.submitBtn}
          />
        </View>
        <Toast position="top" />
        <PrimaryButton
          title="View Random Dog"
          onPress={() => navigation.navigate('DogImage')}
          style={styles.dogBtn}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    margin: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  error: {
    color: 'red',
    marginVertical: 8,
    textAlign: 'center',
  },
  removeBtn: {
    backgroundColor: '#FF3B30',
    marginBottom: 10,
  },
  submitBtn: {
    marginTop: 10,
    marginBottom: 10,
  },
  dogBtn: {
    backgroundColor: '#007AFF',
    width: '90%',
    alignSelf: 'center',
  },
});
