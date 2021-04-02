import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./HomeScreen";
import ChatScreen from "./ChatScreen";
import { HeaderTitle } from "../component/share/form/headerTitle/header-title";
import { Color } from "./../constant/color";
import { Icon } from "react-native-elements/dist/icons/Icon";

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
          name="Home"
          options={{
            title: "Your Mail",
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "vertical",
          }}
          component={HomeScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="ChatScreen"
          options={({ route }) => ({
            headerStatusBarHeight: 6,
            headerStyle: {
              backgroundColor: "#FFFFFF",
            },
            headerTitle: <HeaderTitle dataUser={route.params} />,
          })}
          component={ChatScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Login"
          options={{
            title: "Your Mail",
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "vertical",
          }}
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
            gestureEnabled: true,
            gestureDirection: "vertical",
          }}
          component={RegisterScreen}
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
