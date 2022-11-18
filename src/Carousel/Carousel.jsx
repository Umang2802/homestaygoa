import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carousels = (props) => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      centerMode={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {props.array.map((v, i) => {
        return <Card values={v} key={i}></Card>;
      })}
    </Carousel>
  );
};

export default Carousels;
