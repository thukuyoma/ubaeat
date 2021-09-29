import React from "react";
import { View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
export default function FooterCard({
  iconName,
  title,
}: {
  iconName: string;
  title: string;
}) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesome name={iconName} size={25} />
      <Text
        style={{
          marginTop: 5,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
