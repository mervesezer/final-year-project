import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Navigation from "./Navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <NavigationContainer>
          <StatusBar />
          <Navigation />
        </NavigationContainer>
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}
