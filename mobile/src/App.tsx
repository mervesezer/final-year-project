import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar />
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
