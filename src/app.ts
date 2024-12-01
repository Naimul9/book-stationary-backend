import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import useRouter from './app/module/order/order.route';
import userRouter from './app/module/product/product.route';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.use('/api', userRouter, useRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
