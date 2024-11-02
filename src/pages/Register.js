import React from 'react';
import { View, StyleSheet } from 'react-native';
import RegisterUserName from '../component/RegisterUserName';
import RegisterEmail from '../component/RegisterEmail';
import RegisterPassword from '../component/RegisterPassword';
import RegisterReEnterPassword from '../component/RegisterReEnterPassword';
import RegisterButtonSignUp from '../component/RegisterButtonSignUp';

const Register = () => {
  return (
    <View style={styles.container}>
      <RegisterUserName />
      <RegisterEmail />
      <RegisterPassword />
      <RegisterReEnterPassword />
      <RegisterButtonSignUp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EDE8DC', // Adjust background color as needed
  },
});

export default Register;
