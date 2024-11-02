import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = () => (
  <View style={styles.avatarContainer}>
    <Image source={require('../../assets/kapee.png')} style={styles.avatar} />
  </View>
);

const styles = StyleSheet.create({
  avatarContainer: {
    width: 250,  // Adjusted width
    height: 250, // Adjusted height
    backgroundColor: '#EDE8DC',
    borderWidth: 12,
    borderColor: '#F1F0E8', 
    borderRadius: 150, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 180,
    marginLeft: 180,
    marginBottom: 30,
    marginTop: 20,
  },
  avatar: {
    width: 210, // Adjusted width
    height: 210, // Adjusted height
    borderRadius: 20, // Make it circular
  },
});

export default Avatar;
