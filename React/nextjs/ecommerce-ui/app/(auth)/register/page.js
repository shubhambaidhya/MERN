'use client';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { registerUserValidationSchema } from '@/validation-schema/register.user.validation.schema';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  LinearProgress,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from 'next/link';

import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';
import $axios from '@/lib/axios/axios.instance';
import { genders, roles } from '@/constants/categories';

const Register = () => {
  const router = useRouter();
  // password
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const { isPending, error, mutate } = useMutation({
    mutationKey: ['register-user'],
    mutationFn: async (values) => {
      return await $axios.post('/user/register', values);
    },
    onSuccess: () => {
      router.push('/login');
    },
  });
  return (
    <Box>
      {isPending && <LinearProgress color="secondary" />}
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
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className="auth-form gap-3">
            <Typography variant="h3">Register</Typography>
            <FormControl fullWidth>
              <TextField
                label="First Name"
                {...formik.getFieldProps('firstName')}
              />

              {formik.touched.firstName && formik.errors.firstName ? (
                <FormHelperText error>{formik.errors.firstName}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="Last Name"
                {...formik.getFieldProps('lastName')}
              />

              {formik.touched.lastName && formik.errors.lastName ? (
                <FormHelperText error>{formik.errors.lastName}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField label="Email" {...formik.getFieldProps('email')} />

              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>

              <OutlinedInput
                {...formik.getFieldProps('password')}
                // type={showPassword ? 'text' : 'password'}
                type="text"
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

              {formik.touched.password && formik.errors.password ? (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select
                value={formik.values.role}
                label="Role"
                {...formik.getFieldProps('role')}
              >
                {roles.map((item) => {
                  return (
                    <MenuItem
                      key={item.id}
                      value={item.role}
                      sx={{ textTransform: 'capitalize' }}
                    >
                      {item.role}
                    </MenuItem>
                  );
                })}
              </Select>

              {formik.touched.role && formik.errors.role ? (
                <FormHelperText error>{formik.errors.role}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={formik.values.gender}
                label="Gender"
                {...formik.getFieldProps('gender')}
              >
                {genders.map((item) => {
                  return (
                    <MenuItem
                      key={item.id}
                      value={item.gender}
                      sx={{ textTransform: 'capitalize' }}
                    >
                      {item.gender}
                    </MenuItem>
                  );
                })}
              </Select>

              {formik.touched.gender && formik.errors.gender ? (
                <FormHelperText error>{formik.errors.gender}</FormHelperText>
              ) : null}
            </FormControl>

            <div className="flex flex-col justify-center items-center w-full">
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
                disabled={isPending}
              >
                Sign up
              </Button>
              <Link
                className="text-md underline text-blue-600 mt-2"
                href="/login"
              >
                Already registered? Login
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Register;
