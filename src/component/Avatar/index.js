import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = () => (
  <View style={styles.avatarContainer}>
    <Image source={require('../../assets/kapee.png')} style={styles.avatar} />
  </View>
);

const styles = StyleSheet.create({
  avatarContainer: {
    width: 180,  
    height: 180, 
    backgroundColor: '#EDE8DC',
    borderWidth: 12,
    borderColor: '#654520', 
    borderRadius: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 180,
    marginLeft: 180,
    marginBottom: 30,
    marginTop: 20,
  },
  avatar: {
    width: 150, 
    height: 150, 
    borderRadius: 20,
  },
});

export default Avatar;
