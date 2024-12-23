import mongoose from 'mongoose';

const validateMongoIdFromParams = (req, res, next) => {
  // extract id from req.params
  const id = req.params.id;

  // check for mongo id validity
  const isValidId = mongoose.isValidObjectId(id);

  // if not valid mongo id, throw error
  if (!isValidId) {
    return res.status(400).send({ message: 'Invalid mongo id.' });
  }

  // call next function
  next();
};

export default validateMongoIdFromParams;
