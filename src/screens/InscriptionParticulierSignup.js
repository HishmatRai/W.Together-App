import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Theme from "./../../theme";
import { Button, Header, Input } from "./../components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";
const screen = Dimensions.get("window");
let InscriptionParticulierSignup = ({ navigation }) => {
  let [name, setName] = useState("");
  let [number, setNumber] = useState("");
  let [email, setEmail] = useState("");
  let [hidePasword, setHidePassword] = useState(true);
  let [password, setPassword] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  let [selecteDate, setSelectDate] = useState("");
  let [gender, setGender] = useState("Homme");
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setSelectDate(date);
    hideDatePicker();
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
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._steps_main}>
            <View style={styles._active_step} />
            <View style={styles._step} />
            <View style={styles._step} />
            <View style={styles._step} />
          </View>
          <Text style={styles._heading}>à propos de toi...</Text>
          <Input
            value={name}
            onChangeText={(name) => setName(name)}
            inputTitle="Nom"
          />
          <Input
            value={number}
            onChangeText={(number) => setNumber(number)}
            inputTitle="Prénom"
          />
          <Text
            style={[
              styles._title,
              { color: !isDatePickerVisible ? Theme.secondry : Theme.primary },
            ]}
          >
            Date de naissance
          </Text>
          <TouchableOpacity
            style={[
              styles._date_btn,

              {
                borderColor: !isDatePickerVisible ? Theme.gray : Theme.primary,
              },
              {
                backgroundColor: !isDatePickerVisible
                  ? Theme.gray
                  : Theme.white,
              },
            ]}
            onPress={showDatePicker}
          >
            {selecteDate === "" ? (
              <Text></Text>
            ) : (
              <Text style={styles._textinput2}>
                {moment(selecteDate).format("MMMM DD YYYY")}
              </Text>
            )}
            <FontAwesome5
              name="calendar-alt"
              size={24}
              color={!isDatePickerVisible ? Theme.secondry : Theme.primary}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>

          <Text style={[styles._title, { color: Theme.secondry }]}>Tu es</Text>
          <View style={styles._btn_group}>
            <TouchableOpacity
              style={
                gender === "Femme" ? styles._active_btn_main : styles._btn_main
              }
              onPress={() => setGender("Femme")}
            >
              <Text
                style={
                  gender === "Femme"
                    ? styles._active_btn_text
                    : styles._btn_text
                }
              >
                Femme
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                gender === "Homme" ? styles._active_btn_main : styles._btn_main
              }
              onPress={() => setGender("Homme")}
            >
              <Text
                style={
                  gender === "Homme"
                    ? styles._active_btn_text
                    : styles._btn_text
                }
              >
                Homme
              </Text>
            </TouchableOpacity>
          </View>
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
          <View style={styles._signup_btn_main}>
            <Button
              buttonColor={Theme.secondry}
              buttonText="Suivant"
              borderWidth="100%"
              buttonHandler={() =>
                navigation.navigate("InscriptionPhotoParticulier")
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
    fontSize: 32,
    color: Theme.primary,
    fontFamily: Theme.bold,
    textAlign: "center",
    marginTop: screen.width * 0.1,
    marginBottom: screen.width * 0.1,
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
  _signup_btn_main: {
    marginTop: 30,
  },
  _title: {
    fontSize: 15,
    fontFamily: Theme.regular,
    color: Theme.primary,
    marginTop: 15,
  },
  _date_btn: {
    height: 48,
    borderRadius: 15,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
  },
  _textinput2: {
    color: Theme.secondry,
    fontSize: 15,
    fontFamily: Theme.regular,
  },
  _btn_group: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _active_btn_main: {
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderColor: Theme.primary,
    backgroundColor: Theme.primary,
    width: "48%",
    borderWidth: 1,
  },
  _active_btn_text: {
    fontSize: 16,
    fontFamily: Theme.regular,
    color: Theme.white,
  },
  _btn_main: {
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderColor: Theme.primary,
    backgroundColor: Theme.white,
    width: "48%",
    borderWidth: 1,
  },
  _btn_text: {
    fontSize: 16,
    fontFamily: Theme.regular,
    color: Theme.primary,
  },
});
export default InscriptionParticulierSignup;
