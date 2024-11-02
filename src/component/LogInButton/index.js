import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LogInButton = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>LOGIN</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#654520',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
    width: 250,
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LogInButton;
