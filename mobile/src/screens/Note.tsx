import {
  Card,
  Paragraph,
  Title,
  Button as PaperButton,
} from "react-native-paper";
import Button from "../components/ui/Button";
import React, { useContext, useEffect, useState } from "react";
import CreateNoteModal from "../components/note/CreateNoteModal";
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
import { View, FlatList } from "react-native";
import UpdateNoteModal from "../components/note/UpdateNoteModal";

export default function Note() {
  const { authUser } = useContext(AuthContext);
  const [createNoteModalVisible, setCreateNoteModalVisible] = useState(false);
  const [updateNoteModalVisible, setUpdateNoteModalVisible] = useState(false);
  const [selectedDataToUpdate, setSelectedDataToUpdate] = useState();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "notes"),
      where("userId", "==", authUser.id)
    );

    const unsub = onSnapshot(q, (collection) => {
      const data = [];
      collection.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNotes(data.sort((a, b) => b.dateCreated - a.dateCreated));
    });

    return () => unsub();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "notes", id));
  };

  const handleUpdate = async (data) => {
    setSelectedDataToUpdate(data);
    setUpdateNoteModalVisible(true);
  };

  return (
    <>
      {notes.length === 0 ? (
        <Card style={{ marginTop: 50, height: "100%" }}>
          <Card.Cover
            style={{ marginTop: 120 }}
            source={require("../../assets/images/note.jpg")}
          />
          <Card.Content>
            <Title style={{ textAlign: "center" }}>Not Tut</Title>
            <Paragraph style={{ textAlign: "center" }}>
              Aldığınız Notlara Dilediğiniz Zaman Ulaşın
            </Paragraph>
            <Button
              label="Not Tut"
              style={{
                width: "100%",
                marginTop: 10,
                marginBottom: 10,
                backgroundColor: "#f68f40",
              }}
              onPress={() => setCreateNoteModalVisible(true)}
            />
          </Card.Content>
        </Card>
      ) : (
        <View style={{ height: "100%", paddingHorizontal: 25, paddingTop: 50 }}>
          <FlatList
            data={notes}
            renderItem={(note) => (
              <Card style={{ marginVertical: 8 }}>
                <Card.Title title={note.item.title} />
                <Card.Content>
                  <Paragraph>{note.item.note}</Paragraph>
                </Card.Content>
                <Card.Actions>
                  <PaperButton
                    uppercase={false}
                    compact
                    icon={"update"}
                    style={{ marginLeft: "auto" }}
                    onPress={() => handleUpdate(note.item)}
                  >
                    Güncelle
                  </PaperButton>
                  <PaperButton
                    uppercase={false}
                    compact
                    icon={"trash-can"}
                    color="red"
                    onPress={() => handleDelete(note.item.id)}
                  >
                    Sil
                  </PaperButton>
                </Card.Actions>
              </Card>
            )}
          />
          <Button
            label="Not Tut"
            style={{
              width: "100%",
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: "#f68f40",
            }}
            onPress={() => setCreateNoteModalVisible(true)}
          />
        </View>
      )}

      <CreateNoteModal
        visible={createNoteModalVisible}
        setVisible={setCreateNoteModalVisible}
      />

      <UpdateNoteModal
        visible={updateNoteModalVisible}
        setVisible={setUpdateNoteModalVisible}
        data={selectedDataToUpdate}
      />
    </>
  );
}
