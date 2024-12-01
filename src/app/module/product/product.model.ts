import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: function (value: string): boolean {
          return value.length >= 3;
        },
        message: 'Name must be at least 3 characters long.',
      },
    },
    brand: {
      type: String,
      required: true,
      validate: {
        validator: function (value: string): boolean {
          return /^[A-Za-z\s]+$/.test(value);
        },
        message: 'Brand name must contain only letters and spaces.',
      },
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price must be a positive number.'],
      validate: {
        validator: function (value: number): boolean {
          return value > 0;
        },
        message: 'Price must be a positive number.',
      },
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      validate: {
        validator: function (value: string): boolean {
          return value.length >= 10;
        },
        message: 'Description must be at least 10 characters long.',
      },
    },
    quantity: {
      type: Number,
      required: true,
      validate: {
        validator: function (value: number): boolean {
          return Number.isInteger(value) && value >= 0;
        },
        message: 'Quantity must be a non-negative integer.',
      },
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Define the model
const Product = model('Product', productSchema);

export default Product;
