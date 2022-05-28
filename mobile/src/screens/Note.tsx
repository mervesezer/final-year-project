import { View, Text, StyleSheet, Image, Alert } from "react-native";
import {
  Card,
  Modal,
  Paragraph,
  Portal,
  Provider,
  Title,
} from "react-native-paper";
import Button from "../components/ui/Button";
import React, { useState } from "react";
import CreateNoteModal from "../components/note/CreateNoteModal";


export default function Note() {
  const [createNoteModalVisible, setCreateNoteModalVisible] = useState(false);
  return (
  
    <Card  style={{ marginTop: 50,height:"100%" }}>
      <Card.Cover style={{marginTop:120}} source={require("../../assets/images/note.jpg")} />
      <Card.Content>
        <Title style={{textAlign:"center"}}>Not Tut</Title>
        <Paragraph style={{textAlign:"center"}}>Aldığınız Notlara Dilediğiniz Zaman Ulaşın</Paragraph>
        <Button
          label="Not Tut"
          style={{
            width: "100%",
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: "#f68f40",
          }}
          onPress={() => setCreateNoteModalVisible(true)}
        />

        <CreateNoteModal
          visible={createNoteModalVisible}
          setVisible={setCreateNoteModalVisible}
        />
          
      </Card.Content>
    </Card>
  );
}

