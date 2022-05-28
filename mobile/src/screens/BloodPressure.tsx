import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import AddPressure from "../components/bloodPressure/AddPressure";
import BloodPressureItem from "../components/bloodPressure/BloodPressureItem";

export default function App() {
  const [pressures,setPressures] = useState([
    { text: "5.6", key: "1" },
    { text: "7.8", key: "2" },
    { text: "6.2", key: "3" },
  ]);

  const pressHandler = (key) => {
  setPressures((prevPressures) => {
      return prevPressures.filter((pressure) => pressure.key != key);
    });
  };
  const submitHandler = (text) => {
  setPressures((prevPressures) => {
      return [{ text: text, key: Math.random().toString() }, ...prevPressures];
    });
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.content}>
        <AddPressure submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={pressures}
            renderItem={({ item }) => (
              <BloodPressureItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
  },
});
