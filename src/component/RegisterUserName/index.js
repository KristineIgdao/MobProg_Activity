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
    alignItems: 'center', 
    width: '100%', 
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 10, 
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000000',
    marginVertical: 10,
    marginBottom: 20,
  },
});

export default RegisterUserName;
