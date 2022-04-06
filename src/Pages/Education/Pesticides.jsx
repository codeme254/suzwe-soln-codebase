import React from "react";
import Educative from "../Educative/Educative";
import { PestsData } from './../../reusable/data.const'

const PesticidesEducation = () => {
  const exp = []
  
  PestsData.map((el, i) => {
    let objTitle = {title: el.pest || "worm", id: el.i} 
    let objDescription = {description : `Attacks ${el.plant}, the best pesticide to use in this case is 
    ${el.pesticides}. ${el.pesticides} should be applied at the rate of ${el.rate}, it kills pesticides through ${el.modeOfAction}. For more help, you can click get recommendations at the top of this page and we will be there to help you.`};

    let mainObject = Object.assign(objTitle, objDescription)
    exp.push(mainObject)
    return mainObject
  });
  return (
    <Educative
      heading="Pesticides"
      explanationText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea delectus ab nobis repellat corrupti cum dolor rem nemo. Qui odio officia saepe cumque, est harum aliquid nulla alias iste? Deserunt, dolorum incidunt! Perspiciatis asperiores quasi optio harum veritatis repellat molestiae aperiam, voluptas vel vitae rerum hic laboriosam ex autem ipsam."
      tipsTitle="Common pesticides"
      tipsSubtitle="learn about common pests and how to deal with them."
      arrayOfExplantions={exp}
    />
  );
};

export default PesticidesEducation;
