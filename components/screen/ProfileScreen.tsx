import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>


      <Avatar size="large" rounded title="MD" />

     
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
