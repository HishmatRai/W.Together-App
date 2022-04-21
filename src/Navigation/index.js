import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import Theme from './../../theme';
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  Feather,
  Octicons,
  MaterialCommunityIcons  ,
  Ionicons 
} from "@expo/vector-icons";
// Screens
import Select from "./../screens/Select";
import InscriptionParticulier from "../screens/InscriptionParticulier";
import InscriptionParticulier2 from "../screens/InscriptionParticulier2";
import ProInscription from "../screens/ProInscription";
import ProInscriptionphotos from "../screens/ProInscriptionphotos";
import InscriptionParticulierSignup from "../screens/InscriptionParticulierSignup";
import InscriptionPhotoParticulier from "../screens/InscriptionPhotoParticulier";
import InscriptionParticulierSecurite from "../screens/InscriptionParticulierSecurite";
import InscriptionParticulierSecuriteCard from "./../screens/InscriptionParticulierSecuriteCard";
import Tuto from "../screens/Tuto";
import Home from "../screens/Home";
const width = Dimensions.get("window").width;
const tabWidth = width / 5;
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabStack = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          bottom: 0,
          height: 60,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              {focused ? (
                <Entypo name="home" size={24} color={Theme.primary} />
              ) : (
                <Entypo name="home" size={24} color={Theme.secondry} />
              )}
             
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              {focused ? (
                <Ionicons  name="calendar" size={24} color={Theme.primary} />
              ) : (
                <Ionicons  name="calendar" size={24} color={Theme.secondry} />
              )}
             
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...styles.tab,
                ...styles.footballTab,
              }}
            >
              <View style={styles.footballContainer}>
                {focused ? (
                  <Feather name="search" size={24} color={Theme.secondry} />
                ) : (
                  <Feather name="search" size={24} color={Theme.secondry} />
                )}
              </View>
             
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              {focused ? (
                <Ionicons  name="add-circle" size={24} color={Theme.primary} />
              ) : (
                <Ionicons  name="add-circle" size={24} color={Theme.secondry} />
              )}
             
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              <View
                style={
                  focused
                    ? styles._show_active_tab_border
                    : styles._show_gray_tab_border
                }
              />
              {focused ? (
                <MaterialCommunityIcons  name="message" size={24} color={Theme.primary} />
              ) : (
                <MaterialCommunityIcons name="message" size={24} color="black" />
              )}
             
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
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
        <Stack.Screen
          name="InscriptionParticulierSignup"
          component={InscriptionParticulierSignup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InscriptionPhotoParticulier"
          component={InscriptionPhotoParticulier}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InscriptionParticulierSecurite"
          component={InscriptionParticulierSecurite}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InscriptionParticulierSecuriteCard"
          component={InscriptionParticulierSecuriteCard}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Tuto"
          component={Tuto}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  tabNavigatorContainer: {
    width: "100%",
    maxHeight: 90,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "white",
    elevation: 0,
  },
  tab: {
    width: tabWidth,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  footballTab: {
    backgroundColor: Theme.white,
    height: 50,
    borderBottomEndRadius: 150,
    borderBottomStartRadius: 150,
    // marginTop: -20,
  },
  footballContainer: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    backgroundColor: Theme.primary,
    marginTop: -30,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 1.5,
  },
  rightToFootball: {
    borderTopLeftRadius: 40 / 2,
  },
  _title: {
    fontFamily: Theme.medium,
    fontSize: 12,
    marginTop: 5,
  },
});
export default Navigation;
