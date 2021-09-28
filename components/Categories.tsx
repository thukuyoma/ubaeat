import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    title: "Pick-up",
  },
  {
    image: require("../assets/images/bread.png"),
    title: "Backery Items",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    title: "Soft Drinks",
  },
  {
    image: require("../assets/images/fast-food.png"),
    title: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    title: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    title: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    title: "Desserts",
  },
];

const testImage = require("../assets/images/shopping-bag.png");
export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 20,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <View
            key={item.title}
            style={{
              marginRight: 30,
              alignItems: "center",
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontWeight: "900",
              }}
            >
              {item.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
