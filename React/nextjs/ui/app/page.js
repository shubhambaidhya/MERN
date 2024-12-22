"use client";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <Box sx={{ borderRadius: "1rem", border: "solid green 6px" }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Login
      </Typography>
      <Formik
        initialValues={{
          username: "",
          password: "*********",
        }}
        // validationSchema={Yup.object({
        //   username: Yup.string()
        //     .required("Name is required")
        //     .trim()
        //     .max(55, "Name must be max 55 characters"),
        //   password: Yup.string()
        //     .required("Password is required")
        //     .min(6, "Password must be at least 6 characters long")
        //     .max(20, "Password must be at most 20 characters long"),
        // })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                gap: "1rem",
                border: "",
                padding: "1rem",
                minWidth: "400px",
              }}
            >
              <FormControl>
                <Box>
                  <TextField
                    sx={{ marginRight: "1rem" }}
                    label="Username"
                    {...formik.getFieldProps("Username")}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <FormHelperText error>
                      {formik.errors.username}
                    </FormHelperText>
                  ) : null}
                  <TextField
                    label="Password"
                    {...formik.getFieldProps("Password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <FormHelperText error>
                      {formik.errors.password}
                    </FormHelperText>
                  ) : null}
                </Box>
              </FormControl>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "right",
                  alignContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  type="login"
                  endIcon={<LoginIcon />}
                  style={{ marginRight: "1rem" }}
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Login
                </Button>
                <Button variant="contained" color="primary" type="signup">
                  Signup
                </Button>
              </div>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Home;
