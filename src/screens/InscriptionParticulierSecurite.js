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
import Theme from "./../../theme";
import { Button, Header } from "./../components";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const screen = Dimensions.get("window");
import * as ImagePicker from "expo-image-picker";
let InscriptionParticulierSecurite = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
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
        <View style={styles._active_step} />
        <View style={styles._step} />
      </View>
      <View style={styles._data_main}>
        <View>
          <Text style={styles._heading}>Vérification d'identité</Text>
          <Text style={styles._des}>
            Envoie nous un passeport ou ta crate d'identité. Ton document sera
            tout de suite supprimé après vérification de ton identité.
          </Text>
        </View>
        {image === null ? (
          <>
            <Text style={styles._upload_heading}>Pièce d'identité</Text>
            <TouchableOpacity
              style={styles._upload_btn_main}
              onPress={pickImage}
            >
              <MaterialIcons name="cloud-upload" size={40} color="white" />
            </TouchableOpacity>
          </>
        ) : (
          <View>
            <Text style={styles._upload_sucess_heading}>Succès ! </Text>
            <View style={styles._sucess_icon_main}>
              <Entypo name="check" size={34} color={"white"} />
            </View>
            <Text style={styles._upload_sucess_message}>
              Ta pièce d'identité a été envoyée avec succès !
            </Text>
          </View>
        )}
        <Button
          buttonColor={image === null ? "#919191" : Theme.secondry}
          buttonText="Envoyer"
          borderWidth="100%"
          buttonDisable={image === null ? true : false}
          buttonHandler={() =>
            navigation.navigate("InscriptionParticulierSecuriteCard")
          }
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
    fontSize: 25,
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
  _upload_btn_main: {
    width: 104,
    height: 104,
    backgroundColor: Theme.secondry,
    borderRadius: 104 / 2,
    alignSelf: "center",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  _upload_heading: {
    textAlign: "center",
    fontSize: 15,
    color: Theme.secondry,
    fontFamily: Theme.medium,
  },
  _upload_sucess_heading: {
    color: "#4FCE6B",
    textAlign: "center",
    fontFamily: Theme.medium,
    fontSize: 20,
  },
  _sucess_icon_main: {
    width: 104,
    height: 104,
    backgroundColor: "#4FCE6B",
    borderRadius: 104 / 2,
    alignSelf: "center",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  _upload_sucess_message: {
    color: "#919191",
    fontSize: 15,
    fontFamily: Theme.medium,
    textAlign: "center",
    marginTop: 20,
  },
});
export default InscriptionParticulierSecurite;
