import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <div className="featured">
      <div className="top">
        <h1 className="sectionTitle">{type} Product's</h1>
      </div>
      <div className="bottom">
        {error
          ? "something went wrong"
          : loading
          ? "loading"
          : data && data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
