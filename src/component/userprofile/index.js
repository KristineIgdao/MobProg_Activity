import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UserProfile = () => {
  const [name, setName] = useState('Kristine');
  const [email, setEmail] = useState('KristineIgdao@gmail.com');
  const [phone, setPhone] = useState('09759303797');
  const [avatar, setAvatar] = useState(require('../../assets/kapee.png'));
  const [isEditing, setIsEditing] = useState(false);

  
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  
  const saveProfile = () => {
    setIsEditing(false);
  };

  
  const changeAvatar = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permission Denied", "You need to enable permissions to access photos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar({ uri: result.uri });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      
      <View style={styles.avatarRow}>
        <TouchableOpacity onPress={changeAvatar}>
          <Image
            source={avatar}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <Text style={styles.welcomeText}>Welcome, {name}!</Text>
      </View>

      
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={[styles.input, isEditing ? styles.editable : styles.nonEditable]}
        value={name}
        onChangeText={setName}
        editable={isEditing}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={[styles.input, isEditing ? styles.editable : styles.nonEditable]}
        value={email}
        onChangeText={setEmail}
        editable={isEditing}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Phone:</Text>
      <TextInput
        style={[styles.input, isEditing ? styles.editable : styles.nonEditable]}
        value={phone}
        onChangeText={setPhone}
        editable={isEditing}
        keyboardType="phone-pad"
      />

      
      <TouchableOpacity style={styles.button} onPress={isEditing ? saveProfile : toggleEdit}>
        <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit Profile'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D7CCC8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
  editable: {
    backgroundColor: '#f9f9f9',
  },
  nonEditable: {
    backgroundColor: '#eaeaea',
  },
  button: {
    height: 50,
    backgroundColor: '#3E2723',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UserProfile;
