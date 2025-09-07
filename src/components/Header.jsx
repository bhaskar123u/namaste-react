import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import MyContext from "../common/MyContext";

const Header = () => {
  // variables and state variables
  const logo = new URL("../resources/food-app-logo.png", import.meta.url).href;
  const [loginKeyword, setLoginKeyword] = useState('Login');
  const contextData = useContext(MyContext);

  function loginButtonHandler() {
    const firstName = contextData?.firstName;
    if (loginKeyword === 'Login')
      setLoginKeyword(firstName);
    else
      setLoginKeyword('Login');
  }

  const userOnline = useOnlineStatus();

  // JSX
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="food-app-logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          {/* <li>Online Status: {userOnline ? "🟢" : "🔴"}</li> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/playground">Playground</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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