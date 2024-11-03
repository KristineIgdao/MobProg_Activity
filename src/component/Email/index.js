import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Email = () => (
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
    fontWeight: 'bold',
    
  },
});

export default Email;
