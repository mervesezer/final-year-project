import { View, Text } from 'react-native'
import React from 'react'
import {Reminders} from "../components/medicine/Reminder";

export default function Medicine() {
  return (
    <View>
      <Text>Medicine</Text>
      <Reminders></Reminders>
    </View>
  )
}