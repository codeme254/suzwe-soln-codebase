import React from "react";
import ArrowRight from "./Icons";

const InitiativeCard = ({ image, description, linkToJoinForm }) => {
  return (
    <div className="initiative">
      <div className="initiative__image">
        <img
          src={image}
          alt="community initative representational img"
          className="initiative__image--img"
        />
      </div>
      <div className="initiative__body">
        <p className="initiative__body--description">{description}</p>
        <a href={linkToJoinForm} className="initiative__button">
          Join <ArrowRight />
        </a>
      </div>
    </div>
  );
};
export default InitiativeCard;