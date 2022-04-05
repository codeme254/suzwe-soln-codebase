import React from "react";
import Title from "./../Typography/Title";
import EducativeCard from "./EducativeCard";
import img from "./../../assets/images/disease.jpg";

import pestImg from "./../../assets/images/Pesticides/General.jpg";

import fertImg from "./../../assets/images/Fertilizers/General.jpg";

import fungiImg from "./../../assets/images/Fungicides/General.jpg";

const Educative = () => {
  const educatives = [
    {
      image: pestImg,
      title: "pesticides",
      preText:
        "Sometime it is good to learn about these thing in order to save nature from harm",
      learnPageLink: "http://google.com",
    },
    {
      image: fertImg,
      title: "fertilizers",
      preText:
        "Sometime it is good to learn about these thing in order to save nature from harm",
      learnPageLink: "http://google.com",
    },
    {
      image: fungiImg,
      title: "fungicides",
      preText:
        "Sometime it is good to learn about these thing in order to save nature from harm",
      learnPageLink: "http://google.com",
    },
  ];

  return (
    <section className="educative-section">
      <Title
        class="whiteTitle"
        mainTitle="Educate the community"
        subTitle="What we do"
      />

      <div className="educatives__container">
        {educatives.map((el, i) => (
          <EducativeCard
            key={i}
            image={el.image}
            title={el.title}
            preText={el.preText}
            learnPageLink={el.learnPageLink}
          />
        ))}
      </div>
    </section>
  );
};
export default Educative;
