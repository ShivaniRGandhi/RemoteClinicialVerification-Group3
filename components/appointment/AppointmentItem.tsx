import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import colors from "../../assets/colors";

const AppointmentItem = (props) => {
  const { style, navigation } = props
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => navigation.navigate("Appointment", {date : 'Sept. 17, 2021'})}
    >
      <View style={{ marginRight: 15 }}>
        <Avatar
          size="medium"
          source={{
            uri: "https://www.altusemergency.com/wp-content/uploads/2018/02/Lumberton-1.jpg",
          }}
        />
      </View>

      <View >
        <Text style={styles.title}>CHECK-UP</Text>
        <Text style={styles.time}>10:00 am to 12:00 pm</Text>
      </View>
      <Text style={styles.location}>Richardson, Texas</Text>
    </TouchableOpacity>
  );
};

export default AppointmentItem;
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    marginHorizontal: 22,
  },
  title: {
    color: colors.text.darkGray,

    fontSize: 18,
    letterSpacing: -0.5,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  time: {
    color: colors.text.darkGray,
  },
  location: {
    color: colors.text.darkGray,
    fontSize: 10,
    position: "absolute",
    right: 0,
    top: 5,
  },
});
