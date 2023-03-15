import React, { useState } from "react";
import "./Product.scss";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareOutlinedIcon from "@mui/icons-material/CompareOutlined";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {error ? (
        "Something went wrong"
      ) : loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onMouseEnter={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onMouseEnter={(e) => setSelectedImg("img2")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img3?.data?.attributes?.url
                }
                alt=""
                onMouseEnter={(e) => setSelectedImg("img3")}
              />
            </div>
            <div className="mainImage">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                <RemoveOutlinedIcon />
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>
                <AddOutlinedIcon />
              </button>
            </div>
            <button
              className="addcart"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartOutlinedIcon />
              &nbsp;&nbsp;Add to Cart
            </button>
            <div className="link">
              <div className="item">
                <FavoriteBorderOutlinedIcon /> Add to Wishlist
              </div>
              <div className="item">
                <CompareOutlinedIcon /> Add to Compare
              </div>
            </div>
            <div className="info">
              <p>Brand : {data?.attributes?.brand}</p>
              <p>Product Type : {data?.attributes?.productType}</p>
              <p>
                Tag's :<span>Shirt</span>
                <span>Men's Shirt</span>
                <span>Top</span>
                <span>Formal Wear</span>
              </p>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION : {data?.attributes?.longDesc}</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
