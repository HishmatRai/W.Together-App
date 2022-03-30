import React from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import Theme from "./../../theme";
import {
  InscriptionParticulierImage,
  InscriptionParticulierSmallImage,
} from "./../svg";
import { Button, Header } from "./../components";
const screen = Dimensions.get("window");

let InscriptionParticulier = ({ navigation }) => {
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
      <View style={styles._data_main}>
        <View>
          <Text style={styles._heading}>Je suis ...</Text>
          <View style={styles._img_main}>
            {screen.width <= 380 ? (
              <InscriptionParticulierSmallImage />
            ) : (
              <InscriptionParticulierImage />
            )}
          </View>
        </View>
        <View style={styles._btn_group}>
          <Button
            buttonColor={Theme.primary}
            buttonText="Professionnel"
            borderWidth="48%"
            buttonHandler={() => alert("Comming Soon!")}
          />
          <Button
            buttonColor={Theme.white}
            buttonText="Particulier"
            borderWidth="48%"
            borderButton={true}
            buttonHandler={() => navigation.navigate("InscriptionParticulier2")}
          />
        </View>
        <View>
          <Button
            buttonColor={Theme.secondry}
            buttonText="Choisir"
            borderWidth="100%"
            buttonHandler={() => navigation.navigate("ProInscription")}
          />
        </View>
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
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  _heading: {
    fontSize: 35,
    color: Theme.primary,
    fontFamily: Theme.bold,
    textAlign: "center",
  },
  _img_main: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  _btn_group: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default InscriptionParticulier;
