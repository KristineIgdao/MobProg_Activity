import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RegisterButtonSignUp = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Sign Up</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#800000',
    padding: 15,
    borderRadius: 25,
    width: 250,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RegisterButtonSignUp;
