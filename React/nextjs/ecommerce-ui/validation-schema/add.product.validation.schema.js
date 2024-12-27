import * as Yup from 'yup';

export const addProductValidationSchema = Yup.object({
  name: Yup.string().required().trim().max(55),
  brand: Yup.string().required().trim().max(55),
  price: Yup.number().required(),
  quantity: Yup.number().required().min(1),
  category: Yup.string().trim().required(),
  freeShipping: Yup.boolean().default(false),
  description: Yup.string().required().trim().min(10).max(1000),
});
