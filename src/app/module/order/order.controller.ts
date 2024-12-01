import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Order creation failed',
      status: false,
      error,
    });
  }
};

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const revenue = await orderService.calculateRevenue();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue: revenue },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to calculate revenue',
      status: false,
      error,
    });
  }
};

export const orderController = {
  createOrder,
  calculateRevenue,
};
