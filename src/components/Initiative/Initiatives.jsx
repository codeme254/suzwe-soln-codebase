import React from "react";
import Title from "./../Typography/Title";
import zeroHunger from "./../../assets/images/Intiatives/ZeroHunger.jpg";

import irrigation from "./../../assets/images/Intiatives/Irrigation.jpg";

import ecological from "./../../assets/images/Intiatives/EcologicalFarming.jpg";
import InitiativeCard from "./InitiativeCard";

const Initiatives = () => {
  const initiatives = [
    {
      image: zeroHunger,
      description:
        "We are planning to start a walk for call to environmental protection, in the process, we will be rasing money to plant trees, we are targetting to plant upto 2000 treeas by the end of 2022",
      linkToPage: "/mandera-irrigation-project",
    },
    {
      image: irrigation,
      description:
        "We are planning to start a walk for call to environmental protection, in the process, we will be rasing money to plant trees, we are targetting to plant upto 2000 treeas by the end of 2022",
      linkToPage: "/mandera-irrigation-project",
    },
    {
      image: ecological,
      description:
        "We are planning to start a walk for call to environmental protection, in the process, we will be rasing money to plant trees, we are targetting to plant upto 2000 treeas by the end of 2022",
      linkToPage: "/mandera-irrigation-project",
    },
  ];
  return (
    <section className="initiatives">
      <Title mainTitle="Community initiative" subTitle="Let's join hands" />

      <div className="all-initiatives-container">
        {initiatives.map((el, i) => (
          <InitiativeCard
            id={i}
            image={el.image}
            description={el.description}
            linkToPage={el.linkToPage}
          />
        ))}
      </div>
    </section>
  );
};
export default Initiatives;
