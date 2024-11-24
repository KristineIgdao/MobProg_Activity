import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Avatar from '../component/Avatar';
import Email from '../component/Email';
import Password from '../component/Password';
import LogInButton from '../component/LogInButton';
import ForgetPasswordInLoginPage from '../component/ForgetPasswordInLoginPage';
import RegisterButton from '../component/RegisterButton';
import { useRouter } from 'expo-router';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Avatar />
      <Text style={styles.title}>Login to Kape</Text>
      <Text style={styles.subtitle}>Login to continue using the app</Text>
      <Email />
      <Password />
      <ForgetPasswordInLoginPage onPress={() => router.push('/ForgetPassword')} />
      <LogInButton onPress={() => router.replace('/dashboard')} />
      <View style={styles.socialContainer}>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="facebook" size={30} color="#3b5998" />
          <MaterialCommunityIcons name="google" size={30} color="#db4a39" />
          <MaterialCommunityIcons name="instagram" size={30} color="#C13584" />
        </View>
      </View>
      <RegisterButton onPress={() => router.push('/Register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#000000',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 20,
  },
  socialContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  orText: {
    color: '#888888',
    fontSize: 16,
    marginBottom: 25,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
});

export default Login;
