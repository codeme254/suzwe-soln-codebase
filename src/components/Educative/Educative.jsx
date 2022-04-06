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
        "A pesticide is a substance used for destroying insects or other organisms harmful to cultivated plants or to animals",
      learnPageLink: "/pesticides",
    },
    {
      image: fertImg,
      title: "fertilizers",
      preText:
        "A fertilizer is a chemical or natural substance added to soil or land to increase its fertility",
      learnPageLink: "/fertilizers",
    },
    {
      image: fungiImg,
      title: "fungicides",
      preText:
        "A fungicide is a chemical that destroys fungus.",
      learnPageLink: "/fungicides",
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
