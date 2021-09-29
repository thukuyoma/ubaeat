import React, { useEffect, useState } from "react";
import { View } from "react-native";
import RestaurantCard from "./RestaurantCard";

export default function Restaurants({
  location,
  activeTab,
}: {
  location: string;
  activeTab: string;
}) {
  const [restaurants, setRestuarants] = useState<Array<any>>([]);
  const api_key = `_4ctp8I6579iKqsJcppXcKucD5cXL7tybRXi2O6QoT_LAhp1Qe0ZnlbfWlC5TXgDkAn74CsbrygFOWKUcwiHckabpZwRSQhMzvXE7GvxkmA4rqk3OpN0vBpGQalTYXYx`;

  const fetchRestaurants = () => {
    fetch(
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}`,
      {
        headers: {
          Authorization: `Bearer ${api_key}`,
        },
      }
    )
      .then((res) => res.json())
      .then((json) =>
        setRestuarants(
          json.businesses.filter((business: any) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
    return;
  };

  useEffect(() => {
    fetchRestaurants();
  }, [location, activeTab]);

  return (
    <View
      style={{
        marginTop: 15,
      }}
    >
      {restaurants.splice(0, 30).map((business: any) => (
        <View key={business.id}>
          <RestaurantCard
            image={business.image_url}
            name={business.name}
            rating={business.rating}
          />
        </View>
      ))}
    </View>
  );
}
