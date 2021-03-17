import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import tailwind from "tailwind-rn";
type LabelProps = {
  [x: string]: any;
  htmlFor?: string;
  text: string;
  tooltip?: string;
  heading: "h1" | "h2" | "h3" | "h4" | "h5" | "normal";
};
export function Label({
  text,
  heading = "normal",
  tooltip,
  ...props
}: LabelProps) {
  const [PropsStyle, setPropsStyle] = useState<string>(" text-gray-500 ");
  const styleText = " text-gray-500 text-center font-bold py-1";
  useEffect(() => {
    switch (heading) {
      case "h1":
        setPropsStyle(styleText + " text-3xl ");
        break;
      case "h2":
        setPropsStyle(styleText + " text-2xl ");
        break;
      case "h3":
        setPropsStyle(styleText + " text-xl ");
        break;
      case "h4":
        setPropsStyle(styleText + " text-lg ");
        break;
      case "h5":
        setPropsStyle(styleText + " text-base ");
        break;
    }
  }, [heading]);
  return <Text style={tailwind(PropsStyle)}>{text}</Text>;
}
