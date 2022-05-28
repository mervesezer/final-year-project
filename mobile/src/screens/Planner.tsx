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
import React from "react";



export default function Note() {
  return (
   
    <Card  style={{ marginTop: 50,height:"100%" }}>
      <Card.Cover style={{marginTop:120}} source={require("../../assets/images/habbit.jpg")} />
      <Card.Content>
        <Title style={{textAlign:"center"}}>Planlayıcı</Title>
        <Paragraph style={{textAlign:"center"}}>Planlayıcı İle Hayatınızı Düzene Sokun</Paragraph>
        <Button
            label="Planlama Yap"
            style={{ width: "100%", marginTop: 10, marginBottom: 10,backgroundColor:"#f68f40" }}
            onPress={() => Alert.alert("Simple Button pressed")}
          />
          
      </Card.Content>
    </Card>
  );
}

