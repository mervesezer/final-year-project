import React, { useContext, useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import Button from "../ui/Button";
import TimePick from "./TimePick";
import DatePick from "./DatePick";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebaseService";

export default function AddPressure({ submitHandler }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [value, setValue] = useState();
  const { authUser } = useContext(AuthContext);

  const handleCreateBloodPressure = async () => {
    try {
      await addDoc(collection(db, "blood_pressures"), {
        value,
        date,
        time,
        userId: authUser.id,
      });

      alert("Kayit Basarili");
      setDate(null);
      setTime(null);
      setValue(null);
    } catch (error) {
      alert(error.message);
    }
  };
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <TimePick handleConfirm={(time) => setTime(time)}></TimePick>
        <TextInput
          style={styles.input}
          placeholder="kan şekeri değeri"
          onChangeText={changeHandler}
        />
        <DatePick handleConfirm={(date) => setDate(date)}></DatePick>
      </View>
      <Button
        style={{ backgroundColor: "#f68f40" }}
        onPress={() => submitHandler(text)}
        label="kaydet"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    flex: 1,
    marginHorizontal: 30,
    borderBottomColor: "#ddd",
  },
});
