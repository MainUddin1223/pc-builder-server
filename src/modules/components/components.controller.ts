import { Request, Response } from 'express';
import catchAsync from '../../errorHandler/catchAsync';
import { componentsService } from './components.service';

const getRandomProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await componentsService.getRandomProducts();
  res.send({ message: 'success', status: 200, data: result });
});

const getComponents = catchAsync(async (req: Request, res: Response) => {
  const result = await componentsService.getComponents();
  res.send({ message: 'success', status: 200, data: result });
});

const getComponentById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  const result = await componentsService.getComponentById(id);
  res.send({ message: 'success', status: 200, data: result });
});

const getCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await componentsService.getCategories();
  res.send({ message: 'success', status: 200, data: result });
});

const getComponentByCategory = catchAsync(
  async (req: Request, res: Response) => {
    const { category } = req.params;
    const result = await componentsService.getComponentByCategory(category);
    res.send({ message: 'success', status: 200, data: result });
  },
);

export const componentsController = {
  getRandomProducts,
  getCategories,
  getComponentByCategory,
  getComponents,
  getComponentById,
};
