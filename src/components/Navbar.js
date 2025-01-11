import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const NAVBAR_HEIGHT = 64; // Export this constant

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {"<"}CodePath{" />"}
        </Typography>
        <Button color="inherit" component={Link} to="/dashboard">
          Learning Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/how-to-use">
          How to Use
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
