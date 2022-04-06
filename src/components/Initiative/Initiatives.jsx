import React from "react";
import Title from "./../Typography/Title";
import communityImg from "./../../assets/images/community.jpg";

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
      linkToJoinForm:
        "/https://www.actionagainsthunger.org/countries/africa/kenya",
    },
    {
      image: irrigation,
      description:
        "We are planning to start a walk for call to environmental protection, in the process, we will be rasing money to plant trees, we are targetting to plant upto 2000 treeas by the end of 2022",
      linkToJoinForm:
        "https://farmbizafrica.com/machinery/1912-drip-kit-saves-over-70-per-cent-water-in-kitchen-garden-irrigation",
    },
    {
      image: ecological,
      description:
        "We are planning to start a walk for call to environmental protection, in the process, we will be rasing money to plant trees, we are targetting to plant upto 2000 treeas by the end of 2022",
      linkToJoinForm: "https://www.greenpeace.org/africa/en/tag/farming/",
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
            linkToPage={el.linkToJoinForm}
          />
        ))}
      </div>
    </section>
  );
};
export default Initiatives;
