import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import DetailItem from "../appointment/DetailItem";
import CustomButton from "../button/CustomButton";
import MainCamera from "../camera/MainCamera";

const AppointmentScreen = (props) => {
  const { navigation, route } = props;




  return (
    <View style={styles.root}>
      <Text style={styles.dateTitle}>{route.params.date}</Text>
      <DetailItem title="CHECK-IN TIME" content="18:00" />
      <DetailItem title="LOCATION" content="1300 MAINSTREET, RICHARDSON, TX" />
      <DetailItem title="PATIENT" content="JOHN DOE" />
      <DetailItem title="TASK(S)" content="BLOOD TEST (5 MIN)" />
      <CustomButton
        title="CHECK IN"
        onPress={() => {
            navigation.navigate("Camera")
         
        }}
      />
    </View>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  root: {},
  dateTitle: {
    marginTop: 60,
    marginLeft: 20,
    marginBottom: 80,
    fontSize: 40,
    fontWeight: "bold",
  },
});