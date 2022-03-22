import React from "react";

const Title = ({ mainTitle, subTitle }) => {
  return (
    <h1 className="title">
      <span className="title__main">{mainTitle}</span>
      <span className="title__sub">{subTitle}</span>
    </h1>
  );
};
export default Title;
