import { addDoc, collection} from "firebase/firestore";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
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
import AuthContextProvider, {
  AuthContext,
} from "../../contexts/AuthContextProvider";
import { db } from "../../services/firebaseService";
import DatePick from "../bloodPressure/DatePick";
import Button from "../ui/Button";
import Input from "../ui/Input";

interface CreateDiaryModalProps extends ModalProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export default function CreateDiaryModal({
  setVisible,
  ...rest
}: CreateDiaryModalProps) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const { authUser } = useContext(AuthContext);

  const handleCreateDiary = async () => {
    try {
      await addDoc(collection(db, "diaries"), {
        description,
        date,
        userId: authUser.id,
      });

      setDescription("");
      setDate(null);
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
            label="Günümü Kaydet"
            style={{ marginTop: 10, backgroundColor: "#f68f40" }}
            onPress={handleCreateDiary}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}
