import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import tailwind from "tailwind-rn";
type ButtonProps = {
  [x: string]: any;
  onPress?: () => void;
  dataUser?: any;
};
export function HeaderTitle({ dataUser, onPress, ...props }: ButtonProps) {
  if (!dataUser) return null;
  return (
    <View style={tailwind(" flex-row items-center")}>
      <View style={tailwind("flex-row ")}>
        <Image
          resizeMode="cover"
          source={{
            uri: dataUser.avatar,
          }}
          style={tailwind(" w-10 h-10 rounded-full ")}
        />
        {dataUser.status && (
          <View
            style={tailwind(
              " absolute right-0 bottom-0 rounded-full border-2 border-white w-4 h-4 bg-green-300 "
            )}
          ></View>
        )}
      </View>
      <View style={tailwind(" ml-4 ")}>
        <Text style={tailwind(" text-lg font-bold text-gray-500 ")}>
          {dataUser.displayName}
        </Text>
      </View>
    </View>
  );
}
