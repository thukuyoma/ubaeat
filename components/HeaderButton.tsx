import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function HeaderButton({
  title,
  activeTab,
  setActiveTab,
}: {
  title: string;
  activeTab: string;
  setActiveTab: (arg: string) => void;
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === title ? "black" : "white",
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
      }}
      onPress={() => setActiveTab(title)}
    >
      <Text
        style={{
          color: activeTab === title ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
