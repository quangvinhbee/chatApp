import "react-native-gesture-handler";
import React from "react";
import StackAllScreen from "./screens/StackAllScreen";
import { AuthProvider } from "./Provider/auth-provider";

export default function App({ navigation }) {
  return (
    <AuthProvider>
      <StackAllScreen></StackAllScreen>
    </AuthProvider>
  );
}
