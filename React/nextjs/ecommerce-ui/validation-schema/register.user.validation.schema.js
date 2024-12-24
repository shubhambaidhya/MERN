import * as Yup from 'yup';

const registerUserValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid Email')
    .required('Required')
    .max(55, 'Email must be 55 characters')
    .trim()
    .lowercase(),
  password: Yup.string()
    .required('Password is required')
    .max(20, 'Password must be of 20 characters'),
  firstName: Yup.string().required('Required').trim(),
  lastName: Yup.string().required('Required').trim(),
  gender: Yup.string()
    .required()
    .oneOf(['male', 'female', 'others'], 'Invalid Gender'),
  role: Yup.string().required().oneOf(['buyer', 'seller'], 'Invalid Role'),
});
export default registerUserValidationSchema;
