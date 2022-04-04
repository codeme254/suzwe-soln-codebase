import React from "react";
import Title from './../../../src/components/Typography/Title'

const AboutInitiative = ({ heading, descriptionText }) => {
  return (
    <section className="about-initiative">
        <Title mainTitle="About it" subTitle="Why Mandera" />
      <div className="about-initiative__container">
        <div className="about-initative__heading">
          <h2 className="about-initative__heading--heading-text">{heading}</h2>
        </div>
        <div className="about-initiative__description">
          <p className="about-initiative__description--text">
            {descriptionText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutInitiative;
