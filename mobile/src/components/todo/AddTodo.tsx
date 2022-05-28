import { addDoc, collection } from 'firebase/firestore';
import React,{useContext, useState} from 'react';
import {StyleSheet,TextInput,Text,View} from 'react-native';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { db } from '../../services/firebaseService';
import Button from '../ui/Button';

export default function AddTodo(){
    const[content,setContent]=useState('');
    const { authUser } = useContext(AuthContext);

    const handleCreateList = async () => {
        try {
          await addDoc(collection(db, "lists"), {
           
            content,
            userId: authUser.id,
          });
    
          alert("Kayit Basarili");
          setContent("");
        } catch (error) {
          alert(error.message);
        }
      };
    const changeHandler=(val)=>{
        setContent(val)
    }
    return(
        <View>
            <TextInput style={styles.input}
            placeholder='liste elemanı..'
            onChangeText={changeHandler}
            />
            <Button onPress={handleCreateList} label="Liste Yarat"/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        

    }
})