import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function PetForm({ setFormData, reset }: any) {
  const [fields, setFields] = useState({ name: '', breed: '', age: '' });

  useEffect(() => {
    setFormData(fields);
  }, [fields, setFormData]);

  useEffect(() => {
    if (reset) {
      setFields({ name: '', breed: '', age: '' });
    }
  }, [reset]);

  return (
    <View>
      <TextInput
        placeholder="Pet Name"
        style={styles.input}
        value={fields.name}
        onChangeText={text => setFields(f => ({ ...f, name: text }))}
      />
      <TextInput
        placeholder="Breed"
        style={styles.input}
        value={fields.breed}
        onChangeText={text => setFields(f => ({ ...f, breed: text }))}
      />
      <TextInput
        placeholder="Age"
        style={styles.input}
        value={fields.age}
        onChangeText={text => setFields(f => ({ ...f, age: text }))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#ccc',
  },
});
