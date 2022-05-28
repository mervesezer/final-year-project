import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import AntDesign from "@expo/vector-icons/AntDesign"

export default function IconButton() {
    
  return (
    <TouchableHighlight onPress={()=>{}}>
     <View>
         <AntDesign name="clockcircleo" />
         
     </View>
 </TouchableHighlight>
  )
}