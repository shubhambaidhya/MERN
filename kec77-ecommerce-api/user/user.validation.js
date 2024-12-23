import Yup from 'yup';

export const userValidationSchema = Yup.object({
  email: Yup.string().email().required().trim().lowercase().max(55),
  password: Yup.string().required().trim(),
  firstName: Yup.string().required().trim().max(30),
  lastName: Yup.string().required().trim().max(30),
  gender: Yup.string().trim().required().oneOf(['male', 'female', 'other']),
  role: Yup.string().trim().required().oneOf(['buyer', 'seller']),
});

export const loginUserValidationSchema = Yup.object({
  email: Yup.string().email().required().trim().lowercase(),
  password: Yup.string().required().trim(),
});
