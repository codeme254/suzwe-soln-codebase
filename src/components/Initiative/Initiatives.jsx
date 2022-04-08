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
        "Promoting sustainable agricultural, supporting small-scale farmers and equal access to land, technology and markets. It also requires international cooperation to ensure investment in infrastructure and technology to improve agricultural productivity.",
      linkToPage: "/mandera-irrigation-project",
    },
    {
      image: irrigation,
      description:
        "To improve the livelihood of Mandera County residents through promotion of competitive agricultural production,  by end of 2022",
      linkToPage: "/mandera-irrigation-project",
    },
    {
      image: ecological,
      description:
        "Ecological farming ensures healthy farming and healthy food for today and tomorrow, by protecting soil, water and climate. It promotes biodiversity and does not contaminate the environment with chemical inputs or genetically engineered plant varieties.",
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
