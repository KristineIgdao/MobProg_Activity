import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Email = () => (
  <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

export default Email;
