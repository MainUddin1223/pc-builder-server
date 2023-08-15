import express from 'express';
import { componentsController } from './components.controller';

const router = express.Router();

router.route('').get(componentsController.getComponents);

router.route('/featured').get(componentsController.getRandomProducts);

router
  .route('/category/:category')
  .get(componentsController.getComponentByCategory);

router.route('/category').get(componentsController.getCategories);

router.route('/:id').get(componentsController.getComponentById);

export default { componentsRouter: router };
