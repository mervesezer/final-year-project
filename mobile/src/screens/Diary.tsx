import { View, Text, StyleSheet, Image, Alert } from "react-native";
import styled from "styled-components/native";
import {
  Card,
  Paragraph,
  Title,
} from "react-native-paper";
import Button from "../components/ui/Button";
import React, { useState } from "react";
import CreateDiaryModal from "../components/diary/CreateDiaryModal";

export default function Diary() {
  const [createDiaryModalVisible, setCreateDiaryModalVisible] = useState(false);
  return (
    <Card style={{ marginTop: 50, height: "100%" }}>
      <Card.Cover
        style={{ marginTop: 120 }}
        source={require("../../assets/images/diary.jpeg")}
      />
      <Card.Content>
        <Title style={{ textAlign: "center" }}>Günlük Tut</Title>
        <Paragraph style={{ textAlign: "center" }}>
          Günlüğünüze İçinizdekileri Dökün Bir Kuş Kadar Hafifleyin
        </Paragraph>
        <Button
          label="Günlük Tut"
          style={{
            width: "100%",
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: "#f68f40",
          }}
          onPress={() => setCreateDiaryModalVisible(true)}
        />

        <CreateDiaryModal
          visible={createDiaryModalVisible}
          setVisible={setCreateDiaryModalVisible}
        />
      </Card.Content>
    </Card>
  );
}
