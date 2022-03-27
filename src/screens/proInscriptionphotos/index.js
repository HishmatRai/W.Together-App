import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Theme from "./../../../theme";
import { Button, Header } from "./../../components";
import { AddIcon } from "./../../svg";
const screen = Dimensions.get("window");
let ProInscriptionphotos = (props) => {
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
      <View style={styles._steps_main}>
        <View style={styles._active_step} />
        <View style={styles._step} />
        <View style={styles._step} />
      </View>
      <View style={styles._data_main}>
        <View>
          <Text style={styles._heading}>Photos</Text>
          <Text style={styles._des}>
            Ajoutez une ou plusieurs photos de votre entreprise
          </Text>
        </View>
        <TouchableOpacity style={styles._upload_btn_main}>
          <AddIcon />
        </TouchableOpacity>
        {/* <View>
            <TouchableOpacity>
          <Image
            source={{
              uri: "https://image.shutterstock.com/image-vector/avatar-profile-icon-set-including-600w-415795456.jpg",
            }}
            style={styles._profile_main_img}
          />
            </TouchableOpacity>
        </View> */}
        <Button
          buttonColor={"#919191"}
          buttonText="Valider"
          borderWidth="100%"
          buttonDisable={true}
          //   buttonHandler={() =>
          //     props.navigation.navigate("ProInscriptionphotos")
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
    marginTop: screen.width * 0.25,
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
    width: "15%",
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
    fontSize: 15,
    fontFamily: Theme.regular,
    color: Theme.secondry,
    textAlign: "center",
  },
  _upload_btn_main: {
    width: 195,
    height: 195,
    backgroundColor: Theme.gray,
    borderRadius: 195 / 2,
    alignSelf: "center",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  _profile_main_img:{
    width: 195,
    height: 195,
    borderRadius: 195 / 2,
    borderWidth:5,
    elevation: 5,
  }
});
export default ProInscriptionphotos;
