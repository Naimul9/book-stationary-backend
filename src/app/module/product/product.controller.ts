import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await productService.createProduct(payload);

    res.json({
      massage: 'Product created successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: 'Validation Failed',
      status: false,
      error,
    });
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getProduct(req.query);

    res.json({
      status: true,
      massage: 'Product getting successfully',

      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productService.getSingleProduct(productId);
    res.json({
      status: true,
      massage: 'Product retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const body = req.body;
    const result = await productService.updateProduct(productId, body);
    res.send({
      message: 'Product updated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await productService.deleteProduct(productId);
    res.send({
      message: 'Product deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.json({ status: false, message: 'something went wrong', error });
    }
  }
};

export const productController = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
