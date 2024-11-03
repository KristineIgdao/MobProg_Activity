import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ForgetPasswordInLoginPage = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.questionText}>Did you forget password?{" "}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.recoveryText}>Recovery</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="facebook" size={25} color="#3b5998" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="google" size={25} color="#db4a39" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="twitter" size={25} color="#1DA1F2" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  questionText: {
    fontSize: 16,
  },
  recoveryText: {
    color: 'blue', 
    textDecorationLine: 'underline', 
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default ForgetPasswordInLoginPage;
