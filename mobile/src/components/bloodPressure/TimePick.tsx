import React, { useState } from "react";
import {  View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Button from "../ui/Button";

const Example = ({handleConfirm}) => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  return (
    <View>
      <Button style={{backgroundColor: "#f68f40"}} label="Zaman" onPress={showTimePicker}  />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default Example;