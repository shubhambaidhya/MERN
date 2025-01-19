import bcrypt from 'bcrypt';
import express from 'express';
import User from './user.model.js';
import {
  loginUserValidationSchema,
  userValidationSchema,
} from './user.validation.js';

import jwt from 'jsonwebtoken';
import {
  validateUserLoginReqBody,
  validateUserRegisterReqBody,
} from '../middleware/validate.req.body.js';
const router = express.Router();

//* register user
router.post(
  '/user/register',
  validateUserRegisterReqBody(userValidationSchema),
  async (req, res) => {
    // extract new user from req.body
    const newUser = req.body;
    // find user using email
    const user = await User.findOne({ email: newUser.email });
    // if user exists, throw error
    if (user) {
      return res.status(409).send({ message: 'Email already exists' });
    }
    // hash password
    const plainPassword = newUser.password;
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRound);
    newUser.password = hashedPassword;
    // insert user
    await User.create(newUser);
    // send res
    return res.status(201).send('User is Registered successfully...');
  }
);

//* login user
router.post(
  '/user/login',
  validateUserLoginReqBody(loginUserValidationSchema),
  async (req, res) => {
    //extract loginCredentials from req.body
    const loginCredentials = req.body;
    //find user using email
    const user = await User.findOne({ email: loginCredentials.email });

    //if not user, throw error
    if (!user) {
      return res.status(404).send('Invalid Credentials');
    }
    //compare password using bcrypt
    const plainPassword = loginCredentials.password;
    const hashedPassword = user.password;
    const isPasswordMatch = await bcrypt.compare(plainPassword, hashedPassword);
    //if not password match, throw error
    if (!isPasswordMatch) {
      return res.status(404).send('Invalid Credentials');
    }

    //generate accessToken

    const payload = { email: user.email };
    const secretKey = process.env.ACCESS_TOKEN_SECRET_KEY;
    const token = jwt.sign(payload, secretKey);

    //send res
    return res.status(200).send({
      message: 'Login success',
      userDetails: user,
      accessToken: token,
    });
  }
);

export default router;
