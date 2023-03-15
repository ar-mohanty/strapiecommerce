import React, { useState } from "react";
import "./Slider.scss";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "/img/slider4.mp4",
    "/img/slider2.mp4",
    "/img/slider3.mp4",
    "/img/slider1.mp4",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="div">
          <video className="video" loop autoPlay muted>
            <source src={data[0]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="div">
          <video className="video" loop autoPlay muted>
            <source src={data[1]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="div">
          <video className="video" loop autoPlay muted>
            <source src={data[2]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="div">
          <video className="video" loop autoPlay muted>
            <source src={data[4]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <NavigateBeforeOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <NavigateNextOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
