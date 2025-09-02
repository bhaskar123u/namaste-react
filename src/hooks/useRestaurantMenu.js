import { MENU_API } from "../common/constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  // fetch data only once
  useEffect(() => {
    fetchData(resId, setRestaurantMenu);
  }, []);

  async function fetchData(resId, setRestaurantMenu) {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestaurantMenu(json);
  }

  return restaurantMenu;
};

export default useRestaurantMenu;
