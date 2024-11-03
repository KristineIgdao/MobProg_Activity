import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ForgetPasswordSendButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Verify</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#800000',
    padding: 15,
    borderRadius: 25,
    width: 120,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ForgetPasswordSendButton;
