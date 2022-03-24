import React from "react";
import Title from "./../Typography/Title";

const NextSteps = () => {
  return (
    <section className="nextsteps">
      <Title mainTitle="Next steps" subTitle="Reach out to us" />
      <div className="nextsteps__container">
        <div className="nextsteps__textual">
          <p className="nextsteps__textual--text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos voluptate et, facilis cupiditate eaque repellendus aperiam ratione quasi dolor incidunt ea fuga necessitatibus modi laudantium, sapiente at ut pariatur atque sunt hic. Deserunt corporis itaque id eveniet voluptatem, aliquid officia iusto quis vel similique.
          </p>

          <a href="/" className="nextsteps__textual--button">Get in touch with us</a>
        </div>
        <div className="nextsteps__form">
          <h1>form goes here</h1>
        </div>
      </div>
    </section>
  );
};
export default NextSteps;
