import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["beaches", "temples", "forts", "resturants"];

function ResponsiveAppBar() {
  return (
    <AppBar
      position="sticky"
      style={{
        boxShadow: "10px",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px",
        backgroundColor: "#92E3A9",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "'MonteCarlo', cursive",
              fontSize: "3rem",
              color: "Black",
              textDecoration: "none",
            }}
          >
            Paras
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "'MonteCarlo', cursive",
              color: "black",
              textDecoration: "none",
            }}
          >
            Paras
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                href={`#${page}`}
                key={page}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
