import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import {
  Select,
  InscriptionParticulier,
  InscriptionParticulier2,
  ProInscription,
  ProInscriptionphotos,
} from "./../screens";
const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Select"
          component={Select}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InscriptionParticulier"
          component={InscriptionParticulier}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InscriptionParticulier2"
          component={InscriptionParticulier2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProInscription"
          component={ProInscription}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProInscriptionphotos"
          component={ProInscriptionphotos}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;