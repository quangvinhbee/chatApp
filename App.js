import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const Stack = createStackNavigator();
  const gloalScreenOptions = {
    headerStyle: { backgroundColor: "#0088cc" },
    headerTitleStyle: { color: "white" },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={gloalScreenOptions}>
        <Stack.Screen
          name="Login"
          options={{ title: "Your Mail", headerShown: false }}
          component={LoginScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
