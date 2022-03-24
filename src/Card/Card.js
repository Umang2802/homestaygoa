import "./Card.css";

const Card = ({ image, title }) => {
  console.log({ image });
  return (
    <div className="card">
      <img className="card-img-top" alt={title} src={image} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default Card;
