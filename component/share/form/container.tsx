import React from "react";
import { View, StyleSheet } from "react-native";
import { FormField } from "./FormField";
import tailwind from "tailwind-rn";

export function Container({ ...props }: FormField) {
  return <View style={tailwind("w-full p-2")}>{props.children}</View>;
}
