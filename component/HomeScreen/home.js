import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import tailwind from "tailwind-rn";
import { Button } from "../share/form/button";
import { AuthContext } from "../../Provider/auth-provider";
import { HeaderMain } from "./component/header";
import { ListMessageUser } from "./component/list-message-user";

export const Home = ({ navigation }) => {
  const { isAuth, onLogout } = useContext(AuthContext);
  const [User, setUser] = useState({ email: "", password: "" });
  useEffect(() => {
    if (!isAuth) navigation.replace("Login");
  }, [isAuth]);
  if (isAuth == undefined) return null;
  if (!isAuth) {
    navigation.replace("Login");
  }
  return (
    <View style={tailwind(" h-full ")}>
      <HeaderMain></HeaderMain>
      <ListMessageUser></ListMessageUser>
      <Button
        onPress={() => {
          onLogout();
        }}
      >
        onLogout
      </Button>
    </View>
  );
};
