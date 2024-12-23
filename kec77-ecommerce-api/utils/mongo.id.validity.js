import mongoose from 'mongoose';

const checkMongoIdValidity = (id) => {
  const isValidId = mongoose.isValidObjectId(id);

  return isValidId;
};

export default checkMongoIdValidity;
