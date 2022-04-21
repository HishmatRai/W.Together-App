import React from "react";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import Theme from "./../../theme";
import { Ionicons } from "@expo/vector-icons";
import { SendIcon } from "./../svg";
let AutorisationParticiper = ({ navigation }) => {
  return (
    <SafeAreaView style={styles._container}>
      <StatusBar
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <ImageBackground
        source={require("./../../assets/images/AutorisationParticiperBG.png")}
        style={styles._bg_img}
      >
        <View style={styles._header_main}>
          <TouchableOpacity
            style={styles._back_icon}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back-sharp" size={30} color={Theme.white} />
          </TouchableOpacity>

          <View style={styles._back_icon} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles._heading}>Participation</Text>
          <Text style={styles._sub_heading}>Acceptée !</Text>
          <Image
            source={require("./../../assets/images/profile.jpg")}
            style={styles._profile_img}
          />
          <Text style={styles._des}>
            Alban a accepté ta participation à son événement. N'hésite pas à te
            présenter auprès des autres participants.
          </Text>
        </ScrollView>
        <View style={styles._message_main}>
          <TextInput
            style={styles._textinput}
            placeholder="Envoyer votre message..."
          />
          <TouchableOpacity>
            <SendIcon />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
  _bg_img: {
    flex: 1,
    width: "100%",
  },
  _back_icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  _heading: {
    color: Theme.white,
    fontSize: 20,
    fontFamily: Theme.semiBold,
    textAlign: "center",
    marginTop: 50,
  },
  _sub_heading: {
    color: Theme.white,
    fontSize: 30,
    fontFamily: Theme.bold,
    textAlign: "center",
  },
  _profile_img: {
    width: 125,
    height: 125,
    borderWidth: 5,
    borderColor: Theme.white,
    borderRadius: 125 / 2,
    alignSelf: "center",
    marginTop: 20,
  },
  _des: {
    color: Theme.white,
    fontSize: 15,
    fontFamily: Theme.regular,
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: "center",
  },
  _message_main: {
    backgroundColor: Theme.white,
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 100,
  },
  _textinput: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 15,
    fontFamily: Theme.medium,
    color: Theme.grayLight,
  },
});
export default AutorisationParticiper;
