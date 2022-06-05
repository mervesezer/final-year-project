import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import DiaryDetailsModal from "./DiaryDetailsModal";

interface DiaryCardProps {
  data;
}

const StyledText = styled.Text({
  color: "white",
  marginTop: 5,
  marginBottom: 5,
});

export default function DiaryCard({ data }: DiaryCardProps) {
  const [isDiaryDetailsModalVisible, setIsDiaryDetailsModalVisible] =
    useState(false);

  const StyledTouchableOpacity = styled.TouchableOpacity({
    backgroundColor: "white",
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
        onPress={() => setIsDiaryDetailsModalVisible(true)}
      >
        <View>
          <StyledText style={{ fontSize: 20 }}></StyledText>
        </View>
        <View style={{ marginLeft: "auto", flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => Alert.alert("Simple Button pressed")}
          ></TouchableOpacity>
        </View>
      </StyledTouchableOpacity>

      <DiaryDetailsModal
        data={data}
        setVisible={setIsDiaryDetailsModalVisible}
        visible={isDiaryDetailsModalVisible}
      />
    </>
  );
}
