import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import { Icon } from "react-native-elements";
import { Inputs } from "../../share/form/input";
export function HeaderMain() {
  return (
    <View style={tailwind(" bg-white px-4 ")}>
      <View style={tailwind(" flex-row justify-between items-center py-2")}>
        <View style={tailwind(" flex-row justify-center items-center ")}>
          <Image
            resizeMode="cover"
            source={{
              uri: "https://i.imgur.com/bzoabm4.jpg",
            }}
            style={tailwind(" w-12 h-12 rounded-full ")}
          />
          <Text style={tailwind(" ml-4 text-3xl font-bold ")}>Chats</Text>
        </View>
        <View
          style={tailwind(
            "  flex-row justify-center items-center h-12 w-12 rounded-full bg-gray-100 "
          )}
        >
          <Icon name="user-plus" type="font-awesome" />
        </View>
      </View>
      <View style={tailwind(" py-2  ")}>
        <Inputs
          placeholder="Search"
          keyboardType="email-address"
          leftIcon={<Icon name="search" type="font-awesome" color="#D1D5DB"/>}
          onChanged={(e) => {
            setUser({ ...User, email: e });
          }}
        />
      </View>
    </View>
  );
}
