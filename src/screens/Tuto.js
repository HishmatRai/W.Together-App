import React from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Theme from "./../../theme";
import { TutoSmallImage, TutoImg } from "./../svg";
import { Button, Header } from "./../components";
const screen = Dimensions.get("window");
let Tuto = ({ navigation }) => {
  return (
    <SafeAreaView style={styles._container}>
      <StatusBar
        hidden={false}
        backgroundColor={Theme.white}
        translucent={false}
        barStyle="dark-content"
      />
      <Header
        headerTitle="Tutoriel"
        backHandler={() => navigation.goBack()}
        hideBackIcon={true}
      />
      <View style={styles._data_main}>
        <View>
          <View style={styles._img_main}>
            {screen.width <= 380 ? <TutoSmallImage /> : <TutoImg />}
          </View>
          <View>
            <Text style={styles._heading}>Tutoriel</Text>
            <Text style={styles._des}>
              Tu t'aprête à suivre le tutoriel qui t'expliquera les différentes
              fonctionnalités de l'application.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles._btn_group}>
        <TouchableOpacity style={styles._passer_btn}>
          <Text style={styles._passer_btn_text}>Passer ></Text>
        </TouchableOpacity>
        <Button
          buttonColor={Theme.secondry}
          buttonText="C'est parti !"
          borderWidth="48%"
          buttonHandler={() => navigation.navigate("TabStack")}
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
    marginTop: 20,
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
    margin: 20,
  },
  _des: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: Theme.medium,
  },
  _passer_btn: {
    height: 50,
    borderRadius: 15,
    marginTop: 10,
    borderColor: Theme.primary,
    width: "48%",
    justifyContent: "center",
  },
  _passer_btn_text: {
    fontSize: 16,
    fontFamily: Theme.regular,
    color: Theme.primary,
  },
});
export default Tuto;
