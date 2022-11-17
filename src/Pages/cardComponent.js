import React from "react";

const CardComponent = (props) => {

  const places = props.args.map((item) => {
    return (
      <div className="col p-0">
      <div className="card m-3 p-0 text-dark" style={{ width: "90%" }}>
        <div className="row m-0">
          <div className="col-md-7 p-0">
            <img src={item.image} class="img-fluid rounded-start" alt={item.title} />
          </div>
          <div className="col-md-5 mt-4 ps-0">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.desc}</p>
              <p className="card-text">
                It is around {item.dist}km from the property. <br />
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
    )
  })
  
  return places
};

export default CardComponent;
