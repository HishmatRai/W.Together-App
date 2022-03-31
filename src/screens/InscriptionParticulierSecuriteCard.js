import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Theme from "./../../theme";
import { Button, Header } from "./../components";
const screen = Dimensions.get("window");
import { Card1Icon, Card2Icon, Card3Icon, Card4Icon } from "./../svg";
let InscriptionParticulierSecuriteCard = ({ navigation }) => {
  let CardData = [
    {
      title: "Sortie",
      icon: <Card1Icon />,
      bgColor: Theme.primary,
    },
    {
      title: "Culture",
      icon: <Card2Icon />,
      bgColor: "#F3F3F3",
    },
    {
      title: "Sport",
      icon: <Card3Icon />,
      bgColor: Theme.primary,
    },
    {
      title: "Carritatif",
      icon: <Card4Icon />,
      bgColor: "#F3F3F3",
    },
  ];
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
        <View style={styles._step} />
        <View style={styles._active_step} />
      </View>
      <View style={styles._data_main}>
        <View>
          <Text style={styles._heading}>Catégories</Text>
          <Text style={styles._des}>
            Choisis les catégories qui t'intéressent et que tu aimerais partager
            avec les autres utilisateurs.
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._card_main}>
            {CardData.map((v, i) => {
              return (
                <TouchableOpacity key={i} style={styles._card}>
                  <View
                    style={[
                      styles._card_icon_main,
                      { backgroundColor: v.bgColor },
                    ]}
                  >
                    {v.icon}
                  </View>
                  <Text style={styles._card_title}>{v.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles._btn_main}>
        <Button
          buttonColor={Theme.secondry}
          buttonText="Envoyer"
          borderWidth="100%"
          buttonHandler={() => navigation.navigate("Tuto")}
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
    marginTop: screen.width * 0.2,
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
  _des: {
    fontSize: 13,
    fontFamily: Theme.regular,
    color: Theme.secondry,
    textAlign: "center",
  },
  _card_icon_main: {
    width: "100%",
    borderRadius: 10,
    height: 163,
    alignItems: "center",
    justifyContent: "center",
  },
  _card_title: {
    fontSize: 15,
    fontFamily: Theme.regular,
    textAlign: "center",
    color: "#919191",
    marginTop: 10,
  },
  _card: {
    width: "48%",
    marginTop: 10,
  },
  _card_main: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  _btn_main: {
    padding: 20,
  },
});
export default InscriptionParticulierSecuriteCard;
