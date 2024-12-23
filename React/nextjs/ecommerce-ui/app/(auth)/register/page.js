'use client';
import registerUserValidationSchema from '@/validation-schema/register.user.validation.schema';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Typography,
  TextField,
} from '@mui/material';
import { Formik } from 'formik';
import React from 'react';

const Register = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          age: '',
          address: '',
          contact: '',
        }}
        validationSchema={registerUserValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                gap: '1rem',
                border: '',
                padding: '1rem',
              }}
              className="flex flex-col justify-between min-w-[360px] shadow-2xl px-8 py-4 min-h-[300px] shadow-gray-900"
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontFamily: 'times new roman',
                }}
              >
                Register
              </Typography>
              <div>
                <FormControl>
                  <TextField
                    label="FirstName"
                    {...formik.getFieldProps('firstName')}
                    style={{ paddingRight: '1rem' }}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <FormHelperText error>
                      {formik.errors.firstName}
                    </FormHelperText>
                  ) : null}
                </FormControl>
                <FormControl>
                  <TextField
                    label="LastName"
                    {...formik.getFieldProps('lastName')}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <FormHelperText error>
                      {formik.errors.lastName}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </div>

              <FormControl>
                <TextField
                  label="Age"
                  type="number"
                  {...formik.getFieldProps('age')}
                />
                {formik.touched.age && formik.errors.age ? (
                  <FormHelperText error>{formik.errors.age}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="Address"
                  type="number"
                  {...formik.getFieldProps('address')}
                />
                {formik.touched.address && formik.errors.address ? (
                  <FormHelperText error>{formik.errors.address}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="Contact"
                  {...formik.getFieldProps('contact')}
                />
                {formik.touched.contact && formik.errors.contact ? (
                  <FormHelperText error>{formik.errors.contact}</FormHelperText>
                ) : null}
              </FormControl>

              <Button type="submit" variant="contained" color="success">
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Register;
