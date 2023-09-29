'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const components_controller_1 = require('./components.controller');
const router = express_1.default.Router();
router
  .route('')
  .get(components_controller_1.componentsController.getComponents);
router
  .route('/featured')
  .get(components_controller_1.componentsController.getRandomProducts);
router
  .route('/category/:category')
  .get(components_controller_1.componentsController.getComponentByCategory);
router
  .route('/category')
  .get(components_controller_1.componentsController.getCategories);
router
  .route('/:id')
  .get(components_controller_1.componentsController.getComponentById);
exports.default = { componentsRouter: router };
