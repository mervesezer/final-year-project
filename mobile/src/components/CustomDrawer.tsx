import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import IonIcon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../contexts/AuthContextProvider";
import { useContext } from "react";

const CustomDrawer = (props) => {
  const { authUser, setAuthUser } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        <ImageBackground
          source={require("../../assets/images/menu-bg.jpeg")}
          style={{ padding: 20 }}
        >
          <Image
            source={{
              uri: `https://ui-avatars.com/api/?name=${authUser.name}+${authUser.lastName}&size=200`,
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              marginBottom: 5,
              fontWeight: "bold",
            }}
          >
            {authUser.name} {authUser.lastName}
          </Text>
          <View style={{ flexDirection: "row" }}></View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{ paddingVertical: 15 }}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setAuthUser(null);
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IonIcon name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
