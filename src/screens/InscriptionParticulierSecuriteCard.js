import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Theme from "./../../theme";
import { Button, Header } from "./../components";
const screen = Dimensions.get("window");
let InscriptionParticulierSecuriteCard = ({ navigation }) => {
  let CardData = [
    {
      title: "Sortie",
      
    },
  ];
  return (
    <SafeAreaView style={styles._container}>
      <StatusBar
        hidden={false}
        backgroundColor={Theme.white}
        translucent={false}
        barStyle="dark-content"
      />
      <Header
        headerTitle="Inscription"
        backHandler={() => navigation.goBack()}
      />
      <View style={styles._steps_main}>
        <View style={styles._step} />
        <View style={styles._step} />
        <View style={styles._step} />
        <View style={styles._active_step} />
      </View>
      <View style={styles._data_main}>
        <View>
          <Text style={styles._heading}>Catégories</Text>
          <Text style={styles._des}>
            Choisis les catégories qui t'intéressent et que tu aimerais partager
            avec les autres utilisateurs.
          </Text>
        </View>
        <Button
          buttonColor={Theme.secondry}
          buttonText="Envoyer"
          borderWidth="100%"
          //   buttonHandler={() =>
          //     navigation.navigate("ProInscriptionphotos")
          //   }
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
  _data_main: {
    margin: 20,
    flex: 1,
    justifyContent: "space-between",
    marginTop: screen.width * 0.2,
  },
  _heading: {
    fontSize: 30,
    color: Theme.primary,
    fontFamily: Theme.bold,
    textAlign: "center",
  },
  _steps_main: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: screen.width * 0.05,
  },
  _active_step: {
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
    backgroundColor: Theme.primary,
  },
  _step: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: Theme.primaryLight,
  },
  _des: {
    fontSize: 13,
    fontFamily: Theme.regular,
    color: Theme.secondry,
    textAlign: "center",
  },
});
export default InscriptionParticulierSecuriteCard;
