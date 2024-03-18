import React from "react";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {

  const [{basket},dispatch] = useStateValue();
  return (
    
    <div className="Header">

      <Link to="/" style={{textDecoration: "none"}}>
      <div className="header_logo">
        <StorefrontIcon className="header_logoimage" />
        <div className="header__logoTitle">S R S</div>
      </div>
      </Link>
     

      <div className="header_search">
        <input type="text" className="header_search_input" />
        <SearchIcon className="header_search_icon" />
      </div>

      <div className="header_nav">
      <Link to="/login" style={{ textDecoration:"none" }}>
        <div className="nav_item">
          <span className="nav_itemone">Hello Guest</span>
          <span className="nav_itemtwo">Sign In</span>
        </div>
        </Link>

        <div className="nav_item">
          <span className="nav_itemone">your</span>
          <span className="nav_itemtwo">shop</span>
        </div>

      <Link to="/checkout" style={{textDecoration: "none"}}>
      <div className="nav_item">
          <span className="nav_itemone nav_item_basket">
            <ShoppingBasketIcon />
          </span>
          <span className="nav_itemtwo nav_item_basketcount">{basket.length}</span>
        </div>
      </Link>

        
      </div>
    </div>
  );
}

export default Header;
