import React from "react";
import { SafeAreaView, Text, StatusBar, StyleSheet, View } from "react-native";
import Theme from "./../../../theme";
import { InscriptionParticulierImage2 } from "./../../svg";
import { Button, Header } from "./../../components";
let InscriptionParticulier2 = (props) => {
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
        backHandler={() => props.navigation.goBack()}
      />
      <View style={styles._data_main}>
        <View>
          <Text style={styles._heading}>Je suis ...</Text>
          <View style={styles._img_main}>
            <InscriptionParticulierImage2 />
          </View>
        </View>
        <View style={styles._btn_group}>
          <Button
            buttonColor={Theme.white}
            buttonText="Professionnel"
            borderWidth="48%"
            borderButton={true}
            buttonHandler={() =>
                props.navigation.navigate("InscriptionParticulier")
              }
          />
          <Button
            buttonColor={Theme.primary}
            buttonText="Particulier"
            borderWidth="48%"
            buttonHandler={() => alert("Comming Soon!")}
          />
        </View>
        <View>
          <Button
            buttonColor={Theme.secondry}
            buttonText="Choisir"
            borderWidth="100%"
            buttonHandler={() => alert("Comming Soon!")}
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
export default InscriptionParticulier2;
