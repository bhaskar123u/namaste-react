import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyContext from "../common/MyContext";
import { useSelector } from "react-redux";
import {
  WELCOME_TEXT,
  LOGIN_TO_ORDER,
  ORDER_ITEM_TEXT,
} from "../common/Constants";
import { useNavigate } from "react-router-dom";
import logo from "url:../resources/logo.png";


const Header = () => {
  // variables and state variables
  // const logo = new URL("../resources/logo.png", import.meta.url).href;
  // extract loginKeyword from context
  const { setModalOn, loggedInUserName, setLoggedInUserName, pendingPath } =
    useContext(MyContext);
  const [welcomeText, setWelcomeText] = useState(null);
  const [btnText, setBtnText] = useState("Login");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // subscribing to the store using a selector, whenever store items modify, the cartItems modify
  const cartItems = useSelector((store) => store.cart.items);

  function loginButtonHandler() {
    if (btnText === "Login") {
      // initiate modal - call setModalOn(true);
      setModalOn(true);
    } else {
      setLoggedInUserName(null);
    }
  }

  useEffect(() => {
    if (loggedInUserName && loggedInUserName.length > 0) {
      setWelcomeText("Welcome " + loggedInUserName + ORDER_ITEM_TEXT);
      setBtnText("Logout");
      // if user had clicked on any restaurant card but was not logged in
      // we keeps that path in context and later visit it
      if (pendingPath) {
        navigate(pendingPath);
      }
    } else {
      setBtnText("Login");
      setWelcomeText(WELCOME_TEXT + LOGIN_TO_ORDER);
      navigate("/");
    }
  }, [loggedInUserName]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // JSX
  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} className="logo" alt="app-logo" />
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
          <li>
            <Link to="/cart">
              Cart {cartItems.length > 0 && `(${cartItems.length})`}
            </Link>
          </li>
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
