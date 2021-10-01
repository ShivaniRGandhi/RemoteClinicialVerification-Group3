import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppointmentItem from "../appointment/AppointmentItem";
import CalendarPicker from "../CalendarPicker";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.card}>
        <CalendarPicker style={styles.calendar} />

        <Text style={styles.appointmentText}>APPOINTMENTS</Text>
        <AppointmentItem navigation={navigation} />
        <View style={styles.div}></View>
        <AppointmentItem navigation={navigation} />
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    marginHorizontal: 30,
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // elevation: 5,
    // backgroundColor : "#0000" // invisible color
  },
  appointmentText: {
    fontSize: 18,
    marginHorizontal: 22,
    marginTop: 20,
    marginBottom: 40,
  },
  calendar: {
    marginTop: 10,
  },
  div: {
    height: 1,
    width: "100%",
    marginVertical: 25,
    backgroundColor: "#171717",
    opacity: 0.2,
  },
});
