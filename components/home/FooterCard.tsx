import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
export default function FooterCard({
  iconName,
  title,
}: {
  iconName: string;
  title: string;
}) {
  return (
    <TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name={iconName} style={{ color: "gray" }} size={25} />
        <Text
          style={{
            marginTop: 5,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
