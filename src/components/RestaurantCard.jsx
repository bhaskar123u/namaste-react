import { CDN_URL } from "../common/constants";

const RestaurantCard = ({ props }) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    sla,
    totalRatingsString,
  } = props;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-card-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-card-details">
        <h3 className="res-card-details heading">
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
