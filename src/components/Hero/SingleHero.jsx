import React from "react";

const SingleHero = ({ title, subtitle }) => {
  return (
    <section className="hero">
      <h1 className="hero__title">{title}</h1>
      <p className="hero__subtitle">{subtitle}</p>
    </section>
  );
};
export default SingleHero;
