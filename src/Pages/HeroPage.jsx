import { Button, Typography } from "@mui/material";
import React from "react";
import HeroImage from "../Assets/heroImage.jpg";
import HeroImage2 from "../Assets/heroImage-2.jpg";
import ArrowDown from "../Assets/arrow-down.svg";
import styled from "styled-components";
import Beaches from "./Beaches.jsx";
import Resturants from "./Resturants.jsx";
import { Box } from "@mui/system";
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
          <HeroButton disableRipple={true} href="#beaches">
            <Typography
              variant="p"
              sx={{ fontSize: { xs: "1.2rem", md: "3.3rem" } }}
            >
              Home Stay Goa
            </Typography>
            <Box
              component="img"
              src={ArrowDown}
              alt="ArrowDown"
              sx={{
                height: { xs: 30, md: 70 },
                width: { xs: 25, md: 60 },
                display: "unset",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
                marginTop: { xs: "-10px", md: "-25px" },
              }}
            ></Box>
          </HeroButton>
        </div>
      </section>
      <Beaches />
      <Resturants />
      {/* <Forts />
      <Temples /> */}
    </>
  );
};

export default HeroPage;
