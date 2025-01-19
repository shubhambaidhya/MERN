import express from 'express';
import Student from './student.model.js';

import { isSuperAdmin } from '../middleware/authentication.middleware.js';

const router = express.Router();

//* add student
router.post(
  '/student/add',
  isSuperAdmin,
  async (req, res, next) => {
    const data = req.body;
    try {
      const validatedData = await studentValidationSchema.validate(data);
      req.body = validatedData;
    } catch (error) {
      // if validation fails, throw error
      return res.status(400).send({ message: error.message });
    }
    //call next function
    next();
  },
  async (req, res) => {
    const newStudent = req.body;

    const student = await Student.findOne({ email: newStudent.email });
    if (student) {
      return res.status(409).send({ message: 'Student already exist' });
    }
    await Student.create(newStudent);
    return res.status(201).send('Student is added successfully...');
  }
);

//* list all products
router.get('/student/list', async (req, res) => {
  //find all products
  const products = await Student.find();

  //send response
  return res.status(200).send({ message: 'success', productList: products });
});

export default router;
