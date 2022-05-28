import { addDoc, collection } from "firebase/firestore";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
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
import { AuthContext } from "../../contexts/AuthContextProvider";
import { db } from "../../services/firebaseService";
import Button from "../ui/Button";
import Input from "../ui/Input";

interface CreateNoteModalProps extends ModalProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export default function CreateNoteModal({
  setVisible,
  ...rest
}: CreateNoteModalProps) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const { authUser } = useContext(AuthContext);

  
  const handleCreateNote = async () => {
    try {
      await addDoc(collection(db, "notes"), {
        description,
        userId: authUser.id,
      });

      alert("Kayit Basarili");
      setDescription("");
      setTitle("");
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
            value={description}
            placeholder="Not..."
            onChangeText={(value) => setDescription(value)}
          />
          <Button label="Notumu Kaydet" onPress={handleCreateNote}/>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}
