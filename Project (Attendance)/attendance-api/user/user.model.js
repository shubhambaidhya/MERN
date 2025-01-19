import mongoose from 'mongoose';

// set schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 55,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other'],
  },
  role: {
    type: String,
    required: true,
    enum: ['superAdmin', 'teacher'],
  },
});

userSchema.set('tpJSON', {
  transform: function (doc, ret, opt) {
    delete obj.password;
    return obj;
  },
});

// create table
const User = mongoose.model('User', userSchema);

export default User;
