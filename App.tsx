import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View } from "react-native";
import SafeAreaTop from "./components/shared/SafeAreaTop";

import Home from "./screens/Home";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <StatusBar style="auto" />
      <SafeAreaTop />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </View>
  );
}
