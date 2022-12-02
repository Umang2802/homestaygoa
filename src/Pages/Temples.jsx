import React from "react";
import Section from "../Components/Section/Section";

const Temples = () => {
  const temples = [
    {
      image: "",
      title: "",
      desc: "",
      map: "",
      dist: "",
    },
  ];
  return <Section Title="Temples" section="temples" array={temples}></Section>;
};

export default Temples;
