import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RegisterButtonSignUp = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>

    <Text style={styles.orText}>Or continue with</Text>

    <View style={styles.iconContainer}>
      <TouchableOpacity>
        <MaterialCommunityIcons name="facebook" size={25} color="#3b5998" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="google" size={25} color="#db4a39" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="instagram" size={25} color="#C13584" style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#800000',
    padding: 15,
    borderRadius: 25,
    width: 130,
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    marginBottom: 25,
    fontSize: 16,
    color: '#000', 
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default RegisterButtonSignUp;
