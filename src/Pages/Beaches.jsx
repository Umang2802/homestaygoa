import React from "react";
import Section from "../Components/Section/Section";
import Palolem from "../Assets/Places/Beaches/palolem.jpg";
import Talpona from "../Assets/Places/Beaches/talpona.jpg";
import Galgibaga from "../Assets/Places/Beaches/galgibaga.jpg";
import Rajbag from "../Assets/Places/Beaches/rajbag.jpg";
import Patnem from "../Assets/Places/Beaches/patnem.jpg";

const Beaches = () => {
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
      image: Rajbag,
      title: "Rajbag Beach",
      desc: "The Rajbagh beach has always prided itself for being one of the best and cleanest beaches found in Goa. Located in South Goa, the beach has a mesmerizing 1 km long shoreline which offers a lovely time at the beach.",
      map: "",
      dist: "",
    },
    {
      image: Patnem,
      title: "Patnem Beach",
      desc: "The Patnem Beach is one of the quietest and most secluded beaches of South Goa. Located in the town of Canacona, this beach is a little slice of Paradise. The beach is known for its peacefulness and beauty as well as the succulent seafood that is available in the area.",
      map: "",
      dist: "",
    },
    {
      image: "",
      title: "Colomb Beach",
      desc: "Colomb Beach (or as it is also called Colom Beach) is located in a small horseshoe-shaped bay between the Palolem and Patnem Beaches. This is one of the most remote beaches of South Goa. This place is very suitable for those who prefer to spend their holidays quietly and solitarily and for those who are fond of privacy and comfort of small spaces.",
      map: "",
      dist: "",
    },
    {
      image: "",
      title: "Xendrem Beach",
      desc: "Xendrem Beach is a 400-meter stretch of golden sand, dotted with large lava stones and covered with high trees and dense brush woods. The entry into the sea is sharp; frequent can happen some fast underwater currents so that if you are planning to swim here than you should be very careful.",
      map: "",
      dist: "",
    },
    {
      image: "",
      title: "Agonda Beach",
      desc: "Agonda is a 3 km long beautiful cove of white sand, safely secluded in the palms. It’s not safe to swim out too far on this beach.",
      map: "",
      dist: "",
    },
    {
      image: "",
      title: "Kakolem Beach",
      desc: "Kakolem Beach is a knee-high to a duck beach, which has spread its expanse in a Bay.The breathtakingly beautiful, fantastical view opens eyes of everyone who is coming here for quite cozy rest from the nearby hill. From the rock, which is placed right in the Beach, a cool stream flows.",
      map: "",
      dist: "",
    },
    {
      image: "",
      title: "Cola Beach",
      desc: "Cola is one of the hidden beaches in Goa, a marvel of nature that is still undiscovered by most tourists. It remains secluded throughout the year. This is a perfect place for a nice, relaxing holiday in Goa. Cola is a perfect choice to escape from the crowded beaches and the hustle and bustle of city life.",
      map: "",
      dist: "",
    },
    {
      image: "",
      title: "Butterfly Beach",
      desc: "Butteryfly Beach is in the form of a small cove surrounded by dense trees. One of the most secluded and lesser-known beach of Goa, the butterfly beach is mostly accessible by a boat (ferry) ride from the nearby beaches, which only adds to the charm. Butterfly Beach is so named as the surrounding trees attract a wide variety of butterflies occasionally. It may also be because the beach itself is in the shape of a butterfly! Either way, it is just as pretty as one, especially during sunsets.",
      map: "",
      dist: "",
    },
    {
      image: "",
      title: "Cabo De Rama Beach",
      desc: "Cabo de Rama Beach, also known among local citizens as Cab de Ram, is a beautiful wild beach in the south of Goa. The water in Cabo de Rama is blue with rich green hue. In the north of the Beach a small river, which can easily be crossed in ford, starts its serene running. A strip of palm groves stretched alongside the beach, in a short distance from the waves, offering its guests a very pleasant setting for picnics. It is relatively safe to swim here but still you must be very careful because it is possible to stumble into sharp reefs or get into strong currents.",
      map: "",
      dist: "",
    },
    {
      image: "",
      title: "",
      desc: "",
      map: "",
      dist: "",
    },
  ];

  return <Section Title="Beaches" section="beaches" array={beaches}></Section>;
};

export default Beaches;
