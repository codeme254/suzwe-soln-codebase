import Title from "../Typography/Title";
import Goal from "./Goal";
import React from "react";
import Form from "./Form";

const RecommendationsAndGoals = () => {
  const goals = [
    {
      goal: "Increase your produce",
      description:
        "Help us help you.  We shall help you sell your produce to firms search as Twiga foods.Promoting our local agriculture is  our  mission",
    },
    {
      goal: "Making Fertilizers more acessible",
      description:
        "Get fertilizers at  subsidized rates. We  wilol deliver  it at your door step . Contact us for more information ",
    },
    {
      goal: "Help your fellow farmer ",
      description:
        "Take pqart in community intiatives to  bring change to  your community",
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
      <Title
        style={{ color: "#fff" }}
        mainTitle="Farming Tips"
        subTitle="Get new farming tips"
      />
      <div className="recom-goals__wrapper">
        <div className="form__wrapper--main">
          <p className=" recom-goals__statement">
            Let us give you personal recommendations on what you should do and
            use.
          </p>
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
