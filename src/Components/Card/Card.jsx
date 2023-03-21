import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span className="badge">New</span>}
          <img
            src={item.attributes.img.data.attributes?.url}
            alt=""
            className="mainImg"
          />
          <img
            src={item.attributes.img2.data.attributes?.url}
            alt=""
            className="secondImg"
          />
        </div>
      </div>
      <h2 className="productTitle">{item?.attributes.title}</h2>

      <div className="cardwrapper">
        <div className="prices">
          <h3 className="proPrice">
            $&nbsp;{item?.attributes.oldprice || item?.attributes.price + 50}
          </h3>
          <h3 className="proPrice">$&nbsp;{item?.attributes.price}</h3>
        </div>
        <div className="addcartbtn">
          <button>
            <ShoppingCartOutlinedIcon className="cartIcon" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
