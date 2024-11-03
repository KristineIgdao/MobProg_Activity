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
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    textAlign: 'center', 
  },
  input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 25,
    width: '100%',
    borderColor: '#000000',
    fontWeight: 'bold',
  },
});

export default EmailForgetPassword;
