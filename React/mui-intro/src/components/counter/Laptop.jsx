import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const Laptop = () => {
  const [Name, setName] = useState("Acer Helios 300");
  return (
    <Box>
      <Typography variant="h3">Name:{Name}</Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setName("HP Omen 16");
        }}
        style={{
          margin: "1rem",
        }}
      >
        Click me
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={() => {
          setName("Acer Helios 300");
        }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Laptop;
