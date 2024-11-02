import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const EmailForgetPassword = () => (
  <View style={styles.inputContainer}>
    <Text style={styles.title}>Enter email address</Text>
    <TextInput
      placeholder="Enter your email"
      style={styles.input}
      keyboardType="email-address"
      autoCapitalize="none"
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  title: {
    fontSize: 16, // Adjust font size as needed
    fontWeight: 'bold', // Make the text bold
    marginBottom: 5, // Space between title and input
    textAlign: 'center', // Center the text
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    borderColor: '#000000',
    fontWeight: 'bold',
  },
});

export default EmailForgetPassword;
