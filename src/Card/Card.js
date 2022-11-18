import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function GradientCover() {
  return (
    <Card
      sx={{
        minHeight: { xs: "150px", md: "300px" },
        width: { xs: 150, md: 250 },
      }}
    >
      <CardCover>
        <img
          src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
          srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography
          level="h2"
          fontSize={{ xs: "0.5rem", md: "lg" }}
          textColor="#fff"
          mb={1}
        >
          Yosemite National Park
        </Typography>
        <Typography
          textColor="neutral.300"
          fontSize={{ xs: "0.4rem", md: "0.8rem" }}
        >
          Distance: 10kms
        </Typography>
      </CardContent>
    </Card>
  );
}
