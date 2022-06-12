import React, { useContext, useState } from "react";
import { View, Text, Alert, KeyboardAvoidingView } from "react-native";
import { Card } from "react-native-paper";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { registerUser } from "../services/authService";

export default function Register({ navigation }) {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      await registerUser(registerForm);
      navigation.navigate("login");
    } catch (error) {
      alert("Böyle Bir Kullanıcı Mevcut.");
    }
  };

  return (
    <KeyboardAvoidingView>
      <Card style={{ height: "100%" }}>
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
            placeholder="Ad"
            value={registerForm.name}
            onChangeText={(name) => setRegisterForm({ ...registerForm, name })}
          />
          <Input
            style={{ width: "100%", marginBottom: 10 }}
            placeholder="Soyad"
            value={registerForm.lastName}
            onChangeText={(lastName) =>
              setRegisterForm({ ...registerForm, lastName })
            }
          />
          <Input
            style={{ width: "100%", marginBottom: 10 }}
            placeholder="E-mail"
            value={registerForm.email}
            onChangeText={(email) =>
              setRegisterForm({ ...registerForm, email })
            }
          />
          <Input
            secureTextEntry
            style={{ width: "100%" }}
            placeholder="Şifre"
            value={registerForm.password}
            onChangeText={(password) =>
              setRegisterForm({ ...registerForm, password })
            }
          />
          <Button
            label="Kayıt Ol"
            style={{ width: "100%", marginTop: 10, marginBottom: 10 }}
            onPress={handleRegister}
          />
        </View>
      </Card>
    </KeyboardAvoidingView>
  );
}
