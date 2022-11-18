import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Carousels from "../Carousel/Carousel";

const Section = (props) => {
  return (
    <Box
      id={props.section}
      sx={{
        minHeight: { xs: "40vh", md: "80vh" },
        marginTop: { md: "20px" },
      }}
    >
      <Container maxWidth="lg" sx={{ pt: { xs: 5, md: 15 } }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            textAlign: "center",
            mb: 4,
            fontSize: { xs: "1.5rem", md: "3rem" },
          }}
        >
          {props.Title}
          <Divider
            sx={{
              width: "7%",
              margin: "auto",
              borderBottomWidth: { md: 2 },
              mt: 1,
              mb: { md: 8 },
            }}
          />
        </Typography>
        <Carousels />
      </Container>
    </Box>
  );
};

export default Section;
