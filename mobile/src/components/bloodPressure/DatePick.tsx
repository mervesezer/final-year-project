import React, { useState } from "react";
import {  View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Button from "../ui/Button";

const Example = ({handleConfirm}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <View>
      <Button style={{backgroundColor: "#f68f40"}} label="Tarih ve Saat" onPress={showDatePicker}  />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Example;