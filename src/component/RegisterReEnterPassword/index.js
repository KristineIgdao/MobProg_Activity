// src/component/RegisterReEnterPassword/index.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const RegisterReEnterPassword = () => (
  <TextInput style={styles.input} placeholder="Re-Enter Password" secureTextEntry />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000000',
    marginVertical: 10,
  },
});

export default RegisterReEnterPassword;
