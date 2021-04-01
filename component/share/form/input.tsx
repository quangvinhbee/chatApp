import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { EventRegister } from "react-native-event-listeners";
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
  const [focus, setfocus] = useState(" ");
  const [Show, setShow] = useState(false);
  const inputRef = useRef(undefined);
  useEffect(() => {
    if (!inputRef.current.isFocused()) {
      setShow(false);
    }
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setShow(false);
      }}
    >
      <TouchableOpacity
        style={tailwind(
          " w-full flex-row items-center px-4 border border-gray-300 rounded-full bg-white " +
            (Show ? " border-blue-400 " : " ")
        )}
        onPress={() => {
          inputRef.current.focus();
          setShow(true);
        }}
      >
        {leftIcon && <View style={tailwind(" mr-2 ")}>{leftIcon}</View>}
        <TextInput
          ref={inputRef}
          style={tailwind(" py-2 mr-5 ")}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={(e) => {
            if (onChanged) onChanged(e);
          }}
        ></TextInput>
      </TouchableOpacity>
    </TouchableWithoutFeedback>
  );
}
