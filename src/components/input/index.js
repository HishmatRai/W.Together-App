import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Theme from "./../../../theme";
import { Ionicons } from "@expo/vector-icons";
let Input = ({
  onChangeText,
  value,
  inputType,
  hideShowPassword,
  showPassowrd,
  inputTitle,
}) => {
  let [focus, setFocus] = useState(false);
  let [blur, setBlur] = useState(false);
  let Focushandler = () => {
    setFocus(true);
    setBlur(false);
  };
  let BlurHandler = () => {
    setFocus(false);
    setBlur(true);
  };
  return (
    <View>
      {inputType === "password" ? (
        <View style={styles._bg_color_input_main}>
          <Text
            style={[
              styles._title,
              { color: !focus ? Theme.secondry : Theme.primary },
            ]}
          >
            {inputTitle}
          </Text>
          <View
            style={[
              styles._bg_color_input2,
              { borderColor: !focus ? Theme.gray : Theme.primary },
              { backgroundColor: !focus ? Theme.gray : Theme.white },
            ]}
          >
            <TextInput
              style={styles._textinput2}
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={showPassowrd}
              onFocus={Focushandler}
              onBlur={BlurHandler}
            />
            <TouchableOpacity onPress={hideShowPassword}>
              {!showPassowrd ? (
                <Ionicons name="eye-outline" size={24} color={Theme.primary} />
              ) : (
                <Ionicons
                  name="eye-off-outline"
                  size={24}
                  color={Theme.primary}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles._bg_color_input_main}>
          <Text
            style={[
              styles._title,
              { color: !focus ? Theme.secondry : Theme.primary },
            ]}
          >
            {inputTitle}
          </Text>
          <View
            style={[
              styles._bg_color_input,
              { borderColor: !focus ? Theme.gray : Theme.primary },
              { backgroundColor: !focus ? Theme.gray : Theme.white },
            ]}
          >
            <TextInput
              style={styles._textinput2}
              value={value}
              onChangeText={onChangeText}
              onFocus={Focushandler}
              onBlur={BlurHandler}
            />
          </View>
        </View>
      )}
    </View>
  );
};
let styles = StyleSheet.create({
  _bg_color_input: {
    height: 48,
    borderRadius: 15,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 5,
    borderWidth: 1,
  },
  _textinput2: {
    color: Theme.secondry,
    fontSize: 15,
    fontFamily: Theme.regular,
    padding: 0,
    flex: 1,
  },
  _bg_color_input2: {
    height: 48,
    borderRadius: 15,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
  },
  _bg_color_input_main: {
    marginTop: 15,
  },
  _title: {
    fontSize: 15,
    fontFamily: Theme.regular,
    color: Theme.primary,
  },
});
export default Input;
