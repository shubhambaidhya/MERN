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
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          gender: '',
          role: '',
        }}
        validationSchema={registerUserValidationSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios({
              method: 'POST',
              url: 'http://localhost:8080/user/register',
              data: values,
            });
            localStorage.setItem('token', response?.data?.accessToken);
            localStorage.setItem(
              'firstName',
              response?.data?.userDetails?.firstName
            );
            localStorage.setItem('userRole', response?.data?.userDetails?.role);
            router.push('/');
          } catch (error) {
            console.log('error');
          }
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
              <FormControl fullWidth>
                <TextField label="Email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  label="Password"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>
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
                <TextField label="Gender" {...formik.getFieldProps('gender')} />
                {formik.touched.gender && formik.errors.gender ? (
                  <FormHelperText error>{formik.errors.gender}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField label="Role" {...formik.getFieldProps('role')} />
                {formik.touched.role && formik.errors.role ? (
                  <FormHelperText error>{formik.errors.role}</FormHelperText>
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
