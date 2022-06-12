import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Button from "../ui/Button";

export default function BloodPressureItem({
  item,
  pressHandler,
  onPressInput,
}) {
  return (
    <View style={{ flexDirection: "row", marginVertical: 10 }}>
      <TouchableOpacity
        onPress={onPressInput}
        style={{
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          flex: 1,
          justifyContent:"center",
          alignItems:"center",
          flexDirection: "row",
          borderColor: "gray",
        }}
      >
        <Text>{item.value} mg/dL </Text>
        <Text style={{ marginLeft: "auto", opacity: 0.5 }}>
          {item.date.toDate().toLocaleDateString()}{" "}
          {`${item.date.toDate().getHours()}:${item.date
            .toDate()
            .getMinutes()}`}
        </Text>
      </TouchableOpacity>
      <Button
        label="Sil"
        onPress={() => pressHandler(item.key)}
        style={{
          backgroundColor: "red",
          marginLeft: 5,
        }}
      />
    </View>
  );
}
