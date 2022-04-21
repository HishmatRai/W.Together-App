import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import Theme from "./../../theme";
import { Ionicons, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Button } from "./../components";
let Publier = ({ navigation }) => {
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
      <View style={styles._header_main}>
        <TouchableOpacity
          style={styles._back_icon}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-sharp" size={30} color={Theme.primary} />
        </TouchableOpacity>
        <Image
          source={require("./../../assets/images/profile.jpg")}
          style={styles._header_profile_img}
        />
        <Text style={styles._header_title}>Un ptit verre ?</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles._upload_btn} onPress={pickImage}>
          <View style={styles._upload_btn_icon}>
            <Entypo name="plus" size={35} color={Theme.white} />
          </View>
        </TouchableOpacity>
        <Text style={styles._heading}>Légende</Text>
        <View style={styles._input_main}>
          <TextInput
            style={styles._textinput}
            multiline={true}
            numberOfLines={13}
          />
        </View>

        <View style={styles._btn}>
          <Button
            buttonColor={Theme.secondry}
            buttonText="Publier"
            borderWidth="100%"
            buttonHandler={() =>
              navigation.navigate("AutorisationParticiper")
            }
          />
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
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  _header_title: {
    fontSize: 15,
    fontFamily: Theme.semiBold,
    color: Theme.secondry,
    marginLeft: 10,
  },
  _back_icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _header_profile_img: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    borderWidth: 2,
    borderColor: Theme.primary,
    marginLeft: 20,
  },
  _upload_btn: {
    marginHorizontal: 20,
    backgroundColor: Theme.gray,
    borderRadius: 5,
    height: 250,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  _upload_btn_icon: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: Theme.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  _heading: {
    marginHorizontal: 20,
    marginTop: 30,
    fontSize: 15,
    fontFamily: Theme.medium,
    color: Theme.secondry,
  },
  _input_main: {
    marginHorizontal: 20,
    backgroundColor: Theme.gray,
    borderRadius: 5,
    marginTop: 30,
    padding: 15,
  },
  _textinput: {
    backgroundColor: Theme.gray,
    borderRadius: 5,
    color: Theme.secondry,
    fontSize: 15,
    fontFamily: Theme.regular,
    textAlignVertical: "top",
  },
  _btn: {
    margin: 20,
  },
});
export default Publier;
