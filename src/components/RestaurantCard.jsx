import { CDN_URL } from "../common/constants";
import { FaCircle } from "react-icons/fa";

const RestaurantCard = ({ props }) => {
  // variables and state variables
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    sla,
    totalRatingsString,
    vegType
  } = props;

  // functions
  const renderVegIcon = () => {
    if (vegType === "veg") {
      return (
        <FaCircle
          style={{ color: "green", fontSize: "12px", marginRight: "6px" }}
        />
      );
    }
    if (vegType === "non-veg") {
      return (
        <FaCircle
          style={{ color: "red", fontSize: "12px", marginRight: "6px" }}
        />
      );
    }
    if (vegType === "mixed") {
      return (
        <>
          <FaCircle
            style={{ color: "green", fontSize: "12px", marginRight: "3px" }}
          />
          <FaCircle
            style={{ color: "red", fontSize: "12px", marginRight: "6px" }}
          />
        </>
      );
    }
    return null;
  };

  // JSX
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-card-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-card-details">
        <p className="res-card-details heading">
          {renderVegIcon(vegType)}
          {name}
        </p>

        <p className="res-card-details cuisines">{cuisines.join(", ")}</p>
        <p className="res-card-details avgRating">
          {avgRating} ⭐️ by {totalRatingsString} users
        </p>
        <p className="res-card-details costForTwo">{costForTwo}</p>
        <p className="res-card-details deliveryTime">{sla.deliveryTime} mins</p>
      </div>
    </div>
  );
};

export default RestaurantCard;