import React from "react";
import Section from "../Components/Section/Section";

const Forts = () => {
  const forts = [
    {
      image: "Cabo",
      title: "Cabo de rama",
      desc: "One of the most beautiful and famous forts in Goa, this is a perfect place for the people who love to explore abandoned places and ruins. Spread across an area of 1,80,000 sq metres, Cabo De Rama is one of the oldest and largest forts in the state. The place is named after Lord Rama and according to the legends, it is believed that he spent his exile years here with his wife and brother.",
      map: "",
      dist: "",
    },
    {
      image: "Aguada",
      title: "Aguada Fort",
      desc: "A 17th century Portuguese fort in north Goa. One of the largest forts in west India, it is on top of a small hill at the confluence of the Mandovi River and the Arabian Sea. Fort Aguada was constructed to control the movement of ships and prevent Dutch and Maratha attacks. It has seen many battles, first by the Dutch in 1604, and then the British.",
      map: "",
      dist: "",
    },
    {
      image: "Reis",
      title: "Reis Magos",
      desc: "Reis Magos Fort is amongst the oldest forts in Goa and exhibits panoramic views from all sides. The astounding ambiance of this place makes it one of the most loved forts in Goa.",
      map: "",
      dist: "",
    },
    {
      image: "Sinquerim",
      title: "Sinquerim Fort",
      desc: "Sinquerim Fort is located at a distance of 18 kilometers from the capital city. It is believed to be the lower extension of Aguada Fort and is one of the must-visit places in Goa. This beautiful fort divides the Sinquerim Beach into two and the stunning views of the Arabian Sea will surely spellbind you with its impeccable beauty.",
      map: "",
      dist: "",
    },
    {
      image: "Chapora",
      title: "Chapora Fort",
      desc: "Chapora River meets the Arabian Sea on the other side of the fort. It was established by ruler of the Bijapur dynasty between 1627 and 1656 on the site of an ancient fort. It fell to the Portuguese, who converted it into a border outpost for preventing enemy attacks. Heavily fortified fort in its heydays. Presently the Chapora Fort is in ruins. It is popular with Indian tourists as the ‘Dil Chahta Hai’ movie was shot here.",
      map: "",
      dist: "",
    },
    {
      image: "Corjuem",
      title: "Corjuem Fort",
      desc: "A fort built by Hindu rulers in 1705 in north Goa. But like the others, this too was occupied by the Portuguese later. Corjuem is 21.4 kilometers from Panaji on the island of Corjuem, which gives the fort its name. It is small in size, but is one of the two main inland forts in the state. The fort was later used as a military school.",
      map: "",
      dist: "",
    },
  ];
  return <Section Title="Forts" section="forts" array={forts}></Section>;
};

export default Forts;
