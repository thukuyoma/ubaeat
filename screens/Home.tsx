import React from "react";
import { View } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 15,
        }}
      >
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
    </View>
  );
}
