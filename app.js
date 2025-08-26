/*
 * Header
    - Logo
    - Nav
 * Body
    - Search
    - Restaurants Card Containers
        - Restaurant Card
            - Img
            - Name, Star Rating, Delivery Time, Cuisine
 * Footer - @copyright, address, contact
 */
import React from "react";
import ReactDOM from "react-dom/client";
import data from "./restaurants-data.json";


const Header = () => {
  const logo = new URL("./food-app-logo.png", import.meta.url).href;
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="food-app-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ props }) => {
    console.log('props',props);
    const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } = props;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-card-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        ></img>
        <div className="res-card-details">
          <h3 className="res-card-details heading">{name}</h3>
          <h4 className="res-card-details cuisines">{cuisines.join(", ")}</h4>
          <h4 className="res-card-details avgRating">{avgRating} ⭐️</h4>
          <h4 className="res-card-details costForTwo">{costForTwo}</h4>
          <h4 className="res-card-details deliveryTime">{sla.deliveryTime} mins</h4>
        </div>
      </div>
    );
};

const Body = () => {
    return (
      <div className='body'>
            <div className='search'>
                <p className='search-text'>Search</p>
                <input className='search-text-box' type='text' placeholder='type your restaurant here' />
            </div>
        <div className='res-container'>
            {
                /* Restaurant Cards */
                    data.restaurants.map((res) => (<RestaurantCard key={res.info.id} props={res.info} />))
            }
        </div>
      </div>
    );
};

const AppLayout = () => {
  return (
    <div className="app-container">
          <Header />
          <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());
