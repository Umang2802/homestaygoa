import React from "react";
import Section from "../Components/Section/Section";

const Churches = () => {
  const churches = [
    {
      image: "",
      title: "",
      desc: "",
      map: "",
      dist: "",
    },
  ];
  return (
    <Section Title="Churches" section="churches" array={churches}></Section>
  );
};

export default Churches;
