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
            console.log('error aayo');
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
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Login
                </Button>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    router.push('/register');
                  }}
                >
                  Signup
                </Button>
              </Box>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Login;
