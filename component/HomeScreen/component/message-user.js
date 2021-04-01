import React, { useContext, useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-elements";
import tailwind from "tailwind-rn";
import { format } from "date-fns";
import { Icon } from "react-native-elements";

export function MessageUser({
  avatar,
  displayName,
  lastMessage,
  timeLastMessage,
  status,
}) {
  return (
    <View
      style={tailwind(
        " w-full flex-row py-3 px-6 bg-white justify-between items-end"
      )}
    >
      <View style={tailwind(" flex-row items-center w-2/3")}>
        <View style={tailwind("flex-row ")}>
          <Image
            resizeMode="cover"
            source={{
              uri: avatar,
            }}
            style={tailwind(" w-14 h-14 rounded-full ")}
          />
          {status && (
            <View
              style={tailwind(
                " absolute right-0 bottom-0 rounded-full border-2 border-white w-4 h-4 bg-green-300 "
              )}
            ></View>
          )}
        </View>
        <View style={tailwind(" ml-4 ")}>
          <Text style={tailwind(" text-lg font-bold text-gray-500 ")}>
            {displayName}
          </Text>
          <Text style={tailwind(" text-sm text-gray-300 ")}>{lastMessage}</Text>
        </View>
      </View>
      <View>
        <View>
          <Icon name="checkmark-outline" type="ionicon" color="#29E6A6" />
        </View>
        <Text style={tailwind(" text-sm text-gray-300 ")}>
          {format(new Date(), "HH:MM")}
        </Text>
      </View>
    </View>
  );
}
