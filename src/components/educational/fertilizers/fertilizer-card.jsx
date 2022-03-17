import React from "react";

const FertilizerCard = ({ image, name, description, altText }) => {
  return (
    <div className="fertilizer-card">
      <div className="fertilizer-card__image">
        <img src={image} alt={altText} className="fertilizer-card__image--img" />
      </div>
      <p className="fertilizer-card__name">{name}</p>
      <p className="fertilizer-card__description">{description}</p>
    </div>
  );
};

export default FertilizerCard;