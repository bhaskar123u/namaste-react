import { CDN_URL } from "../common/constants";
import { FaCircle } from "react-icons/fa";

const RestaurantCard = ({ props }) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    sla,
    totalRatingsString,
    vegType,
  } = props;

  const renderVegIcon = () => {
    if (vegType === "veg")
      return <FaCircle className="veg-dot veg" role="img" aria-label="veg" />;
    if (vegType === "non-veg")
      return (
        <FaCircle className="veg-dot non" role="img" aria-label="non-veg" />
      );
    if (vegType === "mixed")
      return (
        <span className="veg-dot mixed" role="img" aria-label="veg and non-veg">
          <FaCircle className="g" />
          <FaCircle className="r" />
        </span>
      );
    return null;
  };

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-card-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-card-details">
        <h3 className="res-card-details heading">
          {renderVegIcon()}
          {name}
        </h3>
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
