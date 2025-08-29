import { useState } from "react";

const Header = () => {
  // variables and state variables
  const logo = new URL("../resources/food-app-logo.png", import.meta.url).href;
  const [loginKeyword, setLoginKeyword] = useState('Login');

  function loginButtonHandler() {
    if (loginKeyword === 'Login')
      setLoginKeyword('Logout');
    else
      setLoginKeyword('Login');
  }

  // JSX
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
          <button className="login-btn" onClick={loginButtonHandler}>
            {loginKeyword}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;