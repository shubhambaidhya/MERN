const validateReqBody = (validationSchema) => {
  return async (req, res, next) => {
    // extract data from req.body
    const data = req.body;

    try {
      // validate  data
      const validatedData = await validationSchema.validate(data);
      req.body = validatedData;
    } catch (error) {
      // if validation fails, throw error
      return res.status(400).send({ message: error.message });
    }

    // call next function
    next();
  };
};

export default validateReqBody;
