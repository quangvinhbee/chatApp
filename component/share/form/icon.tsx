import React, { useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import { FormField } from "./FormField";
import tailwind from "tailwind-rn";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCoffee, faUser, faLock } from "@fortawesome/free-solid-svg-icons";

type IconProps = {
  icon: "faCoffee" | "faUser" | "faLock";
};

export function Icons({ icon, ...props }: IconProps) {
  const [Icons, setIcons] = useState<any>(faCoffee);
  useEffect(() => {
    switch (icon) {
      case "faCoffee":
        setIcons(faCoffee);
        break;
    }
  }, [icon]);
  return (
    <FontAwesomeIcon
      icon={Icons}
      style={tailwind(" text-gray-400 text-lg w-4 ")}
    />
  );
}
