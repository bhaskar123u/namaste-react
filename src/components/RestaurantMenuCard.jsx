import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../common/constants";
import FoodItemCard from "./FoodItemCard";

const RestaurantMenuCard = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  // runs once
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  async function fetchMenu() {
    let data = await fetch(MENU_API + resId);
    data = await data.json();
    setRestaurantMenu(data);
  }

  // ideally until everything is loaded, we should load a shimmer
  if (restaurantMenu === null) return <></>;

  // console.log("whole restaurantMenu ->", restaurantMenu);
  const restaurantName = restaurantMenu?.data?.cards[0]?.card?.card?.text;
  const restaurantCardDetails =
    restaurantMenu?.data?.cards[2]?.card?.card?.info;
  const restaurantAddress =
    restaurantCardDetails?.locality + ", " + restaurantCardDetails?.areaName;
  const rating = restaurantCardDetails?.avgRating;
  const totalRating = restaurantCardDetails?.totalRatingsString;
  const costForTwo = restaurantCardDetails?.costForTwoMessage;
  const cuisines = restaurantCardDetails?.cuisines.join(", ");
  const minSlaTime = restaurantCardDetails?.sla?.minDeliveryTime;
  const maxSlaTime = restaurantCardDetails?.sla?.maxDeliveryTime;

  // menu items in json
  const foodMenu =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter((menu) => {
        return (
          (menu?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") && (menu.card.card.itemCards.length > 0)
        );
      })
      .map((menu) => {
        return menu?.card?.card;
      });;
  console.log("foodMenu ->", foodMenu);

  return (
    <div className="menu-container">
      <div className="menu-card">
        {/* restaurant-name, address */}
        <div className="restaurant-details">
          <p className="restaurant-name">{restaurantName}</p>
          <p className="restaurant-address">{restaurantAddress}</p>
        </div>
        {/* restaurant other details (rating, food-type, sla) */}
        <div className="restaurant-other-details">
          <p className="rating">
            ⭐️{rating} ({totalRating}) • Rs({costForTwo})
          </p>
          <p className="food-type">{cuisines}</p>
          <p className="sla-delivery">
            {minSlaTime}-{maxSlaTime} mins
          </p>
        </div>
        {/* food menu */}
        <div className="food-menu-container">
          <p className="menu-list-header">🍱 M E N U 🍱</p>
          <div className="menu-list-category">
            {/* to be added for all lists */}
            {foodMenu.map((menu) => {
              return (
                <div className="menu-list-category-container" key={menu.categoryId}>
                  <hr className="horizontal-line" />
                  <div className="menu-list-items">
                    <p className="menu-list-item-tag">
                      {menu.title} ({menu.itemCards.length})
                    </p>
                    <div className="menu-list-items-cards">
                      {/* render all food menu names */}
                      {menu.itemCards.map((item) => (
                        <FoodItemCard props={item} key={item.card.info.id} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
