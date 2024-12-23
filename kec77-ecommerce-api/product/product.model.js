import mongoose from 'mongoose';
import { productCategories } from '../constant/general.constant.js';

// set schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 55,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
      maxlength: 55,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    quantity: {
      type: Number,
      min: 1,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      enum: productCategories,
    },
    freeShipping: {
      type: Boolean,
      required: false,
      default: false,
    },
    sellerId: {
      type: mongoose.ObjectId,
      required: true,
      ref: 'User',
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 1000,
    },
    image: {
      type: String,
      required: false,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.methods.toJSON = function () {
  let obj = this.toObject(); // it converts BSON to JSON
  delete obj.sellerId;
  return obj;
};

// create model
const Product = mongoose.model('Product', productSchema);

export default Product;
