import React from "react";
import { View, StyleSheet } from "react-native";
import UserProfile from "../../../component/userprofile";

const Profile = () => {
  return (
    <View style={styles.container}>
      <UserProfile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default Profile;
