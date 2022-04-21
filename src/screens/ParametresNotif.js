import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Theme from "./../../theme";
import { Ionicons } from "@expo/vector-icons";
import { Toggle, Button } from "./../components";
let ParametresNotif = ({ navigation }) => {
  let [toutToggle, setToutToggle] = useState(true);
  let [toutToggle2, setToutToggle2] = useState(true);
  let [toutToggle3, setToutToggle3] = useState(true);
  let [toutToggle4, setToutToggle4] = useState(true);
  let [toutToggle5, setToutToggle5] = useState(true);
  return (
    <SafeAreaView style={styles._container}>
      <StatusBar
        hidden={false}
        backgroundColor={Theme.white}
        translucent={false}
        barStyle="dark-content"
      />
      <View style={styles._header_main}>
        <TouchableOpacity
          style={styles._back_icon}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-sharp" size={30} color={Theme.primary} />
        </TouchableOpacity>
        <Text style={styles._header_title}>Paramètres notifications</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._card1}>
          <Text style={styles._toggle_title}>Tout activer</Text>
          <Toggle
            toggleValue={toutToggle}
            toggleHandler={(isOn) => setToutToggle(!toutToggle)}
          />
        </View>
        <View style={styles._card2_main}>
          <View style={styles._card3}>
            <Text style={styles._toggle_title}>Tout activer</Text>
            <Toggle
              toggleValue={toutToggle2}
              toggleHandler={(isOn) => setToutToggle2(!toutToggle2)}
            />
          </View>
          <View style={styles._card3}>
            <Text style={styles._toggle_title}>Demande de participation</Text>
            <Toggle
              toggleValue={toutToggle3}
              toggleHandler={(isOn) => setToutToggle3(!toutToggle3)}
            />
          </View>
          <View style={styles._card3}>
            <Text style={styles._toggle_title}>Participation accepté</Text>
            <Toggle
              toggleValue={toutToggle4}
              toggleHandler={(isOn) => setToutToggle4(!toutToggle4)}
            />
          </View>
          <View style={styles._card3}>
            <Text style={styles._toggle_title}>Publication</Text>
            <Toggle
              toggleValue={toutToggle5}
              toggleHandler={(isOn) => setToutToggle5(!toutToggle5)}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles._btn_main}>
        <Button
          buttonColor={Theme.secondry}
          buttonText="Enregistrer"
          borderWidth="100%"
          buttonHandler={() => navigation.navigate("ModifierProfil")}
        />
      </View>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  _header_title: {
    fontSize: 20,
    fontFamily: Theme.semiBold,
    color: Theme.secondry,
  },
  _back_icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _card1: {
    backgroundColor: Theme.white,
    elevation: 5,
    marginHorizontal: 20,
    margin: 5,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 40,
  },
  _card2_main: {
    backgroundColor: Theme.white,
    elevation: 5,
    marginHorizontal: 20,
    margin: 5,
    borderRadius: 20,
    marginTop: 30,
  },
  _card3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  _toggle_title: {
    color: Theme.secondry,
    fontSize: 15,
    fontFamily: Theme.regular,
  },
  _btn_main: {
    padding: 20,
  },
});
export default ParametresNotif;
