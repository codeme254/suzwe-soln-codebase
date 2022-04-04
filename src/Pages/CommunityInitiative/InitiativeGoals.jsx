import React from "react";
import Goal from "./../../components/Recom-Goals/Goal";
import Title from "./../../../src/components/Typography/Title";

const InitiativeGoals = ({ goalsArray }) => {
  return (
    <section className="initiative-goals">
      <Title mainTitle="Goals" subTitle="Our target for the project" />
      <div className="goals-container">
        {goalsArray.map((item, i) => (
          <Goal title={item.title} description={item.description} key={i} />
        ))}
      </div>
    </section>
  );
};
export default InitiativeGoals;
