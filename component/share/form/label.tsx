import React from "react";
import { StyleSheet, Text, View } from "react-native";

type LabelProps = {
  [x: string]: any;
  htmlFor?: string;
  text: string;
  tooltip?: string;
};
export function Label({ text, tooltip, ...props }: LabelProps) {
  return (
    <View>
      <Text style={style.text}>{text}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "400",
  },
});
