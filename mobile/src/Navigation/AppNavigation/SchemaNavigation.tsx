import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Profile from "../../screens/Profile";
import Icon from "react-native-vector-icons/FontAwesome";
import FoundationIcon from "react-native-vector-icons/Foundation";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Note from "../../screens/Note";
import List from "../../screens/List";
import Planner from "../../screens/Planner";
import Diary from "../../screens/Diary";
import CustomDrawer from "../../components/CustomDrawer";
import BloodPressure from "../../screens/BloodPressure";


const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -23,
        },
      }}
    >
      <Drawer.Screen
        name="Profil"
        options={{
          title: "Profil",
          drawerIcon: ({ size }) => <Icon name="user" size={23} color="blue"/>,
        }}
        component={Profile}
      />

      <Drawer.Screen
        name="note_screen"
        options={{
          title: "Notlar",
          drawerIcon: ({ size }) => (
            <FoundationIcon name="clipboard-notes" size={32} color="gray" />
          ),
        }}
        component={Note}
      />

      <Drawer.Screen
        name="list_screen"
        options={{
          title: "Listeler",
          drawerIcon: ({ size }) => <Icon name="list-ol" size={20} color="orange" />,
        }}
        component={List}
      />

      <Drawer.Screen
        name="planner_screen"
        options={{
          title: "Planlayıcı",
          drawerIcon: ({ size }) => <Icon name="calendar" size={20} color="green" />,
        }}
        component={Planner}
      />

      <Drawer.Screen
        name="diary_screen"
        options={{
          title: "Günlük",
          drawerIcon: ({ size }) => <EntypoIcon name="open-book" size={20}  color="purple"/>,
        }}
        component={Diary}
      />

      <Drawer.Screen
        name="kan_degerlerim"
        options={{
          title: "Kan Değerim",
          drawerIcon: ({ size }) => (
            <FontistoIcon name="blood-test" size={20} color="red" />
          ),
        }}
        component={BloodPressure}
      />
    </Drawer.Navigator>
  );
}
