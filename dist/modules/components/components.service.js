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
Object.defineProperty(exports, '__esModule', { value: true });
exports.componentsService = void 0;
const components_model_1 = require('./components.model');
const getRandomProducts = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const randomProducts = yield components_model_1.Components.aggregate([
        { $sample: { size: 6 } },
      ]).exec();
      return randomProducts;
    } catch (error) {
      console.error('Error retrieving random products:', error);
      throw error;
    }
  });
const getCategories = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const uniqueCategories = yield components_model_1.Components.distinct(
        'category',
      ).exec();
      return uniqueCategories;
    } catch (error) {
      console.error('Error retrieving categories:', error);
      throw error;
    }
  });
const getComponents = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const components = yield components_model_1.Components.find({});
      return components;
    } catch (error) {
      console.error('Error retrieving components:', error);
      throw error;
    }
  });
const getComponentById = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const components = yield components_model_1.Components.findOne({
        _id: id,
      });
      return components;
    } catch (error) {
      console.error('Error retrieving component:', error);
      throw error;
    }
  });
const getComponentByCategory = category =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const uniqueCategories = yield components_model_1.Components.find({
        category,
      }).exec();
      return uniqueCategories;
    } catch (error) {
      console.error('Error retrieving component by category:', error);
      throw error;
    }
  });
exports.componentsService = {
  getRandomProducts,
  getCategories,
  getComponentByCategory,
  getComponents,
  getComponentById,
};
