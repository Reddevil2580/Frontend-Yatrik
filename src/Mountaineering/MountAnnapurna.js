import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaHome,
  FaMapPin,
  FaMountain,
  FaCalendar,
} from "react-icons/fa";
import Travel from "../Travel.jpg";

import "./Mountaineering.css";
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

const MountAnnapurna = () => {
  return (
    <div className="slidingslider">
      <div className="titleofpage1">
        {" "}
        <h1 className="titlepage1">Mount Annapurna</h1>
        <h1 className="locit">
          The unpredictable Mountain!
        </h1>{" "}
      </div>
      <section className="slider">
        <ImageSlider slides={SliderData} />;{" "}
      </section>
      <div className="infopage1">
        <h4>
          Check out the Exact location at{" "}
          <Link to="https://www.google.com/maps/place/Annapurna+I/@28.6136106,83.8736111,15z/data=!3m1!4b1!4m6!3m5!1s0x39be1ec6808cffc1:0x48172cc9dd372cef!8m2!3d28.6136111!4d83.8736111!16zL20vMHBrbTE?entry=ttu">
            <FaMapPin />
          </Link>
        </h4>
        <div className="info.com">
          <h5 className="yesit">
            <h3 className="key">Key property information </h3>
            <FaMountain /> 8281metre <br></br>
            <FaHome /> 4camps<br></br>
            <FaCalendar/>22days<br></br>
          </h5>
          <div className="moreinfo">
          Mount Annapurna I is the tenth highest mountainin the world at 8,091 metres (26,545 ft). It is in the Annapurna massif of Nepal Himalayas. Annapurna massif includes many peaks over 7,000 metres. The massif is bounded by the Kali Gandaki Gorgeto the west, the Marshyangdi Riverin the north and east, and by Pokhara Valleyin the south. At the western end, the massif encloses a high basin called the Annapurna Sanctuary. In 1950, Maurice Herzogled a French expedition to its summit, making it the first of the eight-thousandersto be successfully climbed. The Annapurna peaks are among the world's most dangerous mountains to climb. The mountain is named after Annapurna, the Hindu goddess of food and nourishment, who is said to reside there. The name Annapurna is derived from the Sanskritlanguage—purnameans filled and annameans food. Annapurna I is located on the border of Myagdi and Kaski districts in Gandaki province of Nepal. Annapurna I is 6.1 km west northwest of Singu Chuli. Khangsar Khang West is 4.0 km east northeast and Varaha Shikhar is 2.7 km south southwest of Annapurna I.
            <h5 className="moreinfoheader">
              <button className="Mount-button"><Link to='/Mountain/guide'>Find guide?</Link></button>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MountAnnapurna;
