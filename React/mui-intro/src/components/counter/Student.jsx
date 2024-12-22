import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Student = () => {
  const [student, setStudent] = useState({
    name: "Shubham",
    age: 22,
  });
  return (
    <Box>
      <Typography variant="h4">Name:{student.name}</Typography>
      <Typography variant="h4" gutterBottom>
        Age:{student.age}
      </Typography>

      <TextField
        sx={{ marginRight: "1rem" }}
        label="Name"
        color="success"
        onChange={(e) => {
          const name = e.target.value;
          setStudent({ ...student, name: name });
        }}
      />

      <TextField
        label="Age"
        type="number"
        color="success"
        onChange={(e) => {
          const age = e.target.value;
          setStudent({ ...student, age: age });
        }}
      />
    </Box>
  );
};

export default Student;
