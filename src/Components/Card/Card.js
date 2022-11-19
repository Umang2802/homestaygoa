import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function GradientCover(props) {
  return (
      <Card
        sx={{
          minHeight: { xs: "150px", md: "300px" },
          width: { xs: 150, md: 250 },
        }}
      >
        <CardCover>
          <img
            src={`${props.values.image}?auto=format&fit=crop&w=320`}
            srcSet={`${props.values.image}?auto=format&fit=crop&w=320&dpr=2 2x`}
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardCover
          sx={{
            background: {
              xs: "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 100px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 80px)",
              md: "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 150px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 200px)",
            },
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography
            level="h2"
            fontSize={{ xs: "0.6rem", md: "lg" }}
            textColor="#fff"
            mb={1}
          >
            {props.values.title}
          </Typography>
          <Typography
            textColor="neutral.300"
            fontSize={{ xs: "0.4rem", md: "0.8rem" }}
          >
            Distance: {props.values.dist}kms
          </Typography>
        </CardContent>
      </Card>
  );
}
