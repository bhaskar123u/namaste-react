import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyContext from "../common/MyContext";
import {
  WELCOME_TEXT,
  LOGIN_TO_ORDER,
  ORDER_ITEM_TEXT,
} from "../common/constants";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // variables and state variables
  const logo = new URL("../resources/food-app-logo.png", import.meta.url).href;
  // extract loginKeyword from context
  const {
    setModalOn,
    loggedInUserName,
    setLoggedInUserName,
    pendingPath
  } = useContext(MyContext);
  const [welcomeText, setWelcomeText] = useState(null);
  console.log(welcomeText);
  const [btnText, setBtnText] = useState('Login');
  const navigate = useNavigate();

  function loginButtonHandler() {
    console.log("btnText in loginButtonHandler()", btnText);
    if (btnText === "Login") {
      // initiate modal - call setModalOn(true);
      setModalOn(true);
    } else {
      setLoggedInUserName(null);
    }
  }

  useEffect(() => {
    if (loggedInUserName && loggedInUserName.length > 0) {
      setWelcomeText(WELCOME_TEXT + " "+ loggedInUserName + ORDER_ITEM_TEXT);
      setBtnText('Logout');

      // if user had clicked on any restaurant card but was not logged in
      // we keeps that path in context and later visit it
      if (pendingPath) {
        navigate(pendingPath);
      }
    } else {
      setBtnText('Login');
      setWelcomeText(WELCOME_TEXT + LOGIN_TO_ORDER);
      navigate("/");
    }
  }, [loggedInUserName]);
  // JSX
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="food-app-logo" />
        </Link>
      </div>
      <div className="welcome-text-header">
        <p>{welcomeText}</p>
      </div>
      <div className="nav-items">
        <ul>
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
          <button
            className="login-btn"
            value={btnText}
            onClick={loginButtonHandler}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
