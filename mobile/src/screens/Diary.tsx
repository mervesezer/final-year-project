import {
  Card,
  Paragraph,
  Title,
  Button as PaperButton,
} from "react-native-paper";
import Button from "../components/ui/Button";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../services/firebaseService";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContextProvider";
import { View, FlatList, Text } from "react-native";
import CreateDiaryModal from "../components/diary/CreateDiaryModal";
import UpdateDiaryModal from "../components/diary/UpdateDiaryModal";

export default function Diary() {
  const { authUser } = useContext(AuthContext);
  const [createDiaryModalVisible, setCreateDiaryModalVisible] = useState(false);
  const [updateDiaryModalVisible, setUpdateDiaryModalVisible] = useState(false);
  const [selectedDataToUpdate, setSelectedDataToUpdate] = useState();
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "diaries"),
      where("userId", "==", authUser.id)
    );

    const unsub = onSnapshot(q, (collection) => {
      const data = [];
      collection.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setDiaries(data.sort((a, b) => b.date - a.date));
    });

    return () => unsub();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "diaries", id));
  };

  const handleUpdate = async (data) => {
    setSelectedDataToUpdate(data);
    setUpdateDiaryModalVisible(true);
  };

  return (
    <>
      {diaries.length === 0 ? (
        <Card style={{ marginTop: 50, height: "100%" }}>
          <Card.Cover
            style={{ marginTop: 120 }}
            source={require("../../assets/images/diary.jpeg")}
          />
          <Card.Content>
            <Title style={{ textAlign: "center" }}>Günlük Tut</Title>
            <Paragraph style={{ textAlign: "center" }}>
              Günlüğünüze İçinizdekileri Dökün Bir Kuş Kadar Hafifleyin
            </Paragraph>
            <Button
              label="Günlük Tut"
              style={{
                width: "100%",
                marginTop: 10,
                marginBottom: 10,
                backgroundColor: "#f68f40",
              }}
              onPress={() => setCreateDiaryModalVisible(true)}
            />
          </Card.Content>
        </Card>
      ) : (
        <View style={{ height: "100%", paddingHorizontal: 25, paddingTop: 50 }}>
          <FlatList
            data={diaries}
            renderItem={(diary) => (
              <Card style={{ marginVertical: 8 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingRight: 10,
                  }}
                >
                  <Card.Title
                    title={diary.item.date.toDate().toLocaleDateString()}
                  />
                  <Text style={{ marginLeft: "auto", opacity: 0.5 }}>
                    {" "}
                    {diary.item.date.toDate().getHours()}:
                    {diary.item.date.toDate().getMinutes()}
                  </Text>
                </View>

                <Card.Content>
                  <Paragraph>{diary.item.description}</Paragraph>
                </Card.Content>
                <Card.Actions>
                  <PaperButton
                    uppercase={false}
                    compact
                    style={{ marginLeft: "auto" }}
                    onPress={() => handleUpdate(diary.item)}
                  >
                    Guncelle
                  </PaperButton>
                  <PaperButton
                    uppercase={false}
                    compact
                    icon={"trash-can"}
                    color="red"
                    onPress={() => handleDelete(diary.item.id)}
                  >
                    Sil
                  </PaperButton>
                </Card.Actions>
              </Card>
            )}
          />
          <Button
            label="Günlük Tut"
            style={{
              width: "100%",
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: "#f68f40",
            }}
            onPress={() => setCreateDiaryModalVisible(true)}
          />
        </View>
      )}

      <CreateDiaryModal
        visible={createDiaryModalVisible}
        setVisible={setCreateDiaryModalVisible}
      />
      <UpdateDiaryModal
        visible={updateDiaryModalVisible}
        setVisible={setUpdateDiaryModalVisible}
        data={selectedDataToUpdate}
      />
    </>
  );
}
