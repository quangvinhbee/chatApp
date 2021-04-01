import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./HomeScreen";
import { AuthProvider } from "../Provider/auth-provider";

export default function StackAllScreen({ navigation }) {
  const Stack = createStackNavigator();
  const gloalScreenOptions = {
    headerStyle: { backgroundColor: "#0088cc" },
    headerTitleStyle: { color: "#000" },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={gloalScreenOptions}>
        <Stack.Screen
          name="Login"
          options={{ title: "Your Mail", headerShown: false }}
          component={LoginScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Register"
          options={{
            title: "Đăng kí",
            headerStyle: {
              backgroundColor: "#FFFFFF",
            },
            headerTintColor: "#000",
          }}
          component={RegisterScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Home"
          options={{ title: "Your Mail", headerShown: false }}
          component={HomeScreen}
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
