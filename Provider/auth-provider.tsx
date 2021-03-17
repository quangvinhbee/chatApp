import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext<{
  [x: string]: any;
  isAuthenticated?: boolean;
  onRegister?: (email: string, password: string, name: string) => any;
  onLogin?: (email: string, password: string) => any;
}>({});

export function AuthProvider(props) {
  const { navigation } = props;
  console.log("navigation", navigation);
  const [IsAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const onRegister = (email, password, name) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
        authUser.user.update({
          displayName: name,
          phoneNumber: null,
          photoURL: null,
        });
        navigation.replace("Home");
      })
      .catch((error) => {
        console.log("That bai", error.message);
      });
  };
  const onLogout = () => {
    auth.signOut().then(() => console.log("User signed out!"));
  };
  const onLogin = (email, password) => {
    console.log(auth.currentUser, "currentUser");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        navigation.replace("Home");
        try {
          AsyncStorage.setItem(
            "currentUser",
            JSON.stringify(authUser.currentUser)
          );
        } catch (e) {}
      })
      .catch((error) => {
        console.log("That bai", error.message);
      });
  };
  useEffect(() => {
    try {
      const jsonValue = AsyncStorage.getItem("currentUser");
      if (jsonValue) setUser(JSON.parse(JSON.stringify(jsonValue)));
    } catch (e) {}
    if (auth.currentUser != null || user) navigation.replace("Home");
  });
  return (
    <AuthContext.Provider value={{ IsAuthenticated, onRegister, onLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
}
