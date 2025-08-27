import RestaurantCard from "./RestaurantCard";
import data from "../resources/restaurants-data.json";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <p className="search-text">Search</p>
        <input
          className="search-text-box"
          type="text"
          placeholder="type your restaurant here"
        />
      </div>
      <div className="res-container">
        {
          /* Restaurant Cards */
          data.restaurants.map((res) => (
            <RestaurantCard key={res.info.id} props={res.info} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;