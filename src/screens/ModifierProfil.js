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
  Image,
} from "react-native";
import Theme from "./../../theme";
import { Button, Header, Input } from "./../components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { FontAwesome5, Ionicons, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { AddIcon } from "./../svg";
const screen = Dimensions.get("window");
let ModifierProfil = ({ navigation }) => {
  let [name, setName] = useState("Briffaud");
  let [number, setNumber] = useState("Astrid");
  let [email, setEmail] = useState("astrid@gmail.com");
  let [sex, setSex] = useState("Femme");
  let [hidePasword, setHidePassword] = useState(true);
  let [password, setPassword] = useState("astrid@gmail.com");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  let [selecteDate, setSelectDate] = useState("");
  const [image, setImage] = useState(null);

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
        <Text style={styles._header_title}>Modifier profil</Text>
      </View>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={styles._header_btn}>
            <Button
              buttonColor={Theme.primary}
              buttonText="Midifier les photos"
              borderWidth="60%"
              //   buttonHandler={() =>
              //     navigation.navigate("InscriptionPhotoParticulier")
              //   }
            />
          </View>
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

          <Input
            value={sex}
            onChangeText={(sex) => setSex(sex)}
            inputTitle="Sexe"
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
          <View style={styles._signup_btn_main}>
            <Button
              buttonColor={Theme.secondry}
              buttonText="Enregistrer"
              borderWidth="100%"
              buttonHandler={() => navigation.navigate("Faq")}
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
  _signup_btn_main: {
    marginTop: 30,
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
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  _header_title: {
    fontSize: 20,
    fontFamily: Theme.semiBold,
    color: Theme.secondry,
  },
  _back_icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
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
  _profile_main_img: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  _header_btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
});
export default ModifierProfil;
