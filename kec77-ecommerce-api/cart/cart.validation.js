import Yup from 'yup';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '../constant/general.constant.js';

export const addCartItemValidationSchema = Yup.object({
  productId: Yup.string().required().trim(),
  orderedQuantity: Yup.number().min(1).required(),
});
export const paginationDataValidationSchema = Yup.object({
  page: Yup.number().min(1).integer().default(DEFAULT_PAGE),
  limit: Yup.number().min(1).integer().default(DEFAULT_LIMIT),
  searchText: Yup.string().trim().notRequired(),
});
