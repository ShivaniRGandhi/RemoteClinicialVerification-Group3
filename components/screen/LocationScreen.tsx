import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import { getDistance } from "geolib";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";
import CustomButton from "../button/CustomButton";
import MySpinner from "../MySpinner";
import DeviceInfo from 'react-native-device-info';
const LocationScreen = (props) => {

  const {navigation, route} = props
  const {appointment} = route.params
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [myCoords, setMyCoords] = useState({});
  const [isMapReady, setMapReady] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setMyCoords(location.coords);
      setMapReady(true);
    })();
  }, []);

  const getDistanceInMile = () => {
    return (
      getDistance(
        { latitude: myCoords.latitude, longitude: myCoords.longitude },
        {
          latitude: 32.9857619,
          longitude: -96.752288,
        }
      ) /
      (1000 * 1.6)
    );
  };

  let text = "";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    if (Object.keys(myCoords).length !== 0) {
      // text = "You're " + getDistanceInMile() + " miles away from the Clinic. Please keep proceeding.";
      text = "You've arrived the location on time";
      console.log("MY LOCATION: ", myCoords);
      console.log("MY TIME: ", new Date().toLocaleString())
    }
  }

  return (
    <View style={styles.root}>
      {isMapReady ? (
        <View>
          <MapView
            style={styles.map}
            region={{
              latitude: myCoords.latitude,
              longitude: myCoords.longitude,
              latitudeDelta: 0.04,
              longitudeDelta: 0.05,
            }}
          >
            <Marker
              coordinate={{
                latitude: myCoords.latitude,
                longitude: myCoords.longitude,
              }}
              title={"ABC Clinic"}
              description={"description"}
            />
          </MapView>
          <Text style={{ alignSelf: "center" }}>{text}</Text>
          <CustomButton
            title="Check In"
            onPress={() => {
              // navigation.navigate("Task", {tasks: appointment.tasks});
              navigation.navigate("Camera", {appointment : appointment});
            }}
          />
        </View>
      ) : (
        <MySpinner visible={!isMapReady} textContent={"Fetching location..."} />
      )}
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  map: {
    alignSelf: "stretch",
    height: "80%",
  },
  loadingSpinner: {
    position: "absolute",
    alignSelf: "center",
  },
});
