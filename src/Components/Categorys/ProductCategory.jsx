import React from "react";
import "./ProductCategory.scss";
import { Link } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";

const ProductCategory = ({ item }) => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="/img/kids.png" alt="kids category" />
          <button>
            <Link className="link" to="/products/6">
              Kid's Clothing
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="/img/electronics.png" alt="women category" />
          <button>
            <Link to="/products/5" className="link">
              Electronics
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row women-vid">
          <video
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
            loop
            autoPlay
            muted
          >
            <source src="/img/womencat.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button>
            <Link to="/products/2" className="link">
              Women's Clothing
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <video
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
                loop
                autoPlay
                muted
              >
                <source src="/img/mencat.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button>
                <Link to="/products/1" className="link">
                  Men's Clothing
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="/img/accessoriescat.jpg" alt="" />
              <button>
                <Link to="/products/4" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="/img/shoes.jpg" alt="" />
          <button>
            <Link to="/products/3" className="link">
              Footwear
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
