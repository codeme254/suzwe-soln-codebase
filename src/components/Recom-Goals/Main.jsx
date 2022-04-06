import Title from "../Typography/Title";
import Goal from "./Goal";
import React from "react";
import Form from "./Form";

const RecommendationsAndGoals = () => {
  const goals = [
    {
      goal: "Increase your produce",
      description:
        "Suzwe is targetting to bring the world together and raise Ksh.8 Million by the end of the year 2022 to help feeding areas affected by climate change especially the Nothern parts of Kenya.",
    },
    {
      goal: "Making Fertilizers more acessible",
      description:
        "Suzwe is targetting to bring the world together and raise Ksh.12 Million by the end of the year 2022 to help set up irrigation schemes in dry areas and  plant trees there.",
    },
    {
      goal: "Saidia mkulima mwenzako",
      description:
        "We are planning to bring every single kenyan together each and every month to donate Ksh.1 which is an equivalent of 0.0079 us dollar to feed kids in dry areas and set up farming in those areas, we also intend to build houses for areas affected by floods.",
    },
    {
      goal: "Efficient farming recommendations",
      description:
        "We are planning to teach 3K+ farmers on efficient farming methods and best fertilizers and pesticides to use before the end of 2022.",
    },
  ];
  return (
    // when a radom place outside the formis clicked, the form is supposed to hide and that is why am attaching the function for hiding the form on the body holding the form
    <section className="recom-goals">
      <Title mainTitle="Recommendations" subTitle="What you should use" />
      <div className="recom-goals__wrapper">

        <div className="form__wrapper--main">
          <Form />
        </div>

        <div className="goals">
          {goals.map((goal, i) => (
            <Goal key={i} title={goal.goal} description={goal.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsAndGoals;
