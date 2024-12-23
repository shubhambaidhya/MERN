import Yup from "yup";

export const validateReqBody = (validationSchema) => async (req, res, next) => {
  const data = req.body;
  try {
    const validatedData = await validationSchema.validate(data);
    req.body = validatedData;
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }

  next();
};

export const loginAdminValidationSchema = Yup.object({
  email: Yup.string().email().required().trim().lowercase(),
  password: Yup.string().required().trim(),
});
