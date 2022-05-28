import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Button from "../ui/Button";
import { Checkbox } from "react-native-paper";

export default function TodoItem({ item, pressHandler }) {
  const [checked, setChecked] = React.useState(false);
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.checkbox}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
              
            }}
          />
        </View>
        <Text style={styles.item}>{item.text}</Text>
        <Button
          label="sil"
          onPress={() => {
            "pressed";
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    flex: 10,
    flexDirection: "column",
  },
  checkbox: {
    alignSelf: "flex-start",
    alignContent: "flex-start",
    flex: 1,
    flexDirection: "column",
    justifyContent:"center",
    marginRight:15,
    marginTop:22
  },
});
