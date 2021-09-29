import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function RestaurantCard({
  image,
  name,
  rating,
}: {
  image: string;
  name: string;
  rating: number;
}) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
        position: "relative",
      }}
    >
      <View
        style={{
          position: "absolute",
          right: 20,
          top: 20,
          zIndex: 22,
        }}
      >
        <TouchableOpacity onPress={() => alert("We about clicking favorite")}>
          <MaterialIcons
            style={{ color: "#fff" }}
            name="favorite-border"
            size={33}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={{
          height: 250,
          width: "100%",
          borderRadius: 3,
        }}
        source={{ uri: image }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => alert("You are about view this restaurant")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: "#b4b4b4",
                fontSize: 13,
              }}
            >
              35 - 45 . min
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
            backgroundColor: "#eee",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "900",
            }}
          >
            {rating}
          </Text>
        </View>
      </View>
    </View>
  );
}
