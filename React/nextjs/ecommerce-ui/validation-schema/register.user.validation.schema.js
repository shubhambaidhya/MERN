import * as Yup from 'yup';

const registerUserValidationSchema = Yup.object({
  firstName: Yup.string()
    .required('Required')

    .trim(),
  lastName: Yup.string()
    .required('Required')

    .trim(),
  age: Yup.number().required('Age is required').max(120),
  address: Yup.string().required('Name is required').trim().max(120),
  contact: Yup.number().required().max(10),
});
export default registerUserValidationSchema;
