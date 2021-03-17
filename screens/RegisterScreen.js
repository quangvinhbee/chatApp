import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Login } from "../component/LoginScreen/login";
import { AuthProvider } from "../Provider/auth-provider";
import { Register } from "../component/RegisterScreen/register";

const RegisterScreen = ({ navigation }) => {
  return (
    <AuthProvider navigation={navigation}>
      <View>
        {/* <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} /> */}
        <Register></Register>
      </View>
    </AuthProvider>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
