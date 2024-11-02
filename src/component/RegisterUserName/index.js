import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const RegisterUserName = () => (
  <View style={styles.container}>
    <Text style={styles.title}>CREATE ACCOUNT</Text>
    <TextInput style={styles.input} placeholder="Username" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Center content horizontally
    width: '100%', // Make sure it takes full width
  },
  title: {
    fontSize: 20, // Adjust font size as needed
    fontWeight: 'bold', // Make the text bold
    marginBottom: 10, // Space between title and input
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000000',
    marginVertical: 10,
  },
});

export default RegisterUserName;
