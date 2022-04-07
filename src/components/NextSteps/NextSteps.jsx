import React from "react";
import Title from "./../Typography/Title";

const NextSteps = () => {
  return (
    <section className="nextsteps">
      <Title mainTitle="Next steps" subTitle="Reach out to us" />
      <div className="nextsteps__container">
        <div className="nextsteps__textual">
          <p className="nextsteps__textual--text">
            Your feedback really matters to us, please feel free to send in your
            suggestions or critics, we are also ready to help in case you are
            finding any difficulty anywhere, also, feel free to join various
            communities and projects by Clima as we fight the negative climate
            chang effects.
          </p>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.powerbi.com/links/QHq_ltxnZs?ctid=84c31ca0-ac3b-4eae-ad11-519d80233e6f&pbi_source=linkShare"
            className="nextsteps__textual--button"
          >
            View our report
          </a>
        </div>
        <div className="nextsteps__form">
          <form action="#" className="form">
            <h3 className="form__title">Feedback form</h3>
            <div className="form__group">
              <label htmlFor="email" className="form__group--label--nex-steps">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form__group--text-input-feedback"
                required
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form__group">
              <label
                htmlFor="subject"
                className="form__group--label--nex-steps"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="form__group--text-input-feedback"
                required
                placeholder="john doe"
              />
            </div>
            <div className="form__group">
              <label
                htmlFor="message"
                className="form__group--label--nex-steps"
              >
                message
              </label>
              <textarea
                id="message"
                className="form__group--textarea"
                required
                placeholder="keep up the effort suzwe, thanks"
              ></textarea>
            </div>

            <button className="form__button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default NextSteps;
