import React from "react";
import Section from "../Components/Section/Section";

const Churches = () => {
  const waterfalls = [
    {
      image: "",
      title: "",
      desc: "",
      map: "",
      dist: "",
    },
  ];
  return (
    <Section
      Title="Waterfalls"
      section="waterfalls"
      array={waterfalls}
    ></Section>
  );
};

export default Churches;
