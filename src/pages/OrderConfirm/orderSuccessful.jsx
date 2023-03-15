import React, { Component } from "react";
import lottie from "lottie-web";
import { Link } from "react-router-dom";
import "./orderSuccessful.scss";

class OrderSuccessful extends Component {
  componentDidMount() {
    fetch("https://assets2.lottiefiles.com/private_files/lf30_bdxjz37g.json")
      .then((response) => response.json())
      .then((data) => {
        lottie.loadAnimation({
          container: document.getElementById("myLottieAnimation"),
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: data,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="container">
            <div className="card">
              <div id="myLottieAnimation"></div>
              <h1>Thank you for the order</h1>
              <p>Your order number is xxxx xxx</p>
              <p>
                We've sent a confirmation email to email@gmail.com with order
                details and a link to track its progress.
              </p>
              <Link className="link link-btn" to="/">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OrderSuccessful;
