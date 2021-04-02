import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import { Icon } from "react-native-elements";
import { Color } from "../../../constant/color";

export function HeaderMain() {
  return (
    <View style={styles}>
      <View style={tailwind(" bg-white px-6 pt-4 pb-2 ")}>
        <View style={tailwind(" flex-row justify-between items-center")}>
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
            <Icon
              name="person-add-outline"
              type="ionicon"
              color={Color.Primary}
              style={tailwind("  text-blue-400  ")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  zIndex: 100,
};
