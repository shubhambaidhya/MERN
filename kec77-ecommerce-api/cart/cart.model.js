import mongoose from 'mongoose';

// set schema

const cartSchema = new mongoose.Schema({
  buyerId: {
    type: mongoose.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: mongoose.ObjectId,
    ref: 'Product',
    required: true,
  },
  orderedQuantity: {
    type: Number,
    min: 1,
    required: true,
  },
});

// create model
const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
