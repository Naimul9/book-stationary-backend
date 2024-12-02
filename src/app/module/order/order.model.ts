import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value: string): boolean {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: '{VALUE} is not valid email',
      },
    },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

const Order = model('Order', orderSchema);
export default Order;
