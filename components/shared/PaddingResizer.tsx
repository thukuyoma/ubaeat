import React from "react";
import { View, Text } from "react-native";

export default function PaddingResizer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <View style={{ paddingHorizontal: 10 }}>{children}</View>;
}
