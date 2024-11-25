import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const SettingsPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>SETTINGS</Text>
      </View>

      
      <View style={styles.content}>
        <TouchableOpacity style={styles.item}>
          <Icon name="account-circle" size={24} color="#3E2723" style={styles.icon} />
          <Text style={styles.itemText}>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Icon name="bell" size={24} color="#3E2723" style={styles.icon} />
          <Text style={styles.itemText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Icon name="lifebuoy" size={24} color="#3E2723" style={styles.icon} />
          <Text style={styles.itemText}>Support</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={[styles.item, styles.logout]}
          onPress={() => router.replace('/')}
        >
          <Icon name="logout" size={24} color="#FFF" style={styles.icon} />
          <Text style={[styles.itemText, styles.logoutText]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D7CCC8',
    },
    header: {
      backgroundColor: '#6D4C41', 
      padding: 20,
      alignItems: 'center',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      marginBottom: 20,
    },
    headerText: {
      fontSize: 20,
      color: '#FFF3E0', 
      fontWeight: 'bold',
    },
    content: {
      paddingHorizontal: 20,
    },
    item: {
      flexDirection: 'row', 
      alignItems: 'center',
      backgroundColor: '#FFF3E0', 
      padding: 15,
      borderRadius: 10,
      marginTop: 20,
      marginBottom: 30, 
      elevation: 2,
      shadowColor: '#6D4C41', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    icon: {
      marginRight: 15, 
    },
    itemText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#3E2723', 
    },
    logout: {
      backgroundColor: '#800000', 
      padding: 15,
      borderRadius: 25,
      alignItems: 'center',
      alignSelf: 'center', 
      marginBottom: 10,
      marginTop: 20,
      width: 150, 
    },
    logoutText: {
      color: '#FFF',
      textAlign: 'center',
    },
  });
  
  
export default SettingsPage;
