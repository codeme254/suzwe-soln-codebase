import React from "react";
import SingleHero from "./SingleHero";
import Carousel from "react-material-ui-carousel";

import industrialImg from "../../assets/images/industrial.jpg";
import pollutinImage from "../../assets/images/pollutin.jpg";
import powerStation from "../../assets/images/power-station.jpg";
import environmentProtection from "../../assets/images/env-prot.jpg";
import waste from "../../assets/images/waste.jpg";
const Hero = () => {
  const heroTitles = [
    {
      image: industrialImg,
      title: "Africa is becoming a .",
      subtitle: "The everest of all problems that humanity is facing",
    },
    {
      image: pollutinImage,
      title: "Be nice, save the ice",
      subtitle: "Cool people don't deserve the effect of global warming",
    },
    {
      image: powerStation,
      title: "Cool the earth with greenery, or miss all the scenery.",
      subtitle:
        "It is our sole responsibility to do our best to preserve green.",
    },
    {
      image: environmentProtection,
      title: "Deforestation = Flood = Deadly Disaster",
      subtitle: "Trees can beat the rising heat",
    },
    {
      image: waste,
      title: "Global warming is a present emergency, not a future threat.",
      subtitle: "One planet, one chance. Stop Global Warming.",
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
