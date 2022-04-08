import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import CommunityInitiativeHero from "./CommunityInitiativeHero";
import drySweetImage from "./../../assets/images/landscape.jpg";
import AboutInitiative from "./AboutInitiative";
import InitiativeGoals from "./InitiativeGoals";
import InitiativeCTA from "./InitiativeCTA";
import OtherInitiatives from "./OtherInitiatives";
import CommunityInitiativeFooter from "./CommunityInitiativeFooter";

import zeroHunger from "./../../assets/images/Intiatives/ZeroHunger.jpg";

import irrigation from "./../../assets/images/Intiatives/Irrigation.jpg";

import ecological from "./../../assets/images/Intiatives/EcologicalFarming.jpg";

const CommunityInitiativePage = () => {
  const goalsArray = [
    {
      title: "Ending Zero Hunger",
      description:
        "One way to ensure food security is to rethink the role of irrigation in agriculture and food production.",
    },
    // {
    //   title: "Reducing Climate Change",
    //   description:
    //     "we really want to achieve this goal and we mean it, we really really want to meet it",
    // },
    {
      title: "Sustainable agriculture",
      description:
        "Sustainable irrigation methods are essential to farmers all over the world.",
    },
  ];

  const otherInitiatives = [
    {
      image: irrigation,
      description:
        "To improve the livelihood of Mandera County residents through promotion of competitive agricultural production,  by end of 2022",
      linkToPage: "/mandera-irrigation-project",
    },
    {
      image: zeroHunger,
      description:
        "Promoting sustainable agricultural, supporting small-scale farmers and equal access to land, technology and markets. It also requires international cooperation to ensure investment in infrastructure and technology to improve agricultural productivity.",
      linkToPage: "/mandera-irrigation-project",
    },

    {
      image: ecological,
      description:
        "Ecological farming ensures healthy farming and healthy food for today and tomorrow, by protecting soil, water and climate. It promotes biodiversity and does not contaminate the environment with chemical inputs or genetically engineered plant varieties.",
    },
  ];
  return (
    <div className="page-root page-root-fix-header">
      <Navigation />
      <CommunityInitiativeHero
        heroText="let's build an irrigation scheme for Mandera."
        heroImage={drySweetImage}
      />
      <AboutInitiative
        heading="Join hands with us as we start our big mega project of Mandera irrigation scheme"
        descriptionText="Global warming has affected a lot of communities around us and the effects are visible. Mandera is one of the highly affected regions by global warming and there is currently no food or water in the region and a lot of people there are succumbing to hunger and thirst, let's salvage the place, Join hands with us as we set up irrigation scheme in the area to help them get started with farming and thus free food for them, we are also planning to plant trees around the area through the irrigation scheme."
      />

      {/* for initiative goals, just pass in the array of all items you want rendered, make sure the array is an array of object with keys title and description only spelled the exact same way */}
      <InitiativeGoals goalsArray={goalsArray} />
      <InitiativeCTA />
      <OtherInitiatives arrayOfOtherInitiatives={otherInitiatives} />
      <CommunityInitiativeFooter />
    </div>
  );
};

export default CommunityInitiativePage;
