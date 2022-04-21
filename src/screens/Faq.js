import React, { useState } from "react";
import Theme from "./../../theme";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
let Faq = ({ navigation }) => {
  let [selectedAccordion, setSelectedAccordion] = useState();
  let Accordion = [
    { heading: "Comment changer mon mot de passe ?" },
    { heading: "Comment régler les différentes notifications ?" },
    { heading: "Comment partager un événément ?" },
    { heading: "Autre" },
  ];
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
        <Text style={styles._header_title}>Contact support</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles._heading}>FAQ et support</Text>
        <Text style={styles._des}>
          Vous ne trouvez pas les réponses à vos questions ? Contactez le
          support afin qu'il vous viennes en aide.
        </Text>
        <TouchableOpacity
          style={styles._card}
          onPress={() => navigation.navigate("Publier")}
        >
          <View style={styles._card_icon}>
            <FontAwesome name="file" size={20} color={Theme.primary} />
          </View>
          <Text style={styles._card_title}>Conditions générales</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles._card}
          onPress={() => navigation.navigate("Publier")}
        >
          <View style={styles._card_icon}>
            <MaterialIcons name="email" size={20} color={Theme.primary} />
          </View>
          <Text style={styles._card_title}>Nous contacter</Text>
        </TouchableOpacity>
        <Text style={styles._accordion_heading}>Populaire</Text>
        {Accordion.map((accordionValue, accordionIndex) => {
          return (
            <View style={styles._accordion_main} key={accordionIndex}>
              <TouchableOpacity
                style={styles._accordion_header}
                onPress={() => setSelectedAccordion(accordionIndex)}
              >
                <Text style={styles._accordion_title}>
                  {accordionValue.heading}
                </Text>
                {selectedAccordion === accordionIndex ? (
                  <Entypo
                    name="chevron-small-down"
                    size={24}
                    color={Theme.primary}
                  />
                ) : (
                  <Entypo
                    name="chevron-small-up"
                    size={24}
                    color={Theme.primary}
                  />
                )}
              </TouchableOpacity>
              {selectedAccordion === accordionIndex && (
                <Text style={styles._accordion_des}>
                  Vous ne trouvez pas les réponses à vos questions ? Contactez
                  le support afin qu'il vous viennes en aide.
                </Text>
              )}
            </View>
          );
        })}
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
  _heading: {
    fontSize: 20,
    fontFamily: Theme.semiBold,
    color: Theme.secondry,
    marginHorizontal: 20,
    marginTop: 20,
  },
  _des: {
    fontSize: 15,
    fontFamily: Theme.regular,
    color: Theme.grayLight,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  _card: {
    backgroundColor: Theme.white,
    elevation: 3,
    margin: 2,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  _card_icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Theme.primaryLight,
    marginRight: 10,
  },
  _card_title: {
    fontSize: 15,
    fontFamily: Theme.regular,
    color: Theme.secondry,
  },
  _accordion_heading: {
    fontSize: 15,
    fontFamily: Theme.semiBold,
    color: Theme.secondry,
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  _accordion_main: {
    backgroundColor: Theme.white,
    elevation: 5,
    margin: 2,
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  _accordion_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  _accordion_title: {
    fontSize: 15,
    fontFamily: Theme.medium,
    color: Theme.secondry,
    flex: 1,
  },
  _accordion_des: {
    fontSize: 15,
    fontFamily: Theme.regular,
    color: Theme.grayLight,
    marginHorizontal: 20,
    marginBottom: 10,
  },
});
export default Faq;
