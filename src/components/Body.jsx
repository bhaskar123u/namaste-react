import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import data from "../resources/restaurants-data.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // state variables
  const [finalRestaurantData] = useState(data.restaurants);
  let [restaurantData, setRestaurantData] = useState(data.restaurants);
  const [topRatedFilterActive, setTopRatedFilterActive] = useState(false);
  const [vegOnlyFilterActive, setVegOnlyFilterActive] = useState(false);

  // functions to modify state variables
  useEffect(() => {
    let finalData = finalRestaurantData;
    if (topRatedFilterActive) {
      finalData = finalData.filter((r) => r.avgRating > 4);
    }
    if (vegOnlyFilterActive) {
      finalData = finalData.filter((r) => r.vegType === "veg");
    }
    setRestaurantData(finalData);
  }, [topRatedFilterActive, vegOnlyFilterActive, finalRestaurantData]);

  const topRatedRestaurantHandler = () => {
    setTopRatedFilterActive((prev) => !prev);
  };

  const vegOnlyRestaurantHandler = () => {
    setVegOnlyFilterActive((prev) => !prev);
  };

  // JSX
  return (
    <div className="body">
      <div className="search-and-filters">
        <div className="search">
          <FaSearch className="search-icon" />
          <input
            className="search-text-box"
            type="text"
            placeholder="type your restaurant here"
          />
        </div>
        <div className="filter-buttons">
          <div className="veg-only-filter">
            <button
              className={`veg-only-btn ${
                vegOnlyFilterActive === true ? "active" : ""
              }`}
              onClick={vegOnlyRestaurantHandler}
            >
              Veg Only
            </button>
          </div>
          <div className="top-rated-filter">
            <button
              className={`top-rated-btn ${
                topRatedFilterActive === true ? "active" : ""
              }`}
              onClick={topRatedRestaurantHandler}
            >
              Top Rated
            </button>
          </div>
        </div>
      </div>

      <div className="res-container">
        {
          /* Restaurant Cards */
          restaurantData.map((res) => (
            <RestaurantCard key={res.id} props={res} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;