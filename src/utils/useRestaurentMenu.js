import { useState, useEffect } from "react";
import { RESTRO_MENU_URL } from "../Components/config";

const useRestaurentMenu = (id) => {
  const [restaurent, setRestauraunt] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  });

  async function getRestaurantInfo() {
    const data = await fetch(RESTRO_MENU_URL + id);
    const json = await data.json();
    console.log(json.data);
    setRestauraunt(json.data);
  }
  return restaurent;
};
export default useRestaurentMenu;
