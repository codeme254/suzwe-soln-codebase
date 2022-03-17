import React from "react";

const FungicideCard = ({ image, name, description, altText }) => {
  return (
    <div className="fungicide-card">
      <div className="fungicide-card__image">
        <img src={image} alt={altText} className="fungicide-card__image--img" />
      </div>
      <p className="fungicide-card__name">{name}</p>
      <p className="fungicide-card__description">{description}</p>
    </div>
  );
};

export default FungicideCard;