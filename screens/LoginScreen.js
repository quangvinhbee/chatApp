import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Login } from "../component/LoginScreen/login";
import { AuthProvider } from "../Provider/auth-provider";

const LoginScreen = ({ navigation }) => {
  return (
    <AuthProvider navigation={navigation}>
      <View>
        <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} />
        <Login navigation={navigation}></Login>
      </View>
    </AuthProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
