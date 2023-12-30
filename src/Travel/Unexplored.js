import React, { useState } from 'react';
import './Unexplored.css';
import image1 from './Mountain1.jpg';
import Khalti from '../Payment/Khalti';
import StripeCheckout from 'react-stripe-checkout';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="image-slider">
      <div className="left-arrow" onClick={prevSlide}>&#10094;</div>
      {images.map((image, index) => (
        <div key={index} className={index === current ? "slide active" : "slide"}>
          {index === current && (
            <img src={image} alt={`Slide ${index}`} className="image" />
          )}
        </div>
      ))}
      <div className="right-arrow" onClick={nextSlide}>&#10095;</div>
    </div>
  );
};

const Unexplored = () => {
  const [destinationIndex, setDestinationIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const destinations = [
    {
      name: 'Unexplored Destination 1',
      images: [image1, image1, image1, image1, image1],
      testimonials: [
        {
          text: 'Testimonial 1 for Unexplored Destination 1',
          author: 'Author 1',
        },
        {
          text: 'Testimonial 2 for Unexplored Destination 1',
          author: 'Author 2',
        },
        {
          text: 'Testimonial 3 for Unexplored Destination 1',
          author: 'Author 3',
        },
      ],
      texts: [
      <p>
       Nestled within the breathtaking landscapes of Nepal lies a hidden gem,
       an unexplored village that captivates the soul with its unparalleled beauty and rich cultural tapestry. 
       Surrounded by majestic mountains and lush greenery, this village unveils a </p>
      ],
    },
    {
      name: 'Unexplored Destination 2',
      images: [image1, image1, image1, image1, image1],
      testimonials: [
        {
          text: 'Testimonial 1 for Unexplored Destination 2',
          author: 'Author 1',
        },
        {
          text: 'Testimonial 2 for Unexplored Destination 2',
          author: 'Author 2',
        },
        {
          text: 'Testimonial 3 for Unexplored Destination 2',
          author: 'Author 3',
        },
      ],
      texts: [
        'Text 1 for Unexplored Destination 2',
        'Text 2 for Unexplored Destination 2',
        'Text 3 for Unexplored Destination 2',
      ],
    },
    // ... add more destinations
  ];

  const handlePrev = () => {
    setDestinationIndex((prevIndex) => (prevIndex === 0 ? destinations.length - 1 : prevIndex - 1));
    setTestimonialIndex(0);
    setTextIndex(0);
  };

  const handleNext = () => {
    setDestinationIndex((prevIndex) => (prevIndex === destinations.length - 1 ? 0 : prevIndex + 1));
    setTestimonialIndex(0);
    setTextIndex(0);
  };

  const onToken=(token)=>{
    console.log(token);
  };


  return (
    <div className="unexplored-container">
      <div className="destination-slider">
        <div className="slider-btn" onClick={handlePrev}>&#10094;</div>
        <div className="destination-name">
          {destinations[destinationIndex].name}
        </div>
        <div className="slider-btn" onClick={handleNext}>&#10095;</div>
      </div>
      <div className="destination-image-container">
        <ImageSlider images={destinations[destinationIndex].images} />
      </div>
      <div className="destination-text">
        {destinations[destinationIndex].texts[textIndex]}
      </div>
      <div className="destination-testimonials">
        {destinations[destinationIndex].testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img
              src={image1}
              alt="User"
              className="testimonial-photo"
            />
            <p>{testimonial.text}</p>
            <p>{testimonial.author}</p>
          </div>
        ))}
      </div>
      <div className='Support'>
        <h5 className='Help'>
            Your one help can bring thousands of smiles!
            <Khalti/>
        </h5>
        <h5 className='Help-international'>
          For international help!
        </h5>
        <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51OT1szE21ldwoo85frCOIBit5YN68qhUTf76n4YLDGa6fO9wz5cjlBl7IFekttoOgF9GPwR7cNX7drUPv3YsDUfl00NwTQRyEj"
      />

      </div>
    </div>
  );
};

export default Unexplored;
