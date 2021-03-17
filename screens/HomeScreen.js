import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} />
      <View>
        <Text>Home Screen</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
