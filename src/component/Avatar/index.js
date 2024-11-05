import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = () => (
  <View style={styles.avatarContainer}>
    <Image source={require('../../assets/kapee.png')} style={styles.avatar} />
  </View>
);

const styles = StyleSheet.create({
  avatarContainer: {
    width: 100,  
    height: 100, 
    backgroundColor: '#EDE8DC',
    borderWidth: 2,
    borderColor: '#654520', 
    borderRadius: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 180,
    marginLeft: 180,
    marginBottom: 30,
    marginTop: 20,
  },
  avatar: {
    width: 100, 
    height: 100, 
    borderRadius: 5,
  },
});

export default Avatar;
