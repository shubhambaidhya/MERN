import mongoose from 'mongoose';

// set schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 55,
    unique: true,
    lowercase: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other'],
  },
  address: {
    type: String,
    required: true,
    lowercase: true,
    maxlength: 30,
  },
  contact: {
    type: Number,
    required: true,
  },
  superAdminId: { type: mongoose.ObjectId, required: true, ref: 'User' },
});

// create table
const Student = mongoose.model('Student', studentSchema);

export default Student;
