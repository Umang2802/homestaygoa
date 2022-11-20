import { Button, Typography } from "@mui/material";
import React from "react";
import HeroImage from "../Assets/heroImage.jpg";
import HeroImage2 from "../Assets/heroImage-2.jpg";
import ArrowDown from "../Assets/arrow-down.svg";
import styled from "styled-components";
import Beaches from "./Beaches.jsx";
import Resturants from "./Restaurants.jsx";
import { Box } from "@mui/system";
import About from "./About";
// import Temples from "./Temples.jsx";
// import Forts from "./Forts.jsx";

const HeroButton = styled(Button)(({ theme }) => ({
  color: "black",
  fontSize: "2.8rem",
  fontWeight: "600",
  transition: "all 0.3s ease-out",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    fontSize: "3.2rem",
    color: "black",
    background: "none",
  },
}));

const HeroPage = () => {
  return (
    <>
      <section style={{ position: "relative" }}>
        <Box
          component="img"
          src={HeroImage}
          alt="heroImage"
          sx={{
            width: "100%",
            opacity: "0.9",
            display: { xs: "none", md: "flex" },
          }}
        />
        <Box
          component="img"
          src={HeroImage2}
          alt="heroImage"
          sx={{
            width: "100%",
            opacity: "0.9",
            display: { xs: "flex", md: "none" },
          }}
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
          <HeroButton disableRipple={true} href="#about">
            <Typography
              variant="caption"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: "0.8rem", md: "1.4rem", textAlign: "center" },
              }}
            >
              <Box
                component="span"
                sx={{
                  fontSize: { xs: "1.3rem", md: "2.5rem" },
                  fontWeight: 500,
                }}
              >
                Explore places around{" "}
              </Box>
              <br></br>Home Stay Goa/ Holiday Home Goa
            </Typography>
            <Box
              component="img"
              src={ArrowDown}
              alt="ArrowDown"
              sx={{
                height: { xs: 20, md: 40 },
                width: { xs: 20, md: 40 },
                display: "unset",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
                marginTop: { md: 1 },
              }}
            ></Box>
          </HeroButton>
        </div>
      </section>
      <About />
      <Beaches />
      <Resturants />
      {/* <Forts />
      <Temples /> */}
    </>
  );
};

export default HeroPage;
