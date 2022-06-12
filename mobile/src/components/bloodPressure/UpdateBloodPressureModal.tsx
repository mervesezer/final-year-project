import { doc, setDoc } from "firebase/firestore";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { Modal } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { db } from "../../services/firebaseService";
import DatePick from "../bloodPressure/DatePick";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function UpdateBloodPressureModal({
  setVisible,
  visible,
  data,
}) {
  const [dateTimeVisible, setDateTimeVisible] = useState(false);

  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState("");

  useEffect(() => {
    if (data) {
      setDate(new Date(data.date.toDate()));
      setValue(data.value);
    }
  }, [data]);

  const handleUpdate = async () => {
    try {
      await setDoc(doc(db, "blood_pressures", data.id), {
        ...data,
        value,
        date,
      });

      setVisible(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Modal visible={visible} dismissable={false}>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <Input
          style={{ marginVertical: 10 }}
          value={value}
          onChangeText={(newValue) => setValue(newValue)}
        />
        <View style={{ marginVertical: 10 }}>
          <Button
            style={{ backgroundColor: "#f68f40" }}
            label="Tarih ve Saat"
            onPress={() => setDateTimeVisible(true)}
          />
          <DateTimePickerModal
            isVisible={dateTimeVisible}
            date={date}
            mode="datetime"
            onConfirm={(date) => setDate(date)}
            onCancel={() => setDateTimeVisible(false)}
          />
        </View>
        <Button
          label="Güncelle"
          onPress={handleUpdate}
          style={{ marginVertical: 10 }}
        />
        <Button
          label="Vazgeç"
          onPress={() => setVisible(false)}
          style={{ marginVertical: 10, backgroundColor: "red" }}
        />
      </View>
    </Modal>
  );
}
