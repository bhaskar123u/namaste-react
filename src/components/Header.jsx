const Header = () => {
  const logo = new URL("../resources/food-app-logo.png", import.meta.url).href;
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

export default Header;