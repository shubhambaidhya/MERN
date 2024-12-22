import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Animal = () => {
  const [text, setText] = useState("random text");
  const [pass, setPass] = useState("Password");
  return (
    <Box>
      <Typography variant="h3">Username</Typography>
      <TextField
        label="Username"
        color="info"
        onChange={(e) => {
          const typedText = e.target.value;
          setText(typedText);
        }}
      />

      <Typography variant="h3">Password</Typography>
      <TextField
        label="Password"
        color="info"
        onChange={(e) => {
          const typedText = e.target.value;
          setPass(typedText);
        }}
      />
    </Box>
  );
};

export default Animal;
