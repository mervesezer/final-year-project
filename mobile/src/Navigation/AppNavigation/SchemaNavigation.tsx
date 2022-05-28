import { createDrawerNavigator } from "@react-navigation/drawer";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React from "react";
import Profile from "../../screens/Profile";
import Icon from "react-native-vector-icons/FontAwesome";
import FoundationIcon from "react-native-vector-icons/Foundation";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import EntypoIcon from "react-native-vector-icons/Entypo";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import Note from "../../screens/Note";
import List from "../../screens/List";
import Budget from "../../screens/Budget";
import Planner from "../../screens/Planner";
import Diary from "../../screens/Diary";
import CustomDrawer from "../../components/CustomDrawer";
import BloodPressure from "../../screens/BloodPressure";
import Medicine from "../../screens/Medicine";
import Register from "../../screens/Register";

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
          drawerIcon: ({ size }) => <Icon name="user" size={23} />,
        }}
        component={Profile}
      />

      <Drawer.Screen
        name="Kayit"
        options={{
          title: "Kayit",
          drawerIcon: ({ size }) => <Icon name="user" size={23} />,
        }}
        component={Register}
      />

      <Drawer.Screen
        name="note_screen"
        options={{
          title: "Notlar",
          drawerIcon: ({ size }) => (
            <FoundationIcon name="clipboard-notes" size={32} />
          ),
        }}
        component={Note}
      />

      <Drawer.Screen
        name="list_screen"
        options={{
          title: "Listeler",
          drawerIcon: ({ size }) => <Icon name="list-ol" size={20} />,
        }}
        component={List}
      />

      <Drawer.Screen
        name="budget_screen"
        options={{
          title: "Bütçe",
          drawerIcon: ({ size }) => (
            <FontistoIcon name="money-symbol" size={20} />
          ),
        }}
        component={Budget}
      />

      <Drawer.Screen
        name="planner_screen"
        options={{
          title: "Planlayıcı",
          drawerIcon: ({ size }) => <Icon name="calendar" size={20} />,
        }}
        component={Planner}
      />

      <Drawer.Screen
        name="diary_screen"
        options={{
          title: "Günlük",
          drawerIcon: ({ size }) => <EntypoIcon name="open-book" size={20} />,
        }}
        component={Diary}
      />

      <Drawer.Screen
        name="kan_degerlerim"
        options={{
          title: "Kan Değerim",
          drawerIcon: ({ size }) => (
            <FontistoIcon name="blood-test" size={20} />
          ),
        }}
        component={BloodPressure}
      />

      <Drawer.Screen
        name="ilaclarim"
        options={{
          title: "İlaçlarım",
          drawerIcon: ({ size }) => (
            <AntDesignIcon name="medicinebox" size={20} />
          ),
        }}
        component={Medicine}
      />
    </Drawer.Navigator>
  );
}
