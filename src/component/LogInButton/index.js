import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LogInButton = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#800000',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    width: 130,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LogInButton;
