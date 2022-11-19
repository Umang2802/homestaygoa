import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ModalCard from "./ModalCard.jsx";

export default function MediaControlCard(props) {
  return (
    <>
      <Card sx={{ display: { md: "flex", xs: "static" } }}>
        <CardMedia
          component="img"
          sx={{ width: 500, height: { xs: 180, md: "300px" } }}
          image={props.values.image}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <ModalCard value={props.values} />
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
