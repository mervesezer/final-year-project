import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  Modal as RnModal,
  FlatList,
} from "react-native";
import {
  Card,
  Paragraph,
  Portal,
  Provider,
  TextInput,
  Button as PaperButton,
  Modal,
  Title,
} from "react-native-paper";
import Button from "../components/ui/Button";
import { Calendar, DateData } from "react-native-calendars";
import React, { useContext, useEffect, useState } from "react";
import Input from "../components/ui/Input";
import Icon from "react-native-vector-icons/EvilIcons";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../services/firebaseService";
import { AuthContext } from "../contexts/AuthContextProvider";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Note() {
  const { authUser } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState<DateData>();
  const [content, setContent] = useState("");
  const [plans, setPlans] = useState([]);
  const [markedDates, setMarkedDates] = useState({});
  const [isAddPlanVisible, setIsAddPlanVisible] = useState(false);
  const [isPlansVisible, setIsPlansVisible] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, "plans"),
      where("userId", "==", authUser.id)
    );

    const unsub = onSnapshot(q, (collection) => {
      const data = [];
      collection.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      const newMarkedDates = {};
      data.forEach((item) => {
        newMarkedDates[item.date] = { marked: true };
      });

      setMarkedDates(newMarkedDates);
      setPlans(data);
    });

    return () => unsub();
  }, []);

  const handleCreatePlan = async () => {
    if (content === "") {
      alert("Icerik Gir");
      return;
    }

    try {
      await addDoc(collection(db, "plans"), {
        date: selectedDate.dateString,
        content,
        userId: authUser.id,
      });

      setContent("");
      setIsAddPlanVisible(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <View
        style={{
          height: "100%",
          paddingHorizontal: 10,
          backgroundColor: "white",
        }}
      >
        <Card.Cover
          style={{ marginTop: 60 }}
          source={require("../../assets/images/habbit.jpg")}
        />
        <View>
          <Title style={{ textAlign: "center" }}>Planlayıcı</Title>
          <Paragraph style={{ textAlign: "center" }}>
            Planlayıcı İle Hayatınızı Düzene Sokun
          </Paragraph>

          <Calendar
            onDayPress={(selected) => {
              setSelectedDate(selected);
              if (
                plans.filter((plan) => plan.date === selected.dateString)
                  .length > 0
              ) {
                setIsPlansVisible(true);
              } else {
                setIsAddPlanVisible(true);
              }
            }}
            markedDates={markedDates}
          />

          <Button
            label="Planlama Yap"
            style={{
              width: "100%",
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: "#f68f40",
            }}
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
      </View>

      <Modal
        visible={isAddPlanVisible}
        style={{ paddingHorizontal: 10 }}
        dismissable={false}
      >
        {selectedDate ? (
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 20 }}
          >
            <Title style={{ textAlign: "center" }}>
              {selectedDate.dateString}
            </Title>
            <Input value={content} onChangeText={(e) => setContent(e)} />
            <Button
              label="Ekle"
              style={{ marginTop: 10 }}
              onPress={handleCreatePlan}
            />
            <Button
              label="Vazgec"
              style={{ marginTop: 10, backgroundColor: "red" }}
              onPress={() => setIsAddPlanVisible(false)}
            />
          </View>
        ) : null}
      </Modal>

      <RnModal visible={isPlansVisible}>
        {selectedDate ? (
          <View style={{ padding: 8, height: "100%" }}>
            <FlatList
              style={{ flex: 1 }}
              data={plans.filter(
                (plan) => plan.date === selectedDate.dateString
              )}
              renderItem={(data) => (
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    backgroundColor: "lightgray",
                    marginVertical: 8,
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <Text>{data.item.content}</Text>

                  <View style={{ flex: 1 }} />

                  <PaperButton
                    uppercase={false}
                    onPress={async () => {
                      console.log(data.item.id);
                      await deleteDoc(doc(db, "plans", data.item.id));
                    }}
                    color="red"
                    icon={"trash-can-outline"}
                  >
                    Sil
                  </PaperButton>
                </View>
              )}
            />

            <PaperButton
              mode="contained"
              onPress={() => setIsPlansVisible(false)}
            >
              Kapat
            </PaperButton>
          </View>
        ) : null}
      </RnModal>
    </>
  );
}
