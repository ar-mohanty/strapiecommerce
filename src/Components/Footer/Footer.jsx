import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="emailus">
        <h3>
          Subscribe to our news letter to get updates
          <br /> to our latest collections
        </h3>
        <p>
          Get 20% off on your first order just by subscribing to out newsletter
        </p>
        <div className="input-div">
          <input type="mail" placeholder="Enter your email" />
          <button className="sub-btn">Subscribe</button>
        </div>
      </div>
      <div className="top">
        <div className="item">
          <h1>About</h1>
          <p>
            Amazee is a powerful e-commerce platform that <br/>makes it easy for
            businesses to sell their products online.<br/> With a user-friendly
            interface, customizable templates,<br/> and a range of payment and
            shipping options,<br/> Amazee provides everything businesses<br/> need to
            create a professional and effective online store.
          </p>
        </div>
        <div className="item">
          <h1>Category</h1>
          <span>Men's</span>
          <span>Women's</span>
          <span>Kid's</span>
          <span>New Arrival's</span>
          <span>Accessories</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQs</span>
          <span>Pages</span>
          <span>Store</span>
          <span>Compare</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <p>15/B Akshar residency, Nr Karannagar road kadi</p>
          <p>support@amazee.com</p>
          <p>+91 63552 67769</p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Amazee</span>
          <span className="copywrite">
            &copy; Copywright 2023. Made with 💖 by Amazee Team.
          </span>
        </div>
        <div className="right">
          <img src="/img/paymentoption.png" alt="payoption" width={"500px"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
