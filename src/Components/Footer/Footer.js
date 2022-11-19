import { Box } from "@mui/system";
import React from "react";
import { Container, Row, Column, Heading, Contact } from "./FooterStyle";
import NearMeIcon from "@mui/icons-material/NearMe";

export const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Column>
            <Heading>Location</Heading>
            <Box
              component="iframe"
              title="my map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.7366758443904!2d74.08564051477929!3d15.007315689544457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe5a6609d576f3%3A0x0!2zMTXCsDAwJzI2LjMiTiA3NMKwMDUnMTYuMiJF!5e0!3m2!1sen!2sin!4v1647942708715!5m2!1sen!2sin"
              sx={{
                width: { xs: "250", md: "350" },
                height: { xs: "120", md: "170" },
              }}
              loading="lazy"
              style={{ border: "0", borderRadius: "8px" }}
            ></Box>
          </Column>

          <Column>
            <Heading>Contact Us</Heading>
            <Contact>New Vaddem, Bhatpal, Canacona Goa, India</Contact>
            <Contact>homestaygoa@gmail.com</Contact>
            <Contact>779808XXXX</Contact>

            <Heading>Review Airbnb Listings</Heading>
            <Contact>
              Lisitng 1:{" "}
              <a href="/">
                Room 1 <NearMeIcon sx={{ color: "black" }}></NearMeIcon>
              </a>
            </Contact>
            <Contact>
              Lisitng 2:{" "}
              <a href="/">
                Room 2 <NearMeIcon sx={{ color: "black" }}></NearMeIcon>
              </a>
            </Contact>
          </Column>
        </Row>
      </Container>
    </div>
  );
};
