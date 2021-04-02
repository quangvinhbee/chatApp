import React, { useContext } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Home } from "../component/HomeScreen/home";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} />
      <Home navigation={navigation}></Home>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
