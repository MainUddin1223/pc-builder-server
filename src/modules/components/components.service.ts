import { Components } from './components.model';

const getRandomProducts = async () => {
  try {
    const randomProducts = await Components.aggregate([
      { $sample: { size: 6 } },
    ]).exec();

    return randomProducts;
  } catch (error) {
    console.error('Error retrieving random products:', error);
    throw error;
  }
};

const getCategories = async () => {
  try {
    const uniqueCategories = await Components.distinct('category').exec();
    return uniqueCategories;
  } catch (error) {
    console.error('Error retrieving categories:', error);
    throw error;
  }
};

const getComponents = async () => {
  try {
    const components = await Components.find({});
    return components;
  } catch (error) {
    console.error('Error retrieving components:', error);
    throw error;
  }
};

const getComponentById = async (id: string) => {
  try {
    const components = await Components.findOne({ _id: id });
    return components;
  } catch (error) {
    console.error('Error retrieving component:', error);
    throw error;
  }
};

const getComponentByCategory = async (category: string) => {
  try {
    const uniqueCategories = await Components.find({ category }).exec();
    return uniqueCategories;
  } catch (error) {
    console.error('Error retrieving component by category:', error);
    throw error;
  }
};

export const componentsService = {
  getRandomProducts,
  getCategories,
  getComponentByCategory,
  getComponents,
  getComponentById,
};
