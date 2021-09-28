import React from "react";
import { View } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <View>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <HeaderTabs />
        <SearchBar />
      </View>
    </View>
  );
}
