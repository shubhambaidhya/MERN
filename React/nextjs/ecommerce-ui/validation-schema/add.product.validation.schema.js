import * as Yup from 'yup';

export const addProductValidationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .trim()
    .max(55, 'Name must be at max 55 characters'),
  brand: Yup.string()
    .required('Brand is Required')
    .trim()
    .max(55, 'Brand must be at max 55 characters'),
  price: Yup.number().required().moreThan(0, 'Price cannot be zero'),
  quantity: Yup.number().required().min(1, 'Quantity must be at least 1'),
  category: Yup.string().trim('Category is required').required(),
  freeShipping: Yup.boolean().default(false),
  description: Yup.string()
    .required('Description is required')
    .trim()
    .min(300, 'Description must be at least 300 characters')
    .max(1000, 'Description must be at max 1000 characters'),
});
