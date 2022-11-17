import { Button } from "@mui/material";
import React from "react";
import HeroImage from "../Assets/heroImage.jpg";
// import ArrowDown from "../Assets/arrow-down.svg";
import styled from "styled-components";
import Beaches from "./Beaches.jsx";
import Resturants from "./Resturants.jsx";

const HeroButton = styled(Button)(({ theme }) => ({
  color: "black",
  fontSize: "2.8rem",
  fontWeight: "600",
  transition: "all 0.3s ease-out",
  "&:hover": {
    fontSize: "3.2rem",
    color: "black",
  },
}));

const HeroPage = () => {
  return (
    <>
      <section style={{ position: "relative" }}>
        <img
          src={HeroImage}
          alt="heroImage"
          style={{ width: "100%", opacity: "0.9" }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeroButton disableRipple={true} href="#beaches">
            <div>Home Stay Goa</div>
            {/* <img
              src={ArrowDown}
              alt="ArrowDown"
              style={{
                display: "unset",
                height: 70,
                width: 60,
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
              }}
            /> */}
          </HeroButton>
        </div>
      </section>
      <Beaches />
      <Resturants/>
    </>
  );
};

export default HeroPage;
