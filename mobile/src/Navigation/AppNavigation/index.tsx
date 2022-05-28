import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import SchemaNavigation from "./SchemaNavigation";


const AppStackNavigation = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <AppStackNavigation.Navigator screenOptions={{ headerShown: false }}>
      <AppStackNavigation.Screen
        name="schema_navigation"
        component={SchemaNavigation}
      />
     
    </AppStackNavigation.Navigator>
  );
}
