import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Image, Input, Text, Icon } from "react-native-elements";
import { Container } from "../share/form/container";
import { Label } from "../share/form/label";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import tailwind from "tailwind-rn";
import { Inputs } from "../share/form/input";
import { Button } from "../share/form/button";
import { AuthContext } from "../../Provider/auth-provider";

export const Home = ({ navigation }) => {
  const { isAuth, onLogout } = useContext(AuthContext);
  const [User, setUser] = useState({ email: "", password: "" });
  useEffect(() => {
    if (!isAuth) navigation.replace("Login");
  }, [isAuth]);
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={tailwind("")}
      scrollEnabled={false}
    >
      <View>
        <Text>Home Screen</Text>
        <Button
          onPress={() => {
            console.log("Click logout");
            onLogout();
          }}
        >
          onLogout
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
};
