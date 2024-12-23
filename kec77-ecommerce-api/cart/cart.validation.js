import Yup from 'yup';

export const addCartItemValidationSchema = Yup.object({
  productId: Yup.string().required().trim(),
  orderedQuantity: Yup.number().min(1).required(),
});
