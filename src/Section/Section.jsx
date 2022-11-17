import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import BasicCard from "../Card/Card";

const Section = (props) => {
  return (
    <section id={props.section}>
      <Container maxWidth="lg" sx={{ my: 10 }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: "center", mb: 4 }}
        >
          {props.Title}
          <Divider
            sx={{ width: "7%", margin: "auto", borderBottomWidth: 2, mt: 1 }}
          />
        </Typography>
        <Grid container direction="row" justifyContent="space-around">
          <Grid
            item
            xs={5}
            md={4}
            // sx={{display: "flex", alignItems: "center" }}
          >
            <img src={props.image} alt="Beach" style={{ width: "100%" }}></img>
          </Grid>
          <Grid item xs={5} md={5}>
            <Grid
              container
              direction="row"
              spacing={3}
              justifyContent="space-evenly"
            >
              <Grid item xs={6}>
                <BasicCard></BasicCard>
              </Grid>
              <Grid item xs={6}>
                <BasicCard></BasicCard>
              </Grid>
              <Grid item xs={6}>
                <BasicCard></BasicCard>
              </Grid>
              <Grid item xs={6}>
                <BasicCard></BasicCard>
              </Grid>
            </Grid>
            <Button variant="contained" sx={{ float: "inline-end", m: 2 }}>
              View All
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Section;
