import React, { useContext } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Button } from "../component/share/form/button";
import { AuthContext, AuthProvider } from "../Provider/auth-provider";

const HomeScreen = ({ navigation }) => {
  const { isAuthenticated, onLogout } = useContext(AuthContext);
  return (
    <AuthProvider navigation={navigation}>
      <View>
        <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} />
        <View>
          <Text>Home Screen</Text>
          <Button
            onPress={() => {
              onLogout();
            }}
          >
            onLogout
          </Button>
        </View>
      </View>
    </AuthProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
