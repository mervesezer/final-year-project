import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import ProfileDetailsModal from "./ProfileDetailsModal";

interface ProfileCardProps {
  data;
}

const StyledText = styled.Text({
  color: "white",
  marginTop: 5,
  marginBottom: 5,
});

export default function ProfileCard({ data }: ProfileCardProps) {
  const {  title } = data;
  const [isProfileDetailsModalVisible, setIsProfileDetailsModalVisible] =
    useState(false);

  const StyledTouchableOpacity = styled.TouchableOpacity({
    backgroundColor:"white",
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  });

  return (
    <>
      <StyledTouchableOpacity
        activeOpacity={1}
        onPress={() => setIsProfileDetailsModalVisible(true)}
      >
        <View>
          <StyledText style={{ fontSize: 20 }}></StyledText>
          <StyledText>{`Title: ${title}`}</StyledText>
        </View>
        <View style={{ marginLeft: "auto", flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => Alert.alert("Simple Button pressed")}
          >
          </TouchableOpacity>
        </View>
      </StyledTouchableOpacity>

      <ProfileDetailsModal
        data={data}
        setVisible={setIsProfileDetailsModalVisible}
        visible={isProfileDetailsModalVisible}
      />
    </>
  );
}

