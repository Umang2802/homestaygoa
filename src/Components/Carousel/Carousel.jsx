import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
import Button from "@mui/material/Button";
import { Dialog } from "@mui/material";
import React, { useState } from "react";
import Modal from "../Modal/Modal.jsx";

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
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState();

  const handleClickOpen = (v) => {
    setOpen(true);
    setItem(v);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        centerMode={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
      >
        {props.array.map((v, i) => {
          return (
            <>
              <Button onClick={() => handleClickOpen(v)}>
                <Card values={v} key={i}></Card>
              </Button>
            </>
          );
        })}
      </Carousel>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <Modal values={item}></Modal>
      </Dialog>
    </>
  );
};

export default Carousels;
