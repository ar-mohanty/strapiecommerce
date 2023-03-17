import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import Search from "../Search/Search";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="sale-banner">
        <p>
          Sign up and
          <strong> GET 20% OFF </strong>
          for your first order.
        </p>
      </div>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="../img/india.png" width="32px" alt="flag" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Men's
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Women's
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/6">
              Kid's
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Amazee
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/store">
              Store
            </Link>
          </div>
          <div className="icons">
            <SearchOutlinedIcon onClick={() => setShowSearch(true)}/>
            <FavoriteBorderIcon />
            <PersonOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </div>
  );
};

export default Navbar;
