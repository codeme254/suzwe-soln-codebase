import React from "react";
import Title from "./../../../src/components/Typography/Title";
import InitiativeCard from "../../components/Initiative/InitiativeCard";

const OtherInitiatives = ({ arrayOfOtherInitiatives }) => {
  return (
    <section className="other-initiatives">
      <Title
        mainTitle="More Community Initiatives"
        subTitle="sign up for more initiatives"
      />

      <div className="other-initiatives-container">
        {arrayOfOtherInitiatives.map((initiative, i) => (
          <InitiativeCard
            image={initiative.image}
            description={initiative.description}
            linkToPage={initiative.linkToPage}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};
export default OtherInitiatives;