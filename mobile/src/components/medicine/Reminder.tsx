import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";

import { colors } from "./colors";
import Button from "../ui/Button";
import DatePick from "../bloodPressure/DatePick";
const days = [
  { title: "SU", active: true },
  { title: "M", active: true },
  { title: "T", active: true },
  { title: "W", active: true },
  { title: "TH", active: false },
  { title: "F", active: false },
  { title: "S", active: true },
];
export const Reminders = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(true);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "android");
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>What time would you </Text>
        <Text>like to meditate?</Text>

        <Text style={styles.subHeading}>
          Any time you can choose but We recommend first thing in th morning.
        </Text>
      </View>
      <View style={styles.timePickerWrapper}>
        <DatePick></DatePick>
      </View>

      <View>
        <Text>Which day would you </Text>
        <Text>like to meditate?</Text>

        <Text>Everyday is best, but we recommend picking at least five.</Text>
      </View>
      <View style={styles.dayContainer}>
        {days.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayItem,
                {
                  backgroundColor: item.active
                    ? colors.heading
                    : colors.secondaryBg,
                },
              ]}
            >
              <Text
                style={[
                  styles.dayTitle,
                  { color: item.active ? colors.whiteShade : colors.gray },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.btnWrapper}>
        <Button label={"SAVE"} style={{ marginBottom: 10 }} />

        <Button label={"NO THANKS"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    marginTop: 50,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "300",
    color: colors.gray,
    marginTop: 15,
    lineHeight: 30,
  },
  timePickerWrapper: {
    backgroundColor: colors.bg,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  dayItem: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  dayTitle: {
    fontSize: 14,
    padding: 10,
  },
  btnWrapper: {
    marginTop: 55,
  },
});
