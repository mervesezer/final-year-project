import { doc, setDoc } from "firebase/firestore";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Text,
  Modal,
  ModalProps,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { db } from "../../services/firebaseService";
import DatePick from "../bloodPressure/DatePick";
import Button from "../ui/Button";
import Input from "../ui/Input";

interface UpdateDiaryModalProps extends ModalProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
  data: any;
}

export default function UpdateDiaryModal({
  setVisible,
  data,
  ...rest
}: UpdateDiaryModalProps) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (data) {
      setDescription(data.description);
      setDate(data.date);
    }
  }, [data]);

  const handleUpdateDiary = async () => {
    try {
      await setDoc(doc(db, "diaries", data.id), {
        ...data,
        description,
        date,
      });

      setVisible(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Modal animationType="slide" {...rest}>
      <SafeAreaView style={{ padding: 30, height: "100%" }}>
        <KeyboardAvoidingView style={{ height: "100%" }}>
          <View style={{ marginBottom: 30 }}>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 0,
                backgroundColor: "#49bfe3",
                padding: 5,
                zIndex: 9999,
                borderRadius: 25,
              }}
              onPress={() => setVisible(false)}
            >
              <Icon name="x" size={30} color="white" />
            </TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 20 }}>Bugünüm</Text>
          </View>

          <Input
            style={{ marginVertical: 10, flex: 1, textAlignVertical: "top" }}
            multiline
            value={description}
            placeholder="Sevgili Günlük..."
            onChangeText={(value) => setDescription(value)}
          />
          <DatePick handleConfirm={(date) => setDate(date)}></DatePick>
          <Button
            label="Günümü Değiştir"
            style={{ marginTop: 10, backgroundColor: "#f68f40" }}
            onPress={handleUpdateDiary}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}
