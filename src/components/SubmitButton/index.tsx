import React from 'react';
import { Button } from 'react-native';
import axios from 'axios';

export default function SubmitButton({
  image,
  formData,
  setLoading,
  setError,
  onSuccess,
}: any) {
  const submit = async () => {
    try {
      setLoading(true);
      await axios.post('https://reqres.in/api/users', {
        ...formData,
        image,
      });
      setError(null);
      onSuccess();
    } catch (err) {
      setError('Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return <Button title="Submit" onPress={submit} />;
}
