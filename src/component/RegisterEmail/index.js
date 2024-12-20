import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const RegisterEmail = () => (
  <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000000',
    marginVertical: 10,
    marginBottom: 20,

  },
});

export default RegisterEmail;
