const checkMongoIdsEquality = (id1, id2) => {
  const equalIds = id1.equals(id2);

  return equalIds; //boolean value
};

export default checkMongoIdsEquality;
