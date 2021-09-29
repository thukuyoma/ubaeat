import React from "react";
import { View, Text } from "react-native";
import FooterCard from "./FooterCard";

export default function Footer() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
        marginBottom: 30,
      }}
    >
      <FooterCard iconName="home" title="Home" />
      <FooterCard iconName="search" title="Browse" />
      <FooterCard iconName="shopping-bag" title="Grocery" />
      <FooterCard iconName="receipt" title="Orders" />
      <FooterCard iconName="user" title="Account" />
    </View>
  );
}
