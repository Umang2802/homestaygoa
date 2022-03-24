import React from "react";
import Palolem from "../Images/palolem.jpg";
import Talpona from "../Images/talpona.jpg";

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
      image: "Galgibaga",
      title: "Galgibaga Beach",
      desc: "",
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
        <div className="row row-cols-1 row-cols-md-2">
          {beaches.map((item) => {
            return (
              <div className="col">
                <div className="card m-3 p-0 text-dark">
                  <div className="row">
                    <div className="col-md-7">
                      <img
                        src={item.image}
                        class="img-fluid rounded-start"
                        alt={item.title}
                      />
                    </div>
                    <div className="col-md-5 mt-4 ps-0">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.desc}</p>
                        <p className="card-text">
						It is around {item.dist}km from the property. <br/>
                          Location:&nbsp;&nbsp;
                          <small>
                            <a href={item.map}>{item.map}</a>
                          </small>
						  
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Beaches;
