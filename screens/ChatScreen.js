import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Color } from "../constant/color";

const ChatScreen = ({ route, navigation }) => {
  console.log(route.params);
  const [dataUser, setdataUser] = useState(route.params);
  return (
    <View>
      <StatusBar animated={true} backgroundColor={Color.Primary} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
