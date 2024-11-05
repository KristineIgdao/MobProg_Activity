import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ForgetPasswordInLoginPage = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.forgotText}>Forgot password?</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  forgotText: {
    color: 'blue', 
    fontSize: 14,
    marginVertical: 10,
    marginLeft: 200,
    fontWeight: 'bold'
  },
});

export default ForgetPasswordInLoginPage;
