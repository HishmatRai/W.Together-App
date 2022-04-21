import React from "react";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import Theme from "./../../theme";
import { Ionicons } from "@expo/vector-icons";

let PostDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles._container}>
      <StatusBar
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <ImageBackground
        source={require("./../../assets/images/postBg.png")}
        style={styles._bg_img}
      >
        <View style={styles._data_main}>
          <View style={styles._header_main}>
            <TouchableOpacity
              style={styles._back_icon}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="chevron-back-sharp"
                size={30}
                color={Theme.white}
              />
            </TouchableOpacity>
            <View style={styles._steps_main}>
              <View style={styles._active_step} />
              <View style={styles._step} />
              <View style={styles._step} />
              <View style={styles._step} />
            </View>
            <View style={styles._back_icon} />
          </View>
          <View>
            <View style={styles._calendar_icon}>
              <Ionicons name="ios-calendar" size={30} color={Theme.white} />
            </View>
            <Text style={styles._heading}>Le Barailleur</Text>
            <View style={styles._location_main}>
              <Ionicons name="location-sharp" size={20} color={Theme.white} />
              <Text style={styles._location}>Rennes</Text>
            </View>
            <TouchableOpacity
              style={styles._sorties_btn}
              onPress={() => navigation.navigate("ParametresNotif")}
            >
              <Text style={styles._sorties_btn_text}>Sortie</Text>
            </TouchableOpacity>
            <Text style={styles._des_heading}>Description</Text>
            <Text style={styles._des}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id eros ac ex semper rutrum ut ut eros.
            </Text>
          </View>
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
  _steps_main: {
    flexDirection: "row",
    alignItems: "center",
    width: "15%",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  _active_step: {
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
    backgroundColor: Theme.white,
  },
  _step: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: Theme.white,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  _data_main: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    marginVertical: 20,
  },
  _calendar_icon: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: Theme.primary,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginRight: 20,
  },
  _heading: {
    fontSize: 30,
    fontFamily: Theme.bold,
    color: Theme.white,
    marginHorizontal: 20,
  },
  _location_main: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  _location: {
    fontSize: 15,
    fontFamily: Theme.medium,
    color: Theme.white,
  },
  _sorties_btn: {
    backgroundColor: Theme.primary,
    borderRadius: 100,
    height: 30,
    width: "20%",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  _sorties_btn_text: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 15,
  },
  _des_heading: {
    color: Theme.white,
    fontSize: 15,
    fontFamily: Theme.semiBold,
    marginHorizontal: 20,
    marginTop: 20,
  },
  _des: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 15,
    marginHorizontal: 20,
  },
});
export default PostDetails;
