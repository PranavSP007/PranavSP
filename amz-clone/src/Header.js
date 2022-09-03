import React from "react";
import "../src/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        {/* clickable link which directs to home page on clicking the logo */}
        <div className="header__logo">
          {/* the logo part    */}
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </div>
      </Link>
      <div className="header__search">
        {/* the searchbar part */}
        <input className="header__searchInput" type="text" />
        {/*search  logo */}
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        {/* option1=account   */}
        {/* if there is no user then only we direct to login page */}
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* option2=sign-in */}
        <div className="header__option">
          <span className="header__optionLineOne">returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        {/* option3=  prime*/}
        <div className="header__option">
          <span className="header__optionLineOne">your</span>
          <span className="header__optionLineTwo">prime</span>
        </div>
        {/* option4=checkout logo */}
        <div className="header__option"></div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
            {/* if basket becomes undefined or error  to handle the error the '?' is added */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
