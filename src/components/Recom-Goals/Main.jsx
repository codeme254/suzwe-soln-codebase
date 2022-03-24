import Title from "../Typography/Title";
import Goal from "./Goal";
import React, { useRef } from "react";
import avartarImg from './../../assets/images/industrial.jpg';

const RecommendationsAndGoals = () => {
  const formRef = useRef(null);
  const popTheFormUp = () => {
    formRef.current.classList.add("u-show-form");
  };
  const hideTheForm = (e) => {
    if (formRef.current.classList.contains("u-show-form")) {
      formRef.current.classList.remove("u-show-form");
    }
  };
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
        <div className="close-btn" onClick={hideTheForm}>
            <div className="close-btn__icon"></div>
        </div>
        <div className="recommendation__form--controlls">
            <img src={avartarImg} alt="some avartar" className="form__avartar" />
            <div className="form__group" style={{marginTop: "4rem"}}>
                <label htmlFor="name" className="form__group--label">Name</label>
                <input type="text" className="form__group--text-input" placeholder="your full name" id="name" />
            </div>

            <div className="form__flex">
                <div className="form__group">
                    <label htmlFor="crop-name" className="form__group--label">crop</label>
                    <input type="text" className="form__group--text-input" placeholder="name of your crop" id="crop-name" />
                </div>
                <div className="form__group">
                    <label htmlFor="crop-age" className="form__group--label">crop age</label>
                    <input type="text" className="form__group--text-input" placeholder="value in moths" id="crop-age" />
                </div>
            </div>
            <div className="form__flex">
                <div className="form__group">
                    <label htmlFor="last-pesticide" className="form__group--label">last pesticide</label>
                    <input type="text" className="form__group--text-input" placeholder="last pesticide" id="last-pesticide" />
                </div>
                <div className="form__group">
                    <label htmlFor="application-date" className="form__group--label">Application date</label>
                    <input type="text" className="form__group--text-input" placeholder="value in moths" id="application-date" />
                </div>
            </div>

            <div className="form__group">
                <label htmlFor="disease-seen" className="form__group--label">Pest/Disease seen</label>
                <input type="text" className="form__group--text-input" placeholder="name of pest/disease seen" id="disease-seen" />
            </div>
            <div className="form__group">
                <label htmlFor="email" className="form__group--label">email address</label>
                <input type="email" className="form__group--text-input" placeholder="your email address" id="email" />
            </div>
            <div className="form__group">
                <label htmlFor="phone" className="form__group--label">your mobile number</label>
                <input type="tel" className="form__group--text-input" placeholder="Your mobile number" id="disease-seen" />
            </div>

            <button className="form__submit--button" type="submit" title="submit your response">Submit</button>
        </div>

        <div className="recommendation__form--image"></div>
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
