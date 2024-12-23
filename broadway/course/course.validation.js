import Yup from "yup";

export const addCourseValidationSchema = Yup.object({
  name: Yup.string().max(60).trim().required(),
  price: Yup.number().min(0).required(),
  duration: Yup.number().min(1).required(),
});
