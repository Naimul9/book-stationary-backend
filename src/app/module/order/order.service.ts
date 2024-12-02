import Product from '../product/product.model';
import { IOrder } from './order.interface';
import Order from './order.model';

const createOrder = async (payload: IOrder) => {
  const { product, quantity } = payload;

  const foundProduct = await Product.findById(product);
  if (!foundProduct) {
    throw new Error('Product not found');
  }

  if (foundProduct.quantity < quantity) {
    // throw new Error('Insufficient stock');
    return {
      status: false,
      message: 'Insufficient stock',
    };
  }

  const totalPrice = foundProduct.price * quantity;

  const order = await Order.create({
    ...payload,
    totalPrice,
  });

  foundProduct.quantity -= quantity;
  foundProduct.inStock = foundProduct.quantity > 0;
  await foundProduct.save();

  return order;
};

const calculateRevenue = async () => {
  const revenue = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  return revenue[0]?.totalRevenue || 0;
};

export const orderService = {
  createOrder,
  calculateRevenue,
};
