import React from "react";
import { Link } from "react-router-dom";

function Props({ name, days, price, image, province, id}) {
  const imageUrl = `/property/${id}`;
  return (
    <div className="props">
      <Link to={imageUrl}>
        <img alt="Property" src={image} />
      </Link>
      <h4>
        Location: {name} <br />
        Province: {province} <br />
        Days: {days} <br />
        Budget per person: {price} <br/>
    
      </h4>
    </div>
  );
}

export default Props;
