import React from "react";
import SingleHero from "./SingleHero";
import Carousel from "react-material-ui-carousel";

const Hero = () => {
  const heroTitles = [
    {
      title: "Climate change.",
      subtitle: "The everest of all problems that humanity is facing",
    },
    {
      title: "Be nice, save the ice",
      subtitle: "Cool people don't deserve the effect of global warming",
    },
    {
      title: "Cool the earth with greenery, or miss all the scenery.",
      subtitle: "It is our sole responsibility to do our best to preserve green.",
    },
    {
      title: "Deforestation = Flood = Deadly Disaster",
      subtitle: "Trees can beat the rising heat",
    },
    {
      title: "Global warming is a present emergency, not a future threat.",
      subtitle: "One planet, one chance. Stop Global Warming.",
    },
  ];
  return (
    <Carousel interval={3000} stopAutoPlayOnHover="false" navButtonsAlwaysVisible="true" animation="slide" duration={800}>
      {heroTitles.map((item, i) => (
        <SingleHero key={i} title={item.title} subtitle={item.subtitle} />
      ))}
    </Carousel>
  );
};

export default Hero;
