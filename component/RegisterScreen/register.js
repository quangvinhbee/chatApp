import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Image, Input, Text, Icon } from "react-native-elements";
import { Container } from "../share/form/container";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import tailwind from "tailwind-rn";
import { Inputs } from "../share/form/input";
import { Button } from "../share/form/button";
import { AuthContext } from "../../Provider/auth-provider";

export const Register = ({ navigation }) => {
  const { onRegister } = useContext(AuthContext);
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
            style={tailwind(" flex-row h-20 my-5 ")}
          />
        </View>
        <Container>
          <View style={tailwind(" py-2")}>
            <View style={tailwind(" py-1")}>
              <Inputs
                placeholder="Họ tên"
                keyboardType="email-address"
                leftIcon={
                  <Icon name="user" type="font-awesome" color="#D1D5DB" />
                }
              />
            </View>
            <View style={tailwind(" py-1")}>
              <Inputs
                placeholder="Email"
                keyboardType="email-address"
                leftIcon={
                  <Icon name="envelope" type="font-awesome" color="#D1D5DB" />
                }
              />
            </View>
            <View style={tailwind(" py-1")}>
              <Inputs
                placeholder="Mật khẩu"
                leftIcon={
                  <Icon name="lock" type="font-awesome" color="#D1D5DB" />
                }
              />
            </View>
            <View style={tailwind(" py-1")}>
              <Inputs
                placeholder="Nhập lại mật khẩu"
                leftIcon={
                  <Icon name="lock" type="font-awesome" color="#D1D5DB" />
                }
              />
            </View>
          </View>
          <View style={tailwind(" py-1 ")}>
            <Button
              type="primary"
              onPress={() => {
                onRegister(
                  "lamquangvinh1231@gmail.com",
                  "A1t2o300",
                  "lam quang vinh"
                );
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
