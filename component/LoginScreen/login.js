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

export const Login = ({ navigation }) => {
  const { isAuthenticated, onLogin } = useContext(AuthContext);
  const [User, setUser] = useState({ email: "", password: "" });
  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
    if (isAuthenticated) navigation.replace("Home");
  }, [isAuthenticated]);
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={tailwind("")}
      scrollEnabled={false}
    >
      <View>
        <View
          style={tailwind("flex-col justify-center bg-white rounded-b-3xl ")}
        >
          <Image
            resizeMode="center"
            source={{
              uri: "https://i.imgur.com/vZfG0yY.png",
            }}
            style={tailwind(" flex-row h-72 p-2 ")}
          />
          <Label text="Welcome to ChatApp! " heading="h1" />
        </View>
        <Container>
          <View style={tailwind(" py-2")}>
            <View style={tailwind(" py-1")}>
              <Inputs
                placeholder="Email"
                keyboardType="email-address"
                leftIcon={
                  <Icon name="user" type="font-awesome" color="#D1D5DB" />
                }
                onChanged={(e) => {
                  setUser({ ...User, email: e });
                }}
              />
            </View>
            <View style={tailwind(" py-1")}>
              <Inputs
                placeholder="Password"
                leftIcon={
                  <Icon name="lock" type="font-awesome" color="#D1D5DB" />
                }
                onChanged={(e) => {
                  setUser({ ...User, password: e });
                }}
              />
            </View>
          </View>
          <View style={tailwind(" py-1 ")}>
            <Button
              type="primary"
              onPress={() => {
                onLogin(User.email, User.password);
              }}
            >
              Đăng nhập
            </Button>
          </View>
          <View style={tailwind(" py-1 ")}>
            <Button
              type="reset"
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              Đăng kí
            </Button>
          </View>
        </Container>
      </View>
    </KeyboardAwareScrollView>
  );
};
