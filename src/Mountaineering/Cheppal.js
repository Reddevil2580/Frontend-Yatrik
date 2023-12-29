import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaHome,
FaEnvelope,
FaPhone,
  FaMountain,
  FaAward,
} from "react-icons/fa";
import Travel from "./cheppalsherpa.jpg";

import "../Travel/Chitwan.css";

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

const Cheppal = () => {
  return (
    <div className="slidingslider">
      <div className="titleofpage1">
        {" "}
        <h1 className="locit">
          cheppalsherpa!
        </h1>{" "}
      </div>
      <section className="slider">
        <ImageSlider slides={SliderData} />;{" "}
      </section>
      <div className="infopage1">
        <div className="info.com">
          <h5 className="yesit">
            <h3 className="key">Key guide information </h3>
            <FaHome /> Gorkha<br></br>
            <FaMountain/>8times Annapurna summit<br></br>
            <FaAward/>Internationally listed in best moutaineers in 2018<br></br>
          </h5>
          <div className="cheppal-contact">
        <div className="cheppal-info">
          <div className="icon">
            <FaPhone />
          </div>
          <div>
            <h2>Contact</h2>
            <p>+1 123 456 7890</p>
          </div>
        </div>

        <div className="cheppal-info">
          <div className="icon">
            <FaEnvelope />
          </div>
          <div>
            <h2>Email</h2>
            <p>cheppal.sherpa@gmail.com</p>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
  );
};

export default Cheppal;
