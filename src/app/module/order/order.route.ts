import { Router } from 'express';
import { orderController } from './order.controller';

const useRouter = Router();

useRouter.post('/orders', orderController.createOrder);
useRouter.get('/orders/revenue', orderController.calculateRevenue);

export default useRouter;
