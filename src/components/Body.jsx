import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyContext from "../common/MyContext";
import { RESTAURANT_LIST_URL } from "../common/constants";
import useOnlineStatus from "../hooks/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import SearchAndFilters from "./SearchAndFilters";
import LoginPopup from "./LoginPopup";

const Body = () => {
  const [finalRestaurantData, setFinalRestaurantData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const [topRatedFilterActive, setTopRatedFilterActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { modalOn, loggedInUserName, setModalOn, setPendingPath } =
    useContext(MyContext);

  async function fetchData() {
    const resp = await fetch(RESTAURANT_LIST_URL);
    const json = await resp.json();
    const list =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setFinalRestaurantData(list);
    // console.log("restaurants list inside body fetchData", list);
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
      list = list.filter((r) => (r?.info?.avgRating || 0) >= 4.5);
    }

    const q = searchText.trim().toLowerCase();
    if (q) {
      list = list.filter((r) =>
        (r?.info?.name || "").toLowerCase().includes(q)
      );
    }

    setRestaurantData(list);
  }, [finalRestaurantData, topRatedFilterActive, searchText]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <p>Looks like you are offline, check internet</p>;

  // JSX
  return (
    <div className="body">
      {/* conditional rendering for modal*/}
      {modalOn && <LoginPopup />}

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
            onClick={(e) => {
              if (!loggedInUserName) {
                e.preventDefault(); // ⛔ stop route change
                setPendingPath(`/restaurant/${res.info.id}`); // set pending path, to navigate automatically after login
                setModalOn(true); // 🔓 open login modal
              }
            }}
          >
            <RestaurantCard props={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
