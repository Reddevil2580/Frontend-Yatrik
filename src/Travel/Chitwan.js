import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaHome,
  FaMapPin,
  FaCalendar,
} from "react-icons/fa";
import Travel10 from "./k1.jpg";
import Travel11 from "./k2.jpg";
import Travel12 from "./k3.jpg";
import Travel13 from "./k4.jpg";

import "./Chitwan.css";
import { Link } from "react-router-dom";

const SliderData = [
  { image: Travel10 },
  { image: Travel11 },
  { image: Travel12 },
  { image: Travel13 },
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
        <h1 className="titlepage1">Mount kanchenjunga</h1>
        <h1 className="locit">
          Feels like the top!
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
            <h3 className="key">Key  information </h3>
            <FaHome /> Base camp 1-5<br></br>
            <FaCalendar/>14days<br></br>
          </h5>
          <div className="moreinfo">
            <h4>Overview</h4>
          Mt. Kanchenjunga Expedition takes you to the summit of Mount Kanchenjunga (8586m/ 28,170ft); the third highest mountain in the world. Mount Kanchenjunga is the third after Mount Everest and Mount K2 in the world and it second highest mountain of Nepal located in the eastern part of Nepal. Mount Kanchenjunga is bordered by the Tamur River in the west, Lhonak Chu and Jongsang La Pass (6145m) in the north, and the Teesta River in Sikkim, India in the east.

The name of the mountain "Kanchenjunga" is derived from the Tibetan word ‘Kanchen’ and ‘Dzonga’. ‘Kanchenjunga’ means “The Five Treasures of the Great Snows”, as it contains five peaks, Kanchenjunga I (8586m), Kanchenjunga West (8505m), Kanchenjunga South (8494m) and Kangbachen (7903m). These treasures represent the five repositories: gold, silver, gems, grain, and holy books of God.
            
            <h4>Expedition cost</h4>
            Mt. Kanchenjunga Expedition costs from USD 20,500 for Full Board Service. Mt. Kanchenjunga Expedition can be done both in Autumn and Spring, however, we recommend you to ascend during the Spring season. The cost covers all the transportation, meals, services to Base Camp and High Camp, Expedition Equipment, and High Standard Tents at Base Camps [mentioned in Includes]. However, if you have a big group willing to climb Mt. Makalu Expedition, please contact us, we can offer you Group Discounts too.
            
            <h5 className="moreinfoheader">

              <h4>Climbing kanchenjunga</h4>
              Climbing mount Kanchenjunga is regarded as a difficult mountaineering adventure than Mt. Everest Expedition. The ascent to the summit of Kanchenjunga is a tricky and challenging one as the mountaineer and submitters need to prepare for the risk of falling ice and avalanche. It is highly recommended to plan and head to climb Mt Kanchenjunga with professional climbing guides and expedition leaders. Weather, climate and high altitude can go wrong anytime in the Himalayas, hence it is recommended to climb the extreme eight-thousanders mountains with highly experienced climbing Sherpas and guides
              <br/>
              <button className="Mount-button"><Link to='/travel/guide'>Find guide?</Link></button>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chitwan;
