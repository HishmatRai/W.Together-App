import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Theme from "./../../../theme";
let Header = ({ hideBackIcon, headerTitle, backHandler }) => {
  return (
    <View style={styles._header_main}>
      {hideBackIcon ? (
        <View style={styles._back_icon} />
      ) : (
        <TouchableOpacity style={styles._back_icon} onPress={backHandler}>
          <Ionicons name="chevron-back-sharp" size={30} color={Theme.primary} />
        </TouchableOpacity>
      )}
      <Text style={[styles._title]}>{headerTitle}</Text>
      <View style={styles._back_icon} />
    </View>
  );
};
let styles = StyleSheet.create({
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    marginTop: 10,
  },
  _back_icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _title: {
    fontSize: 15,
    fontFamily: Theme.medium,
    color: Theme.primary,
  },
});
export default Header;
