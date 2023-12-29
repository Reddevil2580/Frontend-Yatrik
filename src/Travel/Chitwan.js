import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaHome,
  FaMapPin,
  FaCalendar,
  FaRedRiver,
} from "react-icons/fa";
import Travel from "../Travel.jpg";

import "./Chitwan.css";
import { Link } from "react-router-dom";

const SliderData = [
  { image: Travel },
  { image: Travel },
  { image: Travel },
  { image: Travel },
];

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

const Chitwan = () => {
  return (
    <div className="slidingslider">
      <div className="titleofpage1">
        {" "}
        <h1 className="titlepage1">Chitwan</h1>
        <h1 className="locit">
          Welcome to the land of majestic wildlife and never ending cultural diversity!
        </h1>{" "}
      </div>
      <section className="slider">
        <ImageSlider slides={SliderData} />;{" "}
      </section>
      <div className="infopage1">
        <h4>
          Check out the Exact location at{" "}
          <Link to="https://www.google.com/maps/place/Chitawan/@27.6193172,84.3576101,10z/data=!3m1!4b1!4m6!3m5!1s0x3994439ad1ca5a8d:0x6c5e40f75e1f474f!8m2!3d27.529131!4d84.3542049!16zL20vMDhja3Fy?entry=ttu">
            <FaMapPin />
          </Link>
        </h4>
        <div className="info.com">
          <h5 className="yesit">
            <h3 className="key">Key property information </h3>
            <FaHome /> Sauraha-Shivaghat-Meghauli<br></br>
            <FaCalendar/>3days<br></br>
            <FaRedRiver/>Narayani<br></br>
          </h5>
          <div className="moreinfo">
          Chitwan literally means “heart of the jungle”. The popular Inner Terai valley gets its name from Chitrasen, the Tharu King, who once ruled here. In the southwest corner of Bagmati Province, Chitwan lies between foothills of the Himalaya, the Mahabharat and Siwalik ranges. The region called Chitra Ban in earlier references used to be dense forest abounding in wild animals and resorted by recluse sages meditating deep in the forests.

In recent years Chitwan National Park tops the list of things to do in Asia. It is an exciting jungle experience with - jungle safaris, birdwatching, canoe rides and numerous other nature and jungle activities. While the jungles are teeming with wild animals like tigers, leopards and rhinos, along the marshes and rivers are gharial and marsh mugger crocodiles basking in the sun.
            <h5 className="moreinfoheader">
              <button className="Mount-button"><Link to='/travel/guide'>Find guide?</Link></button>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chitwan;
