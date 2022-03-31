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
  ScrollView,
  ImageBackground,
} from "react-native";
import Theme from "./../../theme";
import { Button, Header } from "./../components";
import { AddIcon } from "./../svg";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
const screen = Dimensions.get("window");
let InscriptionPhotoParticulier = ({ navigation }) => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._steps_main}>
          <View style={styles._step} />
          <View style={styles._active_step} />
          <View style={styles._step} />
          <View style={styles._step} />
        </View>
        <View style={styles._data_main}>
          <View>
            <Text style={styles._heading}>Ajoute des photos de toi.</Text>
          </View>
          {image === null ? (
            <TouchableOpacity
              style={styles._upload_btn_main}
              onPress={pickImage}
            >
              <AddIcon />
            </TouchableOpacity>
          ) : (
            <View>
              <TouchableOpacity
                style={styles._upload_img_main}
                onPress={pickImage}
              >
                <Image
                  source={{
                    uri: image,
                  }}
                  style={styles._profile_main_img}
                />
              </TouchableOpacity>
            </View>
          )}
          <ImageBackground
            source={require("./../../assets/images/bgImags.png")}
            style={styles._bg_image}
          >
            <View style={{ padding: 20 }}>
              <Text style={styles._bg_heading}>
                Montre nous que c'est bien toi.
              </Text>
              <Text style={styles._bg_des}>
                Afin d'assurer ta sécurité et celle des autres, procède à une
                vérification d'identité en te prenant en photo. Celle-ci ne sera
                pas montrée aux autres utilisateurs et sera supprimée après
                vérification de ton identitée
              </Text>
              <Text style={styles._camera_heading}>Dis cheese ! </Text>
              {image === null ? (
                <TouchableOpacity
                  style={styles._camera_btn}
                  onPress={pickImage}
                >
                  <Entypo name="camera" size={34} color={Theme.white} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles._camera_btn2}
                  onPress={pickImage}
                >
                  <Entypo name="check" size={34} color={"#4FCE6B"} />
                </TouchableOpacity>
              )}
              <View style={{ marginTop: 100 }}>
                <Button
                  buttonColor={image === null ? "#919191" : Theme.secondry}
                  buttonText="Suivant"
                  borderWidth="100%"
                  buttonDisable={image === null ? true : false}
                    buttonHandler={() =>
                      navigation.navigate("InscriptionParticulierSecurite")
                    }
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  _data_main: {
    marginTop: screen.width * 0.1,
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
  _upload_btn_main: {
    width: 195,
    height: 195,
    backgroundColor: Theme.gray,
    borderRadius: 195 / 2,
    alignSelf: "center",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  _profile_main_img: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  _upload_img_main: {
    width: 195,
    height: 195,
    backgroundColor: Theme.gray,
    borderRadius: 195 / 2,
    alignSelf: "center",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: Theme.white,
    marginTop: 30,
  },
  _bg_image: {
    width: "100%",
    marginTop: 50,
  },
  _bg_heading: {
    color: Theme.white,
    fontSize: 30,
    fontFamily: Theme.bold,
  },
  _bg_des: {
    color: Theme.white,
    fontSize: 15,
    fontFamily: Theme.regular,
  },
  _camera_heading: {
    color: Theme.secondry,
    fontSize: 30,
    fontFamily: Theme.bold,
    textAlign: "center",
  },
  _camera_btn: {
    width: 104,
    height: 104,
    backgroundColor: Theme.secondry,
    borderRadius: 104 / 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  _camera_btn2: {
    width: 104,
    height: 104,
    backgroundColor: Theme.white,
    borderRadius: 104 / 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
});
export default InscriptionPhotoParticulier;
