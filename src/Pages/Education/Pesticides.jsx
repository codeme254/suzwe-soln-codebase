import React from "react";
import Educative from "../Educative/Educative";

const PesticidesEducation = () => {
  const explanations = [
    {
      title: "title 1",
      description:
        "some good ole nice description for this and we hope it is understood",
    },
    {
      title: "title 2",
      description:
        "some good ole nice description for this and we hope it is understood",
    },
    {
      title: "title 3",
      description:
        "some good ole nice description for this and we hope it is understood",
    },
    {
      title: "title 4",
      description:
        "some good ole nice description for this and we hope it is understood",
    },
    {
      title: "title 5",
      description:
        "some good ole nice description for this and we hope it is understood",
    },
    {
      title: "title 6",
      description:
        "some good ole nice description for this and we hope it is understood",
    },
  ];
  return (
    <Educative
      heading="Pesticides"
      explanationText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea delectus ab nobis repellat corrupti cum dolor rem nemo. Qui odio officia saepe cumque, est harum aliquid nulla alias iste? Deserunt, dolorum incidunt! Perspiciatis asperiores quasi optio harum veritatis repellat molestiae aperiam, voluptas vel vitae rerum hic laboriosam ex autem ipsam."
      tipsTitle="fertilizer composition"
      tipsSubtitle="what are you using"
      arrayOfExplantions={explanations}
    />
  );
};

export default PesticidesEducation;
