import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Login } from "../component/LoginScreen/login";
import tailwind from "tailwind-rn";
const LoginScreen = ({ navigation }) => {
  return (
    // <AuthProvider>
    <View style={tailwind(" h-full")}>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} />
      <Login navigation={navigation}></Login>
    </View>
    // </AuthProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
