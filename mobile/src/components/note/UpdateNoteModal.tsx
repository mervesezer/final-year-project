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
import Button from "../ui/Button";
import Input from "../ui/Input";

interface UpdateNoteModalProps extends ModalProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
  data: any;
}

export default function UpdateNoteModal({
  setVisible,
  data,
  ...rest
}: UpdateNoteModalProps) {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (data) {
      setNote(data.note);
      setTitle(data.title);
    }
  }, [data]);

  const handleUpdateNote = async () => {
    try {
      await setDoc(doc(db, "notes", data.id), {
        ...data,
        note,
        title,
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
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              Yeni Not Ekle
            </Text>
          </View>
          <Input
            placeholder="Başlık"
            style={{ marginVertical: 10 }}
            value={title}
            onChangeText={(value) => setTitle(value)}
          />

          <Input
            style={{ marginVertical: 10, flex: 1, textAlignVertical: "top" }}
            multiline
            value={note}
            placeholder="Not..."
            onChangeText={(value) => setNote(value)}
          />
          <Button label="Notumu Güncelle" onPress={handleUpdateNote} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}
