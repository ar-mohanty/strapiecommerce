import React from "react";
import "./Storelist.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const Storelist = ({ id }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${id}`
  );

  return (
    <div className="list">
      {error
        ? "something went wrong"
        : loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default Storelist;
