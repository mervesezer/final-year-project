import { addDoc, collection, doc, setDoc } from "firebase/firestore";
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
import { auth, db } from "../../services/firebaseService";
import Button from "../ui/Button";
import Input from "../ui/Input";

interface CreateProfileModalProps extends ModalProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
  data?: any;
}

export default function CreateProfileModal({
  setVisible,
  data,
  ...rest
}: CreateProfileModalProps) {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const [name, setName] = useState(authUser.name);
  const [lastName, setLastName] = useState(authUser.lastName);

  useEffect(() => {
    if (data) {
      setName(data.name);
      setLastName(data.lastName);
    }
  }, [data]);

  const handleUpdateProfile = async () => {
    try {
      await setDoc(doc(db, "users", authUser.id), {
        ...authUser,
        name,
        lastName,
      });

      setAuthUser({ ...authUser, name, lastName });

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
              Profili G??ncelle
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

          <Button label="Profilimi G??ncelle" onPress={handleUpdateProfile} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}
