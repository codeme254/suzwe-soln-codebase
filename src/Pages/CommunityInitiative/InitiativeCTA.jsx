import React from "react";
import Title from "./../../../src/components/Typography/Title";

const InitiativeCTA = () => {
  return (
    <section className="initiative-cta">
      <Title mainTitle="Book your seat" subTitle="sign up for the event" />
      <h3 className="initiative-cta__text">
        Contribute Ksh.1, that is an equivalent of 0.079 dollars, become part of the team that is saving the world.
      </h3>
      <a href="paypal.com" className="initiative-cta__button">
        Donate
      </a>
    </section>
  );
};
export default InitiativeCTA;
