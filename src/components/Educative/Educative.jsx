import React from "react";
import Title from "./../Typography/Title";
import EducativeCard from "./EducativeCard";
import img from "./../../assets/images/disease.jpg";

const Educative = () => {
  const educatives = [
    {
      image: img,
      title: "pesticides",
      preText:
        "Sometime it is good to learn about these thing in order to save nature from harm",
      learnPageLink: "http://google.com",
    },
    {
      image: img,
      title: "fertilizers",
      preText:
        "Sometime it is good to learn about these thing in order to save nature from harm",
      learnPageLink: "http://google.com",
    },
    {
      image: img,
      title: "fungicides",
      preText:
        "Sometime it is good to learn about these thing in order to save nature from harm",
      learnPageLink: "http://google.com",
    },
  ];

  return (
    <section className="educative-section">
      <Title mainTitle="Educate the community" subTitle="What we do" />

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
