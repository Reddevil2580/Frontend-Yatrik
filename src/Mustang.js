import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaHome,
  FaMapPin,
  FaMountain,
  FaCalendar,
} from "react-icons/fa";
import Travel5 from "./mustang1.jpg";
import Travel6 from "./mustang2.jpg";
import Travel7 from "./mustang3.jpg";
import Travel8 from "./mustang4.jpg";

import "./Mountaineering/Mountaineering.css";
import { Link } from "react-router-dom";

const SliderData = [
  { image: Travel5 },
  { image: Travel6 },
  { image: Travel7 },
  { image: Travel8 },
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
        <h1 className="titlepage1">Mustang</h1>
        <h1 className="locit">
          Just so beautiful!
        </h1>{" "}
      </div>
      <section className="slider">
        <ImageSlider slides={SliderData} />;{" "}
      </section>
      <div className="infopage1">
        <h4>
          Check out the Exact location at{" "}
          <Link to="https://www.google.com/maps/search/mustang/@27.7406487,85.3239595,15z?entry=ttu">
            <FaMapPin />
          </Link>
        </h4>
        <div className="info.com">
          <h5 className="yesit">
            <h3 className="key">Key travel information </h3>
            <FaMountain /> 3840metre <br></br>
            <FaHome /> Lodges and guesthouses<br></br>
            <FaCalendar/>4-5days<br></br>
          </h5>
          <div className="moreinfo">
          Mustang is known for its trekking tours and mountain sightseeing. Elevated at an altitude of 3840 kilometres, this city is divided into two parts: Lower and Upper Mustang. Even though it is relatively unexplored, this city is a great destination for those who want to immerse in Tibetan culture as well as in Nepalese lifestyle as it is located near the Tibetan Plateau.

Lower Mustang is well-known for natural scenery while upper Mustang is famous for its trekking and hiking trails, monasteries, caves and local tribes. This destination is rich in vegetation with a range of rhododendron plantations, apple fields and is strong with Buddhist culture. Visitors get to see the lifestyle of the mountain people, their day-to-day routines and their customs. Visitors can take a look at a number of Tibetan shrines, monasteries, caves and villages in order to learn about the “Mini Tibet in Nepal”. All in all, this North-West part of Nepal has a rugged and mystical reputation and is a great destination for backpackers, trekkers or those who want a vacation away from the commercial life and want to spend some time in the Himalayas.

<h5 className="itenary">
    <h2 className="important-notes">important notes for mustang</h2>
    <p>
While booking, we need the photocopy of your passport and you have to pay us a minimum of 10% payment of the total cost as advance.
Beverages, snacks, charging electronic devices, hot showers, Wi-Fi are not included in our packages, so you have to pay additional cash.
It is preferable to pack your bag lightly because porters will only carry your 15-20kg luggage
You should have comprehensive travel insurance that covers trekking activities including medical expenses and emergency evacuation.
Carry a reusable water bottle and use water purification tablets like iodine, aquatabs tablets.
Pack your clothes according to the seasonal basis.
Short Upper Mustang Trek is a moderate to challenging trek which requires a certain level of physical fitness so, it is recommended to prepare with cardiovascular exercises, strength training, and hiking.
You should carry enough cash in Nepalese rupees as ATMs may not be available in remote areas.
We suggest you not to book your international flights early as there may be sudden change in weather which will make your flights delay or even cancel.
    </p>
</h5>

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
