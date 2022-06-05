import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Header from "../components/todo/Header";
import TodoItem from "../components/todo/TodoItem";
import AddTodo from "../components/todo/AddTodo";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContextProvider";
import { db } from "../services/firebaseService";

export default function List() {
  const { authUser } = useContext(AuthContext);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "lists"),
      where("userId", "==", authUser.id)
    );

    const unsub = onSnapshot(q, (collection) => {
      const data = [];
      collection.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setListItems(data.sort((a, b) => b.dateCreated - a.dateCreated));
    });

    return () => unsub();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo />
        <View style={styles.list}>
          <FlatList
            data={listItems}
            renderItem={({ item }) => (
              <TodoItem item={item} />
            )}
          />
        </View>
      </View>
    </View>
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
