import React, { useContext } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Home } from "../component/HomeScreen/home";
import { AuthProvider } from "../Provider/auth-provider";

const HomeScreen = ({ navigation }) => {
  return (
    // <AuthProvider>
    <View>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} />
      <Home navigation={navigation}></Home>
    </View>
    // </AuthProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
