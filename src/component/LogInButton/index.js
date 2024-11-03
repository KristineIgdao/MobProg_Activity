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
    marginTop: 10,
    width: 130,
    
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LogInButton;
