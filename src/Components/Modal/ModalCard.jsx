import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 300 }} elevation={0}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.value.type}
        </Typography>
        <Typography variant="h5" component="div">
          {props.value.title}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontFamily: "'Montserrat', sans-serif",
            fontSize: { xs: "0.7rem", md: "0.9rem" },
          }}
          color="text.secondary"
        >
          {props.value.desc}
        </Typography>
        <Typography variant="body2">
          Distance from Property:
          {props.value.dist} kms
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" color="success">
          Open Google Maps
        </Button>
      </CardActions>
    </Card>
  );
}
