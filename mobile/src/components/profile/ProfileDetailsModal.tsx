import React, {
    Dispatch,
    SetStateAction,
  } from "react";
  import { Text, Modal, ModalProps, View, TouchableOpacity } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import Icon from "react-native-vector-icons/Feather";
  
  
  interface ProfileDetailsModalProps extends ModalProps {
    setVisible: Dispatch<SetStateAction<boolean>>;
    data;
  }
  
  export default function ProfileDetailsModal({
    
    data,
    ...rest
  }: ProfileDetailsModalProps) {
    const { name,lastName,email,password } = data;
    return (
      <Modal animationType="slide" {...rest}>
        <SafeAreaView style={{ padding: 30, height: "100%" }}>
          <View style={{ marginBottom: 30 }}>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 0,
                backgroundColor: "#9fbea5",
                padding: 5,
                zIndex: 9999,
                borderRadius: 25,
              }}
              
            >
              <Icon name="x" size={30} color="white" />
            </TouchableOpacity>
          </View>
  
          <View>
            <Text style={{ fontSize: 20, marginVertical: 10 }}></Text>
              <Text>{name}</Text>
              <Text>{lastName}</Text>
            </View>
        </SafeAreaView>
      </Modal>
    );
  }
  