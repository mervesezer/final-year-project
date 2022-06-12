import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import AddPressure from "../components/bloodPressure/AddPressure";
import BloodPressureItem from "../components/bloodPressure/BloodPressureItem";
import UpdateBloodPressureModal from "../components/bloodPressure/UpdateBloodPressureModal";
import { AuthContext } from "../contexts/AuthContextProvider";
import { db } from "../services/firebaseService";

export default function BloodPressure() {
  const { authUser } = useContext(AuthContext);
  const [updateBloodPressureModalVisible, setUpdateBloodPressureModalVisible] =
    useState(false);
  const [pressures, setPressures] = useState([]);
  const [selectedDataToUpdate, setselectedDataToUpdate] = useState();

  useEffect(() => {
    const q = query(
      collection(db, "blood_pressures"),
      where("userId", "==", authUser.id)
    );

    const unsub = onSnapshot(q, (collection) => {
      const data = [];
      collection.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setPressures(data.sort((a, b) => b.date - a.date));
    });

    return () => unsub();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "blood_pressures", id));
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <AddPressure />
          <View style={styles.list}>
            <FlatList
              data={pressures}
              renderItem={({ item }) => (
                <BloodPressureItem
                  item={item}
                  onPressInput={() => {
                    setselectedDataToUpdate({ ...item });
                    setUpdateBloodPressureModalVisible(true);
                  }}
                  pressHandler={() => handleDelete(item.id)}
                />
              )}
            />
          </View>
        </View>
      </View>

      <UpdateBloodPressureModal
        visible={updateBloodPressureModalVisible}
        setVisible={setUpdateBloodPressureModalVisible}
        data={selectedDataToUpdate}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
  },
});
