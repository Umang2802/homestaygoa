import React from "react";
import { Container, Row, Column, Heading, Contact } from "./FooterStyle";

export const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Column>
            <Heading>Contact Us</Heading>
            <Contact>Call Us: 779808XXXX</Contact>
            <Contact>Email Us: homestaygoa@gmail.com</Contact>
            <Contact>Address: New Vaddem, Bhatpal, Canacona Goa, India</Contact>
          </Column>
          <Column>
            <Heading>Location</Heading>
            <iframe
              title="my map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.7366758443904!2d74.08564051477929!3d15.007315689544457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe5a6609d576f3%3A0x0!2zMTXCsDAwJzI2LjMiTiA3NMKwMDUnMTYuMiJF!5e0!3m2!1sen!2sin!4v1647942708715!5m2!1sen!2sin"
              width="350"
              height="170"
              loading="lazy"
              style={{ border: "0", borderRadius: "8px" }}
            ></iframe>
          </Column>
        </Row>
      </Container>
    </div>
  );
};
