import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View } from "react-native";
import SafeAreaTop from "./components/shared/SafeAreaTop";

import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
      }}
    >
      <StatusBar style="auto" />
      <SafeAreaTop />

      {/* <Home /> */}
      <RestaurantDetails />
    </View>
  );
}
