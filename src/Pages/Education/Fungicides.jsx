import React from "react";
import Educative from "../Educative/Educative";
import { FungicidesData } from './../../reusable/data.const'


const FungicidesEducation = () => {
  const exp = []

  FungicidesData.map((el, i) => {
    let obj = {
      title: el.disease || 'deadly disease',
      description: `${el.disease || "deadly disease"} is a disease that attacks ${el.plant}, it is mainly. It is made up of ${el.activeIngredient}. To deal with ${el.disease || "deadly disease"}, You will need ${el.fungicides} which is applied at the rate of ${el.rate}. ${el.fungicides} will help your plants through ${el.modeOfAction}. If you need help, press the get recommendation button above and we will be there to help.`
    }
    exp.push(obj)
    return
  })
  return (
    <Educative
      heading="fungicides"
      explanationText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea delectus ab nobis repellat corrupti cum dolor rem nemo. Qui odio officia saepe cumque, est harum aliquid nulla alias iste? Deserunt, dolorum incidunt! Perspiciatis asperiores quasi optio harum veritatis repellat molestiae aperiam, voluptas vel vitae rerum hic laboriosam ex autem ipsam."
      tipsTitle="Fungus and treatments"
      tipsSubtitle="various fungus and how to treat them"
      arrayOfExplantions={exp}
    />
  );
};

export default FungicidesEducation;
