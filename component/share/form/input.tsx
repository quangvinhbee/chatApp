import React from "react";
import { View, TextInput } from "react-native";
import { FormField } from "./FormField";
import tailwind from "tailwind-rn";

export function Inputs({
  label,
  name,
  required,
  placeholder,
  keyboardType = "default",
  leftIcon,
  style = " ring-1 ",
  value,
  tooltip,
  subfix,
  secureTextEntry,
  onChanged,
  ...props
}: FormField) {
  return (
    <View
      style={tailwind(
        " w-full flex-row items-center px-4 border border-gray-300 rounded-full bg-white "
      )}
    >
      {leftIcon && <View style={tailwind(" mr-2 ")}>{leftIcon}</View>}
      <TextInput
        style={tailwind(" w-full py-2 pr-5 ")}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={(e) => {
          if (onChanged) onChanged(e);
        }}
      ></TextInput>
    </View>
  );
}
