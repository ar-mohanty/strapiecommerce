import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }
  console.log(data);
  return (
    <div className="searchWrapper">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search your products"
          value={query}
          onChange={onChange}
        />
        <CloseIcon className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.map((item) => (
            <div
              key={item.id}
              className="search-result-item"
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="img-container">
                <img
                  src={
                    item?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
              <div className="product-details">
                <span className="pname">{item?.attributes?.title}</span>
                <span className="pdesc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
