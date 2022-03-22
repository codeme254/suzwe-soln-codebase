import Title from "../Typography/Title";
import Goal from "./Goal";
import React, { useRef } from "react";

const RecommendationsAndGoals = () => {
  const formRef = useRef(null);
  const popTheFormUp = () => {
    formRef.current.classList.add("u-show-form");
  };
//   const hideTheForm = (e) => {
//     if (formRef.current.classList.contains("u-show-form")) {
//       formRef.current.classList.remove("u-show-form");
//     }
//   };
  const goals = [
    {
      goal: "feed arid areas",
      description:
        "Suzwe is targetting to bring the world together and raise Ksh.8 Million by the end of the year 2022 to help feeding areas affected by climate change especially the Nothern parts of Kenya.",
    },
    {
      goal: "Setting up Irrigation schemes in arid areas",
      description:
        "Suzwe is targetting to bring the world together and raise Ksh.12 Million by the end of the year 2022 to help set up irrigation schemes in dry areas and  plant trees there.",
    },
    {
      goal: "Ksh.1 initiative",
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

      <form action="#" className="recommendation__form" ref={formRef}>
        <input type="text" placeholder="so what crop do you grow" />
      </form>

      <div className="recom-goals__wrapper">
        <div className="recommendation">
          <p className="recommendation__message">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quaerat
            excepturi facere itaque quas. Ratione rem assumenda consequatur eos.
            Similique modi optio vitae natus ut suscipit cumque harum blanditiis
            veritatis molestiae nihil impedit, quia, facere eos perspiciatis
            doloremque voluptatum deleniti iste atque incidunt voluptate. Atque
            quae iusto, molestias eum eaque officia autem earum, dolorem alias
            consequatur molestiae deserunt repellat perferendis aperiam ut
            inventore eius mollitia quaerat quasi? Nulla assumenda obcaecati
            laboriosam aperiam, consequatur suscipit ea? Quasi nam maiores quo
            ad exercitationem modi saepe deleniti explicabo, eum sequi ea
            tempore! Unde velit laborum ad illo adipisci voluptates ratione odio
            animi in!
          </p>
          <button className="recommendations__button" onClick={popTheFormUp}>
            Get Recommendations
          </button>
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
