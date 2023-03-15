import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contactContainer">
      <h1>
        Let's Grow <br />
        together
      </h1>
      <h2>connect</h2>
      <div className="contactdetails">
        <div className="leftcdetail">
          <h4>General</h4>
          <div className="cdetail">
            <h5>E-mail</h5>
            <p>support@amazee.com</p>
          </div>
          <div className="cdetail">
            <h5>Phone</h5>
            <p>+91 99987 87877</p>
          </div>
        </div>
        <div className="rightcdetail">
          <h4>Address</h4>
          <div className="cdetail">
            <h5>HQ1</h5>
            <p>
              D-07 Apmc Market Sec 19 Krishi Bazaar,<br/> Mumbai, Mumbai, 400705,India
            </p>
          </div>
          <div className="cdetail">
            <h5>HQ2</h5>
            <p>
              469 n S R Road N S R Rdsaibaba Colony,<br/>
              Coimbatore, Mumbai, 641011, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
