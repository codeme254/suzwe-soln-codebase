import React from "react";
import Title from "./../Typography/Title";

const NextSteps = () => {
  return (
    <section className="nextsteps">
      <Title mainTitle="Next steps" subTitle="Reach out to us" />
      <div className="nextsteps__container">
        <div className="nextsteps__textual">
          <p className="nextsteps__textual--text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dignissimos voluptate et, facilis cupiditate eaque repellendus
            aperiam ratione quasi dolor incidunt ea fuga necessitatibus modi
            laudantium, sapiente at ut pariatur atque sunt hic. Deserunt
            corporis itaque id eveniet voluptatem, aliquid officia iusto quis
            vel similique.
          </p>

          <a href="/" className="nextsteps__textual--button">
            Get in touch with us
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
