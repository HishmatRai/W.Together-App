import React from "react";
import ToggleSwitch from "toggle-switch-react-native";
import Theme from "./../../../theme";
let Toggle = ({ toggleHandler,toggleValue }) => {
  return (
    <ToggleSwitch
      isOn={toggleValue}
      onColor={Theme.primary}
      offColor={Theme.primary}
      labelStyle={{
        color: "black",
        fontWeight: "900",
        backgroundColor: Theme.primary,
      }}
      style={
        {
          // borderWidth: 2,
          // borderColor: "black",
          // borderRadius: 30,
        }
      }
      thumbOffStyle={{
        backgroundColor: Theme.secondry,
      }}
      thumbOnStyle={{
        backgroundColor: Theme.white,
      }}
      size="medium"
      onToggle={toggleHandler}
    />
  );
};
export default Toggle;
