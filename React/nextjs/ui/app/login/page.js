import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <Box>
      <Typography variant="h1">You're Logged in</Typography>
      <Link href="/" className="text-green-500">
        Go to Login Page
      </Link>
    </Box>
  );
};

export default About;
