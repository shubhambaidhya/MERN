import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const Userform = () => {
  return (
    <Box>
      <Typography variant="h3">User Data Collection</Typography>
      <Formik
        initialValues={{
          name: "",
          age: 1,
          address: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name is required")
            .trim()
            .max(55, "Name must be max 55 characters"),
          age: Yup.number().required("Age is required").trim().max(120),
          address: Yup.string().required("Name is required").trim().max(120),
        })}
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
                gap: "1rem",
                border: "1px solid black",
                padding: "1rem",
                minWidth: "400px",
              }}
            >
              {/*form control is a div*/}
              <FormControl>
                <TextField
                  label="User name"
                  {...formik.getFieldProps("name")}
                />
                {/* to show error message */}
                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : null}
              </FormControl>

              <Button variant="contained" color="success" type="submit">
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Userform;
