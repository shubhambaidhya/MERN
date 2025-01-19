import Yup from 'yup';
export const studentValidationSchema = Yup.object({
  name: Yup.string().required().lowercase().max(50),
  email: Yup.string().email().required().trim().lowercase().max(55),
  gender: Yup.string().required().oneOf(['male', 'female', 'other']),
  address: Yup.string().required().lowercase().max(30),
  contact: Yup.number().required(),
});
