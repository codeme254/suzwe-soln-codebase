import React from "react";
import SingleHero from "./SingleHero";
import Carousel from "react-material-ui-carousel";

import chemicalImg from "../../assets/images/ChemicalFertilize.jpeg";
import fertilizerImage from "../../assets/images/Fertilizer.jpg";
import powerStation from "../../assets/images/power-station.jpg";
import environmentProtection from "../../assets/images/env-prot.jpg";
import waste from "../../assets/images/waste.jpg";
const Hero = () => {
  const heroTitles = [
    {
      image: chemicalImg,
      title: "Agriculture is responsible  for 10% of global greenhouse",
      subtitle:
        "5.2 billion tonnes of CO2  are emitted per year.Emission related to  rice cultivation and synthetis fertilizer  use are rising higher  in Africa",
    },
    {
      image: fertilizerImage,
      title: "Artificial fertilizer , the biggest contributor ",
      subtitle:
        "Artificial fertiliser  is the biggest contributor to industrial loaf's   carbon footprint",
    },
    // {
    //   image: fungicidesRice,
    //   title: "Cool the earth with greenery, or miss all the scenery.",
    //   subtitle:
    //     "It is our sole responsibility to do our best to preserve green.",
    // },
    {
      image: environmentProtection,
      title: "Reducing agricultural greenhouse gases",
      subtitle:
        "Farmers and food  producers  can reduce green house gas emissions by  using management practices that are region and site specific.",
    },
    {
      image: powerStation,
      title: "Global warming is a present emergency, not a future threat.",
      subtitle:
        "Humans are increasingly fluencing  the climate and the earth's tempearture",
    },
  ];
  return (
    <Carousel
      interval={4500}
      stopAutoPlayOnHover="false"
      navButtonsAlwaysVisible="true"
      animation="slide"
      duration={800}
    >
      {heroTitles.map((item, i) => (
        <SingleHero
          key={i}
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
        />
      ))}
    </Carousel>
  );
};

export default Hero;
