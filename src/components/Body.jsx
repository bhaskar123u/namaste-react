import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchAndFilters from "./SearchAndFilters";
import { Link } from "react-router-dom";

const Body = () => {
  const [finalRestaurantData, setFinalRestaurantData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const [topRatedFilterActive, setTopRatedFilterActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  async function fetchData() {
    const resp = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await resp.json();
    const list =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setFinalRestaurantData(list);
    setRestaurantData(list);
  }

  // 1) Fetch once
  useEffect(() => {
    fetchData();
  }, []);

  // 2) Handlers
  function onSearchChange(e) {
    setSearchText(e.target.value);
  }

  function onTopRatedClick() {
    setTopRatedFilterActive((prev) => !prev);
  }

  // 3) Derive the visible list from inputs
  useEffect(() => {
    let list = finalRestaurantData;

    if (topRatedFilterActive) {
      list = list.filter((r) => (r?.info?.avgRating || 0) > 4.5);
    }

    const q = searchText.trim().toLowerCase();
    if (q) {
      list = list.filter((r) =>
        (r?.info?.name || "").toLowerCase().includes(q)
      );
    }

    setRestaurantData(list);
  }, [finalRestaurantData, topRatedFilterActive, searchText]);

  // JSX
  return (
    <div className="body">
      <SearchAndFilters
        searchText={searchText}
        onSearchChange={onSearchChange}
        topRatedFilterActive={topRatedFilterActive}
        onTopRatedClick={onTopRatedClick}
      />

      <div className="res-container">
        {restaurantData.map((res) => (
          <Link
            to={`/restaurant/${res.info.id}`}
            className="card-link"
            key={res.info.id}
          >
            <RestaurantCard props={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
