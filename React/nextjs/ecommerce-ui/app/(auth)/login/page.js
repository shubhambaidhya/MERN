'use client';
import loginUserValidationSchema from '@/validation-schema/login.user.validation.schema';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
const Login = () => {
  const router = useRouter();
  return (
    <Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginUserValidationSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios({
              method: 'POST',
              url: 'http://localhost:8080/user/login',
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
            console.log('error occured');
          }
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
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
                Sign in
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
              <div className="flex flex-col justify-center items-center w-full">
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Login
                </Button>
                <Link
                  className="text-md underline text-blue-600 mt-2"
                  href="/register"
                >
                  Register Here!!
                </Link>
              </div>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Login;
