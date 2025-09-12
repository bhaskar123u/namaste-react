import { CDN_URL } from "../common/Constants";
import starRatingIcon from "url:../resources/star.png";

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

  function previewCuisinesArray(arr) {
    // join all with comma
    let str = arr.join(", ");
    if (str.length > 40) {
      str = str.substring(0, str.lastIndexOf(","));
      str = str.substring(0, 40) + "...";
    }
    return str;
  }

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-card-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-card-details">
        <h3 className="res-card-details heading">{name}</h3>
        <p className="res-card-details cuisines">
          {previewCuisinesArray(cuisines)}
        </p>
        <p className="res-card-details avgRating">
          <img src={starRatingIcon} alt="" className="star-icon" />
          <span className="rating-val">{avgRating}</span> by{" "}
          {totalRatingsString} users
        </p>
        <p className="res-card-details costForTwo">{costForTwo}</p>
        <p className="res-card-details deliveryTime">{sla.deliveryTime} mins</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
