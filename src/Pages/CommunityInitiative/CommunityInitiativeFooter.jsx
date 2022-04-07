import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  PhoneCallIcon,
} from "./Icons";

const CommunityInitiativeFooter = () => {
  return (
    <footer className="community-initiative-footer">
      <a href="/" className="community-initiative-footer__logo">
        <img src={process.env.PUBLIC_URL + "/logo/Clima.svg"} alt="Clima " />
      </a>

      <div className="c-i-footer__social">
        <a href="https://google.com" className="c-i-footer__social--link">
          <FacebookIcon />
        </a>
        <a href="https://google.com" className="c-i-footer__social--link">
          <LinkedInIcon />
        </a>
        <a href="https://google.com" className="c-i-footer__social--link">
          <TwitterIcon />
        </a>
        <a href="https://google.com" className="c-i-footer__social--link">
          <PhoneCallIcon />
        </a>
      </div>
      <p className="c-i-footer__thankyou">
        <p className="c-i-footer__thankyou--main">
          Special thanks to microsoft
        </p>
        <p className="c-i-footer__thankyou--main">All rights reserved</p>
        <p className="c-i-footer__thankyou--copyright">&copy; 2022 Suzwe.</p>
      </p>
    </footer>
  );
};
export default CommunityInitiativeFooter;
