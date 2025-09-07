import { RESTAURANT_MENU_IMAGE_CDN_URL } from "../common/constants";
import { starRatingIcon } from "../common/constants";

const FoodItemCard = ({ props }) => {
  const { name, price, ratings, description, imageId, itemAttribute, defaultPrice } =
    props.card.info;
  const isNonVeg = itemAttribute.vegClassifier === "NONVEG" ? true : false;

  function addButtonClicked() {
    console.log('add button clicked');
  }

  return (
    <div className="food-item-card-container">
      <div className="food-item-card">
        {isNonVeg === true ? (
          <p className="food-item-card-name" style={{ color: "red" }}>
            🔺 {name}
          </p>
        ) : (
          <p className="food-item-card-name" style={{ color: "green" }}>
            {name}
          </p>
        )}
        <div className="food-item-card-other-details">
          <p className="food-item-card-price">
            ₹ {(price || defaultPrice) / 100}
          </p>
          {ratings.aggregatedRating.rating &&
          ratings.aggregatedRating.ratingCountV2 ? (
            <p className="food-item-card-rating">
              <img src={starRatingIcon} alt="" className="star-icon" />{" "}
              <span>
                {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})
              </span>
            </p>
          ) : (
            <p>Wanna try and give us a rating?</p>
          )}
          <p className="food-item-card-description">{description}</p>
        </div>
      </div>
      <div className="food-item-image-container">
        <img
          src={RESTAURANT_MENU_IMAGE_CDN_URL + imageId}
          className="food-item-image"
          alt="food-item-image"
        />
        <button className="food-item-add-btn" onClick={addButtonClicked}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default FoodItemCard;
