import React, { useContext, useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import Button from "../ui/Button";
import DatePick from "./DatePick";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebaseService";

export default function AddPressure() {
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState("");
  const { authUser } = useContext(AuthContext);

  const handleCreateBloodPressure = async () => {
    if(value === ""){
      alert("Kan Şekeri Değeri Boş Bırakılamaz...");
      return;
    }

    try {
      await addDoc(collection(db, "blood_pressures"), {
        value,
        date,
        userId: authUser.id,
      });

      setDate(new Date());
      setValue("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Kan Şekeri Değeri"
          value={value}
          onChangeText={(value) => setValue(value)}
        />
        <DatePick handleConfirm={(date) => setDate(date)}/>
      </View>
      <Button
        style={{ backgroundColor: "#f68f40" }}
        onPress={() => handleCreateBloodPressure()}
        label="Kaydet"
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
