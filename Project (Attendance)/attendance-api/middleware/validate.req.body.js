import {
  loginUserValidationSchema,
  userValidationSchema,
} from '../user/user.validation.js';

export const validateUserRegisterReqBody = () => {
  return async (req, res, next) => {
    // extract data from req.body
    const data = req.body;
    // validate data
    try {
      const validatedData = await userValidationSchema.validate(data);
      req.body = validatedData;
    } catch (error) {
      // if validation fails, throw error
      return res.status(400).send({ message: error.message });
    }
    //call next function
    next();
  };
};

export const validateUserLoginReqBody = () => {
  return async (req, res, next) => {
    // extract data from req.body
    const data = req.body;
    // validate data
    try {
      const validatedData = await loginUserValidationSchema.validate(data);
      req.body = validatedData;
    } catch (error) {
      // if validation fails, throw error
      return res.status(400).send({ message: error.message });
    }
    //call next function
    next();
  };
};
