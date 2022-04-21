import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import QrCode from "./QrCode";
const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QrCode"
        component={QrCode}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
