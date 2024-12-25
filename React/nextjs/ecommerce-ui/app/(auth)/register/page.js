'use client';
import { registerUserValidationSchema } from '@/validation-schema/register.user.validation.schema.js';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Typography,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from 'next/link';

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

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
              <FormControl>
                <TextField
                  label="FirstName"
                  {...formik.getFieldProps('firstName')}
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

              <FormControl>
                <TextField label="Email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? 'hide the password'
                            : 'display the password'
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

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
              <Box className="flex flex-col justify-center items-center w-full gap-1">
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="success"
                >
                  SignIn
                </Button>
                <Link
                  href="/login"
                  className="text-color to-blue-800 underline"
                >
                  Already Registered? Login
                </Link>
              </Box>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Register;
