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
      <div className="view-report">
        <h3 className="initiative-cta__text">
          We organize community intiatives to help your fellow farmer
        </h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.powerbi.com/links/QHq_ltxnZs?ctid=84c31ca0-ac3b-4eae-ad11-519d80233e6f&pbi_source=linkShare"
          className="nextsteps__textual--button"
        >
          View our report
        </a>
      </div>

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
