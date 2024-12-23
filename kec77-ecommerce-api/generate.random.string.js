import crypto from 'crypto';

const getRandomString = () => {
  const randomString = crypto.randomBytes(64).toString('hex');
  console.log(randomString);
};

getRandomString();
