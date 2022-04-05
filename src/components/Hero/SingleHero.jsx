import React from "react";

const SingleHero = ({ title, subtitle, image }) => {
  return (
    <div className="width-fix">
      <section className="hero" style={{'backgroundImage':`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),url(${image})`}}>
      <h1 className="hero__title">{title}</h1>
      <p className="hero__subtitle">{subtitle}</p>
    </section>
    </div>
  );
};
export default SingleHero;
