import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const AuthContext = createContext<{
  [x: string]: any;
  isAuthenticated?: boolean;
  onRegister?: (email: string, password: string, name: string) => any;
  onLogin?: (email: string, password: string) => any;
  onLogout?: () => any;
}>({});

export function AuthProvider(props) {
  const [IsAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  console.log("IsAuthenticatedAuthProvider", IsAuthenticated);
  const [user, setUser] = useState();
  const onRegister = (email, password, name) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        Alert.alert("Đăng kí thành công");
        authUser.user.update({
          displayName: name,
          phoneNumber: null,
          photoURL: null,
        });
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setIsAuthenticated(false);
      });
  };
  const onLogout = () => {
    auth.signOut().then(() => {
      Alert.alert("Đăng xuất thành công");
      setIsAuthenticated(false);
    });
  };
  const onLogin = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        Alert.alert("Đăng Nhập thành công");
        setIsAuthenticated(true);
        try {
          AsyncStorage.setItem(
            "currentUser",
            JSON.stringify(authUser.currentUser)
          );
        } catch (e) {}
      })
      .catch((error) => {
        Alert.alert("Đăng nhập thất bại");
      });
  };
  useEffect(() => {
    try {
      const jsonValue = AsyncStorage.getItem("currentUser");
      if (jsonValue) setUser(JSON.parse(JSON.stringify(jsonValue)));
    } catch (e) {}
    if (auth.currentUser != null || user) setIsAuthenticated(true);
  }, []);
  return (
    <AuthContext.Provider
      value={{ isAuth: IsAuthenticated, onRegister, onLogin, onLogout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
