import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Theme from "./../../../theme";
let Button = ({
  buttonColor,
  buttonText,
  buttonHandler,
  borderButton,
  borderWidth,
  buttonDisable,
}) => {
  return (
    <TouchableOpacity
      disabled={buttonDisable}
      style={[
        styles._btn_main,
        {
          backgroundColor: buttonColor,
          borderWidth: borderButton ? 1 : 0,
          width: borderWidth,
        },
      ]}
      onPress={buttonHandler}
    >
      <Text
        style={[
          styles._btn_text,
          { color: borderButton ? Theme.primary : Theme.white },
        ]}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};
let styles = StyleSheet.create({
  _btn_main: {
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderColor: Theme.primary,
  },
  _btn_text: {
    fontSize: 16,
    fontFamily: Theme.regular,
  },
});
export default Button;
