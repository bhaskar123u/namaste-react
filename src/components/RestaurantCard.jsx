import { CDN_URL } from "../common/constants";

const RestaurantCard = ({ props }) => {
  console.log("props", props);
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } =
    props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-card-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      ></img>
      <div className="res-card-details">
        <h3 className="res-card-details heading">{name}</h3>
        <h4 className="res-card-details cuisines">{cuisines.join(", ")}</h4>
        <h4 className="res-card-details avgRating">{avgRating} ⭐️</h4>
        <h4 className="res-card-details costForTwo">{costForTwo}</h4>
        <h4 className="res-card-details deliveryTime">
          {sla.deliveryTime} mins
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;