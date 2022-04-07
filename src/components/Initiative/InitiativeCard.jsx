import React from "react";
import ArrowRight from "./Icons";

const InitiativeCard = ({ image, description, linkToPage }) => {
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
        <a
          href={linkToPage}
          target="_blank"
          rel="noopener noreferrer"
          className="initiative__button"
        >
          Join <ArrowRight />
        </a>
        {/* <Link to={linkToPage}><span className="initiative__button">Join</span> <ArrowRight /></Link> */}
        {/* <Link to={linkToPage} className="initiative__button">Join <ArrowRight /></Link> */}
      </div>
    </div>
  );
};
export default InitiativeCard;
