import React from "react";
import Fungicides from "./fungicides/fungicides";
import Fertilizers from "./fertilizers/fertilizers";

const Educational = () => {
  return (
    <section className="educational">
      <h1 className="page-title">
        Start using soil friendly fungicides and fertilizers today
      </h1>
      <Fertilizers />
      <Fungicides />
    </section>
  );
};

export default Educational;
