import React from "react";
import Educative from "../Educative/Educative";
import { PesticideData } from "./../../reusable/data.const";

const PesticidesEducation = () => {
  const exp = [];

  PesticideData.map((el, i) => {
    let objTitle = { title: el.pesticides, id: el.i };
    let objDescription = {
      description: `Controls  ${el.pest} which  attacks mainly  ${el.plant}. ${el.pesticides} should be applied at the rate of ${el.rate}, it kills pesticides through ${el.modeOfAction}. For more help,   you can get  more farming  tips from us  above .`,
    };

    let mainObject = Object.assign(objTitle, objDescription);
    exp.push(mainObject);
    return mainObject;
  });
  return (
    <Educative
      heading="Pesticides"
      explanationText="A pesticide is a substance used for destroying insects or other organisms harmful to cultivated plants or to animals. Pesticides are chemicals designed to be harmful to a target pest and purposely introduced into the environment to do their job of managing insects, bacteria, weeds, rodents, or other pests. Farmers use pesticides to control the pests that can destroy or damage food and other crops."
      tipsTitle="Common pesticides"
      tipsSubtitle="learn about common pests and how to deal with them."
      arrayOfExplantions={exp}
    />
  );
};

export default PesticidesEducation;
