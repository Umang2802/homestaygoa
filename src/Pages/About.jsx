import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

const About = () => {
  return (
    <Box
      id="about"
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
          About the Property
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
        <Paper
          elevation={3}
          component="p"
          sx={{
            p: { xs: 4, md: 10 },
            borderRadius: 2,
            lineHeight: { md: "2" },
          }}
        >
          A space nestled in a residential colony next to a river,
          well-connected to the national highway and at a stone-throw distance
          from two famous wildlife sanctuaries. The exquisite beaches and
          pristine waterfalls of South Goa are very approachable from the
          property. Also, famous temple like Shri Mallikarjun Prasanna is in
          close proximity to the property. Feel like home away from home with
          amenities and adventure that the place has to offer.
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
