import React, { useContext } from "react";
import Login from "../screens/Login";
import Register from "../screens/Register";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { AuthContext } from "../contexts/AuthContextProvider";
import AppNavigation from "./AppNavigation";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  login: undefined;
  register: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export default function Navigation() {
  const { authUser } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authUser ? (
        <Stack.Screen name="app_navigation" component={AppNavigation} />
      ) : (
        <>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
}
