import React from "react";

const EducativeCard = ({ image, title, preText, learnPageLink }) => {
  return (
    <div className="educative-parent">
      <div className="educative">
        <div className="educative__image">
          <img
            src={image}
            alt="educative preview img"
            className="educative__image--img"
          />
        </div>
        <div className="educative__body">
          <h3 className="educative__body--title">{title}</h3>
          <p className="educative__body--pretext">{preText}</p>
          <a href={learnPageLink} className="educative__button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};
export default EducativeCard;
