import React from "react";
import { MountaineeringList } from "./MountaineeringList";

function PropertyDetails(props) {
  if (!props.match) {
    return <div>Loading...</div>;
  }

  const propertyId = parseInt(props.match.params.id);
  const property = MountaineeringList[propertyId];

  if (!property) {
    return <div>Property not found.</div>;
  }

  const propertyImageStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  return (
    <div>
      <h1>Property Details</h1>
      <div>
        <img src={property.image} alt="Property" style={propertyImageStyle} />
        <h2>{property.name}</h2>
        <p>Price: NRS {property.price}</p>
        <p>Description: {property.description}</p>

        {/* Additional content for the selected property */}
        <h3>Additional Content</h3>
        <p>Location: {property.location}</p>
        <p>Features: {property.features}</p>
      </div>
    </div>
  );
}

export default PropertyDetails;
