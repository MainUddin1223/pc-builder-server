export type Details = {
  _id: string;
  image: string;
  productName: string;
  category: string;
  status: string;
  price: number;
  description: string;
  keyFeatures: {
    brand: string;
    model: string;
    specification: string;
    port: string;
    type: string;
    resolution: string;
    voltage: string;
  };
  individualRating: number;
  averageRating: number;
  reviews: string[];
  quantity?: number;
};
