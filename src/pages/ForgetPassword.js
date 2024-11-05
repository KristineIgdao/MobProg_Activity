import React from 'react';
import { View, StyleSheet } from 'react-native';
import EmailForgetPassword from '../component/EmailForgetPassword';
import ForgetPasswordSendButton from '../component/ForgetPasswordSendButton';

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <EmailForgetPassword />
      <ForgetPasswordSendButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF', 
  },
});

export default ForgetPassword;
