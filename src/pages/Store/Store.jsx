import React, { useState } from "react";
import "./Store.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import Storelist from "../../Components/Storelist/Storelist";
const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("1");

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }
  console.log(selectedCategory);

  return (
    <div className="storeContainer">
      <div className="top-section">
        <div className="left">
          <h1>Browse category</h1>
          <ul>
            <li>
              <Link
                className="storeLink"
                onClick={() => handleCategoryClick("1")}
              >
                Men's Clothing
                <span>
                  <KeyboardArrowRightIcon />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="storeLink"
                onClick={() => handleCategoryClick("2")}
              >
                Women's Clothing
                <span>
                  <KeyboardArrowRightIcon />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="storeLink"
                onClick={() => handleCategoryClick("6")}
              >
                Kid's Clothing
                <span>
                  <KeyboardArrowRightIcon />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="storeLink"
                onClick={() => handleCategoryClick("5")}
              >
                Electronics
                <span>
                  <KeyboardArrowRightIcon />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="storeLink"
                onClick={() => handleCategoryClick("3")}
              >
                Footwear
                <span>
                  <KeyboardArrowRightIcon />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="storeLink"
                onClick={() => handleCategoryClick("4")}
              >
                Accessories
                <span>
                  <KeyboardArrowRightIcon />
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="middle">
          <div className="desc">
            <p>Summer Sale Upto 70%</p>
            <h1>
              Apple's HomePod is <br /> waiting for you!!
            </h1>
            <p>
              Get 6 months of Apple Music <br /> free with your HomePod
              footnote*
            </p>
          </div>
          <div className="img">
            <img src="/img/homepod.jpg" alt="applehomepod" />
          </div>
        </div>
        <div className="right">
          <div className="right-top">
            <div className="desc">
              <h3>
                JBL GO 2 <br /> Speaker
              </h3>
              <p>Weekend Discount</p>
              <div className="price">
                <span>$ 270</span>
                <span>
                  <strike>$ 350</strike>
                </span>
              </div>
            </div>
            <div className="img">
              <img src="/img/jblmicro.jpg" alt="jblspeaker" />
            </div>
          </div>
          <div className="right-bottom">
            <div className="desc">
              <h3>
                Apple AirPods
                <br /> (3rd Generation)
              </h3>
              <p>Weekend Discount</p>
              <div className="price">
                <span>$ 270</span>
                <span>
                  <strike>$ 350</strike>
                </span>
              </div>
            </div>
            <div className="img">
              <img src="/img/airpods.jpg" alt="jblspeaker" />
            </div>
          </div>
        </div>
      </div>
      <h1>Top Product's</h1>
      <div className="storeWrapper">
        <div className="storeproduct">
          <Storelist id={selectedCategory} />
        </div>
        <div className="storead">
          <img src="/img/ad.png" alt="ads" />
        </div>
      </div>
    </div>
  );
};

export default Store;
