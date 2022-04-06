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
      explanationText="A fungicide is a chemical that destroys fungus. They are agents that are used to prevent or eradicate fungal infections from plants or seeds. They kill or prevent the growth of fungi and their spores. They can be used to control fungi that damage plants, including rusts, mildews and blights. They might also be used to control mold and mildewin other settings. Fungicides are used to suppress the growth of fungi or fungal spores. Fungicides have a role in protection of fruits, vegetables, and tubers during storage."
      tipsTitle="Fungus and treatments"
      tipsSubtitle="various fungus and how to treat them"
      arrayOfExplantions={exp}
    />
  );
};

export default FungicidesEducation;
