import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home_screen"
        options={{ drawerLabel: "Ana Ekran", headerTitle: "Ana Ekran" }}
        component={Home}
      />
      <Drawer.Screen name="profile_screen" component={Profile} />
    </Drawer.Navigator>
  );
}
