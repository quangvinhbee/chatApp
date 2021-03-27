import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Login } from "../component/LoginScreen/login";
import { AuthContext, AuthProvider } from "../Provider/auth-provider";
import { Register } from "../component/RegisterScreen/register";

const RegisterScreen = ({ navigation }) => {
  return (
    // <AuthProvider>
    <View>
      {/* <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} /> */}
      <Register navigation={navigation}></Register>
    </View>
    // </AuthProvider>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
