import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const RegisterText = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Don't have an account? </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: '#000', 
  },
  link: {
    color: 'blue', 
    fontWeight: 'bold',
  },
});

export default RegisterText;
