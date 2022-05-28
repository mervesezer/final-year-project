import React, { useContext, useState } from "react";
import { View, Text, Alert, KeyboardAvoidingView } from "react-native";
import { Card } from "react-native-paper";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { AuthContext } from "../contexts/AuthContextProvider";
import { auth, firestore } from "../services/firebaseService";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../Navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const { setAuthUser } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const navigation = useNavigation<RootStackNavigationProp>();

  const handleLogin = async () => {
    try {
      const loginData = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const docRef = firestore.doc(
        firestore.getFirestore(),
        "users",
        loginData.user.uid
      );
      const data = (await firestore.getDoc(docRef)).data();

      setAuthUser({
        id: loginData.user.uid,
        email,
        name: data.name,
        lastName: data.lastName,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView>
      <Card style={{ height: "100%", marginTop: 50 }}>
        <View
          style={{
            height: "50%",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Card.Cover
            style={{ marginTop: 120, width: "100%" }}
            source={require("../../assets/images/register.jpg")}
          />

          <Input
            style={{ width: "100%", marginBottom: 10 }}
            placeholder="E-mail"
            value={email}
            onChangeText={(value) => setEmail(value.toLowerCase())}
          />
          <Input
            secureTextEntry
            style={{ width: "100%" }}
            placeholder="Şifre"
            value={password}
            onChangeText={(value) => setPassword(value.trim())}
          />
          <Button
            label="Giriş Yap"
            style={{ width: "100%", marginTop: 10, marginBottom: 10 }}
            onPress={handleLogin}
          />
          <Button
            label="Kayit Ol"
            style={{ width: "100%", marginTop: 10, marginBottom: 10 }}
            onPress={() => {
              navigation.navigate("register");
            }}
          />
        </View>
      </Card>
    </KeyboardAvoidingView>
  );
}
