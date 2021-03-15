import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Login } from "../component/LoginScreen/login";

const LoginScreen = () => {
  return (
    <View>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} />
      <Login></Login>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
