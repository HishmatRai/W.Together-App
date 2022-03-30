import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import Theme from "./../../theme";
import { Button, Header, Input } from "./../components";
const screen = Dimensions.get("window");
let ProInscription = ({navigation}) => {
  let [name, setName] = useState("");
  let [number, setNumber] = useState("");
  let [address, setAddress] = useState("");
  let [email, setEmail] = useState("");
  let [hidePasword, setHidePassword] = useState(true);
  let [password, setPassword] = useState("");
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._steps_main}>
            <View style={styles._active_step} />
            <View style={styles._step} />
            <View style={styles._step} />
          </View>
          <Text style={styles._heading}>Établissement</Text>
          <Input
            value={name}
            onChangeText={(name) => setName(name)}
            inputTitle="Nom de l'établissement"
          />
          <Input
            value={number}
            onChangeText={(number) => setNumber(number)}
            inputTitle="Numéro de SIRET"
          />
          <Input
            value={address}
            onChangeText={(address) => setAddress(address)}
            inputTitle="Adresse postale"
          />
          <Input
            value={email}
            onChangeText={(email) => setEmail(email)}
            inputTitle="Adresse mail"
          />
          <Input
            value={password}
            onChangeText={(password) => setPassword(password)}
            inputTitle="Mot de passe"
            inputType="password"
            hideShowPassword={() => setHidePassword(!hidePasword)}
            showPassowrd={hidePasword}
          />
          <View style={styles._btn_main}>
            <Button
              buttonColor={Theme.secondry}
              buttonText="Choisir"
              borderWidth="100%"
              buttonHandler={() =>
                navigation.navigate("ProInscriptionphotos")
              }
            />
          </View>
          <View style={{ paddingBottom: 100 }} />
        </ScrollView>
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
  },
  _heading: {
    fontSize: 35,
    color: Theme.primary,
    fontFamily: Theme.bold,
    textAlign: "center",
    marginTop: screen.width * 0.1,
    marginBottom: screen.width * 0.1,
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
  _btn_main: {
    marginTop: 30,
  },
});
export default ProInscription;
