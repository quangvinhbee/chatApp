import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import tailwind from "tailwind-rn";
type ButtonProps = {
  [x: string]: any;
  onPress?: () => void;
  text: string;
  type?: "primary" | "reset";
};
export function Button({
  text,
  onPress,
  type = "primary",
  ...props
}: ButtonProps) {
  const [stylebg, setstylebg] = useState("");
  const [styletext, setstyletext] = useState("");
  useEffect(() => {
    if (type == "primary") {
      setstylebg(" bg-blue-400 ");
      setstyletext(" text-white ");
    } else if (type == "reset") {
      setstylebg(" bg-white border border-blue-400 ");
      setstyletext(" text-blue-400 ");
    }
  }, [type]);
  return (
    <View style={tailwind("  rounded-full " + stylebg)}>
      <Text
        style={tailwind(
          "px-4 py-3 text-center font-bold text-center " + styletext
        )}
        onPress={() => {
          if (onPress) onPress();
        }}
      >
        {props.children}
      </Text>
    </View>
  );
}
