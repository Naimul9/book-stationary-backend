import { Router } from 'express';
import { productController } from './product.controller';

const userRouter = Router();

userRouter.post('/products', productController.createProduct);
userRouter.get('/products', productController.getProduct);
userRouter.get('/products/:productId', productController.getSingleProduct);
userRouter.put('/products/:productId', productController.updateProduct);
userRouter.delete('/products/:productId', productController.deleteProduct);

export default userRouter;
