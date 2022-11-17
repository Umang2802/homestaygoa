import React from "react";
import Palolem from "../Images/palolem.jpg";
import Talpona from "../Images/talpona.jpg";
import Galgibaga from "../Images/galgibaga.jpg";
import CardComponent from "./cardComponent";

function Beaches() {
  const beaches = [
    {
      image: Palolem,
      title: "Palolem Beach",
      desc: "It is about one mile long and is crescent-shaped. Also it safe for average swimmers, and the currents are not fast.",
      map: "https://maps.app.goo.gl/qxWoiGmoQnMZLvs9A",
      dist: "9",
    },
    {
      image: Talpona,
      title: "Talpona Beach",
      desc: "It is a very quiet, secluded and clean beach. Talpona beach is highly recommended for people seeking complete isolation and peace.",
      map: "",
      dist: "",
    },
    {
      image: Galgibaga,
      title: "Galgibaga Beach",
      desc: "The beach forms the nesting grounds of the Olive Ridley turtles, a protected species. It is also known as Turtle beach.",
      map: "",
      dist: "",
    },
    {
      image: "Rajbag",
      title: "Rajbag Beach",
      desc: "",
      map: "",
      dist: "",
    },
    {
      image: "Patnem",
      title: "Patnem Beach",
      desc: "",
      map: "",
      dist: "",
    },
  ];
  return (
    <div>
      <div className="container">
        <h1 className="title" style={{ textAlign: "center" }}>
          Beaches
        </h1>
        <div className="row row-cols-1 row-cols-md-2 ">
              <CardComponent args={beaches} />
        </div>
      </div>
    </div>
  );
}

export default Beaches;
