import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View } from "react-native";
import SafeAreaTop from "./components/shared/SafeAreaTop";

import Home from "./Home";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <SafeAreaTop />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </View>
  );
}
