import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ForgetPasswordInLoginPage = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>Forget Password?</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'blue', // Set the text color to blue
    textDecorationLine: 'underline', // Add underline
    fontWeight: 'bold', // Optional: Make the text bold
    marginVertical: 10, // Adjust margin as needed
  },
});

export default ForgetPasswordInLoginPage;
