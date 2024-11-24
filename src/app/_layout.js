import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Login', 
          headerStyle: { backgroundColor: '#4B2E2A' }, 
          headerTintColor: '#FFFFFF', 
        }} 
      />
      <Stack.Screen 
        name="Register" 
        options={{ 
          title: 'Register', 
          headerStyle: { backgroundColor: '#4B2E2A' }, 
          headerTintColor: '#FFFFFF', 
        }} 
      />
      <Stack.Screen 
        name="ForgetPassword" 
        options={{ 
          title: 'Forgot Password', 
          headerStyle: { backgroundColor: '#4B2E2A' }, 
          headerTintColor: '#FFFFFF', 
        }} 
      />
      <Stack.Screen 
        name="dashboard" 
        options={{ 
          title: 'Dashboard', 
          headerStyle: { backgroundColor: '#4B2E2A' }, 
          headerTintColor: '#FFFFFF', 
        }} 
      />
    </Stack>
  );
};

export default RootLayout;
