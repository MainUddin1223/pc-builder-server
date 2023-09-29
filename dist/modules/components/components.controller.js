'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.componentsController = void 0;
const catchAsync_1 = __importDefault(require('../../errorHandler/catchAsync'));
const components_service_1 = require('./components.service');
const getRandomProducts = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result =
      yield components_service_1.componentsService.getRandomProducts();
    res.send({ message: 'success', status: 200, data: result });
  }),
);
const getComponents = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield components_service_1.componentsService.getComponents();
    res.send({ message: 'success', status: 200, data: result });
  }),
);
const getComponentById = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const result =
      yield components_service_1.componentsService.getComponentById(id);
    res.send({ message: 'success', status: 200, data: result });
  }),
);
const getCategories = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield components_service_1.componentsService.getCategories();
    res.send({ message: 'success', status: 200, data: result });
  }),
);
const getComponentByCategory = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.params;
    const result =
      yield components_service_1.componentsService.getComponentByCategory(
        category,
      );
    res.send({ message: 'success', status: 200, data: result });
  }),
);
exports.componentsController = {
  getRandomProducts,
  getCategories,
  getComponentByCategory,
  getComponents,
  getComponentById,
};
