import React from "react";
import Section from "../Components/Section/Section";

const Forts = () => {
  const forts = [
    {
      image: "",
      title: "",
      desc: "",
      map: "",
      dist: "",
    },
  ];
  return <Section Title="Forts" section="forts" array={forts}></Section>;
};

export default Forts;
