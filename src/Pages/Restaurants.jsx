import React from "react";
import Section from "../Components/Section/Section.jsx";

const Restaurants = () => {
  const restaurants = [
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
      Title="Restaurants"
      section="restaurants"
      array={restaurants}
    ></Section>
  );
};

export default Restaurants;
