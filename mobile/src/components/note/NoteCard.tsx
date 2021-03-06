import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import NoteDetailsModal from "./NoteDetailsModal";

interface NoteCardProps {
  data;
}

const StyledText = styled.Text({
  color: "white",
  marginTop: 5,
  marginBottom: 5,
});

export default function BookCard({ data }: NoteCardProps) {
  const {  title } = data;
  const [isNoteDetailsModalVisible, setIsNoteDetailsModalVisible] =
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
        onPress={() => setIsNoteDetailsModalVisible(true)}
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

      <NoteDetailsModal
        data={data}
        setVisible={setIsNoteDetailsModalVisible}
        visible={isNoteDetailsModalVisible}
      />
    </>
  );
}
