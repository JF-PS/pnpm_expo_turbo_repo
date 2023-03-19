import React from "react";
import { View } from "react-native";
import {
  FloatingButton,
  BottomNavigation,
  TextInput,
  Text,
  Navbar,
} from "@frenchies-spots/materials";

export const HomePage = () => {
  return (
    <View>
      {/* <Text style={{ fontFamily: "Montserrat-Bold" }}>Native</Text> */}
      {/* <FloatingButton
    icon="map"
    mode="contained"
    onPress={() => {
      console.log("Pressed!");
      alert("Pressed!");
    }}
  >
    Carte
  </FloatingButton>

  <StatusBar style="auto" />
  <TextInput style={{ borderWidth: 2 }} />

  <BottomNavigation /> */}
      <TextInput style={{ borderWidth: 2 }} />
      <TextInput style={{ borderWidth: 2 }} />
      <TextInput style={{ borderWidth: 2 }} />
      <TextInput style={{ borderWidth: 2 }} />
      <TextInput style={{ borderWidth: 2 }} />
      <Navbar />
    </View>
  );
};
