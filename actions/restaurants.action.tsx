export default class RestaurantAction {
  static getRestaurants = async () => {
    const res = await fetch("", { method: "GET" })
      .then((data) => data)
      .then((data) => data.json());
    console.log("Hello world");
    return res;
  };
}
