import { addDoc, collection } from "firebase/firestore";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
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

interface CreateProfileModalProps extends ModalProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export default function CreateProfileModal({
  setVisible,
  ...rest
}: CreateProfileModalProps) {
 
  const { authUser } = useContext(AuthContext);
  const [name, setName] = useState(authUser.name);
  const [lastName, setLastName] = useState(authUser.lastName);
  const [email, setEmail] = useState(authUser.email);
  const [password, setPassword] = useState("");

  const handleCreateProfile = async () => {
    try {
      await addDoc(collection(db, "profile"), {
        name,
        lastName,
        email,
        password,
        dateCreated: new Date(),
        userId: authUser.id,
      });
      setName("");
      setLastName("");
      setEmail("");
      setPassword("");
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
              <Icon name="x" size={30} color="purple" />
            </TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              Profili Güncelle
            </Text>
          </View>
          <Input
            style={{ marginVertical: 10 }}
            multiline
            value={name}
            placeholder="isim"
            onChangeText={(value) => setName(value)}
          />
          <Input
            placeholder="soyisim"
            style={{ marginVertical: 10 }}
            value={lastName}
            onChangeText={(value) => setLastName(value)}
          />

          <Input
            style={{ marginVertical: 10 }}
            multiline
            value={email}
            placeholder="email"
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            style={{ marginVertical: 10 }}
            multiline
            value={password}
            placeholder="sifre"
            onChangeText={(value) => setPassword(value)}
          />
          <Button label="Profilimi Güncelle" onPress={handleCreateProfile} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}
