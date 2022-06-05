import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Button from "../ui/Button";

export default function BloodPressureItem({ item, pressHandler }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.item}>
        <Text>{item.value} mg/dL </Text>
        <Text style={{ marginLeft: "auto", opacity: 0.5 }}>
          {item.date.toDate().toLocaleDateString()}{" "}
          {`${item.date.toDate().getHours()}:${item.date
            .toDate()
            .getMinutes()}`}
        </Text>
      </View>
      <Button
        label="sil"
        onPress={() => pressHandler(item.key)}
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
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    flex: 10,
    flexDirection: "row",
  },
});
