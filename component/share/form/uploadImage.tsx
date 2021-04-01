import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { Button } from "./button";
import { FormField } from "./FormField";
import ImagePicker from "react-native-image-picker";

export function ImageUpload({
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
  const uploadImage = () => {
    var options = {
      title: "Select Image",
      customButtons: [
        {
          name: "customOptionKey",
          title: "Choose Photo from Custom Option",
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    // ImagePicker.launchImageLibrary(options, (res) => {
    //   console.log(res);
    // });
  };
  return (
    <View>
      <Button
        type="primary"
        onPress={() => {
          uploadImage();
        }}
      >
        Choose Image
      </Button>
    </View>
  );
}
