import { RESTAURANT_MENU_IMAGE_CDN_URL } from "../common/Constants";
import { starRatingIcon } from "../common/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux-slices/CartSlice";
import MyContext from "../common/MyContext";
import { useContext } from "react";

const FoodItemCard = ({ props }) => {
  const {
    name,
    price,
    ratings,
    description,
    imageId,
    itemAttribute,
    defaultPrice,
  } = props.card.info;
  const isNonVeg = itemAttribute.vegClassifier === "NONVEG" ? true : false;
  const { loggedInUserName, setModalOn } = useContext(MyContext);

  const dispatch = useDispatch();
  function addButtonClicked(name) {
    // This will only happen for loggedInUsers
    if (loggedInUserName === null || loggedInUserName.length === 0) {
      console.log('User trying to add items in cart but not loggedIn');
      setModalOn(true);
    }  

    // dispatch an action which will call a reducer function
    console.log(name);
    dispatch(addItem(name));
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
                {ratings.aggregatedRating.rating} (
                {ratings.aggregatedRating.ratingCountV2})
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
        <button
          className="food-item-add-btn"
          onClick={() => addButtonClicked(props.card.info)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default FoodItemCard;
