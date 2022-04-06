import React from "react";
import Educative from "../Educative/Educative";
import { fertlizerData } from './../../reusable/data.const'

const FertilizersEducation = () => {
  const exp = []

  fertlizerData.map((el, i) => {
    let obj = {
      title: el.fertilizer,
      description: `${el.fertilizer} has ${el.composition.n}% nitrogen, ${el.composition.k}% potassium and ${el.composition.p}% phosphorus, it should be applied ${el.aplicationTime} ${el.typeOfApplication}. ${el.fertilizer} works best with ${el.plant}. For more help, click the get recommendation button and we will be there to help.`
    }
    exp.push(obj)
    return
  })

  return (
    <Educative
      heading="Fertilizers"
      explanationText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea delectus ab nobis repellat corrupti cum dolor rem nemo. Qui odio officia saepe cumque, est harum aliquid nulla alias iste? Deserunt, dolorum incidunt! Perspiciatis asperiores quasi optio harum veritatis repellat molestiae aperiam, voluptas vel vitae rerum hic laboriosam ex autem ipsam."
      tipsTitle="fertilizer composition"
      tipsSubtitle="what are you using"
      arrayOfExplantions={exp}
    />
  );
};

export default FertilizersEducation;
