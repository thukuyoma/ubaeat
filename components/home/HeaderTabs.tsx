import React from "react";
import { View } from "react-native";
import HeaderButton from "./HeaderButton";

export default function HeaderTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (value: string) => void;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        paddingBottom: 10,
        padding: 15,
      }}
    >
      <HeaderButton
        title="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}
