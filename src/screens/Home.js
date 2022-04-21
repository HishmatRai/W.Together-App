import React from "react";
import Theme from "./../../theme";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
let Home = ({ navigation }) => {
  let CardData = [
    {
      cardImage: require("./../../assets/images/party1.jpg"),
      des: "Encore une superbe soirée avec vous les amis ! J'espère qu'on en refera une bientôt.",
      time: "à l'instant",
    },
    {
      cardImage: require("./../../assets/images/party2.jpg"),
      des: "Encore une superbe soirée avec vous les amis ! J'espère qu'on en refera une bientôt.",
      time: "Il y 2 jours",
    },
    {
      cardImage: require("./../../assets/images/party3.jpg"),
      des: "Encore une superbe soirée avec vous les amis ! J'espère qu'on en refera une bientôt.",
      time: "à l'instant",
    },
  ];
  return (
    <SafeAreaView style={styles._container}>
      <StatusBar
        hidden={false}
        backgroundColor={Theme.primary}
        translucent={false}
        barStyle="light-content"
      />
      <ImageBackground
        source={require("./../../assets/images/homeBG.png")}
        style={styles._bg_image}
      >
        <View style={styles._header_main}>
          <View style={styles._header_profile_section}>
            <TouchableOpacity>
              <Image
                source={require("./../../assets/images/profile.jpg")}
                style={styles._header_profile_img}
              />
            </TouchableOpacity>
            <Text style={styles._header_user_name}>Astrid Briffaud</Text>
          </View>
          <View style={styles._header_profile_section}>
            <TouchableOpacity>
              <Ionicons name="notifications" size={24} color={Theme.white} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Ionicons name="call" size={24} color={Theme.white} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles._header_location_main}>
          <Text style={styles._header_heading}>Bienvenue</Text>
          <View style={styles._location_main}>
            <Ionicons name="location-sharp" size={24} color={Theme.white} />
            <Text style={styles._location}>Rennes</Text>
          </View>
        </View>
        <View style={styles._notification_main}>
          <View style={styles._notification_icon}>
            <Entypo name="check" size={24} color={Theme.white} />
          </View>
          <Text style={styles._notification_heading}>C'est un succès !</Text>
          <Text style={styles._notification_des}>
            Ton poste sur l'événement un ptit verre ? à bien été publié.
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {CardData.map((cardValue, cardIndex) => {
            return (
              <TouchableOpacity
                key={cardIndex}
                style={styles._card_main}
                onPress={() => navigation.navigate("QrCode")}
              >
                <View style={styles._card_header_main}>
                  <Image
                    source={require("./../../assets/images/profile.jpg")}
                    style={styles._card_profile_img}
                  />
                  <View>
                    <Text style={styles._card_user_name}>Echonova</Text>
                    <View style={styles._card_location_main}>
                      <Ionicons
                        name="location-sharp"
                        size={20}
                        color={Theme.grayLight}
                      />
                      <Text style={styles._card_location}>Rennes</Text>
                    </View>
                  </View>
                </View>
                <Image source={cardValue.cardImage} style={styles._card_img} />
                <Text style={styles._card_des}>
                  {cardValue.des}{" "}
                  <Text style={styles._card_des_time}>{cardValue.time}</Text>
                </Text>
                <View style={styles._card_footer_main}>
                  <View style={styles._card_footer_profile_main}>
                    <Image
                      source={require("./../../assets/images/profile.jpg")}
                      style={styles._card_footer_img1}
                    />
                    <Image
                      source={require("./../../assets/images/party1.jpg")}
                      style={styles._card_footer_img2}
                    />
                    <View style={styles._total_main}>
                      <Text style={styles._counter_show}>+3</Text>
                    </View>
                    <Text style={styles._card_avis}>Avis</Text>
                  </View>
                  <Entypo
                    name="chevron-right"
                    size={24}
                    color={Theme.primary}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
  _bg_image: {
    flex: 1,
    width: "100%",
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },
  _header_profile_section: {
    flexDirection: "row",
    alignItems: "center",
  },
  _header_profile_img: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: Theme.white,
    borderRadius: 45 / 2,
  },
  _header_user_name: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 15,
    marginLeft: 10,
  },
  _header_location_main: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    marginBottom: 30,
  },
  _header_heading: {
    color: Theme.white,
    fontSize: 30,
    fontFamily: Theme.bold,
  },
  _location_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _location: {
    color: Theme.white,
    fontSize: 15,
    fontFamily: Theme.regular,
  },
  _card_main: {
    backgroundColor: Theme.white,
    marginHorizontal: 20,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  _card_header_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _card_profile_img: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    marginRight: 15,
  },
  _card_user_name: {
    color: Theme.secondry,
    fontFamily: Theme.semiBold,
    fontSize: 15,
  },
  _card_location_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _card_location: {
    fontSize: 15,
    color: Theme.grayLight,
    fontFamily: Theme.regular,
    marginLeft: 5,
  },
  _card_img: {
    width: "100%",
    height: 290,
    marginTop: 20,
  },
  _card_des: {
    fontFamily: Theme.regular,
    color: "#2E2E2E",
    fontSize: 15,
    marginTop: 10,
  },
  _card_des_time: {
    fontFamily: Theme.regular,
    color: Theme.grayLight,
    fontSize: 15,
  },
  _card_footer_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  _card_footer_profile_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _card_footer_img1: {
    width: 33,
    height: 33,
    borderWidth: 2,
    borderColor: Theme.white,
    borderRadius: 33 / 2,
  },
  _card_footer_img2: {
    width: 33,
    height: 33,
    borderWidth: 2,
    borderColor: Theme.white,
    borderRadius: 33 / 2,
    marginLeft: -10,
  },
  _total_main: {
    width: 33,
    height: 33,
    borderWidth: 2,
    borderColor: Theme.white,
    borderRadius: 33 / 2,
    marginLeft: -10,
    backgroundColor: Theme.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  _counter_show: {
    color: Theme.white,
    fontFamily: Theme.semiBold,
    fontSize: 15,
  },
  _card_avis: {
    color: Theme.primary,
    fontSize: Theme.regular,
    fontSize: 15,
    marginLeft: 10,
  },
  _notification_main: {
    backgroundColor: Theme.white,
    borderRadius: 10,
    padding: 10,
    marginLeft: 20,
    position: "absolute",
    top: 180,
    width: "90%",
    elevation: 2,
  },
  _notification_icon: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    backgroundColor: "#4FCE6B",
    marginTop: -30,
    borderWidth: 5,
    borderColor: Theme.white,
    alignItems: "center",
    justifyContent: "center",
  },
  _notification_heading: {
    color: "#4FCE6B",
    fontFamily: Theme.regular,
    fontSize: 15,
    marginLeft: 30,
  },
  _notification_des: {
    fontSize: 12,
    fontFamily: Theme.regular,
    color: Theme.grayLight,
    marginLeft: 30,
  },
});
export default Home;
