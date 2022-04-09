import React from "react";
import Goal from "../Recom-Goals/Goal";

const Goals = () => {
  const goals = [
    {
      goal: "Reduce  gas emissions",
      description:
        "Crop producers can change nutrient management practices to reduce emissions from  fertilizers, fungicides and pesticides",
    },
    {
      goal: "Making Fertilizers more accessible",
      description:
        "Get fertilizers at  subsidized rates. We  will deliver  it at your door step . Contact us for more information ",
    },
    {
      goal: "Help your fellow farmer ",
      description:
        "Take part in community initiatives to  bring change to  your community",
    },
    // {
    //   goal: "Efficient farming recommendations",
    //   description:
    //     "We are planning to teach 3K+ farmers on efficient farming methods and best fertilizers and pesticides to use before the end of 2022.",
    // },
  ];
  return (
    <section className="goals-l">
      <div className="goals-l__container">
        {goals.map((el, i) => (
          <Goal title={el.goal} description={el.description} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Goals;
