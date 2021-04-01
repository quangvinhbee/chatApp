import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tailwind from "tailwind-rn";
type ButtonProps = {
  [x: string]: any;
  onPress?: () => void;
  text?: string;
  isLoading?: boolean;
  type?: "primary" | "reset";
};
export function Button({
  text,
  onPress,
  type = "primary",
  isLoading,
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
    <TouchableOpacity
      style={tailwind(
        "  rounded-full flex-row justify-center items-center" + stylebg
      )}
      onPress={() => {
        if (onPress) onPress();
      }}
    >
      {isLoading && <ActivityIndicator size="small" color="#FFFFFF" />}
      <Text
        style={tailwind(
          "px-4 py-3 text-center font-bold text-center " + styletext
        )}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}
