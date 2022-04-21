import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import Theme from "./../../theme";
import { Header } from "./../components";
import SvgQRCode from "react-native-qrcode-svg";

let QrCode = ({ navigation }) => {
  return (
    <SafeAreaView style={style._container}>
      <StatusBar
        hidden={false}
        backgroundColor={Theme.white}
        translucent={false}
        barStyle="dark-content"
      />
      <Header headerTitle="" backHandler={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style._heading}>Scan QR code</Text>
        <Text style={style._des}>
          Grâce à ce QR code, tu vas pouvoir avoir une réduction de 10% sur ....
        </Text>
        <View style={style._qr_main}>
          <SvgQRCode value="http://example.com" size={200} />
        </View>
        <TouchableOpacity
          style={style._btn}
          onPress={() => navigation.navigate("PostDetails")}
        >
          <Text style={style._bnt_text}>Barailleur</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
let style = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  _heading: {
    fontSize: 20,
    fontFamily: Theme.semiBold,
    color: Theme.secondry,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 50,
  },
  _des: {
    fontSize: 15,
    color: Theme.secondry,
    fontFamily: Theme.regular,
    marginHorizontal: 20,
    marginTop: 10,
  },
  _qr_main: {
    width: 250,
    height: 250,
    backgroundColor: Theme.white,
    elevation: 2,
    margin: 5,
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  _btn: {
    backgroundColor: Theme.primary,
    width: "50%",
    alignSelf: "center",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  _bnt_text: {
    color: Theme.white,
    fontSize: 15,
    fontFamily: Theme.regular,
  },
});
export default QrCode;
