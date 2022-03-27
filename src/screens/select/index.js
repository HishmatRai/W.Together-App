import React from "react";
import { SafeAreaView, Text, StatusBar, StyleSheet, View } from "react-native";
import Theme from "./../../../theme";
import { SelectImage } from "./../../svg";
import { Button } from "./../../components";
let Select = (props) => {
  return (
    <SafeAreaView style={styles._container}>
      <StatusBar
        hidden={false}
        backgroundColor={Theme.white}
        translucent={false}
        barStyle="dark-content"
      />
      <View style={styles._data_main}>
        <View style={styles._img_main}>
          <SelectImage />
        </View>
        <View style={styles._heading_main}>
          <Text style={styles._heading}>Bienvenue</Text>
          <View style={styles._sub_heading_main}>
            <Text style={styles._sub_heading}>sur</Text>
            <Text style={styles._title}>Together</Text>
          </View>
        </View>
        <View>
          <Button
            buttonColor={Theme.secondry}
            buttonText="Inscription"
            borderWidth="100%"
            buttonHandler={() =>
              props.navigation.navigate("InscriptionParticulier")
            }
          />
          <Button
            buttonColor={Theme.primary}
            buttonText="Connexion"
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
  },
  _sub_heading: {
    fontSize: 35,
    color: Theme.primary,
    fontFamily: Theme.bold,
  },
  _title: {
    fontSize: 35,
    color: Theme.secondry,
    fontFamily: Theme.bold,
    marginLeft: 5,
  },
  _sub_heading_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _img_main: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
export default Select;
