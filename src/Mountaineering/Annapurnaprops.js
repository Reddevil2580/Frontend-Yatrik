import React from "react";
import { Link } from "react-router-dom";

function Annapurnaprops({ name,Language,  price, image,Age,Experience,  id}) {
  const imageUrl = `/annapurnaguide/${id}`;
  return (
    <div className="props">
      <Link to={imageUrl}>
        <img alt="Property" src={image} />
      </Link>
      <h4>
        Name: {name} <br />
        Age: {Age} <br />
        Experience:{Experience}<br/>
        Budget per person: {price} <br/>
        Languages:{Language}
    
      </h4>
    </div>
  );
}

export default Annapurnaprops;
