import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Button from "../ui/Button";
import { Checkbox } from "react-native-paper";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseService";

export default function TodoItem({ item }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.checkbox}>
        <Checkbox
          status={item.isDone ? "checked" : "unchecked"}
          onPress={async () => {
            await setDoc(doc(db, "lists", item.id), {
              ...item,
              isDone: !item.isDone,
            });
          }}
        />
      </View>
      <Text
        style={{
          padding: 16,
          marginTop: 16,
          borderColor: "#bbb",
          borderWidth: 1,
          borderRadius: 10,
          flex: 10,
          textDecorationLine: item.isDone ? "line-through" : null,
          flexDirection: "column",
        }}
      >
        {item.content}
      </Text>
      <Button
        label="Sil"
        onPress={async () => {
          await deleteDoc(doc(db, "lists", item.id));
        }}
        style={{
          backgroundColor: "red",
          alignContent: "flex-end",
          alignSelf: "flex-end",
          flex: 1,
          flexDirection: "column",
          marginLeft: 5,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: "flex-start",
    alignContent: "flex-start",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 15,
    marginTop: 22,
  },
});
