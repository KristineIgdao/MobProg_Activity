import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Avatar from '../component/Avatar';
import Email from '../component/Email';
import Password from '../component/Password';
import LogInButton from '../component/LogInButton';
import RegisterButton from '../component/RegisterButton';
import ForgetPasswordInLoginPage from '../component/ForgetPasswordInLoginPage'; // Update the import
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Avatar />
      <Text style={styles.title}>Log in to Kape</Text>
      <Email />
      <Password />
      <LogInButton />
      
      <View style={styles.buttonContainer}>
        <RegisterButton onPress={() => navigation.navigate('Register')} />
        <ForgetPasswordInLoginPage
          onPress={() => navigation.navigate('ForgetPassword')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE8DC',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 16,
    color: '#000000',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Login;
