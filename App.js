import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from './components/screen/LoginScreen';

import HomeScreen from "./components/screen/HomeScreen";
import AppointmentScreen from "./components/screen/AppointmentScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  
  // if (isLogin)
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Appointment" component={AppointmentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  // else return <LoginScreen />;
}

