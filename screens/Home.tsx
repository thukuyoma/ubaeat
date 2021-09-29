import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Categories from "../components/Categories";
import Footer from "../components/home/Footer";
import HeaderTabs from "../components/HeaderTabs";
import Restaurants from "../components/Restaurants";
import SearchBar from "../components/SearchBar";
import { Divider } from "react-native-elements";

export default function Home() {
  const [location, setLocation] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 15,
        }}
      >
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setLocation={setLocation} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Restaurants location={location} activeTab={activeTab} />
      </ScrollView>
      <Divider width={1} />
      <Footer />
    </View>
  );
}
