import React, { Component, useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-paper";
import CreateProfileModal from "../components/profile/CreateProfileModal";

import { AuthContext } from "../contexts/AuthContextProvider";

export default function Profile() {
  const [createProfileModalVisible, setCreateProfileModalVisible] =
    useState(false);
  const { authUser } = useContext(AuthContext);
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/menu-bg.jpeg")}
        style={{ padding: 100 }}
      />

      <Image
        style={styles.avatar}
        source={{
          uri: `https://ui-avatars.com/api/?name=${authUser.name}+${authUser.lastName}&size=200`,
        }}
      />
      <View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 70,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          {authUser.name} {authUser.lastName}
        </Text>
        <Button
          style={styles.buttonP2}
          mode="contained"
          onPress={() => setCreateProfileModalVisible(true)}
        >
          Profili Düzenle
        </Button>
      </View>
      <CreateProfileModal
        visible={createProfileModalVisible}
        setVisible={setCreateProfileModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  buttonP2: {
    marginTop: 16,
    alignSelf: "center",
    width: "50%",
    backgroundColor: "purple",
    borderRadius: 50,
    height: 40,
    padding: 2,
    borderColor: "red",
  },
});
