import React from "react";
import Educative from "../Educative/Educative";
import { fertlizerData } from "./../../reusable/data.const";

const FertilizersEducation = () => {
  const exp = [];

  fertlizerData.map((el, i) => {
    let obj = {
      title: el.fertilizer,
      description: `${el.fertilizer} has ${el.composition.n}% nitrogen, ${
        el.composition.k
      }% potassium and ${el.composition.p}% phosphorus, it should be applied ${
        el.aplicationTime
      } ${el.typeOfApplication}. ${
        el.fertilizer
      } works best with ${el.plant.map((x) => x)}. Get ${
        el.fertilizer
      } at a  subsidized rate and delivered to your door step.`,
    };
    exp.push(obj);
    return;
  });

  return (
    <Educative
      heading="Fertilizers"
      explanationText="A chemical or natural substance added to soil or land to increase its fertility.fertilizers contain the essential nutrients required by the plants, including nitrogen, potassium, and phosphorus. They enhance the water retention capacity of the soil and also increase its fertility. In other words fertilizer, natural or artificial substance containing the chemical elements that improve growth and productiveness of plants. Fertilizers enhance the natural fertility of the soil or replace chemical elements taken from the soil. Organic fertilizers are natural fertilizers obtained from plants and animals. It enriches the soil with carbonic compounds essential for plant growth. Organic fertilizers increase the organic matter content of the soil, promotes the reproduction of microorganisms, and changes the physical and chemical properties of the soil."
      tipsTitle="fertilizer composition"
      tipsSubtitle="what are you using"
      arrayOfExplantions={exp}
    />
  );
};

export default FertilizersEducation;
