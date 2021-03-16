import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Image, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Label } from "../share/form/label";

export const Login = () => {
  return (
    <View>
      <View style={styles.welcome}>
        <Image
          source={{
            uri:
              "https://i.pinimg.com/originals/3f/83/26/3f8326ae92489327dc278963d362d5d4.png",
          }}
          style={styles.imagebackgroud}
        />
        <Text h3 style={styles.heading}>
          Welcome to ChatApp!
        </Text>
      </View>
      <View>
        <Input
          placeholder="Email"
          leftIcon={
            <Icon name="user" size={24} color="#BBBFC3" style={styles.icon} />
          }
          type="email"
          style={styles.input}
        />
        <Input
          placeholder="Password"
          leftIcon={
            <Icon name="lock" size={24} color="#BBBFC3" style={styles.icon} />
          }
          type="password"
          style={styles.input}
        />
      </View>
      <View>
        <Text title="Login" style={styles.button}>
          Login
        </Text>
      </View>
      <View>
        <Label text="Cái text"></Label>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagebackgroud: {
    height: 300,
    flexDirection: "row",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  heading: {
    flexDirection: "row",
    fontFamily: "vincHand",
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },
  welcome: {
    flexDirection: "column",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    borderColor: "#BBBFC3",
  },
  button: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
