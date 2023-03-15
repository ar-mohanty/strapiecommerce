import React from "react";
import "./About.scss";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle">
        Discover <br /> Our Story
      </h1>
      <p className="aboutsubtitle">
        Discover Our Story: Learn More About Our Vision, Mission, and Values and
        How We're Revolutionizing the Way You Shop Online
      </p>
      <div className="aboutImg">
        <img src="/img/about1.png" alt="aboutImg" />
        <img src="/img/about2.png" alt="aboutImg" className="centeraboutimg" />
        <img src="/img/about3.png" alt="aboutImg" />
      </div>
      <div className="marquee-container">
        <Marquee
          speed={100}
          style={{ padding: "30px 0px", overflow: "hidden" }}
        >
          <p style={{ fontSize: "40px", margin: "0px 40px" }}>
            &#x2022; SUMMER SALE &#x2022;
          </p>
          <p style={{ fontSize: "40px", margin: "0px 40px" }}>
            &#x2022; SUMMER SALE &#x2022;
          </p>
          <p style={{ fontSize: "40px", margin: "0px 40px" }}>
            &#x2022; SUMMER SALE &#x2022;
          </p>
          <p style={{ fontSize: "40px", margin: "0px 40px" }}>
            &#x2022; SUMMER SALE &#x2022;
          </p>
        </Marquee>
      </div>
      <div className="parallexImg">
        <p>
          Amazee is an ecommerce platform that offers a wide range of products
          at competitive prices. We prioritize customer satisfaction by
          providing a user-friendly website, easy payment options, and fast and
          reliable delivery. Our team is dedicated to sourcing high-quality
          products from around the world and ensuring a safe and secure shopping
          environment. We value customer feedback and are committed to
          continuous improvement. Choose Amazee for an exceptional online
          shopping experience.
        </p>
      </div>
    </div>
  );
};

export default About;
