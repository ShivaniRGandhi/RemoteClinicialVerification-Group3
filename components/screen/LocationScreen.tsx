import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { getDistance } from "geolib";

const LocationScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [myCoords, setMyCoords] = useState({});
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
    })();
  }, []);

  const getDistanceInMile = () => {
    return (
      getDistance(
        { latitude: myCoords.latitude, longitude: myCoords.longitude },
        {
          latitude: 51.525,
          longitude: 7.4575,
        }
      ) / 1.6
    );
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    if (Object.keys(myCoords).length !== 0)
      text =
        "You are " + getDistanceInMile() + " miles away from 51.525, 7.4575";
    console.log("MY LOCATION: ", myCoords);
  }

  return (
    <View style={styles.root}>
      <Text>{text}</Text>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
