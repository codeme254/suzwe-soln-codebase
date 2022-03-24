import React from "react";
import ListIcon from "../Icons/Icons";

const Goal = ({ title, description }) => {
  return (
    <div className="goal">
      <div className="goal__header">
        <ListIcon className="goal__header--svg" />
        <h2 className="goal__header--goal-name">{title}</h2>
      </div>
      <p className="goal__description">{description}</p>
    </div>
  );
};
export default Goal;
